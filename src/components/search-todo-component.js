import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchTodo} from '../store/actions/fetchTodo';

const TodoItem = class TodoItem extends Component {

    renderResults(){
        return  (<tr>
                    <td className={this.props.result.completed ? 'completed' : ''}>{this.props.result.description}</td>
                    <td className={this.props.result.completed ? 'completed' : ''}>{this.props.result.assignee}</td>
                    <td className={this.props.result.completed ? 'completed' : ''}>{this.props.esult.priority}</td>
                    <td>
                        <Link to={"/edit/"+this.props._id}>Edit</Link>
                    </td>
                </tr>);
    }

    renderNothingFound(){
        return  (<tr>
                    <p>No results found.</p>
                </tr>);
    }

    search(e){
        this.props.result = this.props.fetchTodo(e.target[0].value);
    }

    render() {
        return (
            <div>
                <form id="search" onSubmit={this.search.bind(this)}>
                    <input type="text" id="search" placeholder="Search by ID...."></input>
                    <button type="submit" target="search" className="btn btn-primary">Update</button>
                </form>
                <div id="results">
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
                            {this.props.result ? this.renderResults.bind(this) : this.renderNothingFound.bind(this)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({
    result: state.todos
})

export default connect(mapStateToProps, {fetchTodo})(TodoItem)