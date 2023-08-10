import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...todos, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id, status) {
    let tempTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = status;
        return { ...todo, status };
      } else {
        return todo;
      }
    });
    setTodos(tempTodos);
  }

  function deleteTodo(id) {
    let tempTodos = todos.filter((itm) => itm.id != id);
    setTodos(tempTodos);
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {todos.length === 0 && "No ToDos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={todo["completed"]}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                <span>{todo.title}</span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
