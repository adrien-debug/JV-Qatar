export default function AdvisorBlockSection() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg dark:from-blue-900/20 dark:to-cyan-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        🤖 Section 2 : ADVISORBLOCK - Le Copilote Juridique
      </h2>

      <div className="space-y-6 text-slate-700 dark:text-slate-300">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Description de l'IA juridique premium
          </h3>
          <p className="leading-relaxed">
            ADVISORBLOCK est le cœur intelligent de LEGALBLOCK, un copilote juridique qui
            combine deux moteurs puissants pour analyser, recommander et générer des stratégies
            juridiques optimales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <h4 className="mb-3 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              🔧 Moteur de Règles
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Base de connaissances juridique structurée</li>
              <li>• Règles métier par juridiction</li>
              <li>• Contraintes réglementaires</li>
              <li>• Meilleures pratiques validées</li>
              <li>• Décisions déterministes</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <h4 className="mb-3 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              🧠 Moteur LLM
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Analyse contextuelle avancée</li>
              <li>• Compréhension du langage naturel</li>
              <li>• Recommandations personnalisées</li>
              <li>• Génération de textes juridiques</li>
              <li>• Raisonnement complexe</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Capacités d'analyse et de recommandation
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border-2 border-blue-200 bg-white p-4 dark:border-blue-800 dark:bg-slate-800">
              <h5 className="mb-2 font-semibold">Analyse Juridictionnelle</h5>
              <p className="text-sm">
                Comparaison automatique des avantages/inconvénients de chaque juridiction
              </p>
            </div>
            <div className="rounded-lg border-2 border-blue-200 bg-white p-4 dark:border-blue-800 dark:bg-slate-800">
              <h5 className="mb-2 font-semibold">Optimisation Fiscale</h5>
              <p className="text-sm">
                Calcul automatique des implications fiscales et recommandations
              </p>
            </div>
            <div className="rounded-lg border-2 border-blue-200 bg-white p-4 dark:border-blue-800 dark:bg-slate-800">
              <h5 className="mb-2 font-semibold">Analyse de Risques</h5>
              <p className="text-sm">
                Identification et scoring des risques juridiques et réglementaires
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            Rôle dans le processus décisionnel
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <span>Analyse de l'opportunité soumise</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <span>Application des règles juridiques pertinentes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <span>Génération de recommandations avec justifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <span>Validation et approbation humaine (si nécessaire)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                  5
                </span>
                <span>Exécution automatique de la stratégie sélectionnée</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

