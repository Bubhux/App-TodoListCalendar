// components/CalendarBody.jsx
import React, { memo } from 'react';
import { useDateHover } from '../components/DateHoverContext.jsx';


/**
 * Composant pour afficher le corps du calendrier.
 * 
 * @param {Object[]} days - Liste des jours à afficher dans le calendrier.
 * @param {number} days[].day - Le numéro du jour du mois.
 * @param {boolean} days[].isCurrentDate - Indique si le jour est la date courante.
 * @param {number} currentMonth - Le mois actuellement affiché dans le calendrier.
 * @param {number} currentYear - L'année actuellement affichée dans le calendrier.
 * 
 * @returns {JSX.Element} - Le composant affichant le corps du calendrier.
 */
const CalendarBody = memo(({ days, currentMonth, currentYear }) => {
    const { hoveredDate, setHoveredDate } = useDateHover()

    const handleMouseEnter = (date) => {
        setHoveredDate(new Date(date))
    }

    const handleMouseLeave = () => {
        setHoveredDate(null)
    }

    return (
        <div className="calendar__body reveal-3" aria-live="polite">
            {/* Affichage des jours de la semaine */}
            <div className="calendar__week-days">
                <div>Sun</div> {/* Dimanche */}
                <div>Mon</div> {/* Lundi */}
                <div>Tue</div> {/* Mardi */}
                <div>Wed</div> {/* Mercredi */}
                <div>Thu</div> {/* Jeudi */}
                <div>Fri</div> {/* Vendredi */}
                <div>Sat</div> {/* Samedi */}
            </div>
            {/* Affichage des jours du mois */}
            <div className="calendar__days">
                {days.map((dayObj, index) => {
                    if (dayObj.day === null) {
                        return <div key={index} className="calendar__day"></div>;
                    }

                    const dateToCheck = new Date(currentYear, currentMonth, dayObj.day);
                    const isValidDate = !isNaN(dateToCheck.getTime());
                    const isHighlighted = hoveredDate && 
                        hoveredDate.getDate() === dayObj.day &&
                        hoveredDate.getMonth() === currentMonth &&
                        hoveredDate.getFullYear() === currentYear;

                    return (
                        <div
                            key={index}
                            className={`calendar__day ${dayObj.isCurrentDate ? 'calendar__day--current-date' : ''} ${isHighlighted ? 'calendar__day--todo-hover-created' : ''}`}
                            aria-label={`Task created on ${hoveredDate ? hoveredDate.toLocaleDateString() : 'N/A'}`}
                            onMouseEnter={() => {
                                if (isValidDate) {
                                    handleMouseEnter(dateToCheck.toISOString())
                                }
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            {dayObj.day}
                        </div>
                    )
                })}
            </div>
        </div>
    )
})

export default CalendarBody;
