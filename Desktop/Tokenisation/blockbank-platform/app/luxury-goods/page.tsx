"use client";

import { useState } from "react";

export default function LuxuryGoodsPage() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<"uae" | "usa">("uae");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          BlockBank – Tokenisation & Financement des Luxury Goods
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Plateforme complète pour l'achat, le financement et la tokenisation
          de biens de luxe (montres, sacs Hermès, bijoux, objets de collection)
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="mb-8 flex flex-wrap gap-4">
        <a
          href="#scenario"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          📱 Scénario Client
        </a>
        <a
          href="#juridique"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          ⚖️ Montage Juridique
        </a>
        <a
          href="#securisation"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          🔐 Sécurisation
        </a>
        <a
          href="#onchain"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          💎 Modèle On-Chain
        </a>
        <a
          href="#legal"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
        >
          ⚖️ Note Juridique
        </a>
      </div>

      {/* PARTIE 1: Scénario Client */}
      <section id="scenario" className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            🎯 PARTIE 1 — Scénario du Client
          </h2>
          <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
            Comment BlockBank permet à un client d'acheter un bien de luxe avec
            un apport de 25% et un financement de 75%
          </p>
        </div>

        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Le Parcours d'Achat
          </h3>
          <div className="space-y-6">
            <ScenarioStep
              number={1}
              title="Sélection du Bien de Luxe"
              description="Le client choisit un bien de luxe parmi les catégories disponibles"
              details={[
                "Montres de prestige : Rolex, Patek Philippe, Audemars Piguet",
                "Sacs Hermès : Birkin, Kelly, Constance",
                "Bijoux : Cartier, Tiffany, Van Cleef & Arpels",
                "Objets de collection : Art, voitures de collection, vins",
              ]}
              icon="💎"
            />
            <ScenarioStep
              number={2}
              title="Évaluation & Authentification"
              description="BlockBank procède à une évaluation professionnelle du bien"
              details={[
                "Expertise par des professionnels certifiés",
                "Vérification de l'authenticité et de la provenance",
                "Vérification du numéro de série",
                "Estimation de la valeur marchande",
              ]}
              icon="🔍"
            />
            <ScenarioStep
              number={3}
              title="Financement 25% / 75%"
              description="Le client apporte 25% du prix d'achat, BlockBank finance les 75% restants"
              details={[
                "Client verse 25% d'apport personnel",
                "BlockBank prête 75% sous forme de crédit",
                "Taux d'intérêt et conditions définies contractuellement",
                "Durée de remboursement : 12 à 60 mois selon le bien",
              ]}
              icon="💰"
            />
            <ScenarioStep
              number={4}
              title="Achat & Livraison"
              description="Le bien est acheté et livré au client"
              details={[
                "BlockBank achète le bien directement au vendeur",
                "Le bien est livré physiquement au client",
                "Le client conserve la possession physique du bien",
                "Le client peut porter/utiliser le bien librement",
              ]}
              icon="📦"
            />
            <ScenarioStep
              number={5}
              title="Garantie Légale (Security Interest)"
              description="BlockBank prend une garantie légale sur le bien"
              details={[
                "Signature d'un Security Interest Agreement (USA) ou Pledge Agreement (UAE)",
                "BlockBank détient un droit prioritaire sur le bien",
                "Le client reste propriétaire mais avec une charge",
                "Enregistrement du numéro de série dans un registre",
              ]}
              icon="🔒"
            />
            <ScenarioStep
              number={6}
              title="Tokenisation du Security Interest"
              description="La garantie est représentée par un NFT on-chain"
              details={[
                "Mint d'un NFT 'Security Interest Token'",
                "Le NFT reste dans le wallet de BlockBank",
                "Le NFT contient les métadonnées du bien et du prêt",
                "Le NFT peut être activé en cas de défaut de paiement",
              ]}
              icon="🎫"
            />
            <ScenarioStep
              number={7}
              title="Remboursement Mensuel"
              description="Le client rembourse le prêt mensuellement"
              details={[
                "Paiements mensuels automatiques",
                "Suivi du solde restant dû",
                "Intérêts calculés selon le calendrier d'amortissement",
                "Possibilité de remboursement anticipé",
              ]}
              icon="📅"
            />
            <ScenarioStep
              number={8}
              title="Fin du Prêt"
              description="Une fois le prêt remboursé, le client devient pleinement propriétaire"
              details={[
                "Libération complète du Security Interest",
                "Burn du NFT Security Interest Token",
                "Le client reçoit un certificat de libération",
                "Le bien appartient désormais entièrement au client",
              ]}
              icon="✅"
            />
          </div>
        </div>

        {/* Visual Flow */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Schéma du Processus Complet
          </h3>
          <LuxuryFlowDiagram />
        </div>
      </section>

      {/* PARTIE 2: Montage Juridique */}
      <section id="juridique" className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            ⚖️ PARTIE 2 — Montage Juridique (Très Détaillé)
          </h2>
        </div>

        {/* Jurisdiction Toggle */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setSelectedJurisdiction("uae")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              selectedJurisdiction === "uae"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            UAE (DIFC, ADGM, RAK)
          </button>
          <button
            onClick={() => setSelectedJurisdiction("usa")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              selectedJurisdiction === "usa"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            USA (Delaware)
          </button>
        </div>

        {selectedJurisdiction === "uae" ? (
          <UAELegalStructure />
        ) : (
          <USALegalStructure />
        )}

        {/* SPV Structure if needed */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            A. Création d'une SPV (si nécessaire)
          </h3>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Dans certains cas, BlockBank peut créer une SPV pour détenir le
            Security Interest sur les biens de luxe, notamment pour :
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start text-slate-700 dark:text-slate-300">
              <span className="mr-2 text-indigo-600">•</span>
              Regrouper plusieurs biens dans un véhicule unique
            </li>
            <li className="flex items-start text-slate-700 dark:text-slate-300">
              <span className="mr-2 text-indigo-600">•</span>
              Fractionaliser les Security Interests
            </li>
            <li className="flex items-start text-slate-700 dark:text-slate-300">
              <span className="mr-2 text-indigo-600">•</span>
              Optimiser la structure fiscale et légale
            </li>
            <li className="flex items-start text-slate-700 dark:text-slate-300">
              <span className="mr-2 text-indigo-600">•</span>
              Faciliter la titrisation future
            </li>
          </ul>
          <div className="grid gap-6 md:grid-cols-2">
            <SPVOption
              title="RAK ICC (UAE)"
              details={[
                "Incorporation rapide (1-2 semaines)",
                "Coûts réduits",
                "Juridiction favorable pour les garanties",
                "Reconnaissance au niveau fédéral UAE",
              ]}
            />
            <SPVOption
              title="Delaware LLC (USA)"
              details={[
                "Standard international",
                "Flexibilité maximale",
                "Précédents juridiques solides",
                "Reconnaissance globale",
              ]}
            />
          </div>
        </div>

        {/* Security Interest Concept */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            D. Concept du Security Interest (Garantie Non-Dépossessoire)
          </h3>
          <div className="space-y-6">
            <ConceptBox
              title="Propriété du Client"
              description="Le client reste propriétaire légal du bien de luxe"
              details={[
                "Le bien est acheté au nom du client ou en fiducie",
                "Le client a la possession physique du bien",
                "Le client peut utiliser le bien librement",
                "Le client peut le porter, l'exposer, en profiter",
              ]}
            />
            <ConceptBox
              title="Droit Prioritaire du Créancier"
              description="BlockBank détient un Security Interest (droit de gage) sur le bien"
              details={[
                "BlockBank a un droit prioritaire en cas de défaut",
                "Ce droit est enregistré légalement",
                "Le droit peut être exercé même si le client disparaît",
                "Le droit prime sur les autres créanciers non garantis",
              ]}
            />
            <ConceptBox
              title="Activation en Cas de Défaut"
              description="En cas de défaut de paiement, BlockBank peut exercer son droit"
              details={[
                "Notification légale au client",
                "Période de grâce selon le contrat",
                "Conversion du Security Interest en propriété pleine",
                "Saisie et liquidation du bien",
              ]}
            />
          </div>
        </div>

        {/* NFT Security Interest Token */}
        <div className="mb-12 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            E. Le NFT "Security Interest Token"
          </h3>
          <div className="space-y-6">
            <NFTSecurityFeature
              title="Représentation On-Chain"
              description="Le NFT sert de preuve numérique du Security Interest"
              details={[
                "Preuve immuable et vérifiable sur blockchain",
                "Métadonnées complètes du bien et du prêt",
                "Horodatage de la création du Security Interest",
                "Lien vers les documents juridiques (IPFS)",
              ]}
            />
            <NFTSecurityFeature
              title="Custody par BlockBank"
              description="Le NFT reste toujours dans le wallet de BlockBank"
              details={[
                "Non transférable au client",
                "Détenu dans un wallet multi-signature sécurisé",
                "Protection contre les transferts accidentels",
                "Traçabilité complète des mouvements",
              ]}
            />
            <NFTSecurityFeature
              title="Burn lors du Remboursement"
              description="Le NFT est brûlé une fois le prêt entièrement remboursé"
              details={[
                "Déclenchement automatique via smart contract",
                "Vérification du solde restant dû = 0",
                "Burn du NFT = libération du Security Interest",
                "Émission d'un certificat de libération",
              ]}
            />
            <NFTSecurityFeature
              title="Activation en Cas de Défaut"
              description="Le NFT peut déclencher automatiquement la saisie"
              details={[
                "Event 'Collateral Seizure Event' détecté",
                "Smart contract peut déclencher des actions",
                "Notification automatique aux parties",
                "Initiation du processus de récupération",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PARTIE 3: Sécurisation & Défaut */}
      <section id="securisation" className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            🔐 PARTIE 3 — Sécurisation & Défaut
          </h2>
        </div>

        {/* Prévention Revente */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            1. Prévention de la Revente Illégale
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <SecurityMeasure
              title="Registre Anti-Vol"
              icon="📋"
              measures={[
                "Enregistrement du numéro de série dans registre blockchain",
                "Registre accessible aux acteurs de l'industrie",
                "Vérification avant chaque transaction",
                "Flag automatique si bien grevé par un Security Interest",
              ]}
            />
            <SecurityMeasure
              title="Partenariats avec Revendeurs"
              icon="🤝"
              measures={[
                "Partenariats avec Chrono24, Watchfinder, etc.",
                "Intégration des registres dans leurs systèmes",
                "Vérification automatique avant achat",
                "Refus de transaction si bien grevé",
              ]}
            />
            <SecurityMeasure
              title="Boutiques Officielles"
              icon="🏪"
              measures={[
                "Accords avec boutiques Rolex, Hermès, etc.",
                "Vérification dans leurs bases de données",
                "Refus de service si bien grevé",
                "Alerte immédiate à BlockBank",
              ]}
            />
            <SecurityMeasure
              title="Assurance Obligatoire"
              icon="🛡️"
              measures={[
                "Assurance obligatoire avec BlockBank = bénéficiaire",
                "Couverture vol, perte, dommage",
                "Notification automatique en cas de sinistre",
                "Récupération via assurance en cas de problème",
              ]}
            />
          </div>
        </div>

        {/* Processus de Défaut */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            2. Processus en Cas de Défaut de Paiement
          </h3>
          <div className="space-y-6">
            <DefaultStep
              number={1}
              title="Détection du Défaut"
              description="Défaut de paiement détecté après période de grâce"
              actions={[
                "Retard de paiement > X jours (selon contrat)",
                "Notification automatique au client",
                "Mise à jour du statut dans le smart contract",
                "Activation du NFT Security Interest Token",
              ]}
            />
            <DefaultStep
              number={2}
              title="Notification Légale"
              description="Envoi de notification légale formelle au client"
              actions={[
                "Avis de défaut avec délai de régularisation",
                "Notification des conséquences du défaut",
                "Possibilité de restructuration du prêt",
                "Mise en demeure si nécessaire",
              ]}
            />
            <DefaultStep
              number={3}
              title="Conversion du Security Interest"
              description="Activation du droit de propriété pleine"
              actions={[
                "Exécution du Security Interest Agreement",
                "Conversion automatique en propriété pleine",
                "BlockBank devient propriétaire légal",
                "Droit de récupération du bien",
              ]}
            />
            <DefaultStep
              number={4}
              title="Récupération du Bien"
              description="Processus de récupération physique du bien"
              actions={[
                "Demande légale de restitution",
                "Si refus : procédure judiciaire",
                "Récupération via autorités compétentes",
                "Inventaire et expertise du bien",
              ]}
            />
            <DefaultStep
              number={5}
              title="Liquidation"
              description="Vente ou conversion en cash-flow"
              actions={[
                "Vente via partenaires (Chrono24, etc.)",
                "Vente aux enchères si nécessaire",
                "Conversion en actif liquide",
                "Règlement du solde restant dû",
              ]}
            />
          </div>
        </div>

        {/* Récupération en Cas de Problème */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            3. Récupération de la Valeur en Cas de Problème
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <RecoveryScenario
              scenario="Client Disparu"
              solution={[
                "Activation automatique du Security Interest",
                "Recherche via partenaires et registres",
                "Déclaration de sinistre à l'assurance",
                "Récupération via police d'assurance",
              ]}
              icon="👤"
            />
            <RecoveryScenario
              scenario="Bien Volé"
              solution={[
                "Déclaration immédiate du vol",
                "Récupération via police d'assurance",
                "Suivi dans les registres anti-vol",
                "Alerte automatique si bien revendu",
              ]}
              icon="🚨"
            />
            <RecoveryScenario
              scenario="Bien Cassé/Endommagé"
              solution={[
                "Évaluation des dommages par expert",
                "Récupération via police d'assurance",
                "Remboursement de la valeur assurée",
                "Déduction du solde restant dû",
              ]}
              icon="💔"
            />
            <RecoveryScenario
              scenario="Bien Introuvable"
              solution={[
                "Déclaration de perte/vol à l'assurance",
                "Enquête approfondie",
                "Récupération via police d'assurance",
                "Procédure judiciaire si nécessaire",
              ]}
              icon="🔍"
            />
          </div>
        </div>
      </section>

      {/* PARTIE 4: Modèle On-Chain */}
      <section id="onchain" className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            💎 PARTIE 4 — Modèle On-Chain (NFT)
          </h2>
        </div>

        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Architecture du Security Interest Token (NFT)
          </h3>
          <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
            <pre className="overflow-x-auto text-xs">
              <code className="text-slate-800 dark:text-slate-200">{`// Security Interest Token (ERC-721)

contract SecurityInterestToken {
    struct SecurityInterest {
        address borrower;           // Adresse du client
        address lender;             // BlockBank
        string serialNumber;        // Numéro de série du bien
        uint256 collateralValue;    // Valeur du bien
        uint256 loanAmount;         // Montant du prêt (75%)
        uint256 interestRate;       // Taux d'intérêt
        uint256 startDate;          // Date de début
        uint256 maturityDate;       // Date d'échéance
        uint256 remainingBalance;   // Solde restant dû
        Status status;              // Statut du prêt
    }
    
    enum Status {
        Active,          // Prêt actif
        Default,         // Défaut de paiement
        Seized,          // Bien saisi
        Repaid,          // Remboursé (sera brûlé)
        Cancelled        // Annulé
    }
    
    // Mint du NFT lors de la création du Security Interest
    function mintSecurityInterest(
        address borrower,
        string memory serialNumber,
        uint256 collateralValue,
        uint256 loanAmount
    ) external onlyBlockBank returns (uint256 tokenId);
    
    // Mise à jour du solde lors des paiements
    function updateBalance(uint256 tokenId, uint256 payment) external;
    
    // Activation en cas de défaut
    function triggerDefault(uint256 tokenId) external onlyBlockBank;
    
    // Burn lors du remboursement complet
    function burnAfterRepayment(uint256 tokenId) external onlyBlockBank;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Métadonnées du NFT
          </h3>
          <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
            <pre className="overflow-x-auto text-xs">
              <code className="text-slate-800 dark:text-slate-200">{`{
  "name": "BlockBank Security Interest #001",
  "description": "Security Interest Token for Luxury Good",
  "image": "ipfs://...",
  "attributes": [
    {
      "trait_type": "Item Type",
      "value": "Watch / Bag / Jewelry"
    },
    {
      "trait_type": "Brand",
      "value": "Rolex / Hermès / Cartier"
    },
    {
      "trait_type": "Serial Number",
      "value": "ABC123456789"
    },
    {
      "trait_type": "Collateral Value",
      "value": "100,000 USD"
    },
    {
      "trait_type": "Loan Amount",
      "value": "75,000 USD"
    },
    {
      "trait_type": "Status",
      "value": "Active / Default / Repaid"
    }
  ],
  "properties": {
    "legal": {
      "securityInterestAgreement": "ipfs://...",
      "pledgeAgreement": "ipfs://...",
      "registrationNumber": "..."
    },
    "item": {
      "serialNumber": "...",
      "authenticity": "Verified",
      "valuationReport": "ipfs://..."
    },
    "loan": {
      "interestRate": "X%",
      "duration": "X months",
      "paymentSchedule": "ipfs://..."
    }
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* Fonctionnalités Avancées */}
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Fonctionnalités Avancées
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <AdvancedFeature
              title="Fractionalisation"
              description="Fractionaliser un bien de luxe en plusieurs parts"
              details={[
                "Plusieurs Security Interests sur un même bien",
                "Répartition entre plusieurs investisseurs",
                "Tokenisation des parts de Security Interest",
                "Distribution des revenus proportionnellement",
              ]}
            />
            <AdvancedFeature
              title="Bundle Financement"
              description="Financer plusieurs biens dans un bundle"
              details={[
                "Un NFT pour plusieurs biens",
                "Pool de garanties",
                "Diversification du risque",
                "Gestion centralisée",
              ]}
            />
            <AdvancedFeature
              title="Oracles d'Authentification"
              description="Vérification automatique de l'authenticité"
              details={[
                "Intégration avec bases de données des marques",
                "Vérification périodique du statut",
                "Alertes automatiques en cas de problème",
                "Mise à jour en temps réel",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PARTIE 5: Schéma Visuel */}
      <section className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            🧩 PARTIE 5 — Schéma Visuel Complet
          </h2>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <CompleteFlowDiagram />
        </div>
      </section>

      {/* PARTIE 6: Note Juridique */}
      <section id="legal" className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            ⚖️ PARTIE 6 — Note Juridique MENA + USA
          </h2>
        </div>

        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setSelectedJurisdiction("uae")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              selectedJurisdiction === "uae"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            UAE (DIFC, ADGM, RAK)
          </button>
          <button
            onClick={() => setSelectedJurisdiction("usa")}
            className={`rounded-lg px-6 py-3 font-semibold transition-all ${
              selectedJurisdiction === "usa"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            USA (Delaware, UCC Article 9)
          </button>
        </div>

        {selectedJurisdiction === "uae" ? (
          <UAELegalAnalysis />
        ) : (
          <USALegalAnalysis />
        )}
      </section>

      {/* PARTIE 7: Synthèse */}
      <section className="mb-16">
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
            📘 PARTIE 7 — Synthèse Exécutive & Recommandations
          </h2>
        </div>
        <ExecutiveSummary />
      </section>
    </div>
  );
}

// Component implementations
function ScenarioStep({
  number,
  title,
  description,
  details,
  icon,
}: {
  number: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}) {
  return (
    <div className="border-l-4 border-amber-600 pl-6">
      <div className="mb-2 flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
          {number}
        </div>
        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>
      </div>
      <p className="mb-3 text-slate-600 dark:text-slate-400">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-amber-600">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function LuxuryFlowDiagram() {
  return (
    <div className="flex flex-col items-center space-y-4 overflow-x-auto p-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <FlowBox title="Client" subtitle="Sélection du bien" color="blue" />
        <Arrow />
        <FlowBox title="25% Apport" subtitle="Paiement initial" color="green" />
        <Arrow />
        <FlowBox title="75% Financement" subtitle="BlockBank crédit" color="indigo" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <FlowBox title="Achat" subtitle="BlockBank achète" color="purple" />
        <Arrow />
        <FlowBox title="Livraison" subtitle="Client reçoit le bien" color="pink" />
        <Arrow />
        <FlowBox title="Security Interest" subtitle="Garantie légale" color="red" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <FlowBox title="NFT Token" subtitle="Security Interest on-chain" color="amber" />
        <Arrow />
        <FlowBox title="Paiements" subtitle="Mensuels" color="emerald" />
        <Arrow />
        <FlowBox title="Remboursement" subtitle="Complet" color="green" />
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <FlowBox title="Default?" subtitle="Défaut de paiement?" color="yellow" />
        <Arrow />
        <FlowBox title="Saisie" subtitle="Activation Security Interest" color="red" />
        <Arrow />
        <FlowBox title="Liquidation" subtitle="Vente / Assurance" color="orange" />
      </div>
    </div>
  );
}

function FlowBox({
  title,
  subtitle,
  color,
}: {
  title: string;
  subtitle: string;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    indigo: "bg-indigo-600",
    purple: "bg-purple-600",
    pink: "bg-pink-600",
    red: "bg-red-600",
    amber: "bg-amber-600",
    emerald: "bg-emerald-600",
    yellow: "bg-yellow-600",
    orange: "bg-orange-600",
  };

  return (
    <div className={`rounded-lg ${colorClasses[color]} p-4 text-white shadow-md`}>
      <div className="font-semibold">{title}</div>
      <div className="text-xs opacity-90">{subtitle}</div>
    </div>
  );
}

function Arrow() {
  return <div className="text-2xl">→</div>;
}

function UAELegalStructure() {
  return (
    <div className="mb-12 space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          B. Pledge Agreement / Rahn Agreement (UAE - Civil Law)
        </h3>
        <div className="space-y-6">
          <LegalDetail
            title="Cadre Juridique"
            content="En UAE, le gage non-dépossessoire est régi par le Code Civil UAE et les réglementations spécifiques des free zones (DIFC, ADGM)."
          />
          <LegalDetail
            title="DIFC (Dubai International Financial Centre)"
            content="Le DIFC suit le droit anglais et reconnaît les Security Interests similaires au Common Law. Possibilité de créer des charges sur des biens mobiliers."
          />
          <LegalDetail
            title="ADGM (Abu Dhabi Global Market)"
            content="ADGM suit également le droit anglais. Framework favorable pour les Security Interests avec enregistrement possible au registre des charges."
          />
          <LegalDetail
            title="RAK ICC (Ras Al Khaimah)"
            content="Permet la création de SPV pour détenir des Security Interests. Flexible pour les structures de garantie."
          />
          <LegalDetail
            title="Éléments du Pledge Agreement"
            content="Doit inclure : description précise du bien, numéro de série, valeur, conditions de remboursement, droits du créancier, procédure d'exécution."
          />
        </div>
      </div>
    </div>
  );
}

function USALegalStructure() {
  return (
    <div className="mb-12 space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          C. Security Interest Agreement (USA - UCC Article 9)
        </h3>
        <div className="space-y-6">
          <LegalDetail
            title="UCC Article 9"
            content="Le Uniform Commercial Code Article 9 régit les Security Interests sur les biens personnels aux USA. Permet des garanties non-dépossessoires."
          />
          <LegalDetail
            title="Perfection du Security Interest"
            content="Nécessite un 'financing statement' déposé auprès du Secrétaire d'État (State Secretary) pour être opposable aux tiers."
          />
          <LegalDetail
            title="Delaware LLC"
            content="Structure idéale pour détenir les Security Interests. Flexibilité maximale dans l'Operating Agreement."
          />
          <LegalDetail
            title="Éléments du Security Interest Agreement"
            content="Doit inclure : description du collateral, montant du prêt, conditions de défaut, droits de saisie, procédure d'exécution, choice of law (Delaware)."
          />
          <LegalDetail
            title="Priorité"
            content="Le Security Interest parfait a priorité sur les créanciers non garantis et sur les Security Interests non perfectionnés."
          />
        </div>
      </div>
    </div>
  );
}

function LegalDetail({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
      <p className="text-slate-700 dark:text-slate-300">{content}</p>
    </div>
  );
}

function SPVOption({
  title,
  details,
}: {
  title: string;
  details: string[];
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-indigo-600">✓</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConceptBox({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
      <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
      <p className="mb-3 text-slate-700 dark:text-slate-300">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2">→</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NFTSecurityFeature({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="rounded-lg border border-purple-200 bg-white p-6 dark:border-purple-800 dark:bg-slate-800">
      <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
      <p className="mb-3 text-slate-700 dark:text-slate-300">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-purple-600">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecurityMeasure({
  title,
  icon,
  measures,
}: {
  title: string;
  icon: string;
  measures: string[];
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
      </div>
      <ul className="space-y-2">
        {measures.map((measure, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-red-600">✓</span>
            {measure}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DefaultStep({
  number,
  title,
  description,
  actions,
}: {
  number: number;
  title: string;
  description: string;
  actions: string[];
}) {
  return (
    <div className="border-l-4 border-red-600 pl-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
          {number}
        </div>
        <h4 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>
      </div>
      <p className="mb-3 text-slate-600 dark:text-slate-400">{description}</p>
      <ul className="space-y-2">
        {actions.map((action, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-red-600">→</span>
            {action}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecoveryScenario({
  scenario,
  solution,
  icon,
}: {
  scenario: string;
  solution: string[];
  icon: string;
}) {
  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h4 className="font-semibold text-slate-900 dark:text-white">{scenario}</h4>
      </div>
      <ul className="space-y-2">
        {solution.map((sol, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-orange-600">•</span>
            {sol}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AdvancedFeature({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
      <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">{title}</h4>
      <p className="mb-3 text-sm text-slate-700 dark:text-slate-300">
        {description}
      </p>
      <ul className="space-y-1">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-xs text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-blue-600">→</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompleteFlowDiagram() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        Flux Complet du Financement Luxury Goods
      </h3>
      <LuxuryFlowDiagram />
      <div className="mt-8 rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
        <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
          Légende du Flux
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          <FlowLegendItem
            step="Client + Apport 25%"
            explanation="Le client sélectionne le bien et verse 25% du prix d'achat"
          />
          <FlowLegendItem
            step="Financement 75%"
            explanation="BlockBank finance les 75% restants sous forme de crédit"
          />
          <FlowLegendItem
            step="Achat & Livraison"
            explanation="BlockBank achète le bien et le livre au client"
          />
          <FlowLegendItem
            step="Security Interest"
            explanation="Garantie légale prise par BlockBank via Pledge/Security Interest Agreement"
          />
          <FlowLegendItem
            step="NFT Token"
            explanation="Création d'un NFT représentant le Security Interest, détenu par BlockBank"
          />
          <FlowLegendItem
            step="Paiements Mensuels"
            explanation="Le client rembourse le prêt mensuellement"
          />
          <FlowLegendItem
            step="Défaut?"
            explanation="En cas de défaut de paiement, procédure de saisie"
          />
          <FlowLegendItem
            step="Liquidation"
            explanation="Récupération de la valeur via vente ou assurance"
          />
        </div>
      </div>
    </div>
  );
}

function FlowLegendItem({
  step,
  explanation,
}: {
  step: string;
  explanation: string;
}) {
  return (
    <div>
      <div className="font-medium text-slate-900 dark:text-white">{step}</div>
      <div className="text-sm text-slate-600 dark:text-slate-400">
        {explanation}
      </div>
    </div>
  );
}

function UAELegalAnalysis() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Analyse UAE (Civil Law, DIFC, ADGM, RAK)
        </h3>
        <div className="space-y-6">
          <LegalAnalysisPoint
            title="Validité du Gage Non-Dépossessoire"
            content="En UAE, le Code Civil permet le gage non-dépossessoire (Rahn) moyennant enregistrement. DIFC et ADGM suivent le Common Law anglais et reconnaissent les Security Interests similaires aux systèmes anglo-saxons."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Enregistrement"
            content="Nécessité d'enregistrer le Pledge Agreement auprès des autorités compétentes. En DIFC/ADGM, enregistrement au registre des charges. En RAK, enregistrement possible via la SPV."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Activation en Cas de Défaut"
            content="Le créancier peut exercer son droit de saisie après notification et période de grâce. Procédure judiciaire possible si nécessaire. Priorité sur les créanciers non garantis."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Limites et Risques"
            content="Risque de revente par le client (atténué par registres). Complexité en cas de biens mobiles. Nécessité d'assurance obligatoire. Possible conflit de lois si client réside à l'étranger."
            valid={false}
          />
        </div>
      </div>
    </div>
  );
}

function USALegalAnalysis() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Analyse USA (Delaware LLC, UCC Article 9)
        </h3>
        <div className="space-y-6">
          <LegalAnalysisPoint
            title="UCC Article 9 Security Interest"
            content="Le UCC Article 9 permet clairement les Security Interests non-dépossessoires sur les biens personnels. Perfection via filing d'un financing statement auprès du State Secretary."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Delaware LLC"
            content="Structure idéale pour détenir les Security Interests. Operating Agreement flexible, possibilité de créer des charges et des Security Interests selon les besoins."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Priorité et Opposabilité"
            content="Security Interest perfectionné a priorité sur les créanciers non garantis et les Security Interests non perfectionnés. Opposable aux tiers une fois enregistré."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Exécution en Cas de Défaut"
            content="Procédure d'exécution bien établie. Possibilité de vente du bien après notification. Protection du débiteur via procédures légales. Choix de la loi (Delaware) possible."
            valid={true}
          />
          <LegalAnalysisPoint
            title="Limites et Risques"
            content="Risque de revente (atténué par registres et partenariats). Coûts d'enregistrement. Complexité multi-étatique si bien déplacé. Nécessité d'assurance."
            valid={false}
          />
        </div>
      </div>
    </div>
  );
}

function LegalAnalysisPoint({
  title,
  content,
  valid,
}: {
  title: string;
  content: string;
  valid: boolean;
}) {
  const bgColor = valid
    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
    : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800";

  return (
    <div className={`rounded-lg border p-6 ${bgColor}`}>
      <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
        {title}
      </h4>
      <p className="text-slate-700 dark:text-slate-300">{content}</p>
    </div>
  );
}

function ExecutiveSummary() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Synthèse Exécutive
        </h3>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            BlockBank propose une solution complète de financement et de
            tokenisation pour les biens de luxe, permettant aux clients
            d'acquérir des montres, sacs, bijoux et objets de collection avec
            seulement 25% d'apport initial.
          </p>
          <p>
            La structure repose sur un Security Interest (UAE) ou Pledge
            Agreement (USA) permettant à BlockBank de détenir une garantie
            légale sur le bien tout en laissant le client en possession
            physique.
          </p>
          <p>
            La tokenisation via NFT offre transparence, traçabilité et
            exécution automatique en cas de défaut, tout en préservant les
            droits du client pendant la durée du prêt.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Recommandations Opérationnelles
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <RecommendationBox
            title="Clauses Contractuelles Essentielles"
            items={[
              "Description précise du bien (numéro de série)",
              "Conditions de défaut clairement définies",
              "Procédure d'exécution détaillée",
              "Assurance obligatoire avec BlockBank bénéficiaire",
              "Clause de non-revente pendant la durée du prêt",
            ]}
          />
          <RecommendationBox
            title="Compliance KYC/AML"
            items={[
              "Vérification d'identité complète du client",
              "Source des fonds pour l'apport de 25%",
              "Vérification de solvabilité",
              "Surveillance des transactions",
              "Reporting selon réglementations locales",
            ]}
          />
          <RecommendationBox
            title="Sécurité Opérationnelle"
            items={[
              "Enregistrement dans registres anti-vol",
              "Partenariats avec revendeurs",
              "Assurance complète obligatoire",
              "Suivi régulier du statut du bien",
              "Système d'alerte automatique",
            ]}
          />
          <RecommendationBox
            title="Structure Juridique Recommandée"
            items={[
              "UAE : DIFC/ADGM pour meilleure flexibilité",
              "USA : Delaware LLC pour reconnaissance globale",
              "SPV optionnelle pour regroupement d'actifs",
              "NFT Security Interest Token pour traçabilité",
              "Smart contracts audités et sécurisés",
            ]}
          />
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Comparaison UAE vs USA
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-300 dark:border-slate-600">
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  Aspect
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  UAE
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  USA
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <ComparisonTableRow
                aspect="Cadre Juridique"
                uae="Civil Law + Common Law (DIFC/ADGM)"
                usa="UCC Article 9 (Common Law)"
              />
              <ComparisonTableRow
                aspect="Enregistrement"
                uae="Registre des charges (DIFC/ADGM)"
                usa="Financing Statement (State Secretary)"
              />
              <ComparisonTableRow
                aspect="Reconnaissance"
                uae="Régionale (MENA)"
                usa="Globale"
              />
              <ComparisonTableRow
                aspect="Coûts"
                uae="Modérés"
                usa="Modérés à élevés"
              />
              <ComparisonTableRow
                aspect="Flexibilité"
                uae="Élevée (DIFC/ADGM)"
                usa="Très élevée"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RecommendationBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-indigo-600">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonTableRow({
  aspect,
  uae,
  usa,
}: {
  aspect: string;
  uae: string;
  usa: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
        {aspect}
      </td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{uae}</td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{usa}</td>
    </tr>
  );
}




