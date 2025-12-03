export default function DispatchLogicSection() {
  const recipients = [
    { name: "RAK ICC Registry", jurisdiction: "RAK ICC", type: "Autorité" },
    { name: "Delaware Division of Corporations", jurisdiction: "Delaware", type: "Autorité" },
    { name: "DLD (Dubai Land Department)", jurisdiction: "UAE", type: "Autorité" },
    { name: "DIFC Courts", jurisdiction: "DIFC", type: "Autorité" },
    { name: "Compliance internes BlockBank", jurisdiction: "Toutes", type: "Interne" },
    { name: "Cabinets juridiques externes", jurisdiction: "Toutes", type: "Externe" },
  ];

  const decisionMatrix = [
    { asset: "Immobilier UAE", jurisdiction: "RAK ICC", recipients: ["RAK ICC Registry", "DLD", "Compliance BlockBank"] },
    { asset: "Immobilier USA", jurisdiction: "Delaware", recipients: ["Delaware Division", "Compliance BlockBank"] },
    { asset: "Luxury Goods", jurisdiction: "DIFC", recipients: ["DIFC Courts", "Compliance BlockBank", "Cabinet juridique"] },
    { asset: "Mining", jurisdiction: "RAK ICC", recipients: ["RAK ICC Registry", "Compliance BlockBank"] },
  ];

  return (
    <section className="rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 p-8 shadow-lg dark:from-rose-900/20 dark:to-pink-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        📤 Section 8 : Logique de dispatch
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Décision automatique des destinataires
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recipients.map((recipient) => (
              <div
                key={recipient.name}
                className="rounded-lg border-2 border-rose-200 bg-white p-4 dark:border-rose-800 dark:bg-slate-800"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold">{recipient.name}</h4>
                  <span className="rounded bg-rose-100 px-2 py-1 text-xs text-rose-700 dark:bg-rose-900/50 dark:text-rose-300">
                    {recipient.type}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Juridiction: {recipient.jurisdiction}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Matrice de décision par juridiction et type d'actif
          </h3>
          <div className="overflow-x-auto rounded-lg bg-white dark:bg-slate-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Type d'Actif</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Juridiction</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Destinataires</th>
                </tr>
              </thead>
              <tbody>
                {decisionMatrix.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 dark:border-slate-700"
                  >
                    <td className="px-4 py-3 text-sm font-medium">{row.asset}</td>
                    <td className="px-4 py-3 text-sm">{row.jurisdiction}</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex flex-wrap gap-1">
                        {row.recipients.map((rec) => (
                          <span
                            key={rec}
                            className="rounded bg-rose-100 px-2 py-1 text-xs text-rose-700 dark:bg-rose-900/50 dark:text-rose-300"
                          >
                            {rec}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
            Workflow d'envoi et de suivi
          </h3>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <div>
                  <h4 className="font-semibold">Détection automatique</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Identification des destinataires selon la stratégie sélectionnée
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <div>
                  <h4 className="font-semibold">Préparation des documents</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Formatage et adaptation selon les exigences de chaque destinataire
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <div>
                  <h4 className="font-semibold">Envoi sécurisé</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Transmission via canaux sécurisés (API, email crypté, portail)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <div>
                  <h4 className="font-semibold">Suivi et notifications</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Tracking du statut, notifications de réception et de traitement
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

