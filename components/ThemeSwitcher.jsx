// components/ThemeSwitcher.jsx
import React from "react";
import useTheme from "../hooks/useTheme.js";


/**
 * Composant ThemeSwitcher permettant de basculer entre les thèmes clair et sombre.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} [props.invertedIconLogic=false] - Si vrai, l'icône est inversée par rapport à l'état du thème.
 * @returns {JSX.Element} Le composant ThemeSwitcher.
 */
const ThemeSwitcher = ({ invertedIconLogic = false }) => {
    // Récupération du thème actuel et de la fonction pour basculer le thème
    const { theme, toggleTheme } = useTheme()
    
    // Détermine si le thème actuel est sombre
    const isDark = theme === "dark"

    return (
        <label className={`theme__container ${isDark ? "IsDark" : "IsLight"}`}>
            {/* Case à cocher pour changer le thème */}
            <input
                type="checkbox"
                // La case est cochée en fonction de l'état du thème et de la logique inversée des icônes
                defaultChecked={invertedIconLogic ? !isDark : isDark}
                // Fonction appelée lorsque l'état de la case change
                onChange={toggleTheme}
            />
            <div />
        </label>
    )
}

export default ThemeSwitcher;
