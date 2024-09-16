# 🧮 Calculator App

Une calculatrice web simple et efficace développée avec React.js. Cette application permet d'effectuer des opérations mathématiques de base ainsi que quelques fonctions avancées comme les pourcentages et les racines carrées. Son interface est moderne et réactive, offrant une expérience fluide à l'utilisateur.

## 🎨 Aperçu

L'application **Calculator** affiche un écran numérique où les utilisateurs peuvent entrer des expressions mathématiques, et propose une interface utilisateur complète avec les boutons pour les opérations standards (addition, soustraction, multiplication, division) ainsi que des fonctionnalités avancées.

![Calculator App Screenshot](https://github.com/bounyamine/calculator/blob/main/public/screenshots/screen.png)

## 🚀 Fonctionnalités

- Calcul des opérations mathématiques de base : addition, soustraction, multiplication, division.
- Fonctions avancées : pourcentage, inverse (1/x), carré, racine carrée.
- Gestion des erreurs avec un message `Error` si une opération invalide est entrée.
- Suppression d'une entrée avec le bouton CE et suppression du dernier caractère.
- Transition fluide entre les opérations et boutons désactivés si nécessaire.
- Fonctionnalités de changement de signe et de calcul des pourcentages.
- Gestion des parenthèses : support pour les expressions avec parenthèses, avec une gestion automatique des parenthèses ouvrantes et fermantes.
  
## 🛠️ Technologies

- **React.js** : pour la construction de l'interface utilisateur et la gestion des états.
- **CSS3** : pour le style et la mise en page.
- **Math.js** : pour l'évaluation des expressions mathématiques.

## 📦 Installation

1. **Cloner le projet :**

   ```bash
   git clone https://github.com/bounyamine/calculator.git
   cd calculator
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrer l'application :**

   ```bash
   npm start
   ```

4. **Accéder à l'application :**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📖 Utilisation

- Ouvrez l'application et commencez à entrer vos expressions mathématiques en utilisant les boutons fournis.
- Utilisez les fonctions avancées telles que le pourcentage (%) ou le carré (x²) pour effectuer des calculs plus complexes.
- Le bouton "=" calcule le résultat de votre expression.
- En cas d'erreur, l'affichage montre "Error" et revient à 0 après 2 secondes.

## 🗂 Structure du projet

```
/public
  index.html              # Page HTML principale
/src
  App.js                  # Composant principal de l'application
  App.css                 # Style de l'application principale
  index.js                # Point d'entrée de React
  index.css               # Style de tout les composants
```

## 🎥 Démo

Découvrez une démo en direct de l'application [ici](https://your-demo-url.com) !

## 🤝 Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer cette application ou ajouter de nouvelles fonctionnalités, suivez ces étapes :

1. Fork le projet.
2. Créez une nouvelle branche (`git checkout -b feature/new-feature`).
3. Committez vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez sur la branche (`git push origin feature/new-feature`).
5. Créez une Pull Request.

## 📄 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.
