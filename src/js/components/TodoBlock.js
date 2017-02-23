import React, { Component } from 'react';
import { connect } from "react-redux"
import { removeItem } from '../actions/todoActions'

@connect((store) => {
    return {
        todoItems: store.todo.todoItems
    };
})
export default class TodoBlock extends Component {
    removeItem() {
        return this.props.dispatch(removeItem(this.props.element.id));
    }
    
    render() {
        return (
            <div className="col-xs-offset-4 col-sm-offset-5">
                <div className="row">
                    <div className="col-xs-5 col-lg-2 panel panel-primary todo-element">{this.props.element.description}</div>
                </div>
                <div className="row">
                    <button className="col-xs-5 col-lg-2 btn btn-danger small" onClick={this.removeItem.bind(this)}>x</button>
                </div>
            </div>
        );
    }
}

TodoBlock.propTypes = {
    element: React.PropTypes.shape({
        id: React.PropTypes.number && React.PropTypes.isRequired
    })
};
