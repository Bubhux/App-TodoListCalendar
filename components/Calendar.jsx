// components/Calendar.jsx
import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarBody from './CalendarBody.jsx';
import DateTimeFormat from './DateTimeFormat.jsx';
import useCalendar from '../hooks/useCalendar.js';
import useHoverCalendarDate from '../hooks/useHoverCalendarDate.js';
import { useDateHover } from './DateHoverContext.jsx';


/**
 * Composant principal du calendrier.
 * Affiche l'en-tête, le corps, et les formats de date et heure du calendrier,
 * ainsi que la liste des mois pour la sélection.
 * 
 * @component
 */
const Calendar = () => {
    const {
        currentMonth,
        currentYear,
        currentDay,
        generateCalendarDays,
        showMonthList,
        toggleMonthList,
        handleMonthSelect,
        monthNames,
        setCurrentYear,
        setCurrentMonth,
        setHighlightedDate
    } = useCalendar()

    const { hoveredDate } = useDateHover()
    const { handleMouseEnter, handleMouseLeave } = useHoverCalendarDate()

    // Classes CSS pour gérer les animations et transitions d'affichage
    const [dateTimeFormatClass, setDateTimeFormatClass] = useState('calendar__date-time-format--showtime')
    const [dayTextFormatClass, setDayTextFormatClass] = useState('calendar__day-text-format--showtime')
    const [timeFormatClass, setTimeFormatClass] = useState('calendar__time-format--showtime')
    const [dateFormatClass, setDateFormatClass] = useState('calendar__date-format--showtime')

    /**
     * Effet déclenché lorsque `hoveredDate` change.
     * Met à jour l'année, le mois et la date en surbrillance selon la date survolée.
     */
    useEffect(() => {
        if (hoveredDate) {
            const date = new Date(hoveredDate)
            setCurrentYear(date.getFullYear())
            setCurrentMonth(date.getMonth())
            setHighlightedDate(date)
        }
    }, [hoveredDate, setCurrentYear, setCurrentMonth, setHighlightedDate])

    // Génère les jours du calendrier pour le mois et l'année en cours
    const days = generateCalendarDays(currentMonth, currentYear)

    /**
     * Gère le clic sur le bouton de sélection de mois.
     * Affiche ou masque la liste des mois.
     */
    const handleMonthPickerClick = () => {
        toggleMonthList()
    }

    /**
     * Effet pour gérer l'affichage des formats de date et heure selon la visibilité de la liste des mois.
     * Lorsque la liste des mois est affichée, les formats sont masqués, et vice versa.
     */
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
                currentMonth={currentMonth}
                currentYear={currentYear}
                currentDay={currentDay}
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
