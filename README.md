# Projet App Mobile

## Nom et Description du projet

**Nom du projet :** Plant

**Description :** PlantApp est une application mobile développée avec React Native qui permet aux utilisateurs de découvrir et d'explorer une vaste collection de plantes. L'application utilise l'API Trefle pour récupérer des informations détaillées sur les plantes, y compris leurs noms communs, familles, genres et images.

## Technologies utilisées

- **React Native**
- **Axios**
- **react-native-config**
- **Trefle API**

## Fonctionnalités principales

- **Écran d'accueil (HomeScreen)** : Page d'accueil avec un bouton pour naviguer vers la liste des plantes.
- **Liste des plantes (PlantScreen)** : Affiche une liste de plantes avec des informations de base et permet de charger plus de plantes.
- **Détails des plantes (PlantDetailScreen)** : Affiche des informations détaillées sur une plante sélectionnée.

## API utilisée

L'application utilise l'API Trefle pour récupérer les informations sur les plantes. Les détails de l'API sont configurés via des variables d'environnement dans un fichier `.env`.

- **URL de l'API** : `https://trefle.io/api/v1/plants`
- **Clé API** : Stockée dans le fichier `.env` sous la variable `TREFLE_API_KEY`.

## Instructions d'installation et de lancement

### Prérequis

- Node.js
- npm ou yarn
- React Native

### Installation

1. Clonez le dépôt du projet :

    ```bash
    git clone https://github.com/votre-utilisateur/plantapp.git
    cd plantapp
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Configurez les variables d'environnement :

    Créez un fichier `.env` à la racine du projet et ajoutez-y vos variables d'environnement :

    ```
    TREFLE_API_KEY=votre_cle_api
    TREFLE_API_URL=https://trefle.io/api/v1/plants
    ```

### Lancement

Pour lancer l'application sur un émulateur Android ou iOS :

```bash
npm run android
```

### Capture d'écran

<img src="https://i.ibb.co/v4QVTsgP/1000006678.jpg" alt="1000006678" border="0" width=200>
<img src="https://i.ibb.co/1ty85dYS/1000006679.jpg" alt="1000006679" border="0" width=200>
<img src="https://i.ibb.co/Df8kZPCh/1000006680.jpg" alt="1000006680" border="0" width=200>