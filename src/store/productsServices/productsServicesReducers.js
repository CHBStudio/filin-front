import update from 'immutability-helper';

import actions from './productsServicesActions';


const initialState = {
  status: null,
  productsFilters: [],
  servicesFilters: [],
};

const actionsMap = {
  [actions.PRODUCTS_SERVICES__SET_FILTERS]: (state, { productFilters, serviceFilters }) => {
    return update(state, {
      productsFilters: { $set: productFilters },
      servicesFilters: { $set: serviceFilters }
    });
  },

  [actions.PRODUCTS_SERVICES__SET_FILTERS_LOAD_STATUS]: (state, { status }) => {
    return update(state, {
      status: { $set: status },
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
