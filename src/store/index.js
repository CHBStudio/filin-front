import { combineReducers } from 'redux';

import productsServices from './productsServices';
import offers from './offers';


const reducers = combineReducers({
  productsServices: productsServices.reducers,
  offers: offers.reducers,
});

const sagas = [].concat(
  productsServices.sagas,
  offers.sagas,
);

const actions = {
  productsServices: productsServices.actions,
  offers: offers.actions,
};


export {
  productsServices,
  offers,
};

export default {
  reducers,
  sagas,
  actions,
}
