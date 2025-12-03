"use client";

import { useState } from "react";

export default function OpportunityFormSection() {
  const [activeTab, setActiveTab] = useState("fields");

  const assetTypes = [
    { value: "real-estate", label: "🏠 Immobilier", description: "Propriétés résidentielles, commerciales, terrains" },
    { value: "mining", label: "⛏️ Mining", description: "Concessions minières, droits d'extraction" },
    { value: "luxury", label: "💎 Luxury Goods", description: "Bijoux, montres, art, voitures de collection" },
    { value: "business", label: "🏢 Business", description: "Entreprises, parts sociales, royalties" },
    { value: "credit", label: "💳 Crédit", description: "Prêts, créances, obligations" },
    { value: "rwa", label: "🌐 RWA", description: "Autres actifs réels tokenisables" },
  ];

  const formFields = [
    { name: "valeur", label: "Valeur de l'actif", type: "number", required: true, description: "Valeur estimée en USD" },
    { name: "juridiction", label: "Juridiction préférée", type: "select", required: false, description: "RAK ICC, Delaware, DIFC, ADGM, France, EU" },
    { name: "identite", label: "Identité du propriétaire", type: "text", required: true, description: "Nom, nationalité, KYC" },
    { name: "finalite", label: "Finalité de la tokenisation", type: "textarea", required: true, description: "Raisons et objectifs" },
    { name: "ltv", label: "Loan-to-Value (LTV)", type: "number", required: false, description: "Ratio prêt/valeur en %" },
    { name: "duree", label: "Durée", type: "number", required: true, description: "Durée en années" },
    { name: "garanties", label: "Garanties", type: "textarea", required: false, description: "Garanties additionnelles" },
    { name: "flux_revenus", label: "Flux de revenus", type: "textarea", required: false, description: "Revenus attendus, périodicité" },
    { name: "documents", label: "Documents", type: "file", required: true, description: "Titre de propriété, certificats, etc." },
  ];

  return (
    <section className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:from-green-900/20 dark:to-emerald-900/20">
      <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
        📝 Section 3 : Formulaire "Nouvelle Opportunité"
      </h2>

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex space-x-2 border-b border-slate-300 dark:border-slate-700">
          <button
            onClick={() => setActiveTab("fields")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "fields"
                ? "border-b-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Champs du Formulaire
          </button>
          <button
            onClick={() => setActiveTab("types")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "types"
                ? "border-b-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Types d'Actifs
          </button>
          <button
            onClick={() => setActiveTab("process")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "process"
                ? "border-b-2 border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            Processus de Soumission
          </button>
        </div>

        {/* Content */}
        {activeTab === "fields" && (
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Description détaillée des champs requis
            </h3>
            <div className="space-y-4">
              {formFields.map((field) => (
                <div
                  key={field.name}
                  className="rounded-lg border-2 border-green-200 p-4 dark:border-green-800"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <label className="font-semibold text-slate-900 dark:text-white">
                      {field.label}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {field.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{field.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "types" && (
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Exemples de types d'actifs
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {assetTypes.map((type) => (
                <div
                  key={type.value}
                  className="rounded-lg border-2 border-green-200 p-4 transition-all hover:border-green-400 dark:border-green-800 dark:hover:border-green-600"
                >
                  <h4 className="mb-2 text-lg font-semibold">{type.label}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "process" && (
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Processus de soumission
            </h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </span>
                <div>
                  <h4 className="font-semibold">Remplissage du formulaire</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    L'utilisateur complète tous les champs requis avec les informations de l'opportunité
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </span>
                <div>
                  <h4 className="font-semibold">Upload des documents</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Téléchargement des documents justificatifs (titres de propriété, certificats, etc.)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </span>
                <div>
                  <h4 className="font-semibold">Validation automatique</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Vérification de la complétude et cohérence des données
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  4
                </span>
                <div>
                  <h4 className="font-semibold">Soumission à ADVISORBLOCK</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    L'opportunité est transmise au moteur d'analyse pour traitement
                  </p>
                </div>
              </li>
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}

