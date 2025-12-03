type SectionColor = "purple" | "blue" | "green" | "orange";
type Category = "légal" | "mécanisme" | "code" | "analyse";

interface SectionCard {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: Category;
}

interface Section {
  title: string;
  subtitle: string;
  color: SectionColor;
  gridCols: string;
  cards: SectionCard[];
}

export const sectionsData: Section[] = [
  {
    title: "⚖️ Section Légale",
    subtitle: "Tous les aspects juridiques, compliance et cadres réglementaires",
    color: "purple",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
    cards: [
      {
        title: "LEGALBLOCK - Automatisation Juridique",
        description:
          "Plateforme complète d'automatisation juridique avec ADVISORBLOCK, génération automatique de documents et tokenisation",
        href: "/legalblock",
        icon: "🏛️",
        category: "légal",
      },
      {
        title: "Notes Juridiques UAE/USA",
        description:
          "Framework juridique complet pour RAK ICC (UAE) et Delaware LLC (USA), compliance, réglementations et meilleures pratiques",
        href: "/legal-notes",
        icon: "📜",
        category: "légal",
      },
      {
        title: "Structure SPV",
        description:
          "Création et fonctionnement des Special Purpose Vehicles, incorporation, transfert d'actifs et modifications de l'Operating Agreement",
        href: "/spv-structure",
        icon: "🏢",
        category: "légal",
      },
      {
        title: "Luxury Goods - Cadre Juridique",
        description:
          "Financement et tokenisation des biens de luxe avec Security Interest, Pledge Agreement et cadre juridique MENA/USA",
        href: "/luxury-goods",
        icon: "💎",
        category: "légal",
      },
    ],
  },
  {
    title: "⚙️ Section Mécanismes",
    subtitle: "Comment fonctionne la tokenisation : processus techniques et opérationnels",
    color: "blue",
    gridCols: "md:grid-cols-2 lg:grid-cols-3",
    cards: [
      {
        title: "NFT Master Ownership",
        description:
          "Comment un NFT ERC-721 représente 100% des parts SPV, mécanisme de transfert et registre on-chain",
        href: "/nft-master",
        icon: "🎫",
        category: "mécanisme",
      },
      {
        title: "Fractionalisation ERC-20",
        description:
          "Mécanisme de verrouillage du NFT Master, création de parts ERC-20, distribution automatique des revenus",
        href: "/fractionalization",
        icon: "💰",
        category: "mécanisme",
      },
      {
        title: "Flux Complet",
        description:
          "Visualisation du processus complet de tokenisation, du SPV aux parts ERC-20",
        href: "/templates",
        icon: "🔄",
        category: "mécanisme",
      },
    ],
  },
  {
    title: "💻 Section Smart Contracts",
    subtitle: "Code des contrats, architecture technique et implémentation",
    color: "green",
    gridCols: "md:grid-cols-2",
    cards: [
      {
        title: "Templates & Code",
        description:
          "Exemples de code, smart contracts, templates EJS et React pour l'implémentation",
        href: "/templates",
        icon: "⚡",
        category: "code",
      },
      {
        title: "Architecture Technique",
        description:
          "Structure des smart contracts, vault, distribution automatique et mécanismes de sécurité",
        href: "/fractionalization",
        icon: "🏗️",
        category: "code",
      },
    ],
  },
  {
    title: "📊 Section Analyse",
    subtitle: "Comparaisons, avantages, inconvénients et recommandations",
    color: "orange",
    gridCols: "md:grid-cols-1",
    cards: [
      {
        title: "Comparaison & Résumé Exécutif",
        description:
          "Comparaison détaillée des structures, avantages/inconvénients, roadmap d'implémentation et recommandations finales",
        href: "/comparison",
        icon: "📊",
        category: "analyse",
      },
    ],
  },
];

