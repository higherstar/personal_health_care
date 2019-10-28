import actionTypes from '../actionTypes';

const INITIAL_STATE = {
  collapsed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SIDE_BAR_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload.collapsed,
      };

    default:
      return state;
  }
};
