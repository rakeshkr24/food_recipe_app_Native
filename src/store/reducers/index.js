import { combineReducers } from 'redux';
import { foodReducer } from "./foodReducers/index"

const reducers = combineReducers({
    foodReducer,
});

export default reducers;