import axios from 'axios'
import * as actionTypes from './actionTypes'


export const loadCategories = categories => ({
    type : actionTypes.LOAD_CATEGORIES,
    payload : categories
})

export const categoriesLoading = () => ({
    type : actionTypes.CATEGORIES_LOADING
})

export const fetchCategories = () => {
    return dispatch => {
        dispatch(categoriesLoading())
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(response => {
                dispatch(loadCategories(response.data))
        })
       
    }
}

export const loadFeatured = featured => ({
    type : actionTypes.LOAD_FEATURED,
    payload : featured
})

export const featuredLoading = () => ({
    type : actionTypes.FEATURED_LOADING
})

export const fetchFeatured = () => {
    return dispatch => {
        dispatch(featuredLoading())
        axios.get('http://127.0.0.1:8000/api/featured')
            .then(response => {
                dispatch(loadFeatured(response.data))
        })
       
    }
}
