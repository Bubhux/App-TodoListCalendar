// components/TodoItem.jsx
import React from 'react';
import { useDateHover } from './DateHoverContext.jsx';


/**
 * Composant TodoItem.
 * Affiche une tâche individuelle avec des options pour la marquer comme complétée ou la supprimer.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.todo - L'objet tâche contenant ses informations.
 * @param {number} props.todo.id - L'identifiant unique de la tâche.
 * @param {string} props.todo.title - Le titre de la tâche.
 * @param {boolean} props.todo.completed - Le statut de la tâche (complétée ou non).
 * @param {function} props.toggleTodo - La fonction pour changer le statut de la tâche.
 * @param {function} props.deleteTodo - La fonction pour supprimer la tâche.
 * @param {function} props.onHover - La fonction pour gérer le survol de la tâche.
 *
 * @returns {JSX.Element} Le composant TodoItem.
 */
const TodoItem = ({ todo, toggleTodo, deleteTodo, onHover }) => {
    const { setHoveredDate } = useDateHover()

    const handleMouseEnter = () => {
        console.log("Todo Object:", todo)
        console.log("Mouse Entered:", todo.createdDate) // Affiche la date de création
        setHoveredDate(todo.createdDate)
        onHover(todo.createdDate)
    }

    const handleMouseLeave = () => {
        console.log("Mouse Left")
        setHoveredDate(null) // Réinitialiser l'état de survol
        onHover(null)
    }

    return (
        <li
            className={`todo list-group-item d-flex align-items-center ${todo.completed ? 'is-completed' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <input
                className="form-check-input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)} // Appelle la fonction pour changer le statut de la tâche
            />
            <label className="ms-2 form-check-label">{todo.title}</label>
            <button
                className="ms-auto btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)} // Appelle la fonction pour supprimer la tâche
            >
                <i className="bi-trash"></i>
            </button>
        </li>
    )
}

export default TodoItem;
