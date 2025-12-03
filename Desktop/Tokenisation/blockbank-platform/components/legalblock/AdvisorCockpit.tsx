"use client";

import { useState } from "react";
import { 
  CheckIcon
} from "@/components/icons/GeneralIcons";

interface Opportunity {
  id: string;
  assetName: string;
  assetType: string;
  assetValue: number;
  currency: string;
  location: string;
  ownerName: string;
  status: "pending" | "analyzing" | "completed" | "error";
}

interface AnalysisResult {
  recommendedJurisdiction: {
    name: string;
    code: string;
    score: number;
    reasoning: string;
    advantages: string[];
    disadvantages: string[];
  };
  riskAnalysis: {
    overall: "low" | "medium" | "high";
    kyc: "passed" | "pending" | "failed";
    aml: "passed" | "pending" | "failed";
    sanctions: "passed" | "pending" | "failed";
    regulatory: "compliant" | "warning" | "non-compliant";
    risks: Array<{
      type: string;
      level: "low" | "medium" | "high";
      description: string;
      mitigation: string;
    }>;
  };
  taxAnalysis: {
    jurisdiction: string;
    corporateTax: string;
    capitalGains: string;
    withholdingTax: string;
    recommendations: string[];
  };
  structureRecommendation: {
    type: string;
    description: string;
    documents: string[];
  };
  documents: Array<{
    name: string;
    status: "generated" | "pending" | "required";
    type: string;
  }>;
}

const mockOpportunities: Opportunity[] = [
  {
    id: "OPP-001",
    assetName: "Villa de luxe à Dubai Marina",
    assetType: "real-estate",
    assetValue: 5000000,
    currency: "USD",
    location: "Dubai, UAE",
    ownerName: "John Doe",
    status: "completed",
  },
  {
    id: "OPP-002",
    assetName: "Concession minière - Or",
    assetType: "mining",
    assetValue: 10000000,
    currency: "USD",
    location: "West Africa",
    ownerName: "Jane Smith",
    status: "analyzing",
  },
];

const mockAnalysis: AnalysisResult = {
  recommendedJurisdiction: {
    name: "RAK ICC",
    code: "RAK_ICC",
    score: 92,
    reasoning: "Idéal pour les actifs immobiliers à Dubai. Régime fiscal avantageux, conformité DLD, et reconnaissance internationale.",
    advantages: [
      "Régime fiscal 0% sur les revenus",
      "Conformité DLD pour l'immobilier",
      "Coûts d'incorporation réduits",
      "Reconnaissance internationale",
    ],
    disadvantages: [
      "Moins reconnu que Delaware pour les investisseurs US",
      "Documentation en anglais requis",
    ],
  },
  riskAnalysis: {
    overall: "low",
    kyc: "passed",
    aml: "passed",
    sanctions: "passed",
    regulatory: "compliant",
    risks: [
      {
        type: "Réglementaire",
        level: "low",
        description: "Conformité DLD requise pour l'immobilier à Dubai",
        mitigation: "Utilisation d'un agent enregistré DLD",
      },
      {
        type: "Fiscal",
        level: "low",
        description: "Déclaration fiscale dans le pays d'origine du propriétaire",
        mitigation: "Consultation avec un expert fiscal local",
      },
    ],
  },
  taxAnalysis: {
    jurisdiction: "RAK ICC",
    corporateTax: "0%",
    capitalGains: "0%",
    withholdingTax: "0%",
    recommendations: [
      "Structure SPV pour isolation fiscale",
      "Distribution via dividendes exonérés",
      "Pas de retenue à la source sur les distributions",
    ],
  },
  structureRecommendation: {
    type: "SPV (Special Purpose Vehicle)",
    description: "Structure optimale pour isoler l'actif et faciliter la tokenisation",
    documents: [
      "Articles of Association",
      "Memorandum of Association",
      "Operating Agreement",
      "Share Purchase Agreement",
      "Tokenization Agreement",
    ],
  },
  documents: [
    { name: "Articles of Association", status: "generated", type: "corporate" },
    { name: "Operating Agreement", status: "generated", type: "corporate" },
    { name: "Tokenization Agreement", status: "pending", type: "tokenization" },
    { name: "KYC Report", status: "generated", type: "compliance" },
    { name: "Risk Assessment", status: "generated", type: "compliance" },
  ],
};

