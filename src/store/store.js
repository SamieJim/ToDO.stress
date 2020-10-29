import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import todoReducer from './reducers'

const initialState = {
}


const middleware = [thunk]

const store = createStore(todoReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;