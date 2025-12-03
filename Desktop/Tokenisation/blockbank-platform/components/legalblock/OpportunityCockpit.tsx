"use client";

import { useState } from "react";
import { RealEstateIcon, MiningIcon, LuxuryIcon, BusinessIcon, CreditIcon, RwaIcon } from "@/components/icons/AssetIcons";
import { CheckIcon, InfoIcon, WarningIcon, DocumentIcon, UploadIcon, CloseIcon, ArrowLeftIcon, ArrowRightIcon, SparklesIcon } from "@/components/icons/GeneralIcons";

interface FormData {
  // Étape 1: Informations générales
  assetType: string;
  assetName: string;
  assetDescription: string;
  assetValue: string;
  currency: string;

  // Étape 2: Localisation et juridiction
  location: string;
  preferredJurisdiction: string;
  currentJurisdiction: string;

  // Étape 3: Propriétaire et identité
  ownerName: string;
  ownerNationality: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerAddress: string;
  kycStatus: string;

  // Étape 4: Finalité et objectifs
  purpose: string;
  tokenizationGoal: string;
  expectedInvestors: string;
  distributionStrategy: string;

  // Étape 5: Financement
  ltv: string;
  loanAmount: string;
  duration: string;
  interestRate: string;
  repaymentSchedule: string;

  // Étape 6: Garanties et sécurité
  guarantees: string;
  collateral: string;
  insurance: string;
  additionalSecurity: string;

  // Étape 7: Revenus et flux
  revenueStreams: string;
  revenueFrequency: string;
  expectedRevenue: string;
  revenueDistribution: string;

  // Étape 8: Documents
  documents: File[];
  documentTypes: string[];
}

const steps = [
  { id: 1, name: "Informations Générales", description: "Type et valeur de l'actif" },
  { id: 2, name: "Localisation", description: "Juridiction et emplacement" },
  { id: 3, name: "Propriétaire", description: "Identité et KYC" },
  { id: 4, name: "Finalité", description: "Objectifs de tokenisation" },
  { id: 5, name: "Financement", description: "LTV, durée, taux" },
  { id: 6, name: "Garanties", description: "Sécurité et collatéral" },
  { id: 7, name: "Revenus", description: "Flux de revenus" },
  { id: 8, name: "Documents", description: "Upload des documents" },
];

