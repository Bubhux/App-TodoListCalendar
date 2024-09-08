// components/CalendarBody.jsx
import React from 'react';


const CalendarBody = ({ days }) => (
    <div className="calendar-body">
        <div className="calendar-week-days">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div className="calendar-days">
            {days.map((dayObj, index) => (
                <div
                    key={index}
                    className={dayObj.isCurrentDate ? 'current-date' : ''}
                >
                    {dayObj.day}
                </div>
            ))}
        </div>
    </div>
);

export default CalendarBody;
