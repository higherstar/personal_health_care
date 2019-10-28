import types from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const setCollapsed = (collapsed) => (dispatch) => {
  dispatch({
    type: types.SET_SIDE_BAR_COLLAPSED,
    payload: { collapsed },
  });
};
