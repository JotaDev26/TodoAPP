import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Debe tener un titulo");
      return;
    }

    if (description.trim() === "") {
      setError("Debe tener una descripción");
      return;
    }

    if (todoEdit) {
      // actualizando
      todoUpdate(formValues);
      setSuccessMessage("Actualizado con éxito");
    } else {
      todoAdd(formValues);
      setSuccessMessage("Agregado con éxito");
      setFormValues(initialFormValues);
    }

    // agregar nueva tarea
    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);

    setError(null);
  };

  return (
    <div>
      <h2 className="text-center display-5">
        {todoEdit ? "Editar Tarea" : "Nueva Tarea"}
      </h2>
      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-sm btn-warning mb-2"
        >
          Cancelar Edición
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="Text"
          placeholder="Título"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Descripción"
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? "Actualizar Tarea" : "Agregar Tarea"}
        </button>

        {error && <div className="alert alert-danger mt-2">{error}</div>}

        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
