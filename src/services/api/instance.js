import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {GET_LISTING} from './Paths';
import * as data from '../../assets/mocks/ListingData.json';

const instance = axios.create({
  baseURL: 'https://fakeapi.com',
});
const mock = new MockAdapter(instance, {delayResponse: 1000});

mock.onGet(GET_LISTING).reply(200, data);

export default instance;
