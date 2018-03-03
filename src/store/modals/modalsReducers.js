import update from 'immutability-helper';

import actions from './modalsActions';


const modalInitialState = {
  data: {},
  isOpen: false,
};

const initialState = {};

const actionsMap = {
  [actions.MODALS__REGISTER]: (state, { id }) => {
    return update(state, {
      [id]: { $set: modalInitialState },
    });
  },

  [actions.MODALS__SET_DATA]: (state, { id, data }) => {
    return update(state, {
      [id]: { data: { $set: data } },
    });
  },

  [actions.MODALS__CLOSE_MODAL]: (state, { id }) => {
    return update(state, {
      [id]: { isOpen: { $set: false } },
    });
  },

  [actions.MODALS__OPEN_MODAL]: (state, { id }) => {
    return update(state, {
      [id]: { isOpen: { $set: true } },
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
