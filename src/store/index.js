import { combineReducers } from 'redux';

import productsServices from './productsServices';
import offers from './offers';
import modals from './modals';


const reducers = combineReducers({
  productsServices: productsServices.reducers,
  offers: offers.reducers,
  modals: modals.reducers,
});

const sagas = [].concat(
  productsServices.sagas,
  offers.sagas,
  modals.sagas,
);

const actions = {
  productsServices: productsServices.actions,
  offers: offers.actions,
  modals: modals.actions,
};


export {
  productsServices,
  offers,
  modals,
};

export default {
  reducers,
  sagas,
  actions,
}
