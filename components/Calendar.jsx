// components/Calendar.jsx
import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarBody from './CalendarBody.jsx';
import DateTimeFormat from './DateTimeFormat.jsx';
import useCalendar from '../hooks/useCalendar.js';
import useHoverCalendarDate from '../hooks/useHoverCalendarDate.js';


/**
 * Composant principal du calendrier.
 * Affiche l'en-tête du calendrier, le corps du calendrier avec les jours, 
 * le format de la date et de l'heure, et la liste des mois.
 * 
 * @component
 */
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
    } = useCalendar()

    const { hoveredDate, handleMouseEnter, handleMouseLeave } = useHoverCalendarDate()
    const [dateTimeFormatClass, setDateTimeFormatClass] = useState('calendar__date-time-format--showtime')
    const [dayTextFormatClass, setDayTextFormatClass] = useState('calendar__day-text-format--showtime')
    const [timeFormatClass, setTimeFormatClass] = useState('calendar__time-format--showtime')
    const [dateFormatClass, setDateFormatClass] = useState('calendar__date-format--showtime')

    // Génère les jours du calendrier pour le mois et l'année courants
    const days = generateCalendarDays(currentMonth, currentYear)

    // Gère le clic sur le sélecteur de mois
    const handleMonthPickerClick = () => {
        toggleMonthList()
    }

    // Effet pour gérer l'affichage et le masquage de la liste des mois
    useEffect(() => {
        if (showMonthList) {
            setDateTimeFormatClass('calendar__date-time-format--hideTime')
            setDayTextFormatClass('calendar__day-text-format--hideTime')
            setTimeFormatClass('calendar__time-format--hideTime')
            setDateFormatClass('calendar__date-format--hideTime')
        } else {
            setDateTimeFormatClass('calendar__date-time-format--showtime')
            setDayTextFormatClass('calendar__day-text-format--showtime')
            setTimeFormatClass('calendar__time-format--showtime')
            setDateFormatClass('calendar__date-format--showtime')
        }
    }, [showMonthList])

    return (
        <div className="calendar reveal-1">
            <CalendarHeader
                onMonthPickerClick={handleMonthPickerClick}
                currentMonth={currentMonth}
                currentYear={currentYear}
                monthNames={monthNames}
                setCurrentYear={setCurrentYear}
            />
            <CalendarBody 
                days={days} 
                hoveredDate={hoveredDate}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <DateTimeFormat
                dateTimeFormatClass={dateTimeFormatClass}
                timeFormatClass={timeFormatClass}
                dateFormatClass={dateFormatClass}
                dayTextFormatClass={dayTextFormatClass}
            />
            <div className={`calendar__month-list ${showMonthList ? 'calendar__month-list--show' : 'calendar__month-list--hide'}`}>
                {monthNames.map((month, index) => (
                    <div
                        key={index}
                        className={`calendar__month-item ${index === currentMonth ? 'calendar__month-item--active' : ''}`}
                        onClick={() => handleMonthSelect(index)}
                    >
                        {month}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calendar;
