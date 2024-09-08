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
        handleMonthSelect,
        monthNames,
        setCurrentYear
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
            setDateTimeFormatClass('hideTime');
            setDayTextFormatClass('hideTime');
            setTimeFormatClass('hideTime');
            setDateFormatClass('hideTime');
        } else {
            setDateTimeFormatClass('showtime');
            setDayTextFormatClass('showtime');
            setTimeFormatClass('showtime');
            setDateFormatClass('showtime');
        }
    }, [showMonthList]);

    return (
        <div className="calendar">
            <CalendarHeader
                onMonthPickerClick={handleMonthPickerClick}
                currentMonth={currentMonth}
                currentYear={currentYear}
                monthNames={monthNames}
                setCurrentYear={setCurrentYear}
            />
            <CalendarBody days={days} />
            <DateTimeFormat
                dateTimeFormatClass={dateTimeFormatClass}
                timeFormatClass={timeFormatClass}
                dateFormatClass={dateFormatClass}
                dayTextFormatClass={dayTextFormatClass}
            />
            <div className={`month-list ${showMonthList ? 'show' : 'hide'}`}>
                {monthNames.map((month, index) => (
                    <div key={index} onClick={() => handleMonthSelect(index)}>
                        {month}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
