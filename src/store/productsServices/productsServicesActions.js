export const PRODUCTS_SERVICES__SET_FILTERS = 'PRODUCTS_SERVICES__SET_FILTERS';
export const PRODUCTS_SERVICES__SET_FILTERS_LOAD_STATUS = 'PRODUCTS_SERVICES__FILTERS_LOAD_STATUS';
export const PRODUCTS_SERVICES__LOAD_FILTERS = 'PRODUCTS_SERVICES__LOAD_FILTERS';


export const setFiltersLoadStatus = (status) => ({
  type: PRODUCTS_SERVICES__SET_FILTERS_LOAD_STATUS,
  status,
});

export const setFilters = (productFilters, serviceFilters) => ({
  type: PRODUCTS_SERVICES__SET_FILTERS,
  productFilters,
  serviceFilters,
});

export const loadFilters = () => ({
  type: PRODUCTS_SERVICES__LOAD_FILTERS,
});


const actions = {
  setFilters,
  setFiltersLoadStatus,
  loadFilters,
};


export default {
  PRODUCTS_SERVICES__SET_FILTERS,
  PRODUCTS_SERVICES__SET_FILTERS_LOAD_STATUS,
  PRODUCTS_SERVICES__LOAD_FILTERS,

  actions,
}