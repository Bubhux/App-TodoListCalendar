// components/CalendarHeader.jsx
import React from 'react';


const CalendarHeader = ({ onMonthPickerClick, currentMonth, currentYear, monthNames, setCurrentYear }) => {
    return (
        <div className="calendar-header">
            <span
                className="month-picker"
                id="month-picker"
                onClick={onMonthPickerClick}
            >
                {monthNames[currentMonth]}
            </span>
            <div className="year-picker" id="year-picker">
                <span className="year-change" id="pre-year" onClick={() => setCurrentYear(prev => prev - 1)}>&lt;</span>
                <span id="year">{currentYear}</span>
                <span className="year-change" id="next-year" onClick={() => setCurrentYear(prev => prev + 1)}>&gt;</span>
            </div>
        </div>
    );
};

export default CalendarHeader;
