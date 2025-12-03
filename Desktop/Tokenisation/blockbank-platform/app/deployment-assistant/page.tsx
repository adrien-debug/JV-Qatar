"use client";

import { useState } from "react";

type AssetType = "mining" | "real-estate" | "luxury-goods" | "other";
type Jurisdiction = "rak-icc" | "delaware-llc" | "both";
type TokenizationType = "spv-ownership" | "security-interest" | "direct";
type InvestorType = "accredited-only" | "retail" | "both";

interface DeploymentData {
  // Informations de base
  projectName: string;
  assetType: AssetType;
  assetValue: number;
  location: string;
  
  // Juridiction
  jurisdiction: Jurisdiction;
  
  // Tokenisation
  tokenizationType: TokenizationType;
  totalSupply: number;
  investorType: InvestorType;
  
  // Collatéral
  collateralDescription: string;
  serialNumbers?: string;
  
  // Financement (pour luxury goods)
  financingRequired?: boolean;
  downPaymentPercentage?: number;
  
  // Assurance
  insuranceRequired: boolean;
  insuranceAmount?: number;
}

export default function DeploymentAssistant() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Partial<DeploymentData>>({});
  const [results, setResults] = useState<any>(null);

  const updateData = (field: keyof DeploymentData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Générer les recommandations et documents
    const recommendations = generateLegalScheme(data as DeploymentData);
    setResults(recommendations);
    setStep(4); // Aller à la page de résultats
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          🤖 Assistant de Déploiement BlockBank
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Génération automatique de schéma légal, statuts et documentation technique
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= s
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    step > s ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>Informations</span>
          <span>Détails</span>
          <span>Résultats</span>
        </div>
      </div>

      {/* Step 1: Informations de base */}
      {step === 1 && (
        <Step1Form data={data} updateData={updateData} onNext={() => setStep(2)} />
      )}

      {/* Step 2: Détails techniques */}
      {step === 2 && (
        <Step2Form
          data={data}
          updateData={updateData}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}

      {/* Step 3: Révision */}
      {step === 3 && (
        <Step3Review
          data={data as DeploymentData}
          onBack={() => setStep(2)}
          onSubmit={handleSubmit}
        />
      )}

      {/* Step 4: Résultats */}
      {step === 4 && results && (
        <ResultsPage results={results} data={data as DeploymentData} />
      )}
    </div>
  );
}

