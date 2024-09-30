// components/DateTimeFormat.jsx
import React from 'react';
import useDateTime from '../hooks/useDateTime.js';


/**
 * Composant DateTimeFormat
 * 
 * Ce composant affiche la date et l'heure actuelles avec des styles dynamiques 
 * définis par les classes CSS passées en tant que props. Le composant utilise 
 * le hook `useDateTime` pour obtenir les valeurs formatées de la date et de l'heure.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} props.dateTimeFormatClass - Classe CSS pour le conteneur général de la date et l'heure.
 * @param {string} props.timeFormatClass - Classe CSS pour le format de l'heure.
 * @param {string} props.dateFormatClass - Classe CSS pour le format de la date.
 * @param {string} props.dayTextFormatClass - Classe CSS pour le format du texte affichant "Today".
 * 
 * @returns {JSX.Element} Le composant DateTimeFormat.
 */
const DateTimeFormat = ({ dateTimeFormatClass, timeFormatClass, dateFormatClass, dayTextFormatClass }) => {
    // Récupère la date et l'heure formatées à partir du hook `useDateTime`.
    const { currentDateFormatted, timeFormatted } = useDateTime()

    return (
        <div className={`calendar__date-time-format ${dateTimeFormatClass}`}>
            {/* Affiche le texte "Today" avec la classe CSS spécifiée */}
            <div className={`calendar__day-text-format ${dayTextFormatClass}`}>Today</div>
            
            {/* Conteneur pour l'affichage de la date et de l'heure */}
            <div className={`calendar__date-time-value ${dateTimeFormatClass}`}>
                {/* Affiche l'heure formatée avec la classe CSS spécifiée */}
                <div className={`calendar__time-format ${timeFormatClass}`}>{timeFormatted}</div>
                
                {/* Affiche la date formatée avec la classe CSS spécifiée */}
                <div className={`calendar__date-format ${dateFormatClass}`}>{currentDateFormatted}</div>
            </div>
        </div>
    )
}

export default DateTimeFormat;
