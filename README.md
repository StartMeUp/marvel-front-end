This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Marvel - test technique

voir le résultat: https://marvel-smu.netlify.app/

voir le backend : https://github.com/StartMeUp/marvel-backend

Objectifs de l'exercice:
- Créez un site en React (avec un routeur) qui contiendra en haut : le logo MARVEL et un menu (personnages, comics, favoris).
- Sur la page principale « personnages », vous devrez faire apparaître la liste des personnages MARVEL, par ordre alphabétique (100 par page), sous forme de fiche (photo, nom, description). En cliquant sur chaque fiche, il devra être possible d’accéder à une page regroupant les comics liés au personnage.
- Sur la page « comics », vous devrez faire apparaître la liste des comics MARVEL, par ordre alphabétique, sous forme de fiche (photo, titre, description).
- Vous intégrerez également un moteur de recherche, afin de rechercher par nom/titre. Une barre de recherche pour la page « comics », une autre pour la page « personnages ». Vous prendrez également soin d’ajouter un système de pagination à chaque page.
- Pour les pages « personnages » et « comics », vous devrez créer un système permettant de mettre chaque fiche en favoris, en fonction des souhaits de l’utilisateur. Vous devrez conserver ces favoris dans la mémoire locale du navigateur (Cookies ou Local Storage) de l’utilisateur.
- Toutes vos requêtes vers l’API MARVEL devront se faire depuis votre serveur et non depuis le navigateur. Les clés API ne devront pas être exposées publiquement.
- Vous hébergerez votre frontend sur Netlify et votre backend sur Heroku.
