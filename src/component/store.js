import { createStore } from 'redux';
import mbtiReducer from './reducer/reducer';

const store = createStore(mbtiReducer);

export default store;
