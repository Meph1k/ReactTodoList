import React from "react"
import { connect } from "react-redux"
import TodoBlock from "./TodoBlock"
import NewTodo from "./NewTodo"
import Title from "./Title"

@connect((store) => {
  return {
    todoItems: store.todo.todoItems
  };
})
export default class Layout extends React.Component {
  displayTodoList() {
    return this.props.todoItems.map((element, index) => <div className="row" key={index}><TodoBlock element={element}/></div>)
  }

  render() {
    return (
        <div className="layout-block">
          <Title />
          {this.displayTodoList()}
          <NewTodo />
        </div>
    );
  }
}
