import {GET_LISTING_DATA, GET_LISTING_ERROR, LISTING} from '../actionTypes';

const initialState = {data: {}, error: null};

export const listingReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_LISTING_DATA:
      return {
        ...state,
        data: payload,
        error: null,
      };
    case GET_LISTING_ERROR:
      return {...state, data: null, error: payload};

    default:
      return state;
  }
};