export default function AdvisorCockpit() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<"opportunities" | "analysis" | "documents">("opportunities");

  const handleAnalyze = (opportunity: Opportunity) => {
    setSelectedOpportunity(opportunity);
    // Simuler l'analyse
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setActiveTab("analysis");
    }, 1500);
  };

  const getStatusColor = (status: Opportunity["status"]) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "analyzing":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
      case "error":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  const getRiskColor = (level: "low" | "medium" | "high") => {
    switch (level) {
      case "low":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
      case "medium":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300";
    }
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Premium Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 backdrop-blur-sm dark:from-violet-900/30 dark:to-purple-900/30">
          <span className="text-xl">🤖</span>
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            ADVISORBLOCK - Copilote Juridique IA
          </span>
        </div>
        <h1 className="mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent">
          Analyse et Recommandations Juridiques
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          🔍 Analysez les opportunités soumises et obtenez des recommandations juridiques optimisées
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex space-x-2 border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab("opportunities")}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "opportunities"
              ? "border-b-2 border-violet-600 text-violet-600 dark:text-violet-400"
              : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
          }`}
        >
          📋 Opportunités
        </button>
        <button
          onClick={() => setActiveTab("analysis")}
          disabled={!analysis}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "analysis"
              ? "border-b-2 border-violet-600 text-violet-600 dark:text-violet-400"
              : analysis
              ? "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              : "cursor-not-allowed text-slate-400 dark:text-slate-600"
          }`}
        >
          🔍 Analyse
        </button>
        <button
          onClick={() => setActiveTab("documents")}
          disabled={!analysis}
          className={`px-6 py-3 font-semibold transition-colors ${
            activeTab === "documents"
              ? "border-b-2 border-violet-600 text-violet-600 dark:text-violet-400"
              : analysis
              ? "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              : "cursor-not-allowed text-slate-400 dark:text-slate-600"
          }`}
        >
          📄 Documents
        </button>
      </div>

      {/* Content */}
      <div className="rounded-3xl border border-violet-200/50 bg-gradient-to-br from-white/90 via-violet-50/30 to-purple-50/30 p-10 shadow-2xl backdrop-blur-xl dark:border-violet-800/50 dark:from-slate-900/90 dark:via-violet-900/20 dark:to-purple-900/20">
        {activeTab === "opportunities" && (
          <div className="space-y-4">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Opportunités en attente d'analyse
            </h2>
            {mockOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="rounded-2xl border-2 border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {opp.assetName}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                          opp.status
                        )}`}
                      >
                        {opp.status === "completed"
                          ? "Analysée"
                          : opp.status === "analyzing"
                          ? "En cours"
                          : "En attente"}
                      </span>
                    </div>
                    <div className="grid gap-2 text-sm text-slate-600 dark:text-slate-400 md:grid-cols-4">
                      <div>
                        <span className="font-semibold">Type:</span> {opp.assetType}
                      </div>
                      <div>
                        <span className="font-semibold">Valeur:</span> {opp.assetValue.toLocaleString()} {opp.currency}
                      </div>
                      <div>
                        <span className="font-semibold">Localisation:</span> {opp.location}
                      </div>
                      <div>
                        <span className="font-semibold">Propriétaire:</span> {opp.ownerName}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAnalyze(opp)}
                    disabled={opp.status === "analyzing"}
                    className={`ml-4 flex items-center space-x-2 rounded-xl px-6 py-3 font-semibold text-white transition-all ${
                      opp.status === "analyzing"
                        ? "cursor-not-allowed bg-slate-400"
                        : "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-500/50 hover:scale-105 hover:shadow-xl"
                    }`}
                  >
                    <span className="text-xl">✨</span>
                    <span>{opp.status === "analyzing" ? "Analyse en cours..." : "Analyser"}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "analysis" && analysis && selectedOpportunity && (
          <div className="space-y-8">
            {/* Jurisdiction Recommendation */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
              <div className="mb-4 flex items-center space-x-3">
                <span className="text-3xl">🌍</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Recommandation de Juridiction
                </h2>
              </div>
              <div className="mb-4 flex items-center space-x-4">
                <div className="rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-4 text-white shadow-lg shadow-violet-500/50">
                  <div className="text-3xl font-bold">{analysis.recommendedJurisdiction.score}</div>
                  <div className="text-sm opacity-90">Score</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {analysis.recommendedJurisdiction.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {analysis.recommendedJurisdiction.reasoning}
                  </p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <h4 className="mb-2 font-semibold text-emerald-600 dark:text-emerald-400">
                    ✅ Avantages
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {analysis.recommendedJurisdiction.advantages.map((adv, idx) => (
                      <li key={idx}>• {adv}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <h4 className="mb-2 font-semibold text-amber-600 dark:text-amber-400">
                    ⚠️ Inconvénients
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {analysis.recommendedJurisdiction.disadvantages.map((dis, idx) => (
                      <li key={idx}>• {dis}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Risk Analysis */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
              <div className="mb-4 flex items-center space-x-3">
                <span className="text-3xl">🛡️</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Analyse des Risques
                </h2>
              </div>
              <div className="mb-6 grid gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Risque Global
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getRiskColor(
                      analysis.riskAnalysis.overall
                    )}`}
                  >
                    {analysis.riskAnalysis.overall === "low"
                      ? "Faible"
                      : analysis.riskAnalysis.overall === "medium"
                      ? "Moyen"
                      : "Élevé"}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    KYC
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      analysis.riskAnalysis.kyc === "passed"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                    }`}
                  >
                    {analysis.riskAnalysis.kyc === "passed" ? "Validé" : "En attente"}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    AML
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      analysis.riskAnalysis.aml === "passed"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                    }`}
                  >
                    {analysis.riskAnalysis.aml === "passed" ? "Validé" : "En attente"}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
                  <div className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Conformité
                  </div>
                  <div
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                      analysis.riskAnalysis.regulatory === "compliant"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                    }`}
                  >
                    {analysis.riskAnalysis.regulatory === "compliant" ? "Conforme" : "Attention"}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {analysis.riskAnalysis.risks.map((risk, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border-2 border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{risk.type}</h4>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getRiskColor(
                          risk.level
                        )}`}
                      >
                        {risk.level === "low" ? "Faible" : risk.level === "medium" ? "Moyen" : "Élevé"}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                      {risk.description}
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      💡 Mitigation: {risk.mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax Analysis */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
              <div className="mb-4 flex items-center space-x-3">
                <span className="text-3xl">📈</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Analyse Fiscale
                </h2>
              </div>
              <div className="mb-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Impôt sur les Sociétés
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {analysis.taxAnalysis.corporateTax}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Plus-values
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {analysis.taxAnalysis.capitalGains}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Retenue à la source
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {analysis.taxAnalysis.withholdingTax}
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Recommandations Fiscales
                </h4>
                <ul className="space-y-1 text-sm">
                  {analysis.taxAnalysis.recommendations.map((rec, idx) => (
                    <li key={idx}>• {rec}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Structure Recommendation */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-6 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
              <div className="mb-4 flex items-center space-x-3">
                <span className="text-3xl">🏢</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Recommandation de Structure
                </h2>
              </div>
              <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {analysis.structureRecommendation.type}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {analysis.structureRecommendation.description}
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Documents requis
                </h4>
                <div className="grid gap-2 md:grid-cols-2">
                  {analysis.structureRecommendation.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 rounded-lg bg-white p-3 dark:bg-slate-800"
                    >
                      <span className="text-xl">📄</span>
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "documents" && analysis && (
          <div className="space-y-4">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
              Documents Générés
            </h2>
            {analysis.documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white/80 p-4 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
                    <span className="text-xl">📄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{doc.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Type: {doc.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      doc.status === "generated"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                        : doc.status === "pending"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                    }`}
                  >
                    {doc.status === "generated"
                      ? "Généré"
                      : doc.status === "pending"
                      ? "En attente"
                      : "Requis"}
                  </span>
                  {doc.status === "generated" && (
                    <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-cyan-700">
                      Télécharger
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

