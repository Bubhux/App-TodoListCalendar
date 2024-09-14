// components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem.jsx';
import useTodos from '../hooks/useTodos.js';


/**
 * Composant TodoList.
 * Affiche la liste des tâches à faire avec des options pour ajouter, compléter et supprimer des tâches.
 * Utilise le hook personnalisé `useTodos` pour gérer les tâches et les filtres.
 * 
 * @returns {JSX.Element} Le composant TodoList.
 */
const TodoList = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, filter, handleFilterChange } = useTodos();

    /**
     * Gestionnaire de soumission du formulaire pour ajouter une nouvelle tâche.
     * 
     * @param {React.FormEvent} e - L'événement de soumission du formulaire.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value.trim();
        if (title) {
            addTodo(title);
            e.target.reset();
        }
    };

    return (
        <div className="todo-container pt-5" id="todolist">
            <form onSubmit={handleSubmit} className="d-flex pb-4 reveal-2">
                <input required className="form-control" type="text" placeholder="Créer une note ..." name="title" />
                <button className="btn btn-primary ms-2 btn-custom">Ajouter</button>
            </form>
            <div className="btn-group mb-4 gap-1 reveal-3" role="group">
                <button 
                    type="button" 
                    className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`} 
                    onClick={() => handleFilterChange('all')}>
                    Toutes
                </button>
                <button 
                    type="button" 
                    className={`btn btn-outline-primary ${filter === 'todo' ? 'active' : ''}`} 
                    onClick={() => handleFilterChange('todo')}>
                    À faire
                </button>
                <button 
                    type="button" 
                    className={`btn btn-outline-primary ${filter === 'done' ? 'active' : ''}`} 
                    onClick={() => handleFilterChange('done')}>
                    Faites
                </button>
            </div>
            <ul className="list-group list-group-custom reveal-4">
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
