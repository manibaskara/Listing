import instance from './instance';
import {GET_LISTING} from './Paths';
import {IS_LOADING} from '../../store/actionTypes';
import {store} from '../../store';

export const getListing = async (object) => {
  const response = await getRequest(GET_LISTING, object);
  return response;
};

const getRequest = async (url, object) => {
  try {
    store.dispatch({type: IS_LOADING, payload: true});
    const response = await instance.get(url, {params: object});
    store.dispatch({type: IS_LOADING, payload: false});
    return response;
  } catch (err) {
    store.dispatch({type: IS_LOADING, payload: false});
    throw err;
  }
};

const postRequest = async (url, object) => {
  try {
    store.dispatch({type: IS_LOADING, payload: true});
    const response = await instance.post(url, object);
    store.dispatch({type: IS_LOADING, payload: false});
    return response;
  } catch (err) {
    store.dispatch({type: IS_LOADING, payload: false});
    throw err;
  }
};
