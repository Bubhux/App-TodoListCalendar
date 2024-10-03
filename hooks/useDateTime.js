// hooks/useDateTime.js
import { useState, useEffect } from 'react';


/**
 * Hook personnalisé pour gérer et formater la date et l'heure actuelles.
 *
 * @returns {Object} Un objet contenant les propriétés suivantes :
 * - `currentDateFormatted` {string} : La date actuelle formatée sous forme de chaîne.
 * - `timeFormatted` {string} : L'heure actuelle formatée sous forme de chaîne.
 */
const useDateTime = () => {
    // État pour stocker la date formatée actuelle
    const [currentDateFormatted, setCurrentDateFormatted] = useState('')
    // État pour stocker l'heure formatée actuelle
    const [timeFormatted, setTimeFormatted] = useState('')

    useEffect(() => {
        /**
         * Met à jour la date et l'heure formatées.
         */
        const updateDateTime = () => {
            const now = new Date()

            // Options pour le formatage de la date
            const dateOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            }

            // Options pour le formatage de l'heure
            const timeOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }

            // Mise à jour de la date formatée
            setCurrentDateFormatted(now.toLocaleDateString('eng-US', dateOptions))
            // Mise à jour de l'heure formatée
            setTimeFormatted(now.toLocaleTimeString('eng-US', timeOptions))
        }

        // Appel initial pour définir les valeurs immédiatement
        updateDateTime()

        // Mise à jour chaque seconde
        const intervalId = setInterval(updateDateTime, 5000)

        // Nettoyage : suppression de l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId)
    }, []) // Le tableau de dépendances est vide pour exécuter l'effet uniquement au montage

    return {
        currentDateFormatted,
        timeFormatted
    }
}

export default useDateTime;
