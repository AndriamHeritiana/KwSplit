# KwSplit - Gestion de Consommation Électrique

## À propos du projet

KwSplit est une application mobile développée avec React Native qui permet de suivre, calculer et enregistrer la consommation électrique de deux maisons :
- **Maison 1** : connectée directement au fournisseur JIRAMA, avec une consommation mesurée par un compteur principal.
- **Maison 2** : alimentée à partir de la Maison 1, avec une consommation mesurée par un sous-compteur.

L'application calcule automatiquement la répartition des coûts entre les deux maisons selon une règle de trois :
```
Montant Maison 2 = Prix JIRAMA total × (valeur sous-compteur ÷ valeur compteur principal)
```

## Architecture

Ce projet est structuré selon les principes de la Clean Architecture, qui sépare le code en couches distinctes avec des responsabilités claires :

### 1. Core (Cœur de l'application)

#### Domain (Domaine)
Contient les règles métier et les entités principales de l'application :

- **Entities** : Modèles de données fondamentaux
  - `Reading.ts` : Représente un relevé de compteur
  - `House.ts` : Représente une maison
  - `Consumption.ts` : Représente une consommation électrique

- **Repositories** : Interfaces définissant comment accéder aux données
  - `ReadingRepository.ts` : Interface pour la gestion des relevés

- **Usecases** : Cas d'utilisation de l'application
  - `AddReadingUseCase.ts` : Ajouter un nouveau relevé
  - `GetHistoryUseCase.ts` : Récupérer l'historique des relevés
  - `CalculateConsumptionUseCase.ts` : Calculer la consommation
  - `GetAlertsUseCase.ts` : Obtenir les alertes de consommation

#### Data (Données)
Implémente les interfaces du domaine et gère l'accès aux données :

- **Repositories** : Implémentations concrètes des interfaces du domaine
  - `ReadingRepositoryImpl.ts` : Implémentation du repository de relevés

- **Datasources** : Sources de données
  - `LocalDataSource.ts` : Stockage local (AsyncStorage)
  - `RemoteDataSource.ts` : Stockage distant (Firebase)

- **Services** : Services spécifiques
  - `OcrService.ts` : Interface pour la reconnaissance optique de caractères

#### Utils (Utilitaires)
Fonctions et classes utilitaires :
  - `DateUtils.ts` : Fonctions de manipulation de dates
  - `ConsumptionCalculator.ts` : Calculs liés à la consommation

### 2. Presentation (Présentation)

#### Screens (Écrans)
Écrans principaux de l'application :
  - `HomeScreen.tsx` : Écran d'accueil
  - `ReadingInputScreen.tsx` : Saisie des relevés
  - `HistoryScreen.tsx` : Historique des consommations
  - `ScanScreen.tsx` : Scan des compteurs (OCR)

#### Components (Composants)
Composants réutilisables :

- **UI** : Composants d'interface utilisateur de base
  - `Button.tsx` : Bouton personnalisé
  - `Card.tsx` : Carte pour afficher des informations
  - `DatePicker.tsx` : Sélecteur de date
  - `Input.tsx` : Champ de saisie

- **Composants spécifiques**
  - `ReadingForm.tsx` : Formulaire de saisie des relevés
  - `ConsumptionChart.tsx` : Graphiques de consommation
  - `ReadingHistoryItem.tsx` : Élément d'historique
  - `AlertNotification.tsx` : Notification d'alerte

#### Navigation
Gestion de la navigation entre les écrans :
  - `AppNavigator.tsx` : Configuration des routes

#### State (État)
Gestion de l'état de l'application :

- **Redux**
  - `store.ts` : Configuration du store Redux
  - **Slices**
    - `readingsSlice.ts` : Gestion de l'état des relevés
    - `alertsSlice.ts` : Gestion de l'état des alertes
  - **Selectors**
    - `readingsSelectors.ts` : Sélecteurs pour les relevés
    - `alertsSelectors.ts` : Sélecteurs pour les alertes

- **Context**
  - `ThemeContext.tsx` : Gestion du thème de l'application

### 3. Infrastructure

#### Storage (Stockage)
Services de stockage :
  - `AsyncStorageService.ts` : Stockage local
  - `FirebaseService.ts` : Stockage cloud

#### API
Communication avec les services externes :
  - `ApiClient.ts` : Client API

#### Services
Implémentations de services :
  - `OcrServiceImpl.ts` : Implémentation du service OCR

## Fonctionnalités principales

- Saisie manuelle des relevés de compteurs
- Calcul automatique de la répartition des coûts
- Historique des consommations avec visualisation graphique
- Scan OCR des compteurs (fonctionnalité avancée)
- Alertes de consommation anormale
- Stockage local et synchronisation cloud (optionnel)

## Technologies utilisées

- **React Native** : Framework de développement mobile
- **Expo** : Plateforme de développement React Native
- **Redux** : Gestion de l'état global
- **AsyncStorage** : Stockage local
- **Firebase** (optionnel) : Backend et stockage cloud
- **Tesseract.js/ML Kit** : OCR pour la lecture des compteurs

## Installation et démarrage

1. Cloner le dépôt
```bash
git clone https://github.com/AndriamHeritiana/KwSplit.git
cd KwSplit
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer l'application
```bash
npx expo start
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.
