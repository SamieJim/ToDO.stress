import axios from 'axios';
const initialState = {
    todos: [],
    fetched: false,
    error: null,
    loading: false
}

const reducer = async function(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_TODOS':
            console.log('fetching...')
            let retrievedTodos = await axios.get('http://localhost:3001/todos')
            .then(function(result){
                return result.data;
            })
            .catch(function(err){
                console.log(err);
            });
            console.log("retrieved", retrievedTodos);
            return {
                ...state,
                todos: [retrievedTodos],
                fetched: true
            }

        
        case 'LOAD_TODO_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload]
            }

        case 'LOAD_TODOS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case 'EDIT_TODO_STARTED':
            return {
                ...state,
                loading: false
            }

        case 'EDIT_TODO_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload]
            }

        case 'EDIT_TODO_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
    
        case 'ADD_TODO_STARTED':
            return {
                ...state,
                loading: false
            }
        
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload]
            }
       
        case 'ADD_TODO_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        default: 
            return state
    }
}

export default reducer;