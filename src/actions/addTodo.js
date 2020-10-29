import axios from "axios";

export const addTodo = (newTodo) => async (dispatch) => {
    dispatch({ type: 'ADD_TODO_STARTED'})
    try {
        const config = {
        headers: {
            "Content-Type": "application/json",
        },
        };
        const body = JSON.stringify({ newTodo });
        const res = await axios.post(
        `http://localhost:3001/todos/add`,
        body,
        config
        );

        dispatch({ type: 'ADD_TODO_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({
        type: 'ADD_TODO_FAILURE',
        payload: error,
        });
    }
};