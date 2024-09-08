// src/App.jsx
import React from 'react';
import TodoList from '../components/TodoList.jsx';
import Calendar from '../components/Calendar.jsx';
import useDateTime from '../hooks/useDateTime.js';
import './App.css';


const App = () => {

    const { currentDateFormatted, timeFormatted } = useDateTime();

    return (
        <div>
            {/*<h1 className="text-center">To-Do List application</h1>
            <TodoList />*/}
            <div className="container">
                <Calendar />
            </div>
        </div>
    );
};

export default App;
