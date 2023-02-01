import { combineReducers } from "redux";
import * as actionTypes from './actionTypes'

const myCategoriesReducer = (categoryState = { isLoading:false , categories:[]} , action ) => {
    switch(action.type){
        case actionTypes.CATEGORIES_LOADING:
            return{
                ...categoryState,
                isLoading:true,
                categories:[]
            }
        case actionTypes.LOAD_CATEGORIES:
            return{
                ...categoryState,
                isLoading:false,
                categories:action.payload
            }
        default:
            return categoryState
        
    }

}

const myFeaturedReducer = (featuredState = { isLoading:false , featured:[]} , action ) => {
    switch(action.type){
        case actionTypes.FEATURED_LOADING:
            return{
                ...featuredState,
                isLoading:true,
                featured:[]
            }
        case actionTypes.LOAD_FEATURED:
            return{
                ...featuredState,
                isLoading:false,
                featured:action.payload
            }
        default:
            return featuredState
        
    }

}



const Reducer = combineReducers({
    myCategories : myCategoriesReducer,
    myFeatured : myFeaturedReducer

})
export default Reducer