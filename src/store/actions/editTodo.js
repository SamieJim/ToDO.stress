import {EDIT_TODO, EDIT_ERROR} from '../types'
import axios from 'axios'

export const editTodo = (id, obj) => async dispatch => {
    console.log("editing action", obj)
    try{
        const res = await axios.put('http://localhost:3001/todos/update/' + id, {
            "description": obj.description,
            "assignee": obj.assignee,
            "priority": obj.priority,
            "completed": obj.completed
        })
        console.log('response', res)
        dispatch( {
            type: EDIT_TODO,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: EDIT_ERROR,
            payload: console.log(e),
        })
    }

}