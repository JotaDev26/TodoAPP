import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-end display-4">ToDo List</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas, por favor agrega una {":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
