export default function TechnicalModulesSection() {
  const modules = [
    {
      name: "Opportunity Intake",
      description: "Réception et validation des opportunités",
      details: [
        "Formulaire interactif multi-étapes",
        "Validation automatique des données",
        "Upload et traitement de documents",
        "Intégration avec systèmes externes",
      ],
    },
    {
      name: "Legal Strategy Engine",
      description: "Moteur de stratégie juridique",
      details: [
        "Analyse multi-critères",
        "Scoring des options",
        "Recommandations justifiées",
        "Optimisation automatique",
      ],
    },
    {
      name: "SPV Builder",
      description: "Construction automatique de structures SPV",
      details: [
        "Génération de structures complètes",
        "Configuration des statuts",
        "Définition des rôles et responsabilités",
        "Intégration des clauses spécifiques",
      ],
    },
    {
      name: "Contract Generator",
      description: "Génération de contrats",
      details: [
        "Templates modulaires",
        "Remplissage automatique",
        "Génération de clauses personnalisées",
        "Export multi-formats",
      ],
    },
    {
      name: "Risk & Compliance Engine",
      description: "Analyse de risques et conformité",
      details: [
        "KYC/AML automatique",
        "Vérification des sanctions",
        "Scoring des risques",
        "Rapports de conformité",
      ],
    },
    {
      name: "Filing & Dispatch Engine",
      description: "Envoi aux autorités et prestataires",
      details: [
        "Détection automatique des destinataires",
        "Préparation des filings",
        "Envoi sécurisé",
        "Suivi et notifications",
      ],
    },
    {
      name: "Tokenization Engine",
      description: "Génération des smart contracts",
      details: [
        "NFT Master ERC-721",
        "Vault Contract",
        "ERC-20 Shares",
        "Metadata juridique embarquée",
      ],
    },
    {
      name: "Document Vault",
      description: "Stockage et versioning",
      details: [
        "Stockage sécurisé",
        "Versioning automatique",
        "Historique des modifications",
        "Accès contrôlé",
      ],
    },
    {
      name: "AdvisorBlock AI Interface",
      description: "Interface avec l'IA",
      details: [
        "API pour moteur de règles",
        "Intégration LLM",
        "Gestion du contexte",
        "Optimisation des prompts",
      ],
    },
    {
      name: "Audit & Versioning",
      description: "Traçabilité et historique",
      details: [
        "Log de toutes les actions",
        "Historique des décisions",
        "Traçabilité complète",
        "Rapports d'audit",
      ],
    },
  ];

  return (
    <section className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-lg dark:from-slate-800 dark:to-blue-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        ⚙️ Section 6 : Modules techniques
      </h2>

      <div className="space-y-6">
        {modules.map((module, index) => (
          <div
            key={module.name}
            className="rounded-lg border-2 border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {index + 1}. {module.name}
                </h3>
                <p className="mt-1 text-slate-600 dark:text-slate-400">{module.description}</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {module.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50"
                >
                  <span className="mr-2 text-indigo-600 dark:text-indigo-400">•</span>
                  <span className="text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

