export default function LegalFlowSection() {
  const steps = [
    {
      name: "Intake",
      description: "Réception de l'opportunité",
      details: ["Formulaire", "Documents", "Validation"],
    },
    {
      name: "Analyse",
      description: "Analyse par ADVISORBLOCK",
      details: ["Moteur de règles", "LLM", "Scoring"],
    },
    {
      name: "Stratégie",
      description: "Définition de la stratégie",
      details: ["Juridiction", "Structure", "Optimisation"],
    },
    {
      name: "Génération",
      description: "Création des documents",
      details: ["Templates", "Personnalisation", "Validation"],
    },
    {
      name: "Validation",
      description: "Approbation humaine",
      details: ["Review", "Modifications", "Approbation"],
    },
    {
      name: "Dispatch",
      description: "Envoi aux autorités",
      details: ["Filing", "Notifications", "Suivi"],
    },
    {
      name: "Tokenisation",
      description: "Création des smart contracts",
      details: ["NFT Master", "ERC-20", "Metadata"],
    },
  ];

  return (
    <section className="rounded-2xl bg-gradient-to-br from-cyan-50 to-teal-50 p-8 shadow-lg dark:from-cyan-900/20 dark:to-teal-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        🔄 Section 7 : Flux LEGAL FLOW
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Pipeline complet de traitement d'une opportunité
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            {/* Flow Diagram */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex min-w-max items-center space-x-4">
                {steps.map((step, index) => (
                  <div key={step.name} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <h4 className="mb-1 text-sm font-semibold">{step.name}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mx-4 h-1 w-16 bg-gradient-to-r from-indigo-300 to-purple-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Steps */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.name}
                  className="rounded-lg border-2 border-cyan-200 bg-white p-4 dark:border-cyan-800 dark:bg-slate-800"
                >
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                      {index + 1}
                    </span>
                    <h4 className="font-semibold">{step.name}</h4>
                  </div>
                  <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center text-xs text-slate-500">
                        <span className="mr-2 text-cyan-600">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Points de contrôle et approbations
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="mb-2 font-semibold text-yellow-600 dark:text-yellow-400">
                ⚠️ Contrôle Automatique
              </h4>
              <p className="text-sm">Validation des données et conformité de base</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="mb-2 font-semibold text-orange-600 dark:text-orange-400">
                👤 Review Humaine
              </h4>
              <p className="text-sm">Validation par expert juridique si nécessaire</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="mb-2 font-semibold text-green-600 dark:text-green-400">
                ✅ Approbation Finale
              </h4>
              <p className="text-sm">Signature et validation finale avant dispatch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

