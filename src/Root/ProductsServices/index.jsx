import propTypes from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import urls from 'config/urls';
import history from 'utils/history';
import api from 'config/api';
import connect from 'utils/connect';
import { productsServices } from 'store';
import FirstScreenContainer from 'components/FirstScreenContainer';
import Title from 'components/Title';
import SwitchComponent from 'components/Switch';
import request from 'utils/request';
import Spinner from 'components/Spinner';

import Filters from './Filters';

import styles from './styles.scss';


@connect({ productsServices })
class ProductsServices extends Component{

  static propTypes = {
    type: propTypes.string.isRequired,
    filter: propTypes.string.isRequired,
    activeIndex: propTypes.number.isRequired,
  };

  constructor(props){
    super(props);

    this.state = {
      items: [],
      isLoading: false,
    };
  }

  componentWillMount(){
    this.updateItems();
    this.props.actions.productsServices.loadFilters();
  }

  componentWillReceiveProps(nextProps){
    if(
      nextProps.type !== this.props.type ||
      ( nextProps.type === this.props.type && nextProps.filter !== this.props.filter )
    ){
      this.updateItems();
    }
  }

  updateItems = async () => {
    this.setState({ isLoading: true });

    const { type, filter } = this.props;

    const apiUrl = type === 'products' ? api.getProducts : api.getServices;

    const { response, error } = await request(apiUrl, 'GET', {
      type: filter,
    });

    if(error){
      const redirectUrl = type === 'products' ? urls.psProducts('all') : urls.psServices('all');
      history.push(redirectUrl);
      return;
    }

    if(response){
      this.setState({ isLoading: false, items: response.data.data });
      return;
    }
  };

  onSwitchClick = (index) => {
    if(index === 0){
      history.push(urls.psProducts('all'));
      return;
    }

    if(index === 1){
      history.push(urls.psServices('all'));
      return;
    }
  };

  render(){
    const { type, filter } = this.props;

    const { items, isLoading } = this.state;

    const isLoadingFilters = this.props.store.productsServices.status === 'loading';
    const isErrorFilters = this.props.store.productsServices.status === 'error';

    if(isLoadingFilters){
      return <FirstScreenContainer>
        <Title className={styles.title}>Товары и услуги</Title>
        <Spinner className={styles.spinner}/>
      </FirstScreenContainer>;
    }

    if(isErrorFilters){
      return <FirstScreenContainer>
        <Title className={styles.title}>Товары и услуги</Title>
        <div className={styles.error}>Кажется что-то пошло не так ...</div>
      </FirstScreenContainer>;
    }

    return <FirstScreenContainer>
      <Title className={styles.title}>Товары и услуги</Title>
      <div className={styles.topControls}>
        <SwitchComponent
          sections={['Товары', 'Услуги',]}
          onChange={this.onSwitchClick}
          activeIndex={this.props.activeIndex}
        />
      </div>
      <div className={styles.container}>
        { !isLoading && <div className={styles.sides}>
          <div className={styles.leftSide}>
            left
          </div>
          <div className={styles.rightSide}>
            <Filters
              type={type}
              filters={[
                { id: 'all', name: 'Все' },
                { id: '1', name: 'Шины' },
                { id: '2', name: 'Стекла' },
                { id: '3', name: 'Двери' },
                { id: '4', name: 'Мука' },
              ]}
            />
          </div>
        </div> }
        <Spinner className={cn(styles.spinner, !isLoading && styles.spinnerHidden)}/>
      </div>
    </FirstScreenContainer>;
  }
}


export default () => {
  return <Switch>
    <Route
      path={urls.psProducts(':filter')}
      render={props => <ProductsServices
        type={'products'}
        activeIndex={0}
        filter={props.match.params.filter}
      />}
    />
    <Route
      path={urls.psServices(':filter')}
      render={props => <ProductsServices
        type={'services'}
        activeIndex={1}
        filter={props.match.params.filter}
      />}
    />
    <Redirect to={urls.psProducts('all')}/>
  </Switch>
}