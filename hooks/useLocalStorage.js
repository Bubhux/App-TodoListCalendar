// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer un état synchronisé avec le localStorage.
 * 
 * @param {string} key - La clé sous laquelle les données sont stockées dans le localStorage.
 * @param {*} initialValue - La valeur initiale utilisée si aucune donnée n'est présente dans le localStorage.
 * @returns {[*, Function]} - Un tableau contenant la valeur stockée et une fonction pour mettre à jour cette valeur.
 */
const useLocalStorage = (key, initialValue) => {
    // État pour stocker la valeur, initialisé à partir du localStorage ou de la valeur initiale
    const [storedValue, setStoredValue] = useState(() => {
        // Récupère l'élément dans le localStorage
        const item = localStorage.getItem(key)
        // Parse l'élément JSON ou utilise la valeur initiale
        return item ? JSON.parse(item) : initialValue
    })

    // Effet pour mettre à jour le localStorage chaque fois que la clé ou la valeur stockée change
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue])

    // Retourne la valeur stockée et la fonction de mise à jour
    return [storedValue, setStoredValue]
}

export default useLocalStorage;
