export default function DocumentGenerationSection() {
  const documents = [
    { name: "Operating Agreement", category: "SPV", description: "Accord d'exploitation de la structure SPV" },
    { name: "Articles of Association", category: "SPV", description: "Statuts de la société" },
    { name: "Shareholders Agreement", category: "SPV", description: "Accord entre actionnaires" },
    { name: "Security Interest Agreement", category: "Garantie", description: "Accord d'intérêt de sécurité" },
    { name: "Pledge Agreement", category: "Garantie", description: "Accord de gage" },
    { name: "Fiducie-sûreté / Collateral Agreement", category: "Garantie", description: "Accord de fiducie-sûreté" },
    { name: "Contrat de Prêt", category: "Financement", description: "Contrat de prêt sécurisé" },
    { name: "Term Sheet", category: "Financement", description: "Fiche de conditions" },
    { name: "Résolutions SPV", category: "SPV", description: "Résolutions de l'assemblée" },
    { name: "NFT Master Token + metadata juridique", category: "Tokenisation", description: "NFT avec métadonnées juridiques embarquées" },
    { name: "Fractionalisation ERC-20", category: "Tokenisation", description: "Smart contract ERC-20 pour parts" },
    { name: "Fiches de dépôt et filings", category: "Administratif", description: "Documents pour dépôt aux autorités" },
  ];

  const categories = Array.from(new Set(documents.map((d) => d.category)));

  return (
    <section className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg dark:from-purple-900/20 dark:to-pink-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        📄 Section 5 : Génération automatique de documents
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Liste complète des documents générés
          </h3>
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category} className="rounded-lg bg-white p-6 dark:bg-slate-800">
                <h4 className="mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {category}
                </h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {documents
                    .filter((d) => d.category === category)
                    .map((doc) => (
                      <div
                        key={doc.name}
                        className="rounded-lg border-2 border-purple-200 p-4 dark:border-purple-800"
                      >
                        <h5 className="mb-2 font-semibold">{doc.name}</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{doc.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Processus de génération
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <span>Récupération des données de l'opportunité et de la stratégie sélectionnée</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <span>Sélection des templates appropriés selon la juridiction et structure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <span>Remplissage automatique des champs avec les données</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <span>Génération des clauses personnalisées par ADVISORBLOCK</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  5
                </span>
                <span>Validation et vérification de cohérence</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  6
                </span>
                <span>Export en formats multiples (PDF, DOCX, JSON pour smart contracts)</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Templates et personnalisation
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold">Templates de Base</h4>
              <ul className="space-y-2 text-sm">
                <li>• Templates par juridiction (RAK ICC, Delaware, etc.)</li>
                <li>• Templates par type de structure (SPV, LLC, etc.)</li>
                <li>• Templates par type d'actif</li>
                <li>• Clauses standards validées juridiquement</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold">Personnalisation IA</h4>
              <ul className="space-y-2 text-sm">
                <li>• Génération de clauses adaptées au contexte</li>
                <li>• Optimisation selon les objectifs</li>
                <li>• Adaptation aux contraintes réglementaires</li>
                <li>• Intégration des spécificités de l'actif</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

