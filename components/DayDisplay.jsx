// components/DayDisplay.jsx
import React from 'react';


const DayDisplay = ({ day }) => {
    return (
        <div className={`calendar-day ${day.isCurrentDate ? 'current-date' : ''}`}>
            {day.dayNumber || ''}
        </div>
    );
};

export default DayDisplay;
