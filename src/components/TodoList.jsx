import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Lista de tareas</h2>
      <div className="todo-list-input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          className="todo-list-input"
          placeholder="Agregar nueva tarea"
        />
        <button onClick={handleAddTodo} className="todo-list-button">
          Agregar
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button
              onClick={() => handleDeleteTodo(index)}
              className="todo-delete-button"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
