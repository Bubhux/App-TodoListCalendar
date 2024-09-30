// components/CalendarBody.jsx
import React, { memo } from 'react';
import { useDateHover } from './DateHoverContext.jsx';


/**
 * Composant pour afficher le corps du calendrier.
 * 
 * @param {Object[]} days - Liste des objets représentant les jours à afficher dans le calendrier.
 * @param {number|null} days[].day - Le numéro du jour du mois (1-31) ou null pour les jours non valides (espaces vides dans le calendrier).
 * @param {boolean} days[].isCurrentDate - Indique si le jour est la date courante.
 * @param {number} currentMonth - Le mois actuellement affiché dans le calendrier (0-11).
 * @param {number} currentYear - L'année actuellement affichée dans le calendrier.
 * @param {number} currentDay - Le jour courant à utiliser pour le marquage spécial (1-31).
 * 
 * @returns {JSX.Element} - Le composant affichant le corps du calendrier.
 */
const CalendarBody = memo(({ days, currentMonth, currentYear, currentDay }) => {
    const { hoveredDate } = useDateHover() // Récupère la date survolée à partir du contexte.
    const parsedHoveredDate = hoveredDate instanceof Date ? hoveredDate : new Date(hoveredDate) // Assure que hoveredDate est bien un objet Date.

    /**
     * Vérifie si une date doit être mise en surbrillance.
     * 
     * @param {Object} dayObj - Un objet représentant un jour spécifique.
     * @param {number} dayObj.day - Le numéro du jour à vérifier.
     * @returns {boolean} - Retourne true si le jour doit être mis en surbrillance, sinon false.
     */
    const isDateHighlighted = (dayObj) => {
        return parsedHoveredDate && 
               parsedHoveredDate.getDate() === dayObj.day &&
               parsedHoveredDate.getMonth() === currentMonth &&
               parsedHoveredDate.getFullYear() === currentYear
    }

    /**
     * Vérifie si un jour correspond au jour courant.
     * 
     * @param {number} day - Le numéro du jour à vérifier.
     * @returns {boolean} - Retourne true si le jour est le jour courant, sinon false.
     */
    const isCurrentDay = (day) => {
        return day === currentDay
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
                    // Gestion des jours vides (cases du calendrier sans date)
                    if (dayObj.day === null) {
                        return <div key={index} className="calendar__day"></div>
                    }

                    const isHighlighted = isDateHighlighted(dayObj) // Vérifie si le jour doit être surligné.
                    const isCurrent = isCurrentDay(dayObj.day) // Vérifie si c'est le jour courant.

                    // Affiche les logs pour chaque jour (utile pour le débogage)
                    //console.log(`Rendering day: ${dayObj.day}`)
                    //console.log(`Is Current Date: ${dayObj.isCurrentDate}`)
                    //console.log(`Is Highlighted: ${isHighlighted}`)
                    //console.log(`Is Current Day: ${isCurrent}`)

                    return (
                        <div
                            key={index}
                            className={`calendar__day 
                                        ${dayObj.isCurrentDate ? 'calendar__day--current-date' : ''} 
                                        ${isHighlighted ? 'calendar__day--todo-hover-created' : ''}`}
                            aria-label={`Task created on ${parsedHoveredDate ? parsedHoveredDate.toLocaleDateString() : 'N/A'}`}
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
