// components/Calendar.jsx
import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarBody from './CalendarBody.jsx';
import DateTimeFormat from './DateTimeFormat.jsx';
import useCalendar from '../hooks/UseCalendar.js';


const Calendar = () => {
    const {
        currentMonth,
        currentYear,
        generateCalendarDays,
        showMonthList,
        toggleMonthList,
        handleMonthSelect
    } = useCalendar();

    const [dateTimeFormatClass, setDateTimeFormatClass] = useState('showtime');
    const [dayTextFormatClass, setDayTextFormatClass] = useState('showtime');
    const [timeFormatClass, setTimeFormatClass] = useState('showtime');
    const [dateFormatClass, setDateFormatClass] = useState('showtime');

    const days = generateCalendarDays(currentMonth, currentYear);

    const handleMonthPickerClick = () => {
        toggleMonthList();
    };

    useEffect(() => {
        if (showMonthList) {
            // When month-list is visible
            setDateTimeFormatClass('hideTime');
            setDayTextFormatClass('hideTime');
            setTimeFormatClass('hideTime');
            setDateFormatClass('hideTime');
        } else {
            // When month-list is hidden
            setDateTimeFormatClass('showtime');
            setDayTextFormatClass('showtime');
            setTimeFormatClass('showtime');
            setDateFormatClass('showtime');
        }
    }, [showMonthList]);

    return (
        <div className="calendar">
            <CalendarHeader onMonthPickerClick={handleMonthPickerClick} />
            <CalendarBody days={days} />
            <DateTimeFormat
                dateTimeFormatClass={dateTimeFormatClass}
                timeFormatClass={timeFormatClass}
                dateFormatClass={dateFormatClass}
                dayTextFormatClass={dayTextFormatClass}
            />

            <div className={`month-list ${showMonthList ? 'show' : 'hide'}`}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, index) => (
                    <div key={index} onClick={() => handleMonthSelect(index)}>
                        {month}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
