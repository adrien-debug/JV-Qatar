export default function AnalysisProcessSection() {
  const jurisdictions = [
    { code: "RAK_ICC", name: "RAK ICC", description: "Ras Al Khaimah International Corporate Centre (UAE)" },
    { code: "DELAWARE", name: "Delaware LLC", description: "Delaware Limited Liability Company (USA)" },
    { code: "DIFC", name: "DIFC", description: "Dubai International Financial Centre (UAE)" },
    { code: "ADGM", name: "ADGM", description: "Abu Dhabi Global Market (UAE)" },
    { code: "FRANCE", name: "France", description: "Régime français (SCI, FCPR, etc.)" },
    { code: "EU", name: "EU", description: "Structures européennes (Luxembourg, Malte, etc.)" },
  ];

  const structures = [
    { name: "SPV", description: "Special Purpose Vehicle pour isolation des actifs" },
    { name: "LLC", description: "Limited Liability Company pour flexibilité opérationnelle" },
    { name: "Fiducie", description: "Trust structure pour gestion patrimoniale" },
    { name: "Gage", description: "Pledge pour garantie d'actifs mobiliers" },
    { name: "Security Interest", description: "Intérêt de sécurité pour actifs immobiliers" },
    { name: "Hypothèque", description: "Mortgage pour garantie immobilière" },
    { name: "Pledge", description: "Pledge Agreement pour actifs financiers" },
  ];

  return (
    <section className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 shadow-lg dark:from-orange-900/20 dark:to-amber-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        🔍 Section 4 : Processus d'analyse automatisée
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Comment ADVISORBLOCK lit et analyse une opportunité
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Extraction et structuration des données du formulaire</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Analyse des documents uploadés (OCR + NLP)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Application du moteur de règles juridiques</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Analyse contextuelle par le moteur LLM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
                <span>Génération de recommandations avec scoring</span>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Décision automatique de la stratégie juridique optimale
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Critères d'évaluation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Type d'actif et valeur</li>
                <li>• Juridiction du propriétaire</li>
                <li>• Objectifs fiscaux</li>
                <li>• Contraintes réglementaires</li>
                <li>• Coûts d'incorporation</li>
                <li>• Flexibilité opérationnelle</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
              <h4 className="mb-3 font-semibold text-indigo-600 dark:text-indigo-400">
                Algorithme de décision
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Scoring multi-critères</li>
                <li>• Comparaison des options</li>
                <li>• Optimisation des coûts</li>
                <li>• Minimisation des risques</li>
                <li>• Conformité garantie</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Sélection de la juridiction
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jurisdictions.map((jur) => (
              <div
                key={jur.code}
                className="rounded-lg border-2 border-orange-200 bg-white p-4 dark:border-orange-800 dark:bg-slate-800"
              >
                <h4 className="mb-2 font-semibold">{jur.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{jur.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Choix de la structure
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {structures.map((struct) => (
              <div
                key={struct.name}
                className="rounded-lg border-2 border-orange-200 bg-white p-4 dark:border-orange-800 dark:bg-slate-800"
              >
                <h4 className="mb-2 font-semibold">{struct.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{struct.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Analyse des risques et conformité
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">KYC</h4>
              <p className="text-sm">Vérification de l'identité et du profil du propriétaire</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">AML</h4>
              <p className="text-sm">Détection du blanchiment d'argent et financement du terrorisme</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="mb-2 font-semibold text-red-600 dark:text-red-400">Sanctions</h4>
              <p className="text-sm">Vérification des listes de sanctions internationales</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Pipeline juridique optimal
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <div className="flex items-center justify-between overflow-x-auto">
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </div>
                <span className="text-sm">Analyse</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </div>
                <span className="text-sm">Stratégie</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </div>
                <span className="text-sm">Génération</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </div>
                <span className="text-sm">Validation</span>
              </div>
              <div className="h-1 w-16 bg-indigo-300"></div>
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  5
                </div>
                <span className="text-sm">Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

