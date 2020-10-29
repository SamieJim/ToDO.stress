import {FETCH_TODOS, FETCH_ERROR} from '../types'
import axios from 'axios'

export const fetchTodos = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://localhost:3001/todos`);
        console.log('RESULT', res);
        dispatch( {
            type: FETCH_TODOS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: FETCH_ERROR,
            payload: console.log(e),
        })
    }

}