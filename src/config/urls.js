export const root = '/';


export const landing = '/landing';


export const offers = '/offers';


export const ps = '/products_services';

export const psServices = (serviceTypeId) => `${ps}/services/${serviceTypeId}`;
export const psProducts = (productTypeId) => `${ps}/products/${productTypeId}`;


export const contacts = '/contacts';


export default {
  root,


  landing,


  offers,


  ps,

  psServices,
  psProducts,


  contacts,
}
