// components/Calendar.jsx
import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarBody from './CalendarBody.jsx';
import DateTimeFormat from './DateTimeFormat.jsx';
import useCalendar from '../hooks/useCalendar.js';


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

    const [dateTimeFormatClass, setDateTimeFormatClass] = useState('showtime')
    const [dayTextFormatClass, setDayTextFormatClass] = useState('showtime')
    const [timeFormatClass, setTimeFormatClass] = useState('showtime')
    const [dateFormatClass, setDateFormatClass] = useState('showtime')

    // Génère les jours du calendrier pour le mois et l'année courants
    const days = generateCalendarDays(currentMonth, currentYear)

    // Gère le clic sur le sélecteur de mois
    const handleMonthPickerClick = () => {
        toggleMonthList()
    }

    // Effet pour gérer l'affichage et le masquage de la liste des mois
    useEffect(() => {
        if (showMonthList) {
            setDateTimeFormatClass('hideTime')
            setDayTextFormatClass('hideTime')
            setTimeFormatClass('hideTime')
            setDateFormatClass('hideTime')
        } else {
            setDateTimeFormatClass('showtime')
            setDayTextFormatClass('showtime')
            setTimeFormatClass('showtime')
            setDateFormatClass('showtime')
        }
    }, [showMonthList])

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
                    <div
                        key={index}
                        className={index === currentMonth ? 'active' : ''}
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