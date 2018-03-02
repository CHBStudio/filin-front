import update from 'immutability-helper';

import actions from './productsServicesActions';


const initialState = {
  productsFilters: [],
  servicesFilters: [],
};

const actionsMap = {
  [actions.PRODUCTS_SERVICES__SET_PRODUCTS_FILTERS]: (state, { filters }) => {
    return update(state, {
      productsFilters: { $set: filters },
    });
  },

  [actions.PRODUCTS_SERVICES__SET_SERVICES_FILTERS]: (state, { filters }) => {
    return update(state, {
      servicesFilters: { $set: filters },
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
