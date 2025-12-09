/**
 * Site Configuration - Qatar 100MW Hydro Mining Site
 * Generates the complete site data structure
 */

import { SiteConfig, ContainerSpec, PowerBlock, Transformer, Container } from './types';

// Base site configuration
export const siteConfig: SiteConfig = {
  name: "Qatar 100MW Hydro Mining Site",
  location: "Hamad International Airport / Ras Bufontas Free Zone, Doha, Qatar",
  totalPowerMW: 102.4, // 64 containers * 1.6 MW
  mode: "DESIGN_102MW",
  gridConnection: {
    operator: "Kahramaa",
    gridVoltageKV: 132,
    substationName: "Airport Area 132/33 kV Substation",
    substationPrimaryKV: 132,
    substationSecondaryKV: 33,
    clientVoltageKV: 33,
    maxContractPowerMW: 110
  },
  containerSpec: {
    type: "Bitmain ANTSPACE HD5 (Hydro)",
    nominalPowerMW: 1.5,
    coolingPowerMW: 0.1,
    totalPowerMW: 1.6,
    supplyVoltageKV: 0.4,
    containersPerTransformer: 2
  },
  blocks: [] // filled by buildBlocks()
};

// Helper to build 4 identical blocks
function buildBlocks(containerSpec: ContainerSpec): PowerBlock[] {
  const blocks: PowerBlock[] = [];
  const blocksCount = 4;
  const containersPerBlock = 16;
  const transformersPerBlock = containersPerBlock / containerSpec.containersPerTransformer; // 16 / 2 = 8

  for (let b = 1; b <= blocksCount; b++) {
    const blockId = `block-${b}`;
    const transformers: Transformer[] = [];
    const containers: Container[] = [];

    for (let t = 1; t <= transformersPerBlock; t++) {
      const txId = `${blockId}-tx-${t}`;
      const containerIds: string[] = [];

      for (let c = 1; c <= containerSpec.containersPerTransformer; c++) {
        const containerIndex = (t - 1) * containerSpec.containersPerTransformer + c; // 1..16
        const containerId = `${blockId}-c-${containerIndex}`;
        
        containers.push({
          id: containerId,
          blockId,
          transformerId: txId,
          name: `Block ${b} – Container ${containerIndex}`,
          type: containerSpec.type,
          nominalPowerMW: containerSpec.nominalPowerMW,
          coolingPowerMW: containerSpec.coolingPowerMW,
          totalPowerMW: containerSpec.totalPowerMW,
          supplyVoltageKV: containerSpec.supplyVoltageKV
        });

        containerIds.push(containerId);
      }

      transformers.push({
        id: txId,
        blockId,
        name: `Block ${b} – TX${t} (3.75 MVA)`,
        ratingMVA: 3.75,
        primaryVoltageKV: 33,
        secondaryVoltageKV: 0.4,
        containersServed: containerIds
      });
    }

    blocks.push({
      id: blockId,
      name: `Block ${b}`,
      order: b,
      targetPowerMW: containersPerBlock * containerSpec.totalPowerMW, // 16 * 1.6 = 25.6
      numContainers: containersPerBlock,
      numTransformers: transformersPerBlock,
      feeders33kV: 1,
      transformers,
      containers
    });
  }

  return blocks;
}

// Initialize blocks
siteConfig.blocks = buildBlocks(siteConfig.containerSpec);

// Electrical calculations helpers
export function calculateSiteCurrent33kV(powerMW: number): number {
  // I = P / (√3 * U)
  return Math.round((powerMW * 1_000_000) / (1.732 * 33_000));
}

export function calculateBlockCurrent33kV(powerMW: number): number {
  return Math.round((powerMW * 1_000_000) / (1.732 * 33_000));
}

export function calculateTransformerCurrent(powerMW: number, voltageKV: number): number {
  return Math.round((powerMW * 1_000_000) / (1.732 * voltageKV * 1000));
}

export function calculateTransformerLoadPercentage(
  actualPowerMW: number,
  ratingMVA: number
): number {
  return Math.round((actualPowerMW / ratingMVA) * 100);
}

// Export calculated values
export const siteCurrent33kV = calculateSiteCurrent33kV(100); // ~1,750 A
export const blockCurrent33kV = calculateBlockCurrent33kV(25.6); // ~450 A
export const transformerNominalCurrent = calculateTransformerCurrent(3.75, 0.4); // ~5,410 A
export const transformerLoadCurrent = calculateTransformerCurrent(3.2, 0.4); // ~4,620 A
export const containerCurrent = calculateTransformerCurrent(1.6, 0.4); // ~2,300 A
export const transformerLoadPercentage = calculateTransformerLoadPercentage(3.2, 3.75); // ~85%

