![Static Badge](/static/badges/Use-JavaScript.svg)   

![Static Badge](/static/badges/React.svg)   
![Static Badge](/static/badges/Vitejs.svg)   
![Static Badge](/static/badges/Vite.svg)   

![Static Badge](/static/badges/Use-Bootstrap.svg)   
![Static Badge](/static/badges/SASS.svg)   

<div id="top"></div>

## Menu   

1. **[Informations générales](#informations-générales)**   
2. **[Liste pré-requis](#liste-pre-requis)**   
3. **[Lancement de l'application](#lancement-application)**   
4. **[Interface de l'application](#interface-application)**   
5. **[Vidéo de démonstration de l'application](#vidéo-application)**   
6. **[Accéder à la démonstration en ligne](#lien-application)**   
7. **[Modification front-end et back-end](#modification-application)**   
8. **[Informations importantes sur les différents fichiers et dossiers](#informations-importantes)**   
9. **[Auteur et contact](#auteur-contact)**   

### Projet ToDo List Application Calendar

- Développement d'une interface web pour une application de to-do list avec un calendrier.   
- Utilisation de **React** et de **JavaScript**.   
- Utilisation de **SASS** et de **Bootstrap**.   
- Utilisation de **Local Storage** pour la sauvegarde des données.   
  &nbsp;   

- Fonctinnalitées de l'application.   

    - ``Création`` : Création de notes.   
    - ``Suppression`` : Suppression de notes.   
    - ``Filtres`` : Pour les tâches ``All``, ``Do to``, ``Completed``.   
    - ``Calendrier`` : L'heure et la date du jour actuel et mis en évidence, possibilité de choisir le mois et l'année.   
    - ``Option`` : Le survol des notes affiche leurs dates de création sur le calendrier.   
    - ``Thème`` : Bouton permettant le changement de thème **Light** ou **Dark**.   

--------------------------------------------------------------------------------------------------------------------------------

<div id="liste-pre-requis"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Liste pré-requis   

- Aucun pré-requis n'est nécessaire.   

- Application conçue avec les technologies suivantes :   
  &nbsp;   

  - **React** ``v18.3.1`` ➔ [Documentation React](https://fr.react.dev/)   
  - **Vitejs** ``v4.3.1`` ➔ [Documentation Vitejs](https://vitejs.dev/)   
  - **Node.js** ``v.20.9.0`` ➔ [Documentation Node.js](https://nodejs.org/fr)   
  - **Npm** ``v10.8.1`` ➔ [Documentation et téléchargement de Npm](https://www.npmjs.com/)   
  - **SASS** ``v1.77.8`` ➔ [Documentation SASS](https://sass-lang.com/)   
  - **Bootstrap** ``v5.3.3`` ➔ [Documentation Bootstrap](https://getbootstrap.com/)   
  - **VSCode** ``v1.85.2`` ➔ [Documentation et téléchargement de VSCode](https://code.visualstudio.com/)   
  - **Chrome** ``v.126.0.6478.114`` & **Firefox** ``v.127.0``   
  - **Vite** ``v5.3.1``    
  - **Windows 10** ``Professionnel``   

--------------------------------------------------------------------------------------------------------------------------------

<div id="lancement-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Lancement de l'application   

- Pour lancer l'application.   

- Se rendre dans le dossier principal est lancer le fichier ``index.html`` ➔ ([index.html](index.html))   

>_**Note navigateur :** Les tests ont était fait sur **Firefox** et **Google Chrome**._  

--------------------------------------------------------------------------------------------------------------------------------

<div id="interface-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Interface de l'application   

- L'application est exécutée dans une page web.   

![interface application](/static/img/screen_application.png)   

--------------------------------------------------------------------------------------------------------------------------------

<div id="vidéo-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Démonstration de l'application   

- Vidéo de démonstration de l'application.   

![démonstration application](/static/video/demo_application.gif)   

--------------------------------------------------------------------------------------------------------------------------------

<div id="lien-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Accéder à la démonstration en ligne   

- Vous pouvez accéder à une démonstration de l'application via **GitHub Pages**.   
- En utilisant le lien suivant ➔ [Lien de l'application en ligne](https://bubhux.github.io/App-TodoListCalendar/)   

--------------------------------------------------------------------------------------------------------------------------------

<div id="modification-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Modification front-end et back-end   

- Si vous souhaitez modifier les parties front-end et back-end de l'application, il faudra installer les outils de développements suivants.   

#### 1. Installer *Node.js* (inclut *npm*)   

  - Si **Node.js** n'est pas encore installé sur votre machine, il peut être téléchargé ici ➔ [Téléchargement Node.js](https://nodejs.org/fr)   
  - Cela installera :   
    - À la fois les dépendances de production (comme **react** et **react-dom**)   
    - Et les dépendances de développement (comme **Vite**, **SASS**, etc.)   
  &nbsp;   

#### 2. Installer les dépendances   

  - Dans un terminal exécuter la commande suivante dans le répertoire du projet.   
  - Cela installera toutes les dépendances spécifiées dans le fichier ``package.json`` ➔ ([package.json](package.json)).   

```bash   
$ npm install
```   

- Pour lancer le projet en mode développement.   
- Cela permettra d'accéder a la page ➔ http://localhost:5173/   

```bash
$ npm run dev
```   

- En cas de problème utiliser la commande suivante pour construire le projet.   

```bash
$ npm run build
```   

- Pour prévisualiser le build.   

```bash
$ npm run preview
```   
&nbsp;   

#### 3. Pour modifier la partie front-end il faudra utiliser *SASS*.   

  - Dans un terminal exécuter la commande suivante dans le répertoire du projet.   
  - Une fois le serveur **SASS** lancer vous pouvez modifier les styles **CSS** dans le dossier ``sass`` ➔ ([sass](sass))   

```bash   
$ sass --watch sass/main.scss:src/index.css
```   
&nbsp;   

>_**Note : Pour que les changements de style CSS fonctionne, modifier le script appelé dans le fichier index.html** ➔ ([index.html](index.html))_   

- Modifier le fichier ``index.html`` de la manière suivante remplacer.   

```html   
<script src="dist/bundle.js"></script>
```   

- En effectuant la modification suivante.   

```html   
<script type="module" src="/src/main.jsx"></script>
```   
&nbsp;   

#### 4. Sauvegarder les modifications avec *Wepack*.   

- Dans un terminal exécuter la commande suivante dans le répertoire du projet.    

```bash   
$ npx webpack --config webpack.config.js
```   
- Pour utiliser le nouveau build avec les nouvelles modifications, modifier le lien du script dans le fichier ``index.html``.   

```html   
<script src="dist/bundle.js"></script>
```   

--------------------------------------------------------------------------------------------------------------------------------

<div id="informations-importantes"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Informations importantes sur les différents fichiers et dossiers   

#### Les dossiers components, hook, sass   

  - Chacun contient les fichiers contenant les configurations pour l'application.   

    - ``components`` ➔ ([components](components))   
    - ``hook`` ➔ ([hooks](hooks))   
    - ``sass`` ➔ ([sass](sass))    
    - ``src`` ➔ ([src](src))    

#### Le dossier components   

  - Le dossier contient les composants **React**.   

    - ``Calendar.jsx`` ➔ ([Calendar.jsx](/components/Calendar.jsx))   
    - ``CalendarBody.jsx`` ➔ ([CalendarBody.jsx](/components/CalendarBody.jsx))   
    - ``CalendarHeader.jsx`` ➔ ([CalendarHeader.jsx](/components/CalendarHeader.jsx))   
    - ``DateHoverContext.jsx`` ➔ ([DateHoverContext.jsx](/components/DateHoverContext.jsx))   
    - ``DateTimeFormat.jsx`` ➔ ([DateTimeFormat.jsx](/components/DateTimeFormat.jsx))   
    - ``ScrollAnimation.jsx`` ➔ ([ScrollAnimation.jsx](/components/ScrollAnimation.jsx))   
    - ``TodoItem.jsx`` ➔ ([TodoItem.jsx](/components/TodoItem.jsx))   
    - ``TodoList.jsx`` ➔ ([TodoList.jsx](/components/TodoList.jsx))   

#### Le dossier hooks   

  - Le dossier contient les hooks pour les composants **React**.   

    - ``useCalendar.js`` ➔ ([useCalendar.js](/hooks/useCalendar.js))   
    - ``useDateTime.js`` ➔ ([useDateTime.js](/hooks/useDateTime.js))   
    - ``useHoverCalendarDate.js`` ➔ ([useHoverCalendarDate.js](/hooks/useHoverCalendarDate.js))   
    - ``useLocalStorage.js`` ➔ ([useLocalStorage.js](/hooks/useLocalStorage.js))   
    - ``useSyncTodoWithCalendar.js`` ➔ ([useSyncTodoWithCalendar.js](/hooks/useSyncTodoWithCalendar.js))   
    - ``useTodos.js`` ➔ ([useTodos.js](/hooks/useTodos.js))   

#### Le dossier sass   

  - Le dossier contient les dossiers et fichiers nécessaires pour la partie front-end avec **SASS**.   

    - Dossier **base**
        - ``_base.scss`` ➔ ([_base.scss](/sass/base/_base.scss))   
        - ``_fonts.scss`` ➔ ([_fonts.scss](/sass/base/_fonts.scss))   
        - ``_variables.scss`` ➔ ([_variables.scss](/sass/base/_variables.scss))   
        &nbsp;

    - Dossier **components**
        - ``_buttons.scss`` ➔ ([_buttons.scss](/sass/components/_buttons.scss))   
        - ``_calendar-month-body.scss`` ➔ ([_calendar-month-body.scss](/sass/components/_calendar-month-body.scss))   
        - ``_calendar-month-header.scss`` ➔ ([_calendar-month-header.scss](/sass/components/_calendar-month-header.scss))   
        - ``_calendar-time-date.scss`` ➔ ([_calendar-time-date.scss](/sass/components/_calendar-time-date.scss))   
        - ``_theme-switcher.scss`` ➔ ([_theme-switcher.scss](/sass/components/_theme-switcher.scss))   
        - ``_todo-list-group.scss`` ➔ ([_todo-list-group.scss](/sass/components/_todo-list-group.scss))   
        &nbsp;

    - Dossier **layout**
        - ``_app-container.scss`` ➔ ([_app-container.scss](/sass/layout/_app-container.scss))   
        - ``_logo-container.scss`` ➔ ([_logo-container.scss](/sass/layout/_logo-container.scss))   
        - ``_todo-calendar-container.scss`` ➔ ([_todo-calendar-container.scss](/sass/layout/_todo-calendar-container.scss))   
        &nbsp;

    - Dossier **utils**
        - ``_animations.scss`` ➔ ([_animations.scss](/sass/utils/_animations.scss))   
        - ``_mixins.scss`` ➔ ([_mixins.scss](/sass/utils/_mixins.scss))    
        - ``_reveal.scss`` ➔ ([_reveal.scss](/sass/utils/_reveal.scss))    
        &nbsp;

    - Le fichier **main.scss** regroupe les imports pour **SASS**   
        - ``main.scss`` ➔ ([main.scss](/sass/main.scss))  

#### Le dossier static

  - Dossier qui contient les polices, les images nécessaires pour l'application, les badges et la vidéo nécessaires pour le **README.md**.   

      - ``static`` ➔ ([badges](/static/badges))   
      - ``static`` ➔ ([fonts](/static/fonts))   
      - ``static`` ➔ ([img](/static/img))   
      - ``static`` ➔ ([video](/static/video))   

--------------------------------------------------------------------------------------------------------------------------------

<div id="auteur-contact"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Auteur et contact   

Pour toute information supplémentaire, vous pouvez me contacter.   
**Bubhux:** bubhuxpaindepice@gmail.com   
