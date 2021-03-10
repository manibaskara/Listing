import {getListing} from '../../services/api';
import {GET_LISTING_DATA, GET_LISTING_ERROR} from '../actionTypes';
import _ from 'lodash';
export const getListingsAction = () => {
  return async (dispatch) => {
    try {
      const response = await getListing();
      if (response && response.data && response.data.category) {
        var flatten = _.mapKeys(response.data.category, 'id');
        console.log(JSON.stringify(flatten));
        var obj = [];

        _.forEach(flatten, function (v) {
          if (v.parentId === 0) {
            obj.push(v);
          } else {
            if (!flatten[v.parentId].sub) {
              flatten[v.parentId].sub = [];
            }
            flatten[v.parentId].sub.push(v);
          }
        });

        dispatch({type: GET_LISTING_DATA, payload: obj});
      } else {
        dispatch({
          type: GET_LISTING_ERROR,
          payload: new Error(),
        });
      }
    } catch (e) {
      console.log('error ', e);
      dispatch({
        type: GET_LISTING_ERROR,
        payload: e,
      });
    }
  };
};
