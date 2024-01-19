import { 
    getCategoriesPending, 
    getCategoriesSuccessful, 
    getFIlterFoodPending,
    getFIlterFoodSuccessful,
    getMealDetailsPending,
    getMealDetailsSuccessful
} from "./createAction";

import axios from "axios";


export const getCategories = async () => {
    getCategoriesPending();
    try{
        const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
        if(response && response.data){
            getCategoriesSuccessful(response.data.categories)
        }
      }catch(err){
        console.log('error: ',err.message);
      }
};

export const getFilterdFoodByCategories = async ( category ) => {
    getFIlterFoodPending();
    try{
        const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        if(response && response.data){
            getFIlterFoodSuccessful(response.data.meals);
        }
      }catch(err){
        console.log('error: ',err.message);
      }
};

export const getMealsDetails = async ( id ) => {
  console.log(id)
  getMealDetailsPending();
  try{
    const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if(response && response.data){
      console.log(response.data.meals[0])
      // getMealDetailsSuccessful(response.data.meals[0]);
    }
  }catch(err){
    console.log('error: ',err.message);
  }
};