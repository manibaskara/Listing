import {combineReducers} from 'redux';
import {appReducer} from './appReducer';
import {listingReducer} from './listingReducer';

export const reducer = combineReducers({
  app: appReducer,
  listing: listingReducer,
});
