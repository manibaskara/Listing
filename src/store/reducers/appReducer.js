import {IS_LOADING} from '../actionTypes';

const initialState = {error: null, isLoading: false};

export const appReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case IS_LOADING:
      return {...state, isLoading: payload};
    default:
      return state;
  }
};
