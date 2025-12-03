export default function OverviewSection() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-lg dark:from-purple-900/20 dark:to-indigo-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        📋 Section 1 : Vue d'ensemble LEGALBLOCK
      </h2>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Description de la plateforme d'automatisation juridique
          </h3>
          <p className="leading-relaxed">
            LEGALBLOCK est une plateforme complète d'automatisation juridique conçue pour
            transformer le processus de tokenisation d'actifs réels (RWA). Elle combine
            intelligence artificielle, moteurs de règles juridiques et génération automatique
            de documents pour créer des structures légales optimisées en quelques minutes
            au lieu de plusieurs semaines.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Objectifs et valeur ajoutée
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Rapidité :</strong> Réduction du temps de création de structures juridiques
              de 3-6 semaines à quelques heures
            </li>
            <li>
              <strong>Précision :</strong> Élimination des erreurs humaines grâce à l'automatisation
            </li>
            <li>
              <strong>Conformité :</strong> Garantie de conformité avec les réglementations
              internationales (KYC, AML, sanctions)
            </li>
            <li>
              <strong>Optimisation :</strong> Sélection automatique de la juridiction et structure
              optimales selon le type d'actif
            </li>
            <li>
              <strong>Traçabilité :</strong> Audit trail complet de toutes les décisions et
              modifications
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Architecture générale
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <pre className="overflow-x-auto text-sm">
{`LEGALBLOCK Architecture
├── Opportunity Intake
│   └── Formulaire d'opportunité
├── ADVISORBLOCK (IA Juridique)
│   ├── Moteur de règles
│   └── Moteur LLM
├── Legal Strategy Engine
│   ├── Sélection juridiction
│   └── Sélection structure
├── Contract Generator
│   └── Génération documents
├── Risk & Compliance Engine
│   ├── KYC/AML
│   └── Sanctions screening
├── Filing & Dispatch Engine
│   └── Envoi automatique
├── Tokenization Engine
│   ├── NFT Master
│   └── ERC-20 Shares
└── Document Vault
    └── Versioning & Audit`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

