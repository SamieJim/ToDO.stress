import axios from 'axios';
export const FETCH_TODOS = 'FETCH_TODOS';

export function getTodos() {
    axios.get('http://localhost:3001/todos')
        .then(function(result){ 
            console.log(result);
            return {
                type: FETCH_TODOS,
                payload: result
            };
        });
}