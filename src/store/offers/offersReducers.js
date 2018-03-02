import update from 'immutability-helper';

import actions from './offersActions';


const initialState = {
  status: null,
  data: [],
};

const actionsMap = {
  [actions.OFFERS__SET_STATUS]: (state, { status }) => {
    return update(state, {
      status: { $set: status },
    });
  },

  [actions.OFFERS__SET_DATA]: (state, { data }) => {
    return update(state, {
      data: { $set: data },
    });
  },
};

export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
