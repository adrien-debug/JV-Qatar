"use client";

export default function FractionalizationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          ERC-20 Fractionalization
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          How the Master NFT is locked and fractionalized into tradeable ERC-20
          shares
        </p>
      </div>

      {/* Why Fractionalize */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Why Fractionalize?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <BenefitCard
            icon="👥"
            title="Democratize Access"
            description="Open investment opportunities to retail investors who couldn't afford full asset ownership"
          />
          <BenefitCard
            icon="💧"
            title="Increase Liquidity"
            description="Enable trading of fractional shares on DEX/CEX platforms, creating secondary markets"
          />
          <BenefitCard
            icon="💰"
            title="Raise Capital"
            description="Finance mining equipment, real estate acquisitions, and yield-generating assets efficiently"
          />
        </div>
      </div>

      {/* Fractionalization Mechanism */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Fractionalization Mechanism
        </h2>
        <div className="space-y-6">
          <MechanismStep
            number={1}
            title="NFT Lock in Vault"
            description="Master NFT is deposited into Smart Contract Vault, making it non-transferable"
            technical="transfer() function disabled while in vault"
          />
          <MechanismStep
            number={2}
            title="ERC-20 Token Deployment"
            description="Smart contract deploys ERC-20 token (e.g., BBM-1 SHARES for mining, BBRWA-1 SHARES for real estate)"
            technical="Standard ERC-20 interface with custom distribution logic"
          />
          <MechanismStep
            number={3}
            title="Share Supply Configuration"
            description="Define total supply (fixed or variable) and initial distribution strategy"
            technical="Example: 1,000,000 tokens = 100% of SPV, or dynamic supply based on demand"
          />
          <MechanismStep
            number={4}
            title="Token Distribution"
            description="Distribute ERC-20 shares to investors through private sale, public offering, or staking mechanisms"
            technical="Mint tokens to investor wallets, track KYC/AML compliance"
          />
        </div>
      </div>

      {/* ERC-20 Token Features */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ERC-20 Token Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <TokenFeature
            title="Economic Rights"
            icon="💸"
            features={[
              "Proportional share of mining rewards (BTC)",
              "Proportional share of rental income",
              "Yield distribution from asset performance",
              "Dividend payments via smart contract",
            ]}
          />
          <TokenFeature
            title="Transferability"
            icon="🔄"
            features={[
              "Tradeable on DEX (Uniswap, SushiSwap)",
              "Listable on CEX platforms",
              "P2P transfers between wallets",
              "Cross-chain bridges (future)",
            ]}
          />
          <TokenFeature
            title="Governance (Optional)"
            icon="🗳️"
            features={[
              "Voting rights on SPV decisions",
              "Proposal submission mechanism",
              "Quorum requirements",
              "Multi-sig execution",
            ]}
          />
          <TokenFeature
            title="Buyback Mechanism"
            icon="🔙"
            features={[
              "Token buyback program",
              "Burn mechanism to reduce supply",
              "NFT release conditions",
              "Liquidity provision",
            ]}
          />
        </div>
      </div>

      {/* Supply Models */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Supply Models
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SupplyModel
            title="Fixed Supply"
            description="Pre-determined total supply (e.g., 1,000,000 tokens)"
            pros={[
              "Predictable tokenomics",
              "Clear ownership percentage",
              "Simpler implementation",
            ]}
            cons={[
              "Limited flexibility",
              "Cannot raise additional capital",
            ]}
            example="1,000,000 BBM-1 tokens = 100% of mining SPV"
          />
          <SupplyModel
            title="Variable Supply"
            description="Supply can increase or decrease based on demand and buybacks"
            pros={[
              "Flexible capital raising",
              "Dynamic tokenomics",
              "Buyback and burn support",
            ]}
            cons={[
              "More complex governance",
              "Potential dilution",
            ]}
            example="Initial: 500,000 tokens, can mint more or burn"
          />
        </div>
      </div>

      {/* Distribution Logic */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Automatic Revenue Distribution
        </h2>
        <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Smart contract automatically distributes revenues to token holders
            based on their share percentage:
          </p>
          <div className="space-y-4">
            <DistributionFlow
              step="1. Revenue Generation"
              description="SPV generates revenue (BTC mining rewards, rental income)"
            />
            <DistributionFlow
              step="2. Deposit to Contract"
              description="Revenue is deposited to the distribution smart contract"
            />
            <DistributionFlow
              step="3. Proportional Distribution"
              description="Smart contract calculates each holder's share and distributes automatically"
            />
            <DistributionFlow
              step="4. Claim Mechanism"
              description="Token holders claim their share via claim() function"
            />
          </div>
          <div className="mt-6 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Example:</strong> If you hold 1% of tokens and SPV
              generates $100,000 in revenue, you receive $1,000 (minus gas fees
              for claiming)
            </p>
          </div>
        </div>
      </div>

      {/* Master NFT vs ERC-20 */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Master NFT vs ERC-20 Shares
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-300 dark:border-slate-600">
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  Aspect
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  Master NFT (ERC-721)
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  ERC-20 Shares
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <ComparisonRow
                aspect="Ownership Type"
                nft="Legal ownership of 100% SPV"
                erc20="Economic ownership (fractional)"
              />
              <ComparisonRow
                aspect="Divisibility"
                nft="Indivisible (one whole NFT)"
                erc20="Highly divisible (millions of tokens)"
              />
              <ComparisonRow
                aspect="Transferability"
                nft="Transfer = full SPV ownership"
                erc20="Tradeable in portions"
              />
              <ComparisonRow
                aspect="Rights"
                nft="Full legal and economic rights"
                erc20="Economic rights only (revenue share)"
              />
              <ComparisonRow
                aspect="Governance"
                nft="Full control over SPV"
                erc20="Proportional voting (if enabled)"
              />
              <ComparisonRow
                aspect="Use Case"
                nft="Initial tokenization, full sale"
                erc20="Retail investment, liquidity"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Smart Contract Architecture
        </h2>
        <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <pre className="overflow-x-auto text-xs">
            <code className="text-slate-800 dark:text-slate-200">{`// Simplified Vault Contract Structure

contract FractionalizationVault {
    IERC721 public masterNFT;
    IERC20 public shareToken;
    
    // Lock NFT
    function lockNFT(uint256 tokenId) external;
    
    // Mint shares
    function mintShares(address to, uint256 amount) external;
    
    // Distribute revenue
    function distributeRevenue() external payable;
    
    // Claim revenue
    function claimRevenue() external;
    
    // Buyback & burn
    function buybackAndBurn(uint256 amount) external;
    
    // Release NFT (if all shares redeemed)
    function releaseNFT() external;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Complete Flow Diagram */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Complete Fractionalization Flow
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-lg bg-purple-600 p-4 text-white shadow-md">
            <div className="font-semibold">Master NFT</div>
            <div className="text-sm opacity-90">100% SPV Ownership</div>
          </div>
          <div className="text-2xl">↓ Lock</div>
          <div className="rounded-lg bg-indigo-600 p-4 text-white shadow-md">
            <div className="font-semibold">Smart Contract Vault</div>
            <div className="text-sm opacity-90">NFT Secured</div>
          </div>
          <div className="text-2xl">↓ Fractionalize</div>
          <div className="flex gap-4">
            <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
              <div className="font-semibold">ERC-20 Shares</div>
              <div className="text-sm opacity-90">Investor 1: 10%</div>
            </div>
            <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
              <div className="font-semibold">ERC-20 Shares</div>
              <div className="text-sm opacity-90">Investor 2: 5%</div>
            </div>
            <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
              <div className="font-semibold">ERC-20 Shares</div>
              <div className="text-sm opacity-90">...More Investors</div>
            </div>
          </div>
          <div className="text-2xl">↓ Revenue Generation</div>
          <div className="rounded-lg bg-yellow-600 p-4 text-white shadow-md">
            <div className="font-semibold">Automatic Distribution</div>
            <div className="text-sm opacity-90">
              Proportional to token holdings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-green-200 bg-white p-6 dark:border-green-800 dark:bg-slate-800">
      <div className="mb-3 text-4xl">{icon}</div>
      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

function MechanismStep({
  number,
  title,
  description,
  technical,
}: {
  number: number;
  title: string;
  description: string;
  technical: string;
}) {
  return (
    <div className="border-l-4 border-green-600 pl-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="mb-2 text-slate-600 dark:text-slate-400">{description}</p>
      <div className="rounded bg-slate-100 px-3 py-2 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300">
        <strong>Technical:</strong> {technical}
      </div>
    </div>
  );
}

function TokenFeature({
  title,
  icon,
  features,
}: {
  title: string;
  icon: string;
  features: string[];
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
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-600 dark:text-slate-400"
          >
            <span className="mr-2 text-green-600">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupplyModel({
  title,
  description,
  pros,
  cons,
  example,
}: {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  example: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-700">
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
      <div className="mb-4">
        <h4 className="mb-2 text-sm font-semibold text-green-600">Pros:</h4>
        <ul className="space-y-1">
          {pros.map((pro, idx) => (
            <li
              key={idx}
              className="flex items-start text-xs text-slate-700 dark:text-slate-300"
            >
              <span className="mr-2">+</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="mb-2 text-sm font-semibold text-red-600">Cons:</h4>
        <ul className="space-y-1">
          {cons.map((con, idx) => (
            <li
              key={idx}
              className="flex items-start text-xs text-slate-700 dark:text-slate-300"
            >
              <span className="mr-2">-</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded bg-blue-50 p-3 text-xs text-slate-700 dark:bg-blue-900/20 dark:text-slate-300">
        <strong>Example:</strong> {example}
      </div>
    </div>
  );
}

function DistributionFlow({
  step,
  description,
}: {
  step: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
        →
      </div>
      <div>
        <div className="font-semibold text-slate-900 dark:text-white">
          {step}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
}

function ComparisonRow({
  aspect,
  nft,
  erc20,
}: {
  aspect: string;
  nft: string;
  erc20: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
        {aspect}
      </td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{nft}</td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
        {erc20}
      </td>
    </tr>
  );
}




