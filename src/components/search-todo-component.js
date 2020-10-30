import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchTodo} from '../store/actions/fetchTodo';

const TodoItem = class TodoItem extends Component {

    constructor() {
        super();
        this.searchRef = React.createRef();
      }

    searchTodos(){
        this.props.fetchTodo(this.searchRef.current.value);
        this.forceUpdate();
    }

    render() {
        const todos = []
        todos[0] = this.props.todos
        let searchBar = (
            <div>
                <input ref={this.searchRef} type="text" placeholder="Search by ID"/>
                <button onClick={this.searchTodos.bind(this)}>Search</button>
            </div>
        )
        let todo =
            (
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
                            <td className={this.props.todos.todos.completed ? 'completed' : ''}>{this.props.todos.todos.description}</td>
                            <td className={this.props.todos.todos.completed ? 'completed' : ''}>{this.props.todos.todos.assignee}</td>
                            <td className={this.props.todos.todos.completed ? 'completed' : ''}>{this.props.todos.todos.priority}</td>
                            <td>
                                <Link to={"/edit/"+this.props.todos.todos._id}>Edit</Link>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
    return (
        <div>
          <div className="container todoList">
            <h4 className="center">Todo List</h4>
            {[searchBar, todo]}
          </div>
        </div>
      )
    }
}

const mapStateToProps  = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, {fetchTodo})(TodoItem)