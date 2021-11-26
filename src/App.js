// un componente es una función, existen 2, de clase y funcionales
// se recomiendan los funcionales por ser sencillos y  tener mejor performance
// aquí es donde realizaremos nuestra app

import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
//para poder usar jsx react debe estar importado SÍ o SÍ

const initialTodos = [
  {
    id: 1,
    title: "Todo #1",
    description: "Desc del Todo #1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo #2",
    description: "Desc del Todo #2",
    completed: false,
  },
];

const localTodos = JSON.parse(localStorage.getItem("todos"));

const App = () => {
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const todoToogleCompleted = (todoId) => {
    const changedTodos = todos.map((todo) => {
      const todoEdit = {
        ...todo,
        completed: !todo.completed,
      };
      if (todo.id === todoId) {
        return todoEdit;
      } else {
        return todo;
      }
    });
    setTodos(changedTodos);
  };

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changedTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const changedTodos = [newTodo, ...todos];
    setTodos(changedTodos);
  };

  return (
    //manera de retornar varias etiquetas sin incluir o recurrir al div
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  ); //un componente solo puede retornar una etiqueta
};

export default App;
