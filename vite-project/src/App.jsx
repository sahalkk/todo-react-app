import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
