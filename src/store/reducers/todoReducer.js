import {FETCH_TODOS, EDIT_ERROR, EDIT_TODO, FETCH_ERROR} from '../types'

const initialState = {
    todos: [],
    error: null,
    loading: true
}

export default function(state = initialState, action){

    switch(action.type){

        case FETCH_TODOS:
            return {
                ...state,
                todos:action.payload,
                loading:false,
            }
        case FETCH_ERROR:
            return {
                loading:false,
                error: true
            }
        case EDIT_ERROR:
        return {
            loading:false,
            error: true
        }
        case EDIT_TODO:
            return {
                ...state,
                todos:action.payload,
                loading:false,
            }
        default: return state
    }

}