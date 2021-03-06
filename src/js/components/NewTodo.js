import React, { Component } from 'react';
import { connect } from "react-redux"
import { addNewItem } from '../actions/todoActions'

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
        };
        this.description = null;
    }

    toggleNewTodoForm() {
        this.setState({
            isNewTodoFormDisplayed: !this.state.isNewTodoFormDisplayed
        });
    }

    addNewItem() {
        this.toggleNewTodoForm();
        let newItem = {
            description: this.description ? this.description.value : 'unknown item'
        };

        return this.props.dispatch(addNewItem(newItem));
    }

    render() {
        if (!this.state.isNewTodoFormDisplayed) {
            return (
                <div className="row">
                    <div className="col-xs-offset-4 col-sm-offset-5 additional-margin-top--less">
                        <div className="row">
                            <button className="btn btn-primary col-xs-5 col-lg-2" onClick={() => this.toggleNewTodoForm()}>Add new todo</button>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="row">
                <div className="col-xs-offset-4 col-sm-offset-5 new-todo-block">
                    <div className="row">
                        <label className="col-xs-2">
                            Description:
                        </label>
                    </div>
                    <div class="row">
                        <textarea
                            className="col-xs-4"
                            id="description-textarea"
                            ref={(input) => { this.description = input; }}
                        ></textarea>
                    </div>
                    <div class="row">
                        <button className="col-xs-4 btn btn-primary add-btn" onClick={() => this.addNewItem()}>Add new item</button>
                    </div>
                </div>
            </div>
        );
    }
}
