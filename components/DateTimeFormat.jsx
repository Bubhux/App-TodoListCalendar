// components/DateTimeFormat.jsx
import React from 'react';
import useDateTime from '../hooks/useDateTime.js';


const DateTimeFormat = ({ dateTimeFormatClass, timeFormatClass, dateFormatClass, dayTextFormatClass }) => {
    const { currentDateFormatted, timeFormatted } = useDateTime();

    return (
        <div className={`date-time-formate ${dateTimeFormatClass}`}>
            <div className={`day-text-formate ${dayTextFormatClass}`}>Today</div>
            <div className={`date-time-value ${dateTimeFormatClass}`}>
                <div className={`time-formate ${timeFormatClass}`}>{timeFormatted}</div>
                <div className={`date-formate ${dateFormatClass}`}>{currentDateFormatted}</div>
            </div>
        </div>
    );
};

export default DateTimeFormat;
