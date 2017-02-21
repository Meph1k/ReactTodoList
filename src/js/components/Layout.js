import React from "react"
import { connect } from "react-redux"
import TodoBlock from "./TodoBlock"
import NewTodo from "./NewTodo"

@connect((store) => {
  return {
    todoItems: store.todo.todoItems
  };
})
export default class Layout extends React.Component {
  displayTodoList() {
    return this.props.todoItems.map((element, index) => <div key={index}><TodoBlock element={element} /></div>)
  }

  render() {
    
    return (
        <div>
          {this.props.children}
          {this.displayTodoList()}
          <NewTodo />
        </div>
    );
  }
}
