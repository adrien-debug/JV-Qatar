"use client";

import { useState } from "react";

export default function LegalNotesPage() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<"uae" | "usa" | "comparison">("uae");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Legal Notes & Compliance
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Comprehensive legal framework analysis for RWA tokenization in UAE
          and USA
        </p>
      </div>

      {/* Jurisdiction Toggle */}
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setSelectedJurisdiction("uae")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedJurisdiction === "uae"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          UAE (RAK ICC)
        </button>
        <button
          onClick={() => setSelectedJurisdiction("usa")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedJurisdiction === "usa"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          USA (Delaware LLC)
        </button>
        <button
          onClick={() => setSelectedJurisdiction("comparison")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedJurisdiction === "comparison"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          Comparison
        </button>
      </div>

      {/* Content */}
      {selectedJurisdiction === "uae" && <UAELegalNotes />}
      {selectedJurisdiction === "usa" && <USALegalNotes />}
      {selectedJurisdiction === "comparison" && <LegalComparison />}
    </div>
  );
}

function UAELegalNotes() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          UAE - RAK ICC Legal Framework
        </h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Ras Al Khaimah International Corporate Centre (RAK ICC) is a premier
          free zone in the UAE that offers flexible corporate structures
          suitable for asset tokenization and SPV operations.
        </p>
      </div>

      {/* Permitted Activities */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ✅ Permitted Activities
        </h2>
        <div className="space-y-4">
          <LegalPoint
            title="Real Estate Holding"
            description="RAK ICC SPVs can hold real estate in UAE through Dubai Land Department (DLD) registration"
            details={[
              "SPV registered with DLD as property owner",
              "Legal title remains in DLD registry",
              "NFT represents economic ownership of SPV, not direct property title",
              "Transfer of NFT = transfer of SPV ownership = indirect property control",
            ]}
            type="permitted"
          />
          <LegalPoint
            title="Share Tokenization"
            description="Tokenization of company shares is permitted under RAK ICC regulations"
            details={[
              "Digital representation of ownership via NFT",
              "On-chain registry as official member registry",
              "Operating Agreement can include NFT ownership clauses",
              "Blockchain transactions recognized as valid transfers",
            ]}
            type="permitted"
          />
          <LegalPoint
            title="Foreign Ownership"
            description="100% foreign ownership allowed in RAK ICC"
            details={[
              "No local partner requirement",
              "Full control by international investors",
              "Ideal for global tokenization projects",
            ]}
            type="permitted"
          />
        </div>
      </div>

      {/* Limitations */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ⚠️ Limitations & Constraints
        </h2>
        <div className="space-y-4">
          <LegalPoint
            title="NFT ≠ Cadastral Title"
            description="Critical distinction: NFT does not replace official property title"
            details={[
              "Property title remains in DLD cadastral registry",
              "NFT represents ownership of SPV, not direct property ownership",
              "Legal ownership chain: Property → SPV → NFT",
              "Must maintain clear documentation of this structure",
            ]}
            type="limitation"
          />
          <LegalPoint
            title="Economic vs Legal Ownership"
            description="NFT provides economic rights, legal ownership remains with SPV"
            details={[
              "NFT holder has economic benefits (revenue, dividends)",
              "SPV remains legal entity owner of assets",
              "Clear Operating Agreement needed to define rights",
            ]}
            type="limitation"
          />
        </div>
      </div>

      {/* Compliance Requirements */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          📋 Compliance Requirements
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ComplianceCard
            title="KYC/AML"
            requirements={[
              "KYC verification for all initial NFT holders",
              "AML screening for all investors",
              "Ongoing monitoring of transactions",
              "Reporting suspicious activities to authorities",
            ]}
          />
          <ComplianceCard
            title="Corporate Governance"
            requirements={[
              "Annual audit requirements",
              "Corporate secretary services",
              "Maintenance of company records",
              "Filing annual returns",
            ]}
          />
          <ComplianceCard
            title="Tax Obligations"
            requirements={[
              "Tax reporting (if applicable)",
              "VAT registration if required",
              "Transfer pricing documentation",
              "Double taxation treaty benefits",
            ]}
          />
          <ComplianceCard
            title="DLD Registration"
            requirements={[
              "Property registration with DLD",
              "Title deed in SPV name",
              "Property valuation certificates",
              "NOC from relevant authorities",
            ]}
          />
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          🔒 Security & Best Practices
        </h2>
        <div className="space-y-4">
          <Recommendation
            title="Operating Agreement Modification"
            description="Include explicit clauses regarding NFT ownership"
            details={[
              "'100% of company shares are represented by a unique NFT'",
              "Define transfer mechanisms and ownership rights",
              "Specify dispute resolution procedures",
              "Include multi-sig requirements for critical decisions",
            ]}
          />
          <Recommendation
            title="Smart Contract Security"
            description="Implement robust security measures"
            details={[
              "Audit smart contracts by reputable firms",
              "Implement multi-sig wallet for NFT transfers",
              "Use timelocks for critical functions",
              "Regular security updates and monitoring",
            ]}
          />
          <Recommendation
            title="Legal Documentation"
            description="Maintain comprehensive legal documentation"
            details={[
              "Operating Agreement with NFT clauses",
              "Legal opinion on structure validity",
              "Property title documents",
              "KYC/AML records",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function USALegalNotes() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          USA - Delaware LLC Legal Framework
        </h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Delaware LLC is the global standard for tokenization structures,
          offering maximum flexibility and strong legal precedents for digital
          asset ownership and blockchain-based corporate governance.
        </p>
      </div>

      {/* Advantages */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ✅ Advantages
        </h2>
        <div className="space-y-4">
          <LegalPoint
            title="Global Standard"
            description="Delaware is the world's leading jurisdiction for corporate structures"
            details={[
              "Recognized by investors and regulators globally",
              "Extensive case law and legal precedents",
              "Flexible Operating Agreement customization",
              "Strong protection of member rights",
            ]}
            type="permitted"
          />
          <LegalPoint
            title="Tokenization-Friendly"
            description="Strong legal framework for digital asset tokenization"
            details={[
              "Operating Agreements can specify digital ownership",
              "On-chain registries recognized as valid",
              "Blockchain transfers accepted as ownership changes",
              "Legal precedents supporting tokenization structures",
            ]}
            type="permitted"
          />
          <LegalPoint
            title="Flexibility"
            description="Maximum flexibility in structuring"
            details={[
              "Custom membership interest definitions",
              "Flexible distribution mechanisms",
              "Governance structures adaptable to tokenomics",
              "Private or public offerings possible",
            ]}
            type="permitted"
          />
        </div>
      </div>

      {/* Securities Law Considerations */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ⚠️ Securities Law Considerations
        </h2>
        <div className="space-y-4">
          <LegalPoint
            title="Howey Test Analysis"
            description="ERC-20 tokens may be considered securities under SEC regulations"
            details={[
              "Investment of money: ✅ Yes (purchase of tokens)",
              "Common enterprise: ✅ Yes (SPV operations)",
              "Expectation of profits: ✅ Yes (revenue distribution)",
              "Efforts of others: ✅ Yes (SPV management)",
              "Result: Likely classified as security token",
            ]}
            type="limitation"
          />
          <LegalPoint
            title="Compliance Options"
            description="Several regulatory paths available"
            details={[
              "Regulation D (Reg D) - Private placement exemption",
              "Regulation S (Reg S) - Offshore offering exemption",
              "Regulation A+ - Mini-IPO for public offerings",
              "Security token registration (if public)",
            ]}
            type="limitation"
          />
          <LegalPoint
            title="Accredited Investors"
            description="Private placements typically limited to accredited investors"
            details={[
              "Individual: $200k+ annual income or $1M+ net worth",
              "Institutional: Banks, investment companies, etc.",
              "KYC/AML requirements mandatory",
              "Restricted transfer periods (Rule 144)",
            ]}
            type="limitation"
          />
        </div>
      </div>

      {/* Best Practices */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          📋 Best Practices
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ComplianceCard
            title="Operating Agreement"
            requirements={[
              "Clear digital ownership clauses",
              "NFT representation of membership interest",
              "Transfer mechanisms defined",
              "Governance and voting rights specified",
            ]}
          />
          <ComplianceCard
            title="Securities Compliance"
            requirements={[
              "Legal opinion on securities classification",
              "Appropriate exemption or registration",
              "Investor accreditation verification",
              "Transfer restrictions implementation",
            ]}
          />
          <ComplianceCard
            title="On-Chain Registry"
            requirements={[
              "Blockchain as official member registry",
              "Immutable ownership records",
              "Audit trail for compliance",
              "Integration with traditional records",
            ]}
          />
          <ComplianceCard
            title="Tax Structure"
            requirements={[
              "Pass-through taxation benefits",
              "State tax considerations",
              "International tax planning",
              "Transfer pricing documentation",
            ]}
          />
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          🔒 Security & Protection
        </h2>
        <Recommendation
          title="Investor Protection"
          description="Measures to protect token holders"
          details={[
            "Clear disclosure of risks and rights",
            "Smart contract security audits",
            "Insurance coverage for smart contract failures",
            "Dispute resolution mechanisms",
            "Regular financial reporting",
          ]}
        />
      </div>
    </div>
  );
}

function LegalComparison() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          UAE vs USA: Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-300 dark:border-slate-600">
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  Aspect
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  UAE (RAK ICC)
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  USA (Delaware LLC)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <ComparisonRow
                aspect="Setup Time"
                uae="1-2 weeks"
                usa="1-2 weeks"
              />
              <ComparisonRow
                aspect="Cost"
                uae="Lower initial costs"
                usa="Moderate costs, ongoing fees"
              />
              <ComparisonRow
                aspect="Real Estate Holding"
                uae="✅ Permitted (via DLD)"
                usa="✅ Permitted"
              />
              <ComparisonRow
                aspect="Share Tokenization"
                uae="✅ Permitted"
                usa="✅ Permitted (securities compliance required)"
              />
              <ComparisonRow
                aspect="Foreign Ownership"
                uae="✅ 100% allowed"
                usa="✅ 100% allowed"
              />
              <ComparisonRow
                aspect="Securities Regulation"
                uae="Less strict (but evolving)"
                usa="Strict (SEC compliance)"
              />
              <ComparisonRow
                aspect="Tax Benefits"
                uae="Zero corporate tax (UAE)"
                usa="Pass-through taxation"
              />
              <ComparisonRow
                aspect="Legal Precedents"
                uae="Limited (emerging)"
                usa="Extensive (global standard)"
              />
              <ComparisonRow
                aspect="Investor Recognition"
                uae="Growing"
                usa="Global (highest)"
              />
              <ComparisonRow
                aspect="Best For"
                uae="UAE real estate, Middle East focus, tax optimization"
                usa="Global investors, securities offerings, maximum flexibility"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommendation */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          Recommendation for BlockBank
        </h2>
        <div className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            <strong>For UAE Real Estate Projects:</strong> Use RAK ICC SPV
            structure with DLD property registration. Ideal for regional
            investors and tax optimization.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>For Global/International Projects:</strong> Use Delaware LLC
            for maximum investor recognition, regulatory clarity, and legal
            precedents. Especially suitable for securities offerings.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            <strong>Hybrid Approach:</strong> Consider holding company structure
            (Delaware LLC) with RAK ICC subsidiaries for specific asset types.
          </p>
        </div>
      </div>
    </div>
  );
}

function LegalPoint({
  title,
  description,
  details,
  type,
}: {
  title: string;
  description: string;
  details: string[];
  type: "permitted" | "limitation";
}) {
  const bgColor =
    type === "permitted"
      ? "bg-green-50 dark:bg-green-900/20"
      : "bg-yellow-50 dark:bg-yellow-900/20";
  const borderColor =
    type === "permitted"
      ? "border-green-200 dark:border-green-800"
      : "border-yellow-200 dark:border-yellow-800";

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-6`}>
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-slate-700 dark:text-slate-300">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComplianceCard({
  title,
  requirements,
}: {
  title: string;
  requirements: string[];
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-2">
        {requirements.map((req, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-indigo-600">✓</span>
            {req}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Recommendation({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-slate-700 dark:text-slate-300">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2">→</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonRow({
  aspect,
  uae,
  usa,
}: {
  aspect: string;
  uae: string;
  usa: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
        {aspect}
      </td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{uae}</td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{usa}</td>
    </tr>
  );
}