export default function OpportunityCockpit() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.assetType) newErrors.assetType = "Le type d'actif est requis";
        if (!formData.assetName) newErrors.assetName = "Le nom de l'actif est requis";
        if (!formData.assetValue) newErrors.assetValue = "La valeur est requise";
        break;
      case 2:
        if (!formData.location) newErrors.location = "La localisation est requise";
        break;
      case 3:
        if (!formData.ownerName) newErrors.ownerName = "Le nom du propriétaire est requis";
        if (!formData.ownerEmail) newErrors.ownerEmail = "L'email est requis";
        break;
      case 4:
        if (!formData.purpose) newErrors.purpose = "La finalité est requise";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Ici on enverrait les données à l'API
      console.log("Soumission des données:", formData);
      alert("Opportunité soumise avec succès ! Elle sera analysée par ADVISORBLOCK.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Step1General formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <Step2Location formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <Step3Owner formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 4:
        return <Step4Purpose formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 5:
        return <Step5Financing formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 6:
        return <Step6Guarantees formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 7:
        return <Step7Revenue formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 8:
        return <Step8Documents formData={formData} updateFormData={updateFormData} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Premium Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 backdrop-blur-sm dark:from-violet-900/30 dark:to-purple-900/30">
          <span className="text-xl">💎</span>
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            Plateforme Premium BlockBank
          </span>
        </div>
        <h1 className="mb-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-4xl font-bold text-transparent">
          Nouvelle Opportunité
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Créez votre opportunité de tokenisation en quelques étapes
        </p>
      </div>

      {/* Premium Progress Bar */}
      <div className="mb-10">
        <div className="relative">
          {/* Connection Lines Background */}
          <div className="absolute left-0 right-0 top-8 z-0 flex">
            {steps.slice(0, -1).map((_, index) => (
              <div key={index} className="relative h-1 flex-1">
                <div className="absolute left-8 right-8 h-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 ${
                      currentStep > index + 1 ? "w-full" : currentStep === index + 1 ? "w-1/2" : "w-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="relative z-10 flex items-start">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-1 flex-col items-center">
                {/* Step Circle */}
                <div className="relative mb-3">
                  {/* Glow effect for active step */}
                  {currentStep === step.id && (
                    <div className="absolute inset-0 animate-pulse rounded-full bg-violet-500/30 blur-xl"></div>
                  )}
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                      currentStep >= step.id
                        ? "border-violet-600 bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/50"
                        : "border-slate-300 bg-white/80 backdrop-blur-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800/80"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckIcon className="h-7 w-7" />
                    ) : (
                      <span className="text-lg font-bold">{step.id}</span>
                    )}
                  </div>
                </div>
                
                {/* Step Text */}
                <div className="w-full max-w-[140px] text-center">
                  <p
                    className={`text-sm font-semibold transition-colors ${
                      currentStep >= step.id
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                        : "text-slate-500"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="mt-1 text-xs leading-tight text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Step Content with Glassmorphism */}
      <div className="relative overflow-hidden rounded-3xl border border-violet-200/50 bg-gradient-to-br from-white/90 via-violet-50/30 to-purple-50/30 p-10 shadow-2xl backdrop-blur-xl dark:border-violet-800/50 dark:from-slate-900/90 dark:via-violet-900/20 dark:to-purple-900/20">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10 opacity-50"></div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"></div>

        <div className="relative mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-600"></div>
              <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                Étape {currentStep} sur {steps.length}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {steps[currentStep - 1].name}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{steps[currentStep - 1].description}</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 p-4 shadow-lg shadow-violet-500/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{currentStep}</div>
              <div className="text-xs text-violet-100">/{steps.length}</div>
            </div>
          </div>
        </div>

        <div className="min-h-[450px]">{renderStepContent()}</div>

        {/* Premium Navigation Buttons */}
        <div className="mt-10 flex items-center justify-between border-t border-violet-200/50 pt-8 dark:border-violet-800/50">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`group flex items-center space-x-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
              currentStep === 1
                ? "cursor-not-allowed bg-slate-100/50 text-slate-400 dark:bg-slate-800/50 dark:text-slate-600"
                : "bg-white/80 text-slate-700 shadow-lg backdrop-blur-sm hover:bg-white hover:shadow-xl dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Précédent</span>
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="group flex items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/50 transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:shadow-xl hover:shadow-violet-500/60"
            >
              <span>Suivant</span>
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="group flex items-center space-x-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:shadow-emerald-500/60"
            >
              <CheckIcon className="h-5 w-5" />
              <span>Soumettre l'opportunité</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Step Components
function Step1General({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  const assetTypes = [
    { value: "real-estate", label: "Immobilier", description: "Propriétés résidentielles, commerciales", icon: RealEstateIcon },
    { value: "mining", label: "Mining", description: "Concessions minières", icon: MiningIcon },
    { value: "luxury", label: "Luxury Goods", description: "Bijoux, art, voitures", icon: LuxuryIcon },
    { value: "business", label: "Business", description: "Entreprises, parts sociales", icon: BusinessIcon },
    { value: "credit", label: "Crédit", description: "Prêts, créances", icon: CreditIcon },
    { value: "rwa", label: "Autres RWA", description: "Autres actifs réels", icon: RwaIcon },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Type d'actif <span className="text-red-500">*</span>
        </label>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {assetTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => updateFormData("assetType", type.value)}
              className={`group relative overflow-hidden rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
                formData.assetType === type.value
                  ? "border-violet-600 bg-gradient-to-br from-violet-50 to-purple-50 shadow-lg shadow-violet-500/30 dark:border-violet-400 dark:from-violet-900/30 dark:to-purple-900/30"
                  : "border-slate-200 bg-white/80 backdrop-blur-sm hover:border-violet-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/80"
              }`}
            >
              {formData.assetType === type.value && (
                <div className="absolute right-2 top-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600 text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div className="mb-2 flex items-center space-x-2">
                <type.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                <div className="text-xl font-semibold transition-transform group-hover:scale-105">{type.label}</div>
              </div>
              <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{type.description}</div>
            </button>
          ))}
        </div>
        {errors.assetType && <p className="mt-2 text-sm text-red-500">{errors.assetType}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Nom de l'actif <span className="text-red-500">*</span>
        </label>
          <input
            type="text"
            value={formData.assetName || ""}
            onChange={(e) => updateFormData("assetName", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="Ex: Villa de luxe à Dubai Marina"
          />
        {errors.assetName && <p className="mt-2 text-sm text-red-500">{errors.assetName}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Description de l'actif
        </label>
          <textarea
            value={formData.assetDescription || ""}
            onChange={(e) => updateFormData("assetDescription", e.target.value)}
            rows={4}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="Décrivez l'actif en détail..."
          />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Valeur de l'actif <span className="text-red-500">*</span>
          </label>
          <div className="flex">
            <select
              value={formData.currency || "USD"}
              onChange={(e) => updateFormData("currency", e.target.value)}
              className="rounded-l-xl border-2 border-r-0 border-slate-300 bg-gradient-to-br from-slate-100 to-slate-50 px-5 py-4 font-semibold focus:outline-none dark:border-slate-700 dark:from-slate-800 dark:to-slate-700 dark:text-white"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="AED">AED</option>
            </select>
            <input
              type="number"
              value={formData.assetValue || ""}
              onChange={(e) => updateFormData("assetValue", e.target.value)}
              className="w-full rounded-r-xl border-2 border-l-0 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
              placeholder="5000000"
            />
          </div>
          {errors.assetValue && <p className="mt-2 text-sm text-red-500">{errors.assetValue}</p>}
        </div>
      </div>
    </div>
  );
}

function Step2Location({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  const jurisdictions = [
    { value: "rak-icc", label: "RAK ICC", description: "Ras Al Khaimah (UAE)" },
    { value: "delaware", label: "Delaware LLC", description: "Delaware (USA)" },
    { value: "difc", label: "DIFC", description: "Dubai International Financial Centre" },
    { value: "adgm", label: "ADGM", description: "Abu Dhabi Global Market" },
    { value: "france", label: "France", description: "Régime français" },
    { value: "eu", label: "EU", description: "Autres structures européennes" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Localisation de l'actif <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.location || ""}
          onChange={(e) => updateFormData("location", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Ex: Dubai, UAE"
        />
        {errors.location && <p className="mt-2 text-sm text-red-500">{errors.location}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Juridiction actuelle
        </label>
        <select
          value={formData.currentJurisdiction || ""}
          onChange={(e) => updateFormData("currentJurisdiction", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
        >
          <option value="">Sélectionnez...</option>
          {jurisdictions.map((jur) => (
            <option key={jur.value} value={jur.value}>
              {jur.label} - {jur.description}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Juridiction préférée (optionnel)
        </label>
        <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
          ADVISORBLOCK recommandera automatiquement la meilleure juridiction, mais vous pouvez indiquer une préférence
        </p>
        <select
          value={formData.preferredJurisdiction || ""}
          onChange={(e) => updateFormData("preferredJurisdiction", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
        >
          <option value="">Aucune préférence (recommandation automatique)</option>
          {jurisdictions.map((jur) => (
            <option key={jur.value} value={jur.value}>
              {jur.label} - {jur.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Step3Owner({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 p-5 dark:from-violet-900/20 dark:to-purple-900/20 dark:border-violet-800/50">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-purple-600">
              <InfoIcon className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-medium text-violet-800 dark:text-violet-200">
              Ces informations seront utilisées pour le processus KYC/AML automatique
            </p>
          </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.ownerName || ""}
            onChange={(e) => updateFormData("ownerName", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="John Doe"
          />
          {errors.ownerName && <p className="mt-2 text-sm text-red-500">{errors.ownerName}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Nationalité
          </label>
          <input
            type="text"
            value={formData.ownerNationality || ""}
            onChange={(e) => updateFormData("ownerNationality", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="Française"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.ownerEmail || ""}
            onChange={(e) => updateFormData("ownerEmail", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="john.doe@example.com"
          />
          {errors.ownerEmail && <p className="mt-2 text-sm text-red-500">{errors.ownerEmail}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Téléphone
          </label>
          <input
            type="tel"
            value={formData.ownerPhone || ""}
            onChange={(e) => updateFormData("ownerPhone", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="+33 6 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Adresse complète
        </label>
        <textarea
          value={formData.ownerAddress || ""}
          onChange={(e) => updateFormData("ownerAddress", e.target.value)}
          rows={3}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="123 Rue Example, 75001 Paris, France"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Statut KYC
        </label>
        <select
          value={formData.kycStatus || ""}
          onChange={(e) => updateFormData("kycStatus", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
        >
          <option value="">À vérifier</option>
          <option value="pending">En cours</option>
          <option value="verified">Vérifié</option>
          <option value="not-required">Non requis</option>
        </select>
      </div>
    </div>
  );
}

function Step4Purpose({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Finalité de la tokenisation <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.purpose || ""}
          onChange={(e) => updateFormData("purpose", e.target.value)}
          rows={4}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Décrivez les raisons et objectifs de la tokenisation de cet actif..."
        />
        {errors.purpose && <p className="mt-2 text-sm text-red-500">{errors.purpose}</p>}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Objectif de tokenisation
        </label>
        <select
          value={formData.tokenizationGoal || ""}
          onChange={(e) => updateFormData("tokenizationGoal", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
        >
          <option value="">Sélectionnez...</option>
          <option value="liquidity">Liquidité</option>
          <option value="fundraising">Levée de fonds</option>
          <option value="fractionalization">Fractionalisation</option>
          <option value="securitization">Sécuritisation</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Nombre d'investisseurs attendus
          </label>
          <input
            type="number"
            value={formData.expectedInvestors || ""}
            onChange={(e) => updateFormData("expectedInvestors", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Stratégie de distribution
          </label>
          <select
            value={formData.distributionStrategy || ""}
            onChange={(e) => updateFormData("distributionStrategy", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          >
            <option value="">Sélectionnez...</option>
            <option value="public">Publique</option>
            <option value="private">Privée</option>
            <option value="hybrid">Hybride</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function Step5Financing({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Loan-to-Value (LTV) %
          </label>
          <input
            type="number"
            value={formData.ltv || ""}
            onChange={(e) => updateFormData("ltv", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="70"
            min="0"
            max="100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Montant du prêt
          </label>
          <input
            type="number"
            value={formData.loanAmount || ""}
            onChange={(e) => updateFormData("loanAmount", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="3500000"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Durée (années) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={formData.duration || ""}
            onChange={(e) => updateFormData("duration", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="5"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Taux d'intérêt (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={formData.interestRate || ""}
            onChange={(e) => updateFormData("interestRate", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="4.5"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Calendrier de remboursement
        </label>
        <select
          value={formData.repaymentSchedule || ""}
          onChange={(e) => updateFormData("repaymentSchedule", e.target.value)}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
        >
          <option value="">Sélectionnez...</option>
          <option value="monthly">Mensuel</option>
          <option value="quarterly">Trimestriel</option>
          <option value="semi-annual">Semestriel</option>
          <option value="annual">Annuel</option>
          <option value="bullet">Bullet (remboursement final)</option>
        </select>
      </div>
    </div>
  );
}

function Step6Guarantees({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Garanties
        </label>
        <textarea
          value={formData.guarantees || ""}
          onChange={(e) => updateFormData("garanties", e.target.value)}
          rows={4}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Décrivez les garanties additionnelles..."
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Collatéral
        </label>
        <textarea
          value={formData.collateral || ""}
          onChange={(e) => updateFormData("collateral", e.target.value)}
          rows={3}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Décrivez les actifs en collatéral..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Assurance
          </label>
          <select
            value={formData.insurance || ""}
            onChange={(e) => updateFormData("insurance", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          >
            <option value="">Sélectionnez...</option>
            <option value="yes">Oui, assuré</option>
            <option value="no">Non assuré</option>
            <option value="pending">En cours</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Sécurité additionnelle
        </label>
        <textarea
          value={formData.additionalSecurity || ""}
          onChange={(e) => updateFormData("additionalSecurity", e.target.value)}
          rows={3}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Autres mesures de sécurité..."
        />
      </div>
    </div>
  );
}

function Step7Revenue({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Sources de revenus
        </label>
        <textarea
          value={formData.revenueStreams || ""}
          onChange={(e) => updateFormData("revenueStreams", e.target.value)}
          rows={4}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Décrivez les différentes sources de revenus de l'actif..."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Fréquence des revenus
          </label>
          <select
            value={formData.revenueFrequency || ""}
            onChange={(e) => updateFormData("revenueFrequency", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          >
            <option value="">Sélectionnez...</option>
            <option value="monthly">Mensuel</option>
            <option value="quarterly">Trimestriel</option>
            <option value="semi-annual">Semestriel</option>
            <option value="annual">Annuel</option>
            <option value="irregular">Irrégulier</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
            Revenus attendus (annuel)
          </label>
          <input
            type="number"
            value={formData.expectedRevenue || ""}
            onChange={(e) => updateFormData("expectedRevenue", e.target.value)}
            className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
            placeholder="500000"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Distribution des revenus
        </label>
        <textarea
          value={formData.revenueDistribution || ""}
          onChange={(e) => updateFormData("revenueDistribution", e.target.value)}
          rows={3}
          className="w-full rounded-xl border-2 border-slate-300 bg-white/80 px-5 py-4 backdrop-blur-sm transition-all focus:border-violet-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:focus:border-violet-400"
          placeholder="Décrivez comment les revenus seront distribués aux investisseurs..."
        />
      </div>
    </div>
  );
}

function Step8Documents({
  formData,
  updateFormData,
  errors,
}: {
  formData: Partial<FormData>;
  updateFormData: (field: keyof FormData, value: any) => void;
  errors: Record<string, string>;
}) {
  const documentTypes = [
    "Titre de propriété",
    "Certificat d'authenticité",
    "Évaluation d'actif",
    "Contrat d'assurance",
    "Documents KYC/AML",
    "Rapport d'audit",
    "Autre",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      updateFormData("documents", [...(formData.documents || []), ...files]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 p-5 dark:from-amber-900/20 dark:to-orange-900/20 dark:border-amber-800/50">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
              <WarningIcon className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Veuillez uploader tous les documents nécessaires. Formats acceptés : PDF, DOC, DOCX, JPG, PNG
            </p>
          </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Types de documents requis
        </label>
        <div className="grid gap-2 md:grid-cols-2">
          {documentTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2 rounded-lg border-2 border-slate-200 p-3 dark:border-slate-700">
              <input
                type="checkbox"
                checked={formData.documentTypes?.includes(type) || false}
                onChange={(e) => {
                  const current = formData.documentTypes || [];
                  if (e.target.checked) {
                    updateFormData("documentTypes", [...current, type]);
                  } else {
                    updateFormData(
                      "documentTypes",
                      current.filter((t) => t !== type)
                    );
                  }
                }}
                className="h-5 w-5 rounded border-2 border-slate-300 text-violet-600 transition-all focus:ring-2 focus:ring-violet-500/20 dark:border-slate-600"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
          Upload des documents
        </label>
        <div className="group relative overflow-hidden rounded-2xl border-2 border-dashed border-violet-300 bg-gradient-to-br from-violet-50/50 to-purple-50/50 p-12 text-center transition-all hover:border-violet-500 hover:shadow-lg dark:border-violet-700 dark:from-violet-900/20 dark:to-purple-900/20">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex cursor-pointer items-center space-x-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:from-violet-700 hover:to-purple-700 hover:shadow-xl"
          >
            <UploadIcon className="h-5 w-5" />
            <span>Sélectionner des fichiers</span>
          </label>
          <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">
            Glissez-déposez ou cliquez pour sélectionner
          </p>
        </div>

        {formData.documents && formData.documents.length > 0 && (
          <div className="mt-4 space-y-2">
            <h4 className="font-semibold text-slate-900 dark:text-white">Fichiers sélectionnés :</h4>
            {formData.documents.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 p-4 dark:from-violet-900/20 dark:to-purple-900/20 dark:border-violet-800/50"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600">
                    <DocumentIcon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{file.name}</span>
                </div>
                <button
                  onClick={() => {
                    const newFiles = formData.documents?.filter((_, i) => i !== index) || [];
                    updateFormData("documents", newFiles);
                  }}
                  className="rounded-lg p-2 text-red-500 transition-colors hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

