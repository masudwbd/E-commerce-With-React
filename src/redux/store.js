import {applyMiddleware, createStore} from 'redux'
import  Reducer  from './reducer'
import thunk from 'redux-thunk'

const myStore = createStore(Reducer , applyMiddleware(thunk));

export default myStore

