import React from 'react'
import { Link } from 'react-router-dom'

const Todo = (props) => {
  const { todo, deleteTodo } = props

  return (
    <div className="todo row" key={todo.id}>
      <div className="column">
        <Link to={`/todos/${todo.id}`}>
          <h3>{todo.taskName}</h3>
        </Link>
        <p>Assigned to: {todo.assignee}</p>
      </div>
      <div className="column">
        <button
          type="button"
          className="remove"
          onClick={() => deleteTodo(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Todo
