"use client";

export default function ComparisonPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Executive Summary & Comparison
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Comprehensive analysis of BlockBank tokenization structure,
          advantages, disadvantages, and recommendations
        </p>
      </div>

      {/* Executive Summary */}
      <div className="mb-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Executive Summary
        </h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>
            BlockBank's tokenization structure enables the fractionalization of
            Real World Assets (RWA) through a sophisticated three-layer
            architecture:
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              <strong>SPV Layer:</strong> Legal entity (RAK ICC or Delaware
              LLC) that holds physical assets (mining equipment, real estate)
            </li>
            <li>
              <strong>NFT Layer:</strong> ERC-721 Master Ownership NFT
              representing 100% of SPV shares, serving as digital ownership
              certificate
            </li>
            <li>
              <strong>Token Layer:</strong> ERC-20 fractional shares locked in
              Smart Contract Vault, enabling retail investment and liquidity
            </li>
          </ol>
          <p>
            This structure provides legal compliance, economic efficiency, and
            technological innovation, making high-value assets accessible to a
            broader investor base while maintaining regulatory compliance and
            asset security.
          </p>
        </div>
      </div>

      {/* Advantages */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ✅ Advantages
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <AdvantageCard
            title="Democratized Access"
            icon="👥"
            points={[
              "Retail investors can participate in high-value assets",
              "Lower minimum investment thresholds",
              "Global access via blockchain",
              "24/7 trading capability",
            ]}
          />
          <AdvantageCard
            title="Enhanced Liquidity"
            icon="💧"
            points={[
              "Tradeable on DEX and CEX platforms",
              "Secondary market development",
              "Reduced exit barriers",
              "Price discovery mechanisms",
            ]}
          />
          <AdvantageCard
            title="Transparency"
            icon="🔍"
            points={[
              "On-chain ownership records",
              "Immutable transaction history",
              "Real-time asset information",
              "Automated compliance checks",
            ]}
          />
          <AdvantageCard
            title="Cost Efficiency"
            icon="💰"
            points={[
              "Reduced intermediary costs",
              "Automated distribution mechanisms",
              "Lower administrative overhead",
              "Scalable infrastructure",
            ]}
          />
          <AdvantageCard
            title="Legal Compliance"
            icon="⚖️"
            points={[
              "Structured through recognized legal entities",
              "Clear ownership documentation",
              "Regulatory-compliant frameworks",
              "KYC/AML integration",
            ]}
          />
          <AdvantageCard
            title="Flexibility"
            icon="🔧"
            points={[
              "Multiple asset types supported",
              "Customizable tokenomics",
              "Governance options",
              "Cross-border compatibility",
            ]}
          />
        </div>
      </div>

      {/* Disadvantages */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ⚠️ Disadvantages & Challenges
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ChallengeCard
            title="Regulatory Uncertainty"
            icon="📜"
            points={[
              "Evolving regulatory frameworks",
              "Potential classification as securities",
              "Jurisdiction-specific requirements",
              "Compliance costs and complexity",
            ]}
          />
          <ChallengeCard
            title="Technical Risks"
            icon="💻"
            points={[
              "Smart contract vulnerabilities",
              "Blockchain network risks",
              "Key management security",
              "Technology obsolescence",
            ]}
          />
          <ChallengeCard
            title="Legal Complexity"
            icon="⚖️"
            points={[
              "Multi-jurisdictional considerations",
              "Complex ownership structures",
              "Dispute resolution challenges",
              "Tax implications",
            ]}
          />
          <ChallengeCard
            title="Market Risks"
            icon="📉"
            points={[
              "Asset value volatility",
              "Liquidity risks",
              "Counterparty risks",
              "Market manipulation potential",
            ]}
          />
          <ChallengeCard
            title="Operational Challenges"
            icon="🏗️"
            points={[
              "Integration with traditional systems",
              "Education and adoption barriers",
              "Asset management complexity",
              "Scalability concerns",
            ]}
          />
          <ChallengeCard
            title="Compliance Burden"
            icon="📋"
            points={[
              "Ongoing KYC/AML requirements",
              "Regular reporting obligations",
              "Audit requirements",
              "Regulatory updates and changes",
            ]}
          />
        </div>
      </div>

      {/* Structure Comparison */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Structure Comparison: Traditional vs Tokenized
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-300 dark:border-slate-600">
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  Aspect
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  Traditional Structure
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">
                  BlockBank Tokenized Structure
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <ComparisonRow
                aspect="Ownership Representation"
                traditional="Paper certificates, share registry"
                tokenized="NFT + ERC-20 tokens on blockchain"
              />
              <ComparisonRow
                aspect="Transfer Process"
                traditional="Manual paperwork, days/weeks"
                tokenized="Instant blockchain transfer, seconds"
              />
              <ComparisonRow
                aspect="Minimum Investment"
                traditional="High ($100k+)"
                tokenized="Low ($100+)"
              />
              <ComparisonRow
                aspect="Liquidity"
                traditional="Limited, illiquid"
                tokenized="High, tradeable on exchanges"
              />
              <ComparisonRow
                aspect="Transparency"
                traditional="Private, limited access"
                tokenized="Public on-chain records"
              />
              <ComparisonRow
                aspect="Cost"
                traditional="High intermediary fees"
                tokenized="Lower, automated distribution"
              />
              <ComparisonRow
                aspect="Accessibility"
                traditional="Geographic restrictions"
                tokenized="Global, 24/7 access"
              />
              <ComparisonRow
                aspect="Revenue Distribution"
                traditional="Manual, periodic"
                tokenized="Automatic, real-time"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* Implementation Roadmap */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Implementation Roadmap
        </h2>
        <div className="space-y-6">
          <RoadmapStep
            phase="Phase 1: Foundation"
            duration="2-4 weeks"
            tasks={[
              "SPV incorporation (RAK ICC or Delaware LLC)",
              "Asset transfer to SPV",
              "Operating Agreement modification",
              "Legal opinion and compliance review",
            ]}
          />
          <RoadmapStep
            phase="Phase 2: Tokenization"
            duration="2-3 weeks"
            tasks={[
              "Master NFT smart contract development",
              "NFT minting and metadata creation",
              "Smart Contract security audit",
              "NFT assignment to initial owner",
            ]}
          />
          <RoadmapStep
            phase="Phase 3: Fractionalization"
            duration="3-4 weeks"
            tasks={[
              "Vault smart contract development",
              "ERC-20 token deployment",
              "Fractionalization mechanism implementation",
              "Distribution platform integration",
            ]}
          />
          <RoadmapStep
            phase="Phase 4: Launch"
            duration="2-3 weeks"
            tasks={[
              "KYC/AML integration",
              "Investor onboarding",
              "Token sale or distribution",
              "Exchange listings (if applicable)",
            ]}
          />
          <RoadmapStep
            phase="Phase 5: Operations"
            duration="Ongoing"
            tasks={[
              "Revenue collection and distribution",
              "Compliance monitoring",
              "Regular reporting",
              "Governance activities",
            ]}
          />
        </div>
      </div>

      {/* Final Recommendations */}
      <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg dark:from-slate-800 dark:to-slate-700">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Final Recommendations for BlockBank
        </h2>
        <div className="space-y-6">
          <RecommendationItem
            title="Jurisdiction Selection"
            content="Use RAK ICC for UAE-focused real estate projects and Delaware LLC for global/international projects requiring securities compliance."
          />
          <RecommendationItem
            title="Security First"
            content="Prioritize smart contract security audits, multi-sig implementations, and insurance coverage for investor protection."
          />
          <RecommendationItem
            title="Compliance Framework"
            content="Establish robust KYC/AML procedures, maintain comprehensive documentation, and engage with regulators proactively."
          />
          <RecommendationItem
            title="Gradual Rollout"
            content="Start with a pilot project, learn from implementation, and scale gradually with improved processes."
          />
          <RecommendationItem
            title="Education & Transparency"
            content="Invest in investor education, clear communication of risks and benefits, and transparent reporting."
          />
        </div>
      </div>
    </div>
  );
}

function AdvantageCard({
  title,
  icon,
  points,
}: {
  title: string;
  icon: string;
  points: string[];
}) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-green-600">✓</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChallengeCard({
  title,
  icon,
  points,
}: {
  title: string;
  icon: string;
  points: string[];
}) {
  return (
    <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-yellow-600">⚠</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComparisonRow({
  aspect,
  traditional,
  tokenized,
}: {
  aspect: string;
  traditional: string;
  tokenized: string;
}) {
  return (
    <tr>
      <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
        {aspect}
      </td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
        {traditional}
      </td>
      <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
        {tokenized}
      </td>
    </tr>
  );
}

function RoadmapStep({
  phase,
  duration,
  tasks,
}: {
  phase: string;
  duration: string;
  tasks: string[];
}) {
  return (
    <div className="border-l-4 border-indigo-600 pl-6">
      <div className="mb-2 flex items-center gap-3">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {phase}
        </h3>
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
          {duration}
        </span>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-2 text-indigo-600">→</span>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecommendationItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-lg border border-green-200 bg-white p-6 dark:border-green-800 dark:bg-slate-800">
      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="text-slate-700 dark:text-slate-300">{content}</p>
    </div>
  );
}




