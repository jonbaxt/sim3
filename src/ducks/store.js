import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

let middleware = applyMiddleware( promiseMiddleware() );
let store = createStore( reducer, middleware );

export default store;