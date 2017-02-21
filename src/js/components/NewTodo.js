import React, { Component } from 'react';
import { connect } from "react-redux"
import { addNewItem } from '../actions/todoActions'

require("../../styles/attributes.scss");

@connect((store) => {
    return {
        todoItems: store.todo.todoItems
    };
})
export default class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNewTodoFormDisplayed: false
        }
    }

    toggleNewTodoForm() {
        this.setState({ isNewTodoFormDisplayed: !this.state.isNewTodoFormDisplayed });
    }

    addNewItem() {
        console.log(document.getElementById('description-textarea').value);
        this.toggleNewTodoForm();
        let newItem = {
            id: this.props.todoItems.length,
            description: document.getElementById('description-textarea').value
        };

        return this.props.dispatch(addNewItem(newItem));
    }

    render() {
        if (!this.state.isNewTodoFormDisplayed) {
            return (
                <div class="col-sm-offset-5">
                    <button onClick={this.toggleNewTodoForm.bind(this)}>Add new todo</button>
                </div>
            );
        }
        return (
            <div class="col-sm-offset-5">
                <label>
                    Description:
                </label>
                <textarea id="description-textarea">

                </textarea>
                <button onClick={this.addNewItem.bind(this)}>Add new item</button>
            </div>
        );
    }
}
