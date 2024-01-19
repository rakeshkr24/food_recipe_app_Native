import { createAction } from 'redux-act';

//actions
export const getCategoriesPending = createAction('Categories API started fetching');
export const getCategoriesSuccessful = createAction('Categories API successful', (categories) => ({ categories }));
export const getCategoriesFailed = createAction('Categories API fetching failed');


export const getFIlterFoodPending = createAction('Fltered by categery data API started fetching');
export const getFIlterFoodSuccessful = createAction('Fltered by categery data API successful', (foodsData) => ({ foodsData }));
export const getFIlterFoodFailed = createAction('Fltered by categery data API fetching failed');



export const getMealDetailsPending = createAction('Meal details API started fetching');
export const getMealDetailsSuccessful = createAction('Meal details API successful');
export const getMealDetailsFailed = createAction('Meal details API fetching failed');
