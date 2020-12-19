import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <a href="#!" className="collection-item" key={todo.id}>
          <span onClick={id => { deleteTodo(todo.id) }}>{todo.content}</span>
        </a>
      )
    })
  ) : (
      <p className="center">Nothing to do! Cosy time now ;)</p>
    )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos