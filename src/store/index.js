import { combineReducers } from 'redux';

import productsServices from './productsServices';


const reducers = combineReducers({
  productsServices: productsServices.reducers,
});

const sagas = [].concat(
  productsServices.sagas,
);

const actions = {
  productsServices: productsServices.actions,
};


export {
  productsServices,
};

export default {
  reducers,
  sagas,
  actions,
}