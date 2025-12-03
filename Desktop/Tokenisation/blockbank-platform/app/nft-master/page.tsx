"use client";

export default function NFTMasterPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          NFT Master Ownership
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          How a single ERC-721 NFT represents 100% of SPV shares and serves as
          the digital ownership certificate
        </p>
      </div>

      {/* Core Concept */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          Core Concept
        </h2>
        <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            <strong className="text-purple-600 dark:text-purple-400">
              The Master NFT (ERC-721)
            </strong>{" "}
            is a unique, indivisible, and transferable token that represents{" "}
            <strong>100% of the SPV's shares</strong>. It serves as both the
            digital ownership certificate and the legal proof of economic
            ownership.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <FeatureBox
              title="Unique"
              description="One NFT per SPV, no duplicates"
            />
            <FeatureBox
              title="Indivisible"
              description="Cannot be split - represents full ownership"
            />
            <FeatureBox
              title="Transferable"
              description="Ownership transfer = SPV ownership transfer"
            />
          </div>
        </div>
      </div>

      {/* Tokenization Flow */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Tokenization Process
        </h2>
        <div className="space-y-6">
          <FlowStep
            number={1}
            title="SPV Incorporation Complete"
            description="SPV is legally incorporated and holds the physical assets"
          />
          <FlowStep
            number={2}
            title="NFT Minting"
            description="Mint ERC-721 NFT with metadata containing SPV details, asset information, and legal references"
            metadata={[
              "SPV registration number",
              "Asset details (type, value, location)",
              "Operating Agreement reference",
              "Legal jurisdiction",
              "Creation timestamp",
            ]}
          />
          <FlowStep
            number={3}
            title="Ownership Assignment"
            description="Initial owner receives the NFT (typically BlockBank or asset originator)"
          />
          <FlowStep
            number={4}
            title="Vault Locking"
            description="NFT is locked in a Smart Contract Vault to enable fractionalization"
          />
        </div>
      </div>

      {/* NFT Metadata Structure */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          NFT Metadata Structure
        </h2>
        <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <pre className="overflow-x-auto text-sm">
            <code className="text-slate-800 dark:text-slate-200">{`{
  "name": "BlockBank Mining SPV #001",
  "description": "Master Ownership NFT - 100% of SPV Shares",
  "image": "ipfs://...",
  "attributes": [
    {
      "trait_type": "SPV Type",
      "value": "RAK ICC / Delaware LLC"
    },
    {
      "trait_type": "Asset Type",
      "value": "Mining / Real Estate"
    },
    {
      "trait_type": "SPV Registration",
      "value": "RAK-ICC-2024-001"
    },
    {
      "trait_type": "Total Shares",
      "value": "100%"
    },
    {
      "trait_type": "Legal Jurisdiction",
      "value": "UAE / USA"
    },
    {
      "trait_type": "Operating Agreement Hash",
      "value": "0x..."
    }
  ],
  "properties": {
    "legal": {
      "spvAddress": "RAK ICC, UAE",
      "registrationNumber": "...",
      "operatingAgreement": "ipfs://..."
    },
    "asset": {
      "type": "Mining Equipment",
      "value": "$5,000,000",
      "location": "..."
    }
  }
}`}</code>
          </pre>
        </div>
      </div>

      {/* Legal Mechanism */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Legal Mechanism
        </h2>
        <div className="space-y-6">
          <LegalPoint
            title="Operating Agreement Modification"
            description="The SPV's Operating Agreement includes a clause stating:"
            clause='"100% of the company shares are represented by a unique NFT. Ownership of this NFT constitutes economic ownership of the entire SPV. Transfer of the NFT equals transfer of 100% company ownership."'
          />
          <LegalPoint
            title="Proof of Ownership"
            description="The NFT serves as:"
            points={[
              "Digital certificate of economic ownership",
              "On-chain registry entry",
              "Legal evidence of shareholding",
              "Transferable ownership instrument",
            ]}
          />
          <LegalPoint
            title="Transfer Mechanism"
            description="When NFT is transferred:"
            points={[
              "Blockchain records ownership change",
              "New owner becomes 100% shareholder",
              "No paper documents required",
              "Instant and immutable transfer",
            ]}
          />
        </div>
      </div>

      {/* On-Chain Registry */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          On-Chain Registry & Sovereignty
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <RegistryFeature
            title="Sovereignty via Wallet"
            description="NFT ownership is controlled by the holder's private key, providing full self-custody and sovereignty over the asset."
          />
          <RegistryFeature
            title="Replacement of Member Registry"
            description="The blockchain registry replaces traditional paper-based member registries, providing transparency and immutability."
          />
          <RegistryFeature
            title="Audit & Compliance"
            description="Full transaction history on-chain enables easy auditing and compliance reporting for regulators and stakeholders."
          />
          <RegistryFeature
            title="Accountability & Transparency"
            description="All ownership changes are publicly verifiable while maintaining privacy through wallet addresses."
          />
        </div>
      </div>

      {/* Vault Mechanism */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Smart Contract Vault
        </h2>
        <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            The Master NFT is <strong>locked in a Smart Contract Vault</strong>{" "}
            to enable fractionalization. This vault:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600">🔒</span>
              <div>
                <strong className="text-slate-900 dark:text-white">
                  Holds the NFT
                </strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Securely locks the Master NFT to prevent transfer during
                  fractionalization
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600">🎫</span>
              <div>
                <strong className="text-slate-900 dark:text-white">
                  Mints ERC-20 Shares
                </strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Issues fractional ERC-20 tokens representing portions of the
                  SPV ownership
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-indigo-600">💱</span>
              <div>
                <strong className="text-slate-900 dark:text-white">
                  Manages Redemptions
                </strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Handles buyback mechanisms and NFT release conditions
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Complete Flow Diagram
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-lg bg-blue-600 p-4 text-white shadow-md">
            <div className="font-semibold">Legal Entity (SPV)</div>
            <div className="text-sm opacity-90">Holds Physical Assets</div>
          </div>
          <div className="text-2xl">↓</div>
          <div className="rounded-lg bg-purple-600 p-4 text-white shadow-md">
            <div className="font-semibold">NFT Master Ownership</div>
            <div className="text-sm opacity-90">ERC-721 | 100% of Shares</div>
          </div>
          <div className="text-2xl">↓</div>
          <div className="rounded-lg bg-indigo-600 p-4 text-white shadow-md">
            <div className="font-semibold">Smart Contract Vault</div>
            <div className="text-sm opacity-90">NFT Locked & Protected</div>
          </div>
          <div className="text-2xl">↓</div>
          <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
            <div className="font-semibold">ERC-20 Fractional Shares</div>
            <div className="text-sm opacity-90">
              BBM-1 SHARES or BBRWA-1 SHARES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-purple-200 bg-white p-4 dark:border-purple-800 dark:bg-slate-800">
      <h3 className="font-semibold text-purple-600 dark:text-purple-400">
        {title}
      </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function FlowStep({
  number,
  title,
  description,
  metadata,
}: {
  number: number;
  title: string;
  description: string;
  metadata?: string[];
}) {
  return (
    <div className="border-l-4 border-purple-600 pl-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mb-3 text-slate-600 dark:text-slate-400">{description}</p>
      {metadata && (
        <ul className="space-y-1">
          {metadata.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start text-sm text-slate-700 dark:text-slate-300"
            >
              <span className="mr-2 text-purple-600">•</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function LegalPoint({
  title,
  description,
  clause,
  points,
}: {
  title: string;
  description: string;
  clause?: string;
  points?: string[];
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-3 text-slate-600 dark:text-slate-400">{description}</p>
      {clause && (
        <div className="rounded bg-yellow-50 p-4 italic text-slate-800 dark:bg-yellow-900/20 dark:text-yellow-200">
          "{clause}"
        </div>
      )}
      {points && (
        <ul className="mt-3 space-y-2">
          {points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start text-sm text-slate-700 dark:text-slate-300"
            >
              <span className="mr-2 text-indigo-600">✓</span>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function RegistryFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-700">
      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}




