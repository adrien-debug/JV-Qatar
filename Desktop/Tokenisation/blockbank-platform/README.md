# BlockBank Platform

A comprehensive Next.js platform documenting and visualizing BlockBank's Real World Asset (RWA) tokenization structure.

## Overview

This platform provides complete documentation of how BlockBank tokenizes assets (mining equipment, real estate) through:

- **SPV Structures** (RAK ICC, UAE or Delaware LLC, USA)
- **NFT Master Ownership** (ERC-721 representing 100% of SPV shares)
- **ERC-20 Fractionalization** (Tradeable shares locked in Smart Contract Vault)
- **Legal Frameworks** (UAE and USA compliance documentation)
- **Interactive Visualizations** and Templates

## Features

- 🏢 SPV Structure documentation with interactive comparison
- 🎫 NFT Master Ownership explanation and metadata structure
- 💰 ERC-20 Fractionalization mechanics and distribution logic
- ⚡ Interactive templates and code examples
- ⚖️ Comprehensive legal notes for UAE and USA jurisdictions
- 📊 Executive summary and comparison dashboard

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd blockbank-platform
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
blockbank-platform/
├── app/
│   ├── page.tsx              # Home page
│   ├── spv-structure/        # SPV structure documentation
│   ├── nft-master/           # NFT Master Ownership
│   ├── fractionalization/    # ERC-20 Fractionalization
│   ├── templates/            # Interactive templates
│   ├── legal-notes/          # Legal framework documentation
│   └── comparison/           # Executive summary & comparison
├── components/
│   └── Navigation.tsx        # Main navigation component
└── ...
```

## Technology Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI components

## Pages

1. **Home** (`/`) - Overview and navigation
2. **SPV Structure** (`/spv-structure`) - SPV creation and legal framework
3. **NFT Master Ownership** (`/nft-master`) - Tokenization process
4. **ERC-20 Fractionalization** (`/fractionalization`) - Fractionalization mechanics
5. **Templates** (`/templates`) - Interactive visualizations and code examples
6. **Legal Notes** (`/legal-notes`) - UAE and USA legal frameworks
7. **Comparison** (`/comparison`) - Executive summary and analysis

## Documentation

Each page provides detailed explanations of:
- Process flows and mechanisms
- Legal considerations and compliance
- Technical architecture
- Code examples and templates
- Advantages and challenges

## License

Private project for BlockBank documentation.
