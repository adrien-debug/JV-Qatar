/**
 * TypeScript Interfaces - Qatar 100MW Hydro Mining Site
 */

export type VoltageLevel = "132kV" | "33kV" | "0.4kV";

export type SiteMode = "DESIGN_102MW" | "STRICT_100MW";

export interface SiteConfig {
  name: string;
  location: string;
  totalPowerMW: number;
  mode: SiteMode;
  gridConnection: GridConnection;
  containerSpec: ContainerSpec;
  blocks: PowerBlock[];
}

export interface GridConnection {
  operator: string;              // "Kahramaa"
  gridVoltageKV: number;         // 132
  substationName: string;        // "Airport Area 132/33 kV Substation"
  substationPrimaryKV: number;   // 132
  substationSecondaryKV: number; // 33
  clientVoltageKV: number;       // 33
  maxContractPowerMW: number;    // e.g. 110
}

export interface ContainerSpec {
  type: string;                     // "Bitmain ANTSPACE HD5 (Hydro)"
  nominalPowerMW: number;           // 1.5
  coolingPowerMW: number;           // 0.1
  totalPowerMW: number;             // 1.6
  supplyVoltageKV: number;          // 0.4
  containersPerTransformer: number; // 2
}

export interface PowerBlock {
  id: string;                 // "block-1"
  name: string;               // "Block 1"
  order: number;              // 1..4
  targetPowerMW: number;      // 25.6
  numContainers: number;      // 16
  numTransformers: number;    // 8
  feeders33kV: number;        // 1
  transformers: Transformer[];
  containers: Container[];
}

export interface Transformer {
  id: string;                  // "block-1-tx-1"
  blockId: string;
  name: string;                // "Block 1 – TX1 (3.75 MVA)"
  ratingMVA: number;           // 3.75
  primaryVoltageKV: number;    // 33
  secondaryVoltageKV: number;  // 0.4
  containersServed: string[];  // Container IDs
}

export interface Container {
  id: string;                 // "block-1-c-1"
  blockId: string;
  transformerId: string;
  name: string;               // "Block 1 – Container 1"
  type: string;               // "Bitmain ANTSPACE HD5 (Hydro)"
  nominalPowerMW: number;     // 1.5
  coolingPowerMW: number;     // 0.1
  totalPowerMW: number;       // 1.6
  supplyVoltageKV: number;    // 0.4
}

