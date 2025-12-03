"use client";

import { useState } from "react";

export default function SPVStructurePage() {
  const [selectedOption, setSelectedOption] = useState<"rak" | "delaware">(
    "rak"
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          SPV Structure
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          How BlockBank tokenizes assets through Special Purpose Vehicles
        </p>
      </div>

      {/* SPV Options Toggle */}
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setSelectedOption("rak")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedOption === "rak"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          RAK ICC (UAE)
        </button>
        <button
          onClick={() => setSelectedOption("delaware")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedOption === "delaware"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          Delaware LLC (USA)
        </button>
      </div>

      {/* SPV Creation Process */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          SPV Creation Process
        </h2>
        <div className="space-y-6">
          <ProcessStep
            number={1}
            title="Asset Batch Identification"
            description="Group assets (mining equipment, real estate) into batches for tokenization"
            details={[
              "Mining: ASICs, containers, electricity contracts, BTC wallets",
              "Real Estate: Villa, apartment, warehouse, commercial property",
            ]}
          />
          <ProcessStep
            number={2}
            title="SPV Incorporation"
            description={`Incorporate SPV in ${selectedOption === "rak" ? "RAK ICC (Ras Al Khaimah, UAE)" : "Delaware LLC (USA)"}`}
            details={
              selectedOption === "rak"
                ? [
                    "RAK ICC free zone company registration",
                    "Minimal capital requirements",
                    "Fast incorporation (1-2 weeks)",
                    "100% foreign ownership allowed",
                  ]
                : [
                    "Delaware Division of Corporations filing",
                    "Operating Agreement creation",
                    "Standard LLC formation process",
                    "Recognized globally for tokenization",
                  ]
            }
          />
          <ProcessStep
            number={3}
            title="Asset Transfer to SPV"
            description="Transfer ownership of physical assets to the SPV"
            details={[
              "Legal title transfer documents",
              "Registration with relevant authorities",
              "Update of ownership records",
              "Asset valuation and documentation",
            ]}
          />
          <ProcessStep
            number={4}
            title="Operating Agreement Modification"
            description="Update Operating Agreement to include digital representation clause"
            details={[
              "Clause: '100% of company shares are represented by a unique NFT'",
              "NFT ownership = economic ownership of SPV",
              "Transfer of NFT = transfer of 100% company ownership",
              "Legal recognition of digital certificate",
            ]}
          />
        </div>
      </div>

      {/* SPV Role & Responsibilities */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          SPV Role & Responsibilities
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <RoleCard
            title="Asset Holder"
            icon="🏗️"
            responsibilities={[
              "Owns mining equipment (ASICs, containers)",
              "Holds electricity contracts",
              "Manages BTC mining wallets",
              "Owns real estate property",
              "Maintains physical asset custody",
            ]}
          />
          <RoleCard
            title="Legal Entity"
            icon="⚖️"
            responsibilities={[
              "Separate legal person",
              "Limited liability protection",
              "Can enter into contracts",
              "Holds licenses and permits",
              "Complies with local regulations",
            ]}
          />
          <RoleCard
            title="Revenue Generator"
            icon="💸"
            responsibilities={[
              "Receives mining rewards (BTC)",
              "Collects rental income (real estate)",
              "Manages operational expenses",
              "Distributes profits to shareholders",
            ]}
          />
          <RoleCard
            title="NFT Backing"
            icon="🎫"
            responsibilities={[
              "SPV shares = 100% represented by NFT",
              "NFT serves as ownership certificate",
              "On-chain registry of ownership",
              "Facilitates fractionalization",
            ]}
          />
        </div>
      </div>

      {/* Legal Compatibility */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Legal Compatibility & Framework
        </h2>
        {selectedOption === "rak" ? (
          <RAKLegalDetails />
        ) : (
          <DelawareLegalDetails />
        )}
      </div>

      {/* Diagram */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          SPV Structure Diagram
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
            <div className="text-center font-semibold text-slate-900 dark:text-white">
              Physical Assets
            </div>
            <div className="mt-2 flex justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span>🏭 Mining</span>
              <span>🏠 Real Estate</span>
            </div>
          </div>
          <div className="text-2xl">↓</div>
          <div className="rounded-lg bg-indigo-600 p-6 text-white shadow-md">
            <div className="text-center font-semibold">
              {selectedOption === "rak" ? "RAK ICC SPV" : "Delaware LLC SPV"}
            </div>
            <div className="mt-2 text-center text-sm opacity-90">
              Legal Entity Owner
            </div>
          </div>
          <div className="text-2xl">↓</div>
          <div className="rounded-lg bg-purple-600 p-6 text-white shadow-md">
            <div className="text-center font-semibold">NFT Master Ownership</div>
            <div className="mt-2 text-center text-sm opacity-90">
              100% of SPV Shares
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
  details,
}: {
  number: number;
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="border-l-4 border-indigo-600 pl-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mb-3 text-slate-600 dark:text-slate-400">{description}</p>
      <ul className="space-y-2">
        {details.map((detail, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-indigo-600">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleCard({
  title,
  icon,
  responsibilities,
}: {
  title: string;
  icon: string;
  responsibilities: string[];
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-700">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((resp, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-600 dark:text-slate-400"
          >
            <span className="mr-2 text-indigo-600">✓</span>
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RAKLegalDetails() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-blue-50 p-4 dark:bg-slate-700">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
          ✅ Permitted Activities
        </h3>
        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>• SPV can hold real estate in UAE (DLD registration)</li>
          <li>• Tokenization of company shares is permitted</li>
          <li>• Digital ownership representation via NFT</li>
          <li>• 100% foreign ownership allowed</li>
        </ul>
      </div>
      <div className="rounded-lg bg-yellow-50 p-4 dark:bg-slate-700">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
          ⚠️ Limitations
        </h3>
        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>
            • NFT ≠ Cadastral title (property title stays with DLD registry)
          </li>
          <li>• NFT represents economic ownership of SPV, not direct property
          </li>
          <li>• KYC/AML compliance required for all investors</li>
        </ul>
      </div>
      <div className="rounded-lg bg-green-50 p-4 dark:bg-slate-700">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
          📋 Compliance Requirements
        </h3>
        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>• AML/KYC for all shareholders</li>
          <li>• Annual audit requirements</li>
          <li>• Tax reporting (if applicable)</li>
          <li>• Corporate secretary services</li>
        </ul>
      </div>
    </div>
  );
}

function DelawareLegalDetails() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-blue-50 p-4 dark:bg-slate-700">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
          ✅ Advantages
        </h3>
        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>• Global standard for tokenization and blockchain structures</li>
          <li>• Flexible Operating Agreement customization</li>
          <li>• Strong legal precedents for digital asset ownership</li>
          <li>• Recognized by regulators and investors worldwide</li>
        </ul>
      </div>
      <div className="rounded-lg bg-yellow-50 p-4 dark:bg-slate-700">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
          ⚠️ Securities Law Considerations
        </h3>
        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>
            • ERC-20 tokens may be considered securities (SEC compliance)
          </li>
          <li>• Private placement exemptions (Reg D, Reg S)</li>
          <li>• Accredited investor requirements</li>
          <li>• State blue sky laws compliance</li>
        </ul>
      </div>
      <div className="rounded-lg bg-green-50 p-4 dark:bg-slate-700">
        <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
          📋 Best Practices
        </h3>
        <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
          <li>• Clear Operating Agreement with digital ownership clause</li>
          <li>• On-chain registry as official member registry</li>
          <li>• Regular compliance audits</li>
          <li>• Legal opinion on securities classification</li>
        </ul>
      </div>
    </div>
  );
}




