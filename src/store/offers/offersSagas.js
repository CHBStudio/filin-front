import api from 'config/api';
import saga from 'utils/saga';
import request from 'utils/request';

import actions, { setStatus, setData } from './offersActions'


const loadOffersSaga = saga(async (store, action, dispatch) => {
  const { offers } = store.getState();
  if (offers.status !== null && offers.status !== 'error')
    return;
  dispatch(setStatus('loading'));

  const { response, error } = await request(api.getOffers, 'GET');
  if (response) {
    const { offers } = response.data;
    dispatch(setData(offers));
    dispatch(setStatus('loaded'));
    return;
  }
  dispatch(setStatus('error'));
}, actions.OFFERS__START_LOADING);



export default [loadOffersSaga];
