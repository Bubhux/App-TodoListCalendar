import React from 'react';
import TodoItem from './TodoItem.jsx';
import useTodos from '../hooks/useTodos.js';


const TodoList = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, filter, handleFilterChange } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value.trim();
        if (title) {
            addTodo(title);
            e.target.reset();
        }
    };

    return (
        <div className="container pt-5" id="todolist">
            <form onSubmit={handleSubmit} className="d-flex pb-4">
                <input required className="form-control" type="text" placeholder="Créer une note ..." name="title" />
                <button className="btn btn-primary ms-2 btn-custom" style={{
                    '--bs-btn-hover-bg': '#032030',
                    '--bs-btn-bg': '#395886',
                    '--bs-btn-border-color': '#8AAEE0',}}>Ajouter</button>
            </form>
            <div className="btn-group mb-4 gap-1" role="group">
                <button type="button" className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')} style={{
                    '--bs-btn-active-bg': '#395886',
                    '--bs-btn-active-border-color': '#8AAEE0',
                    'border-radius': 'var(--bs-border-radius)'}}>Toutes</button>
                <button type="button" className={`btn btn-outline-primary ${filter === 'todo' ? 'active' : ''}`} onClick={() => handleFilterChange('todo')} style={{
                    '--bs-btn-active-bg': '#395886',
                    '--bs-btn-active-border-color': '#8AAEE0',
                    'border-radius': 'var(--bs-border-radius)'}}>À faire</button>
                <button type="button" className={`btn btn-outline-primary ${filter === 'done' ? 'active' : ''}`} onClick={() => handleFilterChange('done')} style={{
                    '--bs-btn-active-bg': '#395886',
                    '--bs-btn-active-border-color': '#8AAEE0',
                    'border-radius': 'var(--bs-border-radius)'}}>Faites</button>
            </div>
            <ul className="list-group list-group-custom"style={{ 
                '--bs-list-group-bg': '#395886', 
                '--bs-list-group-border-width': '2px', 
                '--bs-list-group-border-color': '#8AAEE0', 
                '--bs-list-group-color': '#fff' 
            }}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
