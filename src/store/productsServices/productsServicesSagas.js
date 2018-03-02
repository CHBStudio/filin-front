import api from 'config/api';
import saga from 'utils/saga';
import request from 'utils/request';

import actions, { setFilters, setFiltersLoadStatus } from './productsServicesActions';


const loadFiltersSaga = saga(async (store, action, dispatch) => {

  const { response, error } = await request(api.getProductsServicesFilters, 'GET');

  if(response){
    dispatch(setFilters(
      response.data.product_types,
      response.data.service_types
    ));
    dispatch(setFiltersLoadStatus('loaded'));
    return;
  }

  dispatch(setFiltersLoadStatus('error'));
}, actions.PRODUCTS_SERVICES__LOAD_FILTERS);


export default [
  loadFiltersSaga,
]