// STEP 1: Informations de base
function Step1Form({
  data,
  updateData,
  onNext,
}: {
  data: Partial<DeploymentData>;
  updateData: (field: keyof DeploymentData, value: any) => void;
  onNext: () => void;
}) {
  const canProceed =
    data.projectName && data.assetType && data.assetValue && data.location;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Étape 1 : Informations du Projet
      </h2>

      <div className="space-y-6">
        <FormField
          label="Nom du Projet"
          required
          value={data.projectName || ""}
          onChange={(e) => updateData("projectName", e.target.value)}
          placeholder="Ex: BlockBank Mining SPV #001"
        />

        <FormField
          label="Type d'Actif"
          required
          type="select"
          value={data.assetType || ""}
          onChange={(e) => updateData("assetType", e.target.value)}
          options={[
            { value: "mining", label: "⛏️ Mining (Équipement, BTC, etc.)" },
            { value: "real-estate", label: "🏠 Immobilier" },
            { value: "luxury-goods", label: "💎 Biens de Luxe (Montres, Sacs, etc.)" },
            { value: "other", label: "📦 Autre" },
          ]}
        />

        <FormField
          label="Valeur de l'Actif (USD)"
          required
          type="number"
          value={data.assetValue?.toString() || ""}
          onChange={(e) => updateData("assetValue", parseFloat(e.target.value))}
          placeholder="5000000"
        />

        <FormField
          label="Localisation de l'Actif"
          required
          value={data.location || ""}
          onChange={(e) => updateData("location", e.target.value)}
          placeholder="Ex: Dubai, UAE ou New York, USA"
        />

        <FormField
          label="Type de Tokenisation"
          required
          type="select"
          value={data.tokenizationType || ""}
          onChange={(e) => updateData("tokenizationType", e.target.value)}
          options={[
            {
              value: "spv-ownership",
              label: "🎫 Ownership SPV (100% des parts via NFT)",
            },
            {
              value: "security-interest",
              label: "🔒 Security Interest (Garantie sur bien)",
            },
            {
              value: "direct",
              label: "📄 Tokenisation Directe",
            },
          ]}
        />
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            canProceed
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "cursor-not-allowed bg-slate-300 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
          }`}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

// STEP 2: Détails techniques
function Step2Form({
  data,
  updateData,
  onBack,
  onNext,
}: {
  data: Partial<DeploymentData>;
  updateData: (field: keyof DeploymentData, value: any) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Étape 2 : Détails Techniques & Juridiction
      </h2>

      <div className="space-y-6">
        <FormField
          label="Juridiction Recommandée"
          required
          type="select"
          value={data.jurisdiction || ""}
          onChange={(e) => updateData("jurisdiction", e.target.value)}
          options={[
            { value: "rak-icc", label: "🇦🇪 RAK ICC (UAE) - Pour actifs MENA" },
            { value: "delaware-llc", label: "🇺🇸 Delaware LLC (USA) - Standard global" },
            { value: "both", label: "🌍 Les deux (Structure hybride)" },
          ]}
          helpText={
            data.assetType === "luxury-goods"
              ? "Pour luxury goods, RAK ICC ou Delaware selon la localisation des clients"
              : undefined
          }
        />

        <FormField
          label="Type d'Investisseurs"
          required
          type="select"
          value={data.investorType || ""}
          onChange={(e) => updateData("investorType", e.target.value)}
          options={[
            {
              value: "accredited-only",
              label: "✅ Investisseurs Accrédités Uniquement",
            },
            { value: "retail", label: "👥 Investisseurs Retail (Public)" },
            { value: "both", label: "🌐 Les deux types" },
          ]}
        />

        <FormField
          label="Supply Totale de Tokens"
          required
          type="number"
          value={data.totalSupply?.toString() || ""}
          onChange={(e) => updateData("totalSupply", parseInt(e.target.value))}
          placeholder="1000000"
          helpText="Nombre total de tokens ERC-20 à émettre"
        />

        <FormField
          label="Description du Collatéral"
          required
          type="textarea"
          value={data.collateralDescription || ""}
          onChange={(e) => updateData("collateralDescription", e.target.value)}
          placeholder="Décrivez en détail les actifs/collatéraux (équipement mining, propriété immobilière, montres, etc.)"
        />

        {data.assetType === "luxury-goods" && (
          <>
            <FormField
              label="Financement Requis?"
              type="checkbox"
              checked={data.financingRequired || false}
              onChange={(e) => updateData("financingRequired", e.target.checked)}
            />

            {data.financingRequired && (
              <FormField
                label="Pourcentage d'Apport Initial (%)"
                type="number"
                value={data.downPaymentPercentage?.toString() || "25"}
                onChange={(e) =>
                  updateData("downPaymentPercentage", parseInt(e.target.value))
                }
                placeholder="25"
              />
            )}

            <FormField
              label="Numéros de Série (si applicable)"
              type="textarea"
              value={data.serialNumbers || ""}
              onChange={(e) => updateData("serialNumbers", e.target.value)}
              placeholder="Liste des numéros de série des biens de luxe"
            />
          </>
        )}

        <FormField
          label="Assurance Requise?"
          type="checkbox"
          checked={data.insuranceRequired || false}
          onChange={(e) => updateData("insuranceRequired", e.target.checked)}
        />

        {data.insuranceRequired && (
          <FormField
            label="Montant de l'Assurance (USD)"
            type="number"
            value={data.insuranceAmount?.toString() || ""}
            onChange={(e) => updateData("insuranceAmount", parseFloat(e.target.value))}
            placeholder="5000000"
          />
        )}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onBack}
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
        >
          ← Retour
        </button>
        <button
          onClick={onNext}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

// STEP 3: Révision
function Step3Review({
  data,
  onBack,
  onSubmit,
}: {
  data: DeploymentData;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Étape 3 : Révision & Génération
      </h2>

      <div className="mb-6 space-y-4 rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
        <ReviewRow label="Nom du Projet" value={data.projectName} />
        <ReviewRow label="Type d'Actif" value={formatAssetType(data.assetType)} />
        <ReviewRow label="Valeur" value={`$${data.assetValue?.toLocaleString()}`} />
        <ReviewRow label="Localisation" value={data.location} />
        <ReviewRow
          label="Juridiction"
          value={formatJurisdiction(data.jurisdiction)}
        />
        <ReviewRow
          label="Type de Tokenisation"
          value={formatTokenizationType(data.tokenizationType)}
        />
        <ReviewRow
          label="Investisseurs"
          value={formatInvestorType(data.investorType)}
        />
        <ReviewRow label="Supply Totale" value={data.totalSupply?.toLocaleString()} />
      </div>

      <div className="mb-6 rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20">
        <h3 className="mb-2 font-semibold text-indigo-900 dark:text-indigo-100">
          ⚡ Prêt à générer
        </h3>
        <p className="text-sm text-indigo-700 dark:text-indigo-300">
          Cliquez sur "Générer le Schéma Légal" pour obtenir :
        </p>
        <ul className="mt-2 space-y-1 text-sm text-indigo-700 dark:text-indigo-300">
          <li>• Schéma légal recommandé</li>
          <li>• Statuts et Operating Agreement</li>
          <li>• Contrats nécessaires</li>
          <li>• Spécifications smart contracts</li>
          <li>• Checklist de compliance</li>
        </ul>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
        >
          ← Retour
        </button>
        <button
          onClick={onSubmit}
          className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:from-indigo-700 hover:to-purple-700"
        >
          🚀 Générer le Schéma Légal
        </button>
      </div>
    </div>
  );
}

// Composants utilitaires
function FormField({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  options,
  helpText,
  checked,
}: {
  label: string;
  required?: boolean;
  type?: "text" | "number" | "textarea" | "select" | "checkbox";
  value: string | number | boolean;
  onChange: (e: any) => void;
  placeholder?: string;
  options?: { value: string; label: string }[];
  helpText?: string;
  checked?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900 dark:text-white">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {type === "select" && options ? (
        <select
          value={value as string}
          onChange={onChange}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
        >
          <option value="">Sélectionnez...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          value={value as string}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
        />
      ) : type === "checkbox" ? (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={checked || false}
            onChange={onChange}
            className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
            Oui
          </span>
        </div>
      ) : (
        <input
          type={type}
          value={value as string | number}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
        />
      )}
      {helpText && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {helpText}
        </p>
      )}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value?: string | number }) {
  return (
    <div className="flex justify-between border-b border-slate-200 pb-2 dark:border-slate-700">
      <span className="font-medium text-slate-600 dark:text-slate-400">{label}:</span>
      <span className="font-semibold text-slate-900 dark:text-white">{value || "N/A"}</span>
    </div>
  );
}

// Fonctions de formatage
function formatAssetType(type?: AssetType) {
  const map: Record<AssetType, string> = {
    mining: "⛏️ Mining",
    "real-estate": "🏠 Immobilier",
    "luxury-goods": "💎 Biens de Luxe",
    other: "📦 Autre",
  };
  return type ? map[type] : "N/A";
}

function formatJurisdiction(jurisdiction?: Jurisdiction) {
  const map: Record<Jurisdiction, string> = {
    "rak-icc": "🇦🇪 RAK ICC (UAE)",
    "delaware-llc": "🇺🇸 Delaware LLC (USA)",
    both: "🌍 Les deux",
  };
  return jurisdiction ? map[jurisdiction] : "N/A";
}

function formatTokenizationType(type?: TokenizationType) {
  const map: Record<TokenizationType, string> = {
    "spv-ownership": "🎫 Ownership SPV",
    "security-interest": "🔒 Security Interest",
    direct: "📄 Directe",
  };
  return type ? map[type] : "N/A";
}

function formatInvestorType(type?: InvestorType) {
  const map: Record<InvestorType, string> = {
    "accredited-only": "✅ Accrédités uniquement",
    retail: "👥 Retail (Public)",
    both: "🌐 Les deux",
  };
  return type ? map[type] : "N/A";
}

// Génération du schéma légal (logique principale)
function generateLegalScheme(data: DeploymentData) {
  return {
    recommendedJurisdiction: determineJurisdiction(data),
    legalStructure: generateLegalStructure(data),
    contracts: generateContracts(data),
    smartContractSpecs: generateSmartContractSpecs(data),
    compliance: generateCompliance(data),
    checklist: generateChecklist(data),
    operatingAgreement: generateOperatingAgreement(data),
    securityInterestAgreement: data.tokenizationType === "security-interest" 
      ? generateSecurityInterestAgreement(data) 
      : null,
    smartContractCode: generateSmartContractCode(data),
  };
}

// Fonctions de génération (implémentées dans ResultsPage)
function determineJurisdiction(data: DeploymentData) {
  if (data.jurisdiction === "both") {
    return {
      primary: "delaware-llc",
      secondary: "rak-icc",
      reason:
        "Structure hybride recommandée pour flexibilité maximale et optimisation fiscale",
    };
  }
  if (data.jurisdiction === "rak-icc") {
    return {
      primary: "rak-icc",
      reason:
        "Idéal pour actifs MENA, immobilier UAE, et projets régionaux avec optimisation fiscale",
    };
  }
  return {
    primary: "delaware-llc",
    reason:
      "Standard global, meilleure reconnaissance internationale, idéal pour investisseurs accrédités",
  };
}

function generateLegalStructure(data: DeploymentData) {
  const isRAK = data.jurisdiction === "rak-icc" || data.jurisdiction === "both";
  const isDelaware = data.jurisdiction === "delaware-llc" || data.jurisdiction === "both";
  
  return {
    spvType: data.jurisdiction === "rak-icc" ? "RAK ICC" : 
             data.jurisdiction === "delaware-llc" ? "Delaware LLC" : "Hybrid (Delaware + RAK)",
    operatingAgreement: true,
    securityInterest: data.tokenizationType === "security-interest",
    incorporationSteps: [
      "1. Préparer les documents d'incorporation",
      "2. Soumettre auprès du registre compétent",
      "3. Créer l'Operating Agreement avec clause NFT",
      "4. Obtenir le certificat d'incorporation",
      "5. Ouvrir compte bancaire corporate",
    ],
    timeFrame: "2-4 semaines",
    estimatedCost: data.jurisdiction === "rak-icc" ? "$5,000 - $10,000" : "$3,000 - $8,000",
  };
}

function generateContracts(data: DeploymentData) {
  const contracts: any[] = [];
  
  contracts.push({
    name: "Operating Agreement / Statuts",
    required: true,
    description: "Statuts de la société avec clauses spécifiques de tokenisation",
    clauses: [
      "Clause NFT : '100% des parts de la société sont représentées par un NFT unique'",
      "Reconnaissance du registre on-chain comme registre officiel des membres",
      "Mécanisme de transfert de propriété via NFT",
      "Gouvernance et droits de vote",
    ],
  });

  if (data.tokenizationType === "security-interest") {
    contracts.push({
      name: data.jurisdiction === "rak-icc" ? "Pledge Agreement" : "Security Interest Agreement",
      required: true,
      description: "Contrat de garantie sur les actifs",
      clauses: [
        "Description précise du collatéral",
        "Numéros de série (si applicable)",
        "Droits du créancier en cas de défaut",
        "Procédure d'exécution",
        "Enregistrement auprès des autorités compétentes",
      ],
    });
  }

  if (data.investorType === "retail" || data.investorType === "both") {
    contracts.push({
      name: "Subscription Agreement",
      required: true,
      description: "Contrat d'abonnement pour investisseurs",
      clauses: [
        "Disclosures de risques",
        "Qualifications des investisseurs",
        "Représentations et garanties",
        "Restrictions de transfert",
      ],
    });
  }

  contracts.push({
    name: "Custody Agreement",
    required: true,
    description: "Contrat de garde pour les actifs physiques",
    clauses: [
      "Responsabilités du custodian",
      "Assurance requise",
      "Audits et inspections",
      "Conditions de transfert",
    ],
  });

  return contracts;
}

function generateSmartContractSpecs(data: DeploymentData) {
  return {
    nftContract: {
      standard: "ERC-721",
      name: `${data.projectName} Master NFT`,
      features: [
        "Représente 100% des parts SPV",
        "Transferable",
        "Non-divisible",
        "Métadonnées on-chain avec IPFS",
      ],
      metadata: {
        spvName: data.projectName,
        assetType: data.assetType,
        assetValue: data.assetValue,
        jurisdiction: data.jurisdiction,
      },
    },
    vaultContract: {
      purpose: "Lock le NFT Master et émettre les ERC-20",
      functions: [
        "lockNFT(uint256 tokenId)",
        "mintShares(address to, uint256 amount)",
        "distributeRevenue() payable",
        "claimRevenue()",
        "buybackAndBurn(uint256 amount)",
        "releaseNFT()",
      ],
      security: [
        "Multi-sig pour fonctions critiques",
        "Timelock pour modifications",
        "Pause mechanism en cas d'urgence",
      ],
    },
    erc20Contract: {
      standard: "ERC-20",
      name: `${data.projectName?.toUpperCase().replace(/\s+/g, "-")} SHARES`,
      symbol: data.projectName?.substring(0, 6).toUpperCase() + "-1",
      totalSupply: data.totalSupply,
      features: [
        "Distribution automatique des revenus",
        "Governance (optionnel)",
        "Buyback mechanism",
        "Transfer restrictions (si applicable)",
      ],
    },
    deploymentNetwork: "Ethereum Mainnet ou Polygon",
    auditRequired: true,
  };
}

function generateCompliance(data: DeploymentData) {
  const compliance: any = {
    kycAml: {
      required: true,
      description: "KYC/AML pour tous les investisseurs",
      steps: [
        "Vérification d'identité (passport, ID)",
        "Proof of address",
        "Source of funds",
        "Sanctions screening",
        "PEP screening",
      ],
    },
    securities: {
      required: data.investorType === "retail" || data.investorType === "both",
      description: data.jurisdiction === "delaware-llc" 
        ? "Compliance SEC (Reg D, Reg S, ou Reg A+)" 
        : "Compliance locale des valeurs mobilières",
      exemptions: data.investorType === "accredited-only" 
        ? ["Regulation D (506c) - Accredited investors only"]
        : ["Regulation A+ - Mini-IPO"],
    },
    tax: {
      required: true,
      description: "Structuring fiscale et reporting",
      considerations: [
        "Tax reporting annuel",
        "Transfer pricing documentation",
        "Double taxation treaties",
        "VAT (si applicable)",
      ],
    },
    insurance: {
      required: data.insuranceRequired || false,
      description: "Assurance des actifs",
      coverage: data.insuranceAmount 
        ? `$${data.insuranceAmount.toLocaleString()} de couverture`
        : "À déterminer",
    },
  };

  if (data.jurisdiction === "rak-icc") {
    compliance.dld = {
      required: data.assetType === "real-estate",
      description: "Enregistrement DLD pour propriétés immobilières UAE",
    };
  }

  return compliance;
}

function generateChecklist(data: DeploymentData) {
  const checklist: any[] = [];

  // Phase 1: Préparation
  checklist.push({
    phase: "Phase 1 : Préparation",
    items: [
      { task: "Incorporation SPV", status: "pending" },
      { task: "Rédaction Operating Agreement", status: "pending" },
      { task: "Transfert des actifs au SPV", status: "pending" },
      { task: "Valuation des actifs par expert", status: "pending" },
    ],
  });

  // Phase 2: Tokenisation
  checklist.push({
    phase: "Phase 2 : Tokenisation",
    items: [
      { task: "Développement smart contract NFT", status: "pending" },
      { task: "Mint NFT Master Ownership", status: "pending" },
      { task: "Création métadonnées IPFS", status: "pending" },
      { task: "Lock NFT dans Vault", status: "pending" },
    ],
  });

  // Phase 3: Fractionalisation
  checklist.push({
    phase: "Phase 3 : Fractionalisation",
    items: [
      { task: "Développement smart contract ERC-20", status: "pending" },
      { task: "Déploiement sur blockchain", status: "pending" },
      { task: "Configuration supply et distribution", status: "pending" },
      { task: "Test des mécanismes de distribution", status: "pending" },
    ],
  });

  // Phase 4: Compliance
  checklist.push({
    phase: "Phase 4 : Compliance & Sécurité",
    items: [
      { task: "Audit smart contracts", status: "pending" },
      { task: "Setup KYC/AML platform", status: "pending" },
      { task: "Obtention licences nécessaires", status: "pending" },
      { task: "Mise en place assurance", status: data.insuranceRequired ? "pending" : "skip" },
    ],
  });

  // Phase 5: Lancement
  checklist.push({
    phase: "Phase 5 : Lancement",
    items: [
      { task: "Onboarding investisseurs", status: "pending" },
      { task: "Distribution initiale des tokens", status: "pending" },
      { task: "Listing sur DEX (si applicable)", status: "pending" },
      { task: "Marketing et communication", status: "pending" },
    ],
  });

  return checklist;
}

function generateOperatingAgreement(data: DeploymentData) {
  const jurisdictionName = data.jurisdiction === "rak-icc" 
    ? "Ras Al Khaimah International Corporate Centre (RAK ICC), UAE"
    : "Delaware, USA";

  return {
    title: `Operating Agreement - ${data.projectName}`,
    sections: [
      {
        name: "Article 1: Formation",
        content: `This Limited Liability Company (the "Company") is formed under the laws of ${jurisdictionName}...`,
      },
      {
        name: "Article 2: Digital Ownership",
        content: `100% of the Company's membership interests are represented by a unique, non-fungible token (NFT) issued on the Ethereum blockchain...`,
      },
      {
        name: "Article 3: NFT Transfer Mechanism",
        content: `Ownership of the Master NFT constitutes 100% economic ownership of the Company. Transfer of the NFT equals transfer of 100% membership interest...`,
      },
      {
        name: "Article 4: On-Chain Registry",
        content: `The blockchain registry serves as the official member registry. The Company recognizes on-chain ownership records as valid and binding...`,
      },
      {
        name: "Article 5: Governance",
        content: `The NFT holder has full governance rights, including voting on major decisions, appointment of managers, and distribution of profits...`,
      },
    ],
  };
}

