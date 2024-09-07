// components/TodoItem.jsx
import React from 'react';


const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className={`todo list-group-item d-flex align-items-center ${todo.completed ? 'is-completed' : ''}`}>
            <input
                className="form-check-input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <label className="ms-2 form-check-label">{todo.title}</label>
            <button className="ms-auto btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                <i className="bi-trash"></i>
            </button>
        </li>
    );
};

export default TodoItem;
