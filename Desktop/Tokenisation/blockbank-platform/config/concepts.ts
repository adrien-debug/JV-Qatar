type ConceptColor = "blue" | "purple" | "green";

export interface ConceptFlow {
  title: string;
  steps: string[];
  color: ConceptColor;
}

export const conceptFlows: ConceptFlow[] = [
  {
    title: "Flux de Tokenisation",
    steps: [
      "1. Création SPV",
      "2. Transfert des actifs",
      "3. Mint NFT Master",
      "4. Verrouillage Vault",
      "5. Émission ERC-20",
      "6. Distribution auto",
    ],
    color: "blue",
  },
  {
    title: "Structure Légale",
    steps: [
      "SPV = entité légale",
      "NFT = certificat digital",
      "Operating Agreement",
      "Registre on-chain",
      "KYC/AML compliance",
      "Optimisation fiscale",
    ],
    color: "purple",
  },
  {
    title: "Smart Contracts",
    steps: [
      "NFT ERC-721",
      "Vault Contract",
      "ERC-20 Shares",
      "Distribution auto",
      "Buyback/Burn",
      "Multi-sig Security",
    ],
    color: "green",
  },
];

