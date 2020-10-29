import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../store/actions/createTodo';


const CreateTodo = class CreateTodo extends Component {

    constructor(props) {
        super(props);
    }

    create(e) {
        const l = {
            "completed": e.target[0].checked,
            "description": e.target[1].value,
            "assignee": e.target[2].value,
            "priority": e.target[3].checked ? e.target[3].value : (e.target[2].checked ? e.target.value : "High")
        }
        this.props.createTodo(l)
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <h3>Create Todo</h3>
                <div className="form-group">
                    <input  type="checkbox"
                            className="form-check-input"
                            id="completedCheckbox"
                            name="completed"
                            />
                    <label className="form-check-label" htmlFor="completedCheckbox">
                        Completed
                    </label>
                <div className="form-group">
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            name="description"
                            />
                </div>
                <div className="form-group">
                    <label>Assignee: </label>
                    <input  type="text"
                            name="assignee"
                            className="form-control"
                            />
                </div>
                <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Create!</button>
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