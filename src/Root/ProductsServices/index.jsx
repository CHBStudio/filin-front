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

      isLoadingFilters: false,
      isLoadingItems: false,
    };
  }

  componentWillMount(){
    this.updateItems();
    this.updateFilters();
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
    this.setState({ isLoadingItems: true });

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
      this.setState({ isLoadingItems: false, items: response.data.data });
      return;
    }
  };

  updateFilters = async () => {
    this.setState({ isLoadingFilters: true });

    const { response, error } = await request(api.getProductsServicesFilters, 'GET');

    if(response){
      const { product_types, service_types } = response.data;
      this.props.actions.productsServices.setProductsFilters(product_types);
      this.props.actions.productsServices.setServicesFilters(service_types);

      this.setState({ isLoadingFilters: false });
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

    const { items, isLoadingFilters, isLoadingItems } = this.state;

    const isLoading = false;
    // isLoadingFilters || isLoadingItems;

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