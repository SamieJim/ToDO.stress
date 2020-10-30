import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchTodos} from '../store/actions/fetchTodos'



const TodoList = class TodosList extends Component {
    componentDidMount(){
        this.props.fetchTodos()
    }
    render() {
        const {todos} = this.props.todos

        const todoList = todos.length ? (
            todos.map(todo => {
                return (
                    <div>
                        <table className="table table-striped" style={{ marginTop: 20 }}>
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>assignee</th>
                                    <th>Priority</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className={todo.completed ? 'completed' : ''}>{todo.description}</td>
                                <td className={todo.completed ? 'completed' : ''}>{todo.assignee}</td>
                                <td className={todo.completed ? 'completed' : ''}>{todo.priority}</td>
                                <td>
                                    <Link to={"/edit/"+todo._id}>Edit</Link>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })
        )
        :
        ( 
            <div className="center"> No todos yet </div>
        )
        return (
            <div>
              <div className="container todoList">
                <h4 className="center">Todo List</h4>
                {todoList}
              </div>
            </div>
          )
    }
}

const mapStateToProps  = (state) => ({
    todos:state.todos
})

export default connect(mapStateToProps, {fetchTodos})(TodoList)