import {CREATE_ERROR, CREATE_TODO} from '../types'
import axios from 'axios'

export const createTodo = (obj) => async dispatch => {
    console.log("creating action", obj)
    try{
        const res = await axios.post('http://localhost:3001/todos/add/', {
            "description": obj.description,
            "assignee": obj.assignee,
            "priority": obj.priority,
            "completed": obj.completed
        })
        console.log('response', res)
        dispatch( {
            type: CREATE_TODO,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: CREATE_ERROR,
            payload: console.log(e),
        })
    }

}