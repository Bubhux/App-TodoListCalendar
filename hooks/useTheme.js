// hooks/useTheme.js
import { useState, useEffect } from "react";


/**
 * Hook personnalisé pour gérer le thème de l'application.
 *
 * @returns {Object} - Un objet contenant la valeur actuelle du thème et une fonction pour le changer.
 * @property {string} theme - Le thème actuel ('light' ou 'dark').
 * @property {Function} toggleTheme - Fonction pour basculer entre les thèmes clair et sombre.
 */
const useTheme = () => {
    /**
     * Fonction pour obtenir le thème préféré de l'utilisateur en fonction de ses paramètres système.
     * @returns {string} - Le thème préféré ('dark' ou 'light').
     */
    const getPreferredTheme = () => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return "dark"
        }
        return "light"
    }

    /**
     * Fonction pour initialiser le thème. Vérifie s'il y a un thème sauvegardé dans le stockage local,
     * sinon utilise le thème préféré de l'utilisateur et le sauvegarde.
     * @returns {string} - Le thème initial ('light' ou 'dark').
     */
    const initializeTheme = () => {
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme) {
            return savedTheme
        }
        const preferredTheme = getPreferredTheme()
        localStorage.setItem("theme", preferredTheme)
        return preferredTheme
    }

    // État du thème actuel
    const [theme, setTheme] = useState(initializeTheme)

    /**
     * Fonction pour basculer entre les thèmes clair et sombre.
     */
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    // Met à jour la classe du corps du document pour refléter le thème actuel
    useEffect(() => {
        document.body.className = theme
    }, [theme])

    // Retourne le thème actuel et la fonction pour le changer
    return { theme, toggleTheme }
}

export default useTheme;
