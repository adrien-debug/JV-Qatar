"use client";

import { useState } from "react";

const mockSPVData = {
  spvId: "BBM-001",
  name: "BlockBank Mining SPV #001",
  jurisdiction: "RAK ICC, UAE",
  registrationNumber: "RAK-ICC-2024-001",
  assetType: "Mining Equipment",
  assetValue: "$5,000,000",
  status: "Tokenized",
};

const mockNFTData = {
  tokenId: "1",
  name: "Master Ownership NFT",
  owner: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  spvRepresented: "BBM-001",
  sharesRepresented: "100%",
  locked: true,
  vaultAddress: "0x8ba1f109551bD432803012645Hac136c22C9c8",
};

const mockShareData = {
  tokenName: "BBM-1 SHARES",
  totalSupply: "1,000,000",
  circulatingSupply: "750,000",
  price: "$5.00",
  marketCap: "$3,750,000",
  holders: 1250,
};

export default function TemplatesPage() {
  const [selectedView, setSelectedView] = useState<"before" | "after" | "fractional">("before");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Templates & Visualizations
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Interactive templates and code examples for BlockBank tokenization
          structure
        </p>
      </div>

      {/* View Toggle */}
      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setSelectedView("before")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedView === "before"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          Before Tokenization
        </button>
        <button
          onClick={() => setSelectedView("after")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedView === "after"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          After Tokenization
        </button>
        <button
          onClick={() => setSelectedView("fractional")}
          className={`rounded-lg px-6 py-3 font-semibold transition-all ${
            selectedView === "fractional"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          After Fractionalization
        </button>
      </div>

      {/* State Visualization */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          State Visualization
        </h2>
        {selectedView === "before" && <BeforeTokenizationView />}
        {selectedView === "after" && <AfterTokenizationView />}
        {selectedView === "fractional" && <FractionalizedView />}
      </div>

      {/* SPV Template */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          SPV Display Template
        </h2>
        <SPVCard data={mockSPVData} />
      </div>

      {/* NFT Template */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          NFT Master Ownership Template
        </h2>
        <NFTCard data={mockNFTData} />
      </div>

      {/* ERC-20 Shares Template */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          ERC-20 Shares Template
        </h2>
        <SharesCard data={mockShareData} />
      </div>

      {/* EJS Template Example */}
      <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          EJS Template Example (Conceptual)
        </h2>
        <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <pre className="overflow-x-auto text-xs">
            <code className="text-slate-800 dark:text-slate-200">{`<!-- spv-dashboard.ejs -->
<div class="spv-container">
  <h1><%= spv.name %></h1>
  
  <div class="spv-details">
    <div class="detail-item">
      <span class="label">Jurisdiction:</span>
      <span class="value"><%= spv.jurisdiction %></span>
    </div>
    <div class="detail-item">
      <span class="label">Asset Type:</span>
      <span class="value"><%= spv.assetType %></span>
    </div>
    <div class="detail-item">
      <span class="label">Asset Value:</span>
      <span class="value"><%= spv.assetValue %></span>
    </div>
  </div>
  
  <% if (spv.status === 'Tokenized') { %>
    <div class="nft-section">
      <h2>Master NFT</h2>
      <div class="nft-card">
        <p>Token ID: <%= nft.tokenId %></p>
        <p>Owner: <%= nft.owner %></p>
        <p>Shares: <%= nft.sharesRepresented %></p>
        <% if (nft.locked) { %>
          <span class="locked-badge">🔒 Locked in Vault</span>
        <% } %>
      </div>
    </div>
    
    <% if (shares) { %>
      <div class="shares-section">
        <h2>ERC-20 Shares</h2>
        <div class="shares-stats">
          <div>Total Supply: <%= shares.totalSupply %></div>
          <div>Circulating: <%= shares.circulatingSupply %></div>
          <div>Price: <%= shares.price %></div>
          <div>Holders: <%= shares.holders %></div>
        </div>
      </div>
    <% } %>
  <% } %>
</div>`}</code>
          </pre>
        </div>
      </div>

      {/* React Component Example */}
      <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          React Component Example (Current Implementation)
        </h2>
        <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <pre className="overflow-x-auto text-xs">
            <code className="text-slate-800 dark:text-slate-200">{`// SPVDashboard.tsx
export function SPVDashboard({ spv, nft, shares }: Props) {
  return (
    <div className="spv-container">
      <h1>{spv.name}</h1>
      
      <div className="spv-details">
        <DetailItem label="Jurisdiction" value={spv.jurisdiction} />
        <DetailItem label="Asset Type" value={spv.assetType} />
        <DetailItem label="Asset Value" value={spv.assetValue} />
      </div>
      
      {spv.status === 'Tokenized' && (
        <NFTSection nft={nft} />
      )}
      
      {shares && (
        <SharesSection shares={shares} />
      )}
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function BeforeTokenizationView() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="rounded-lg bg-blue-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">Physical Assets</div>
        <div className="mt-2 text-center text-sm opacity-90">
          Mining Equipment / Real Estate
        </div>
      </div>
      <div className="text-2xl">↓</div>
      <div className="rounded-lg bg-gray-400 p-6 text-white shadow-md">
        <div className="text-center font-semibold">Direct Ownership</div>
        <div className="mt-2 text-center text-sm opacity-90">
          Individual or Company
        </div>
        <div className="mt-2 text-center text-xs opacity-75">
          ❌ No tokenization
          <br />
          ❌ No fractionalization
          <br />
          ❌ Limited liquidity
        </div>
      </div>
    </div>
  );
}

function AfterTokenizationView() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="rounded-lg bg-blue-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">Physical Assets</div>
        <div className="mt-2 text-center text-sm opacity-90">
          Mining Equipment / Real Estate
        </div>
      </div>
      <div className="text-2xl">↓</div>
      <div className="rounded-lg bg-indigo-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">SPV (Legal Entity)</div>
        <div className="mt-2 text-center text-sm opacity-90">
          RAK ICC or Delaware LLC
        </div>
      </div>
      <div className="text-2xl">↓</div>
      <div className="rounded-lg bg-purple-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">NFT Master Ownership</div>
        <div className="mt-2 text-center text-sm opacity-90">
          100% of SPV Shares
        </div>
        <div className="mt-2 text-center text-xs opacity-75">
          ✅ Tokenized
          <br />
          ✅ On-chain ownership
          <br />
          ⚠️ Not yet fractionalized
        </div>
      </div>
    </div>
  );
}

function FractionalizedView() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="rounded-lg bg-blue-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">Physical Assets</div>
        <div className="mt-2 text-center text-sm opacity-90">
          Mining Equipment / Real Estate
        </div>
      </div>
      <div className="text-2xl">↓</div>
      <div className="rounded-lg bg-indigo-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">SPV (Legal Entity)</div>
        <div className="mt-2 text-center text-sm opacity-90">
          RAK ICC or Delaware LLC
        </div>
      </div>
      <div className="text-2xl">↓</div>
      <div className="rounded-lg bg-purple-600 p-6 text-white shadow-md">
        <div className="text-center font-semibold">NFT Master Ownership</div>
        <div className="mt-2 text-center text-sm opacity-90">
          100% of SPV Shares
        </div>
        <div className="mt-2 text-center text-xs opacity-75">
          🔒 Locked in Vault
        </div>
      </div>
      <div className="text-2xl">↓</div>
      <div className="flex gap-4">
        <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
          <div className="text-center text-sm font-semibold">
            ERC-20 Shares
          </div>
          <div className="mt-1 text-center text-xs opacity-90">
            Investor 1: 10%
          </div>
        </div>
        <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
          <div className="text-center text-sm font-semibold">
            ERC-20 Shares
          </div>
          <div className="mt-1 text-center text-xs opacity-90">
            Investor 2: 5%
          </div>
        </div>
        <div className="rounded-lg bg-green-600 p-4 text-white shadow-md">
          <div className="text-center text-sm font-semibold">
            ERC-20 Shares
          </div>
          <div className="mt-1 text-center text-xs opacity-90">...</div>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-yellow-500 p-4 text-white shadow-md">
        <div className="text-center text-sm font-semibold">
          ✅ Fully Tokenized & Fractionalized
        </div>
        <div className="mt-1 text-center text-xs opacity-90">
          ✅ Tradeable on DEX/CEX
          <br />
          ✅ Automatic revenue distribution
          <br />
          ✅ High liquidity
        </div>
      </div>
    </div>
  );
}

