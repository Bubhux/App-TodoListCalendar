// components/CalendarBody.jsx
import React from 'react';


/**
 * Composant pour afficher le corps du calendrier.
 * 
 * @param {Object[]} days - Liste des jours à afficher dans le calendrier.
 * @param {number} days[].day - Le numéro du jour du mois.
 * @param {boolean} days[].isCurrentDate - Indique si le jour est la date courante.
 * 
 * @returns {JSX.Element} - Le composant affichant le corps du calendrier.
 */
const CalendarBody = ({ days }) => (
    <div className="calendar__body reveal-3">
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
            {days.map((dayObj, index) => (
                <div
                    key={index}
                    className={`calendar__day ${dayObj.isCurrentDate ? 'calendar__day--current-date' : ''}`}
                >
                    {dayObj.day}
                </div>
            ))}
        </div>
    </div>
)

export default CalendarBody;
