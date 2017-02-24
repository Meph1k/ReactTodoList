import React from "react"
import NewTodo from "./NewTodo"
import Title from "./Title"
import TodoList from "./TodoList"

export default class Layout extends React.Component {
  render() {
    return (
        <div className="layout-block">
          <Title />
          <TodoList />
          <NewTodo />
        </div>
    );
  }
}