function SPVCard({ data }: { data: typeof mockSPVData }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {data.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            ID: {data.spvId}
          </p>
        </div>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/50 dark:text-green-300">
          {data.status}
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <DetailRow label="Jurisdiction" value={data.jurisdiction} />
        <DetailRow
          label="Registration"
          value={data.registrationNumber}
        />
        <DetailRow label="Asset Type" value={data.assetType} />
        <DetailRow label="Asset Value" value={data.assetValue} />
      </div>
    </div>
  );
}

function NFTCard({ data }: { data: typeof mockNFTData }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-purple-50 to-pink-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {data.name}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Token ID: #{data.tokenId}
          </p>
        </div>
        {data.locked && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
            🔒 Locked
          </span>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <DetailRow label="Owner" value={data.owner.slice(0, 10) + "..."} />
        <DetailRow label="SPV Represented" value={data.spvRepresented} />
        <DetailRow
          label="Shares Represented"
          value={data.sharesRepresented}
        />
        <DetailRow
          label="Vault Address"
          value={data.vaultAddress.slice(0, 10) + "..."}
        />
      </div>
    </div>
  );
}

function SharesCard({ data }: { data: typeof mockShareData }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {data.tokenName}
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DetailRow label="Total Supply" value={data.totalSupply} />
        <DetailRow label="Circulating" value={data.circulatingSupply} />
        <DetailRow label="Price" value={data.price} />
        <DetailRow label="Market Cap" value={data.marketCap} />
        <DetailRow label="Holders" value={data.holders.toLocaleString()} />
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
        {label}
      </div>
      <div className="text-sm font-semibold text-slate-900 dark:text-white">
        {value}
      </div>
    </div>
  );
}




