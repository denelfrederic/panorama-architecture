# Site de suivi Panorama Architecture

Site de suivi de projet pour Panorama Architecture, inspiré de la structure du site Cactus Mentor Indigo, avec une charte graphique noir et blanc sobre basée sur Shadcn UI.

## Stack technique

- **Vite** - Build tool
- **React** - Framework UI
- **TypeScript** - Typage statique
- **Shadcn UI** - Composants UI
- **Tailwind CSS** - Styling
- **Radix UI** - Primitives UI accessibles

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Structure du projet

```
src/
├── components/
│   ├── ui/              # Composants Shadcn
│   ├── Header.tsx       # Header avec date, titre, liens
│   ├── KPICards.tsx     # Cartes de métriques
│   ├── TabsSection.tsx  # Section avec onglets
│   └── TabContent/      # Contenu de chaque onglet
├── data/
│   └── content.ts       # Données de contenu structurées
├── lib/
│   └── utils.ts         # Utilitaires
├── App.tsx
└── main.tsx
```

## Charte graphique

- **Couleurs** : Palette noir et blanc sobre
- **Typographie** : Serif (Playfair Display) pour les titres, Sans-serif (Inter) pour le corps
- **Style** : Design sobre et minimaliste

## Contenu

Le site présente :
- Vue d'ensemble du projet
- Timeline du plan d'action
- Compte rendu du 14 janvier 2026
- Devis et proposition d'accompagnement
- Bénéfices et cas d'usage
- Processus d'optimisation (8 processus détaillés)
