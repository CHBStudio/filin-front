import { combineReducers } from 'redux';

import productsServices from './productsServices';
import offers from './offers';
import modals from './modals';
import landingOffers from './landingOffers';


const reducers = combineReducers({
  productsServices: productsServices.reducers,
  offers: offers.reducers,
  modals: modals.reducers,
  landingOffers: landingOffers.reducers,
});

const sagas = [].concat(
  productsServices.sagas,
  offers.sagas,
  modals.sagas,
  landingOffers.sagas,
);

const actions = {
  productsServices: productsServices.actions,
  offers: offers.actions,
  modals: modals.actions,
  landingOffers: landingOffers.actions,
};


export {
  productsServices,
  offers,
  modals,
  landingOffers,
};

export default {
  reducers,
  sagas,
  actions,
}
