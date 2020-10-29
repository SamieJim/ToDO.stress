import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../store/actions/createTodo';


const CreateTodo = class CreateTodo extends Component {

    constructor(props) {
        super(props);
    }

    onSubmit(e) {
        console.log(e)
        this.props.todos.todos.completed = e.target.checked;
        this.props.createTodo(this.props.match.params.id, this.props.todos.todos)
    }

    update() {
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h3>Create Todo</h3>
                <div className="form-group">
                    <input  type="checkbox"
                            className="form-check-input"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            checked="false"
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>
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
                        <button type="submit" value="Update Todo" className="btn btn-primary"/>
                    </div>
                </div>
                </div>
            </form>
        )

    }
}

const mapStateToProps  = (state) => ({
    todos:state.todos
})


export default connect(mapStateToProps, {createTodo})(CreateTodo)