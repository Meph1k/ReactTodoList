import React from "react"
import { connect } from "react-redux"
import TodoBlock from "./TodoBlock"

@connect((store) => {
    return {
        todoItems: store.todo.todoItems
    };
})
export default class TodoList extends React.Component {
    displayTodoList() {
        return this.props.todoItems.map((element, index) => <div className="row" key={index}><TodoBlock element={element}/></div>)
    }

    render() {
        return (
            <div>
                {this.displayTodoList()}
            </div>
        );
    }
}
