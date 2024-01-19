import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, compose, applyMiddleware } from 'redux';
import { assignAll } from 'redux-act';

import * as actions from '../store/actions/foodActions/createAction';
import reducers from './reducers';

let composeEnhancers;

const store = () => {
    let middlewares = [thunkMiddleware, promiseMiddleware];

    if (process.env.NODE_ENV === 'production') {
        composeEnhancers = compose(applyMiddleware(...middlewares));
    } else {
        middlewares.push(loggerMiddleware);
        composeEnhancers = composeWithDevTools(
            applyMiddleware(...middlewares)
        );
    }
    const store = createStore(reducers, composeEnhancers);
    assignAll(actions, store);


    return store;
}

export default store();