import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



const TodoList = class TodosList extends Component {
    render() {
        if(!this.props.fetched)
            this.props.fetchTodos();
        console.log(this.props)
        const {todos} = this.props;
        const todoList = todos.length ? (
            todos.map(todo => {
                console.log(todo)
                return (
                    <div>
                        <h3>Todo List</h3>
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

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      fetched: state.fetched
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => {dispatch({type: 'FETCH_TODOS'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);
