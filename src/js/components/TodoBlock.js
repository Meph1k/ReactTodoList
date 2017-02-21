import React, { Component } from 'react';
import { connect } from "react-redux"
import { removeItem } from '../actions/todoActions'

require("../../styles/attributes.scss");

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
            <div class="col-sm-offset-5">
                <div class="row">
                    <div class="col-xs-2">{this.props.element.description}</div>
                    <div class="col-xs-9" onClick={this.removeItem.bind(this)}>x</div>
                </div>
            </div>
        );
    }
}
