# Qatar 100MW Hydro Mining Visualization

Application Next.js interactive pour visualiser l'architecture électrique d'une installation de minage Bitcoin de 100 MW refroidie par hydroélectricité près de l'aéroport de Doha, connectée à un poste de transformation Kahramaa existant.

## 🎨 Design System

Ce projet utilise les tokens de design HEARST AI pour garantir une cohérence visuelle à travers toute l'application.

### Tokens disponibles

- **Couleurs** : Primaires, secondaires, backgrounds, text, system, graphics
- **Typographie** : Tailles, poids, hauteurs de ligne, espacements de lettres
- **Espacements** : Système d'espacement de 0 à 10
- **Bordures** : Thin, medium, thick avec états hover et active
- **Rayons** : Flat, small, default, section, rounded, full
- **Ombres** : Small à 2xl, avec effets glow
- **Transitions** : Fast, base, slow, bounce avec différentes courbes d'animation
- **Dégradés** : Primary, accent, subtle, overlay, glass
- **Layout** : Sidebar, header, content avec breakpoints responsive

## 🚀 Démarrage

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

L'application sera accessible sur [http://localhost:8888](http://localhost:8888)

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx         # Layout racine Next.js
│   ├── page.tsx           # Page 1 - Vue globale
│   └── blocks/
│       └── [id]/
│           └── page.tsx   # Page 2 - Vue détaillée d'un bloc
├── components/
│   ├── GridOverview.tsx       # Diagramme de l'architecture globale
│   ├── BlocksSummary.tsx      # Cartes résumé des blocs
│   ├── GlobalInfoPanel.tsx    # Panneau d'infos globales
│   ├── BlockHeader.tsx        # En-tête de la page bloc
│   ├── BlockDiagram.tsx       # Diagramme interactif d'un bloc
│   ├── BlockDetailPanel.tsx   # Panneau de détails
│   ├── TransformerNode.tsx    # Composant transformateur
│   └── ContainerNode.tsx      # Composant conteneur
├── lib/
│   ├── types.ts          # Interfaces TypeScript
│   └── siteConfig.ts     # Configuration du site et génération des données
├── tokens/
│   └── index.ts          # Tokens TypeScript consolidés
└── styles/
    ├── tokens.css         # Variables CSS des tokens
    └── global.css        # Styles globaux
```

## 🎯 Utilisation des tokens

### En TypeScript/React

```typescript
import { tokens } from '@tokens'

const MyComponent = () => {
  return (
    <div style={{
      backgroundColor: tokens.colors.backgrounds.bgPrimary,
      padding: tokens.spacing[6],
      borderRadius: tokens.radius.default,
      color: tokens.colors.text.primary
    }}>
      Contenu
    </div>
  )
}
```

### En CSS

```css
.my-component {
  background-color: var(--color-bg-primary);
  padding: var(--spacing-6);
  border-radius: var(--radius-default);
  color: var(--color-text-primary);
}
```

## 📚 Documentation des tokens

### Couleurs principales

- **Hearst Green** : `#8afd81` - Couleur primaire de la marque
- **Hearst Green Dark** : `#6fdc66` - Variante sombre
- **Hearst Green Light** : `#a5ff9c` - Variante claire

### Backgrounds

- **bg-primary** : `#0a0a0a` - Fond principal
- **bg-secondary** : `#1a1a1a` - Fond secondaire
- **bg-tertiary** : `#242424` - Fond tertiaire

### Typographie

- **Font Family** : FK Grotesk Trial (fallback: system fonts)
- **Tailles** : xs (0.75rem) à display (52px)
- **Poids** : normal (400) à bold (700)

## 🎯 Fonctionnalités

### Page 1 - Vue Globale (`/`)

- **Diagramme d'architecture** : Visualisation du flux électrique depuis le réseau Kahramaa jusqu'aux 4 blocs
- **Cartes de résumé** : Vue d'ensemble de chaque bloc avec puissance, transformateurs et conteneurs
- **Panneau d'informations** : Détails sur le site, spécifications des conteneurs, connexion réseau

### Page 2 - Vue Détaillée d'un Bloc (`/blocks/[id]`)

- **Sélecteur de blocs** : Navigation entre les 4 blocs via onglets
- **Diagramme interactif** : Visualisation des 8 transformateurs et 16 conteneurs par bloc
- **Interactions hover/click** : 
  - Survol pour mettre en évidence les connexions
  - Clic pour afficher les détails dans le panneau latéral
- **Panneau de détails** : Informations complètes sur le transformateur ou conteneur sélectionné

## 🔧 Technologies

- **Next.js 14** : Framework React avec App Router
- **React 18** : Bibliothèque UI
- **TypeScript** : Typage statique
- **CSS Variables** : Tokens CSS natifs (Design System HEARST AI)

## 📊 Architecture Électrique

- **Réseau** : Kahramaa 132 kV
- **Poste de transformation** : 132/33 kV (existant)
- **Distribution interne** : 33 kV
- **4 blocs** : ~25.6 MW chacun
- **32 transformateurs** : 3.75 MVA, 33/0.4 kV
- **64 conteneurs** : Bitmain ANTSPACE HD5 (Hydro), 1.6 MW chacun

## 📝 Notes

Tous les composants et styles utilisent les tokens définis dans `src/tokens/index.ts` ou les variables CSS dans `src/styles/tokens.css` pour maintenir la cohérence du design system HEARST AI.

