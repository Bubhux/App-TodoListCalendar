// components/TodoItem.jsx
import React from 'react';
import { useDateHover } from './DateHoverContext.jsx';


/**
 * Composant TodoItem.
 * Représente une tâche individuelle avec des options pour la marquer comme complétée ou la supprimer.
 * Il gère également le survol de la tâche pour afficher des informations supplémentaires.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {object} props.todo - L'objet représentant la tâche contenant ses informations.
 * @param {number} props.todo.id - L'identifiant unique de la tâche.
 * @param {string} props.todo.title - Le titre de la tâche.
 * @param {boolean} props.todo.completed - Le statut de la tâche (vrai si elle est complétée).
 * @param {Date} props.todo.createdDate - La date de création de la tâche.
 * @param {function} props.toggleTodo - La fonction pour changer le statut de la tâche (complétée ou non).
 * @param {function} props.deleteTodo - La fonction pour supprimer la tâche.
 * @param {function} props.onHover - La fonction pour gérer le survol de la tâche, en passant la date survolée ou null.
 *
 * @returns {JSX.Element} Le composant TodoItem.
 */
const TodoItem = ({ todo, toggleTodo, deleteTodo, onHover }) => {
    // Utilisation du contexte pour définir la date survolée
    const { setHoveredDate } = useDateHover()

    /**
     * Gère l'événement lorsque la souris entre sur l'élément de la tâche.
     * Affiche la date de création dans la console et met à jour le contexte de survol.
     */
    const handleMouseEnter = () => {
        //console.log("Objet Todo:", todo)
        //console.log("Souris entrée sur l'élément:", todo.createdDate) // Affiche la date de création dans la console
        setHoveredDate(todo.createdDate) // Met à jour la date survolée dans le contexte
        onHover(todo.createdDate) // Notifie le parent du survol
    }

    /**
     * Gère l'événement lorsque la souris quitte l'élément de la tâche.
     * Réinitialise l'état de survol dans le contexte et notifie le parent.
     */
    const handleMouseLeave = () => {
        //console.log("Souris sortie de l'élément")
        setHoveredDate(null) // Réinitialise l'état de survol dans le contexte
        onHover(null) // Notifie le parent de la fin du survol
    }

    return (
        <li
            className={`todo list-group-item d-flex align-items-center ${todo.completed ? 'is-completed' : ''}`}
            onMouseEnter={handleMouseEnter} // Gestionnaire pour l'entrée de la souris
            onMouseLeave={handleMouseLeave} // Gestionnaire pour la sortie de la souris
        >
            <input
                className="form-check-input"
                type="checkbox"
                checked={todo.completed} // Coche la case si la tâche est complétée
                onChange={() => toggleTodo(todo.id)} // Appelle la fonction pour changer le statut de la tâche
            />
            <label className="ms-2 form-check-label">{todo.title}</label> {/* Affiche le titre de la tâche */}
            <button
                className="ms-auto btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)} // Appelle la fonction pour supprimer la tâche
            >
                <i className="bi-trash"></i> {/* Icône de poubelle pour le bouton de suppression */}
            </button>
        </li>
    )
}

export default TodoItem;