function generateSecurityInterestAgreement(data: DeploymentData) {
  return {
    title: data.jurisdiction === "rak-icc" 
      ? "Pledge Agreement"
      : "Security Interest Agreement",
    parties: [
      "BlockBank (Lender/Secured Party)",
      "Client (Borrower)",
    ],
    collateral: data.collateralDescription,
    loanAmount: data.financingRequired && data.downPaymentPercentage
      ? `$${((data.assetValue * (100 - data.downPaymentPercentage)) / 100).toLocaleString()} (${100 - data.downPaymentPercentage}% de $${data.assetValue?.toLocaleString()})`
      : "À déterminer",
    securityInterest: "BlockBank holds a perfected security interest on the collateral...",
    defaultRemedies: [
      "Right to seize collateral",
      "Right to sell collateral",
      "Right to apply proceeds to outstanding loan",
    ],
  };
}

function generateSmartContractCode(data: DeploymentData) {
  return {
    nftContract: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ${data.projectName?.replace(/\s+/g, "")}MasterNFT is ERC721 {
    struct SPVMetadata {
        string spvName;
        string assetType;
        uint256 assetValue;
        string jurisdiction;
        string ipfsMetadata;
    }
    
    mapping(uint256 => SPVMetadata) public spvData;
    uint256 private _tokenIdCounter;
    
    constructor() ERC721("${data.projectName} Master", "${data.projectName?.substring(0, 4).toUpperCase()}") {}
    
    function mintMasterNFT(
        address to,
        SPVMetadata memory metadata
    ) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter++;
        _mint(to, tokenId);
        spvData[tokenId] = metadata;
        return tokenId;
    }
}`,
    vaultContract: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FractionalizationVault is Ownable {
    IERC721 public masterNFT;
    ERC20 public shareToken;
    uint256 public lockedTokenId;
    bool public isLocked;
    
    mapping(address => uint256) public pendingRevenue;
    uint256 public totalRevenue;
    
    constructor(address _masterNFT, address _shareToken) {
        masterNFT = IERC721(_masterNFT);
        shareToken = ERC20(_shareToken);
    }
    
    function lockNFT(uint256 tokenId) external onlyOwner {
        require(!isLocked, "NFT already locked");
        masterNFT.transferFrom(msg.sender, address(this), tokenId);
        lockedTokenId = tokenId;
        isLocked = true;
    }
    
    function distributeRevenue() external payable {
        require(isLocked, "NFT not locked");
        totalRevenue += msg.value;
        
        uint256 totalSupply = shareToken.totalSupply();
        uint256 perToken = msg.value / totalSupply;
        
        // Distribute to all holders proportionally
        // Implementation would iterate through holders
    }
    
    function claimRevenue() external {
        uint256 amount = pendingRevenue[msg.sender];
        require(amount > 0, "No revenue to claim");
        pendingRevenue[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}`,
  };
}

