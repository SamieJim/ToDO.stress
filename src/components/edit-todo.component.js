import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editTodo} from '../store/actions/editTodo';
import {fetchTodo} from '../store/actions/fetchTodo'

const EditTodo = class EditTodo extends Component {

    constructor(props) {
        super(props);
    }

    onChangeTodoCompleted(e) {
        this.props.todos.todos.completed = e.target.checked;
        this.props.editTodo(this.props.match.params.id, this.props.todos.todos)
    }

    onChangeTodoDescription(e) {
        this.props.todos.todos.description = e.target.value;
        this.props.editTodo(this.props.match.params.id, this.props.todos.todos)
    }

    onChangeTodoassignee(e) {
        this.props.todos.todos.assignee = e.target.value;
        this.props.editTodo(this.props.match.params.id, this.props.todos.todos)
    }

    onChangeTodoPriority(e) {
        this.props.todos.todos.priority = e.target.value;
        this.props.editTodo(this.props.match.params.id, this.props.todos.todos)
    }
    componentDidMount(){
        this.props.fetchTodo(this.props.match.params.id)
    }

    update() {
        this.props.history.push('/');
    }

    render() {
        console.log(this.props)
        const todos = []
        todos[0] = this.props.todos
        console.log(todos)

        const editTodoWindow = todos.map(todo => {
            return (
                <div>
                    <h3>Edit Todo</h3>
                    <div className="form-check">
                                <input  type="checkbox"
                                        className="form-check-input"
                                        id="completedCheckbox"
                                        name="completedCheckbox"
                                        onChange={this.onChangeTodoCompleted.bind(this)}
                                        checked={todo.completed}
                                        value={todo.completed}
                                        />
                                <label className="form-check-label" htmlFor="completedCheckbox">
                                    Completed
                                </label>
                            </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={this.onChangeTodoDescription.bind(this)}
                                value={todo.description}
                                />
                    </div>
                    <div className="form-group">
                        <label>Assignee: </label>
                        <input  type="text"
                                className="form-control"
                                value={todo.assignee}
                                onChange={this.onChangeTodoassignee.bind(this)}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={todo.priority==='Low'}
                                    onChange={this.onChangeTodoPriority.bind(this)}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={todo.priority==='Medium'}
                                    onChange={this.onChangeTodoPriority.bind(this)}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={todo.priority==='High'}
                                    onChange={this.onChangeTodoPriority.bind(this)}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.update.bind(this)}>Update</button>
                        </div>
                        </div>
                </div>
            )
        })
        return (
            <div>
              <div className="container editTodo">
                <h4 className="center">Todo List</h4>
                {editTodoWindow}
              </div>
            </div>
          ) 
    }
}


const mapStateToProps  = (state) => ({
    todos:state.todos
})

function mapDispatchToProps(dispatch) {
    return({
        editTodo: (id, field, obj) => dispatch(editTodo(id, field, obj)),
        fetchTodo: id => dispatch(fetchTodo(id)),
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)