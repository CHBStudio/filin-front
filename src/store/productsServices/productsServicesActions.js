export const PRODUCTS_SERVICES__SET_PRODUCTS_FILTERS = 'PRODUCTS_SERVICES___SET_PRODUCTS_FILTERS';
export const PRODUCTS_SERVICES__SET_SERVICES_FILTERS= 'PRODUCTS_SERVICES___SET_SERVICES_FILTERS';


export const setProductsFilters = (filters) => ({
  type: PRODUCTS_SERVICES__SET_PRODUCTS_FILTERS,
  filters,
});

export const setServicesFilters = (filters) => ({
  type: PRODUCTS_SERVICES__SET_SERVICES_FILTERS,
  filters,
});


const actions = {
  setProductsFilters,
  setServicesFilters,
};


export default {
  PRODUCTS_SERVICES__SET_PRODUCTS_FILTERS,
  PRODUCTS_SERVICES__SET_SERVICES_FILTERS,

  actions,
}