// Page de résultats complète
function ResultsPage({
  results,
  data,
}: {
  results: any;
  data: DeploymentData;
}) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:from-green-900/20 dark:to-emerald-900/20">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
          ✅ Schéma Légal Généré avec Succès
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Documentation complète pour : <strong>{data.projectName}</strong>
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700">
        {[
          { id: "overview", label: "📊 Vue d'ensemble" },
          { id: "legal", label: "⚖️ Structure Légale" },
          { id: "contracts", label: "📄 Contrats" },
          { id: "smart-contracts", label: "💻 Smart Contracts" },
          { id: "compliance", label: "✅ Compliance" },
          { id: "checklist", label: "✓ Checklist" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-t-lg px-4 py-2 font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && <OverviewTab results={results} data={data} />}
      {activeTab === "legal" && <LegalTab results={results} data={data} />}
      {activeTab === "contracts" && <ContractsTab results={results} data={data} />}
      {activeTab === "smart-contracts" && <SmartContractsTab results={results} data={data} />}
      {activeTab === "compliance" && <ComplianceTab results={results} data={data} />}
      {activeTab === "checklist" && <ChecklistTab results={results} data={data} />}
    </div>
  );
}

// Overview Tab
function OverviewTab({ results, data }: { results: any; data: DeploymentData }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          Recommandation Juridiction
        </h3>
        <div className="rounded-lg bg-indigo-50 p-6 dark:bg-indigo-900/20">
          <p className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
            {results.recommendedJurisdiction.primary === "rak-icc"
              ? "🇦🇪 RAK ICC (UAE)"
              : "🇺🇸 Delaware LLC (USA)"}
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            {results.recommendedJurisdiction.reason}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InfoCard
          title="Structure Légale"
          items={[
            `SPV Type: ${results.legalStructure.spvType}`,
            `Time Frame: ${results.legalStructure.timeFrame}`,
            `Estimated Cost: ${results.legalStructure.estimatedCost}`,
          ]}
        />
        <InfoCard
          title="Smart Contracts"
          items={[
            `NFT: ${results.smartContractSpecs.nftContract.name}`,
            `ERC-20: ${results.smartContractSpecs.erc20Contract.name}`,
            `Supply: ${data.totalSupply?.toLocaleString()} tokens`,
          ]}
        />
      </div>
    </div>
  );
}

// Legal Tab
function LegalTab({ results, data }: { results: any; data: DeploymentData }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Structure Légale Recommandée
        </h3>
        
        <div className="mb-6 space-y-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">Étapes d'Incorporation:</h4>
          <ul className="space-y-2">
            {results.legalStructure.incorporationSteps.map((step: string, idx: number) => (
              <li key={idx} className="flex items-start text-slate-700 dark:text-slate-300">
                <span className="mr-2 text-indigo-600">→</span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {results.operatingAgreement && (
          <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Operating Agreement - Sections Clés
            </h4>
            <div className="space-y-3">
              {results.operatingAgreement.sections.map((section: any, idx: number) => (
                <div key={idx} className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {section.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Contracts Tab
function ContractsTab({ results, data }: { results: any; data: DeploymentData }) {
  return (
    <div className="space-y-6">
      {results.contracts.map((contract: any, idx: number) => (
        <div key={idx} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {contract.name}
            </h3>
            {contract.required && (
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 dark:bg-red-900/50 dark:text-red-300">
                Requis
              </span>
            )}
          </div>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            {contract.description}
          </p>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
              Clauses Clés à Inclure:
            </h4>
            <ul className="space-y-2">
              {contract.clauses.map((clause: string, cIdx: number) => (
                <li key={cIdx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                  <span className="mr-2 text-indigo-600">•</span>
                  {clause}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// Smart Contracts Tab
function SmartContractsTab({ results, data }: { results: any; data: DeploymentData }) {
  return (
    <div className="space-y-6">
      {/* NFT Contract */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          NFT Master Contract (ERC-721)
        </h3>
        <div className="mb-4 space-y-2">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Nom:</strong> {results.smartContractSpecs.nftContract.name}
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Standard:</strong> {results.smartContractSpecs.nftContract.standard}
          </p>
        </div>
        <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
          <h4 className="mb-2 font-semibold">Fonctionnalités:</h4>
          <ul className="space-y-1">
            {results.smartContractSpecs.nftContract.features.map((f: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700 dark:text-slate-300">✓ {f}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 rounded-lg bg-slate-900 p-4">
          <pre className="overflow-x-auto text-xs text-green-400">
            <code>{results.smartContractCode.nftContract}</code>
          </pre>
        </div>
      </div>

      {/* ERC-20 Contract */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          ERC-20 Share Token
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard
            title="Détails du Token"
            items={[
              `Nom: ${results.smartContractSpecs.erc20Contract.name}`,
              `Symbole: ${results.smartContractSpecs.erc20Contract.symbol}`,
              `Supply: ${results.smartContractSpecs.erc20Contract.totalSupply?.toLocaleString()}`,
            ]}
          />
          <InfoCard
            title="Fonctionnalités"
            items={results.smartContractSpecs.erc20Contract.features}
          />
        </div>
      </div>

      {/* Vault Contract */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          Fractionalization Vault Contract
        </h3>
        <div className="mb-4 space-y-2">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Fonctions Principales:</strong>
          </p>
          <ul className="list-inside list-disc space-y-1">
            {results.smartContractSpecs.vaultContract.functions.map((f: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 font-mono">{f}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 rounded-lg bg-slate-900 p-4">
          <pre className="overflow-x-auto text-xs text-green-400">
            <code>{results.smartContractCode.vaultContract}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

// Compliance Tab
function ComplianceTab({ results, data }: { results: any; data: DeploymentData }) {
  return (
    <div className="space-y-6">
      {Object.entries(results.compliance).map(([key, item]: [string, any]) => (
        <div key={key} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {item.description || key}
            </h3>
            {item.required && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/50 dark:text-green-300">
                Requis
              </span>
            )}
          </div>
          
          {item.steps && (
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900 dark:text-white">Étapes:</h4>
              <ul className="space-y-1">
                {item.steps.map((step: string, idx: number) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                    <span className="mr-2 text-indigo-600">→</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.exemptions && (
            <div className="mt-4 space-y-2">
              <h4 className="font-semibold text-slate-900 dark:text-white">Exemptions:</h4>
              <ul className="space-y-1">
                {item.exemptions.map((ex: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-700 dark:text-slate-300">• {ex}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Checklist Tab
function ChecklistTab({ results, data }: { results: any; data: DeploymentData }) {
  return (
    <div className="space-y-6">
      {results.checklist.map((phase: any, idx: number) => (
        <div key={idx} className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
            {phase.phase}
          </h3>
          <div className="space-y-3">
            {phase.items.map((item: any, iIdx: number) => (
              <div
                key={iIdx}
                className={`flex items-center justify-between rounded-lg border-2 p-4 ${
                  item.status === "skip"
                    ? "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
                    : "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20"
                }`}
              >
                <span className="text-slate-900 dark:text-white">{item.task}</span>
                {item.status === "pending" && (
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                    En attente
                  </span>
                )}
                {item.status === "skip" && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                    Non applicable
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Component utilitaire
function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-slate-700 dark:text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

