// src/App.jsx
import React from 'react';
import TodoList from '../components/TodoList.jsx';
import './App.css';


const App = () => {
    return (
        <div>
            <h1 className="text-center">To-Do List application</h1>
            <TodoList />
        </div>
    );
};

export default App;
