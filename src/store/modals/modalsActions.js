export const MODALS__OPEN_MODAL = 'MODALS__OPEN_MODAL';
export const MODALS__SET_DATA = 'MODALS__SET_DATA';
export const MODALS__CLOSE_MODAL = 'MODALS__CLOSE_MODAL';
export const MODALS__REGISTER = 'MODALS__REGISTER';


export const register = (id) => ({
  type: MODALS__REGISTER,
  id,
});

export const setData = (id, data) => ({
  type: MODALS__SET_DATA,
  id,
  data,
});

export const open = (id) => ({
  type: MODALS__OPEN_MODAL,
  id,
});

export const close = (id) => ({
  type: MODALS__CLOSE_MODAL,
  id,
});


const actions = {
  open,
  close,
  setData,
  register,
};


export default {
  MODALS__OPEN_MODAL,
  MODALS__SET_DATA,
  MODALS__CLOSE_MODAL,
  MODALS__REGISTER,

  actions,
}
