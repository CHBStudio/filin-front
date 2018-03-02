export const OFFERS__SET_STATUS = 'OFFERS__SET_STATUS';
export const OFFERS__SET_DATA = 'OFFERS__SET_DATA';
export const OFFERS__START_LOADING = 'OFFERS__START_LOADING';


export const setStatus = (status) => ({
  type: OFFERS__SET_STATUS,
  status,
});

export const setData = (data) => ({
  type: OFFERS__SET_DATA,
  data,
});

export const startLoading = () => ({
  type: OFFERS__START_LOADING,
});


const actions = {
  startLoading,
  setStatus,
  setData,
};


export default {
  OFFERS__START_LOADING,
  OFFERS__SET_STATUS,
  OFFERS__SET_DATA,

  actions,
}
