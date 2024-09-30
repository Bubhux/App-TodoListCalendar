// components/ScrollAnimation.jsx
import { useEffect } from 'react';


/**
 * Composant ScrollAnimation qui gère l'animation de défilement.
 * Ce composant utilise l'Intersection Observer API pour révéler 
 * des éléments au fur et à mesure qu'ils entrent dans le champ de vision.
 * 
 * @component
 */
const ScrollAnimation = () => {
    useEffect(() => {
        // Ratio d'intersection nécessaire pour déclencher l'animation
        const ratio = 0.1

        // Options pour l'observateur d'intersection
        const options = {
            root: null, // La zone racine pour l'observation, null signifie la fenêtre
            rootMargin: '0px', // Marge autour de la zone racine
            threshold: ratio // Seuil d'intersection
        }

        /**
         * Gère les intersections des éléments observés.
         * Révèle l'élément en supprimant la classe 'reveal' lorsqu'il est visible
         * au-delà du seuil défini.
         * 
         * @param {IntersectionObserverEntry[]} entries - Les entrées observées
         * @param {IntersectionObserver} observer - L'observateur d'intersection
         */
        const handleIntersect = function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.remove('reveal') // Révèle l'élément
                    observer.unobserve(entry.target) // Arrête d'observer l'élément
                }
            })
        }

        // Création de l'observateur avec la fonction de rappel et les options définies
        const observer = new IntersectionObserver(handleIntersect, options)

        // Sélectionne tous les éléments avec la classe 'reveal' et les observe
        document.querySelectorAll('.reveal').forEach(function (r) {
            observer.observe(r)
        })

        // Ajoute la classe 'reveal__loaded' à l'élément racine du document
        document.documentElement.classList.add('reveal__loaded')

        // Nettoyage : déconnexion de l'observateur lorsque le composant est démonté
        return () => {
            observer.disconnect()
        }
    }, [])

    return null // Ce composant ne rend rien
}

export default ScrollAnimation
