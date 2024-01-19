import { createReducer } from 'redux-act';

// redux
import * as actions from '../../actions/foodActions/createAction';



export const initialState = {
    categoriesData: [],
    isloading: false,
    meals:[],
    meal: {}
}


const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}


export const foodReducer = createReducer({
    [actions.getCategoriesPending]: (state) =>
        updateObject(state),
    [actions.getCategoriesSuccessful]: (state, payload) => {
        return updateObject(state, {
            categoriesData: payload.categories,
        })
    },
    [actions.getCategoriesFailed]: (state) => {
        return updateObject(state, {
            categoriesData: null,
        })
    },

    [actions.getFIlterFoodPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.getFIlterFoodSuccessful]: (state, payload) => {
        return updateObject(state, {
            meals: payload.foodsData,
            isloading: false,
        })
    },
    [actions.getFIlterFoodFailed]: (state) => {
        return updateObject(state, {
            meals: null,
            isloading: false,
        })
    },

    [actions.getMealDetailsPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.getMealDetailsSuccessful]: (state, payload) => {
        return updateObject(state, {
            meal: payload,
            isloading: false,
        })
    },
    [actions.getMealDetailsFailed]: (state) => {
        return updateObject(state, {
            meal: null,
            isloading: false,
        })
    },

}, initialState); // <-- This is the default state 