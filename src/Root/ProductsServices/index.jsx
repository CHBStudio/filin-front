import propTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import urls from 'config/urls';
import history from 'utils/history';
import api from 'config/api';
import connect from 'utils/connect';
import { productsServices } from 'store';
import FirstScreenContainer from 'components/FirstScreenContainer';
import Title from 'components/Title';
import SwitchComponent from 'components/Switch';
import request from 'utils/request';
import FullSideLoader from 'components/FullSideLoader';

import Filters from './Filters';
import Floor from './Floor';

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
    const { type, filter } = this.props;
    const { status } = this.props.store.productsServices;
    if(status === null || status === 'error'){
      this.props.actions.productsServices.loadFilters();
    }

    this.updateItems(type, filter);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.type !== this.props.type || nextProps.filter !== this.props.filter){
      this.updateItems(nextProps.type, nextProps.filter);
    }
  }

  updateItems = async (type, filter) => {
    this.setState({ isLoading: true });

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
    const { type, store } = this.props;
    const { productsServices } = store;
    const { productsFilters, servicesFilters } = productsServices;

    const filters = type === 'products' ? productsFilters : servicesFilters;

    const { items, isLoading } = this.state;

    const isLoadingFilters = productsServices.status === 'loading';
    const isErrorFilters = productsServices.status === 'error';
    const isLoadedFilters = productsServices.status === 'loaded';

    return <FirstScreenContainer>
      <Title className={styles.title}>Товары и услуги</Title>

      { isErrorFilters && <div className={styles.error}>Кажется что-то пошло не так ...</div> }

      { isLoadingFilters && <FullSideLoader/> }

      { isLoadedFilters && <div className={styles.topControls}>
        <SwitchComponent
          sections={['Товары', 'Услуги',]}
          onChange={this.onSwitchClick}
          activeIndex={this.props.activeIndex}
        />
      </div> }

      { isLoadedFilters && <div className={styles.container}>
        <div className={styles.sides}>
          <div className={styles.leftSide}>
            { isLoading && <FullSideLoader/> }
            { !isLoading && items.map((floorData, index) => {
              return <Floor data={floorData} key={index}/>;
            }) }
          </div>
          <div className={styles.rightSide}>
            <Filters
              type={type}
              filters={filters}
            />
          </div>
        </div>
      </div> }
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