import { useState, useEffect } from 'react';
import { createPublicClient, http, parseAbi } from 'viem';
import { polygon } from 'viem/chains';
import { AssetData, PriceData } from '../types';
import { ASSETS, CONTRACT_ADDRESS, RPC_URL } from '../config/assets';

const client = createPublicClient({
  chain: polygon,
  transport: http(RPC_URL)
});

const contractAbi = parseAbi([
  'function getChainlinkDataFeedLatestAnswer(address oracleAssetContract) view returns (int256 answer, uint8 decimals, uint256 updatedAt)'
]);

async function fetchAssetPrice(oracleAddress: string): Promise<PriceData> {
  try {
    const result = await client.readContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: contractAbi,
      functionName: 'getChainlinkDataFeedLatestAnswer',
      args: [oracleAddress as `0x${string}`]
    });

    return {
      answer: result[0],
      decimals: result[1],
      updatedAt: result[2]
    };
  } catch (error) {
    console.error(`Error fetching price for ${oracleAddress}:`, error);
    throw error;
  }
}

function calculatePrice(answer: bigint, decimals: number): number {
  return Number(answer) / Math.pow(10, decimals);
}

function formatTimestamp(timestamp: bigint): string {
  const date = new Date(Number(timestamp) * 1000);
  return date.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
}

export function useChainlinkData() {
  const [assets, setAssets] = useState<AssetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextUpdate, setNextUpdate] = useState(30);

  const fetchAssetData = async (asset: typeof ASSETS[0]): Promise<AssetData> => {
    try {
      const priceData = await fetchAssetPrice(asset.oracleAddress);

      const price = calculatePrice(priceData.answer, priceData.decimals);
      const updatedAt = formatTimestamp(priceData.updatedAt);
      
      return {
        ...asset,
        price,
        decimals: priceData.decimals,
        updatedAt,
        lastFetch: new Date()
      };
    } catch (err) {
      console.error(`Error fetching data for ${asset.symbol}:`, err);
      throw new Error(`Failed to fetch ${asset.symbol} data`);
    }
  };

  const fetchAllAssets = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const assetPromises = ASSETS.map(asset => fetchAssetData(asset));
      const assetData = await Promise.all(assetPromises);
      
      setAssets(assetData);
      setNextUpdate(30); // Reset countdown
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch asset data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllAssets();
    
    // Set up interval for fetching data every 30 seconds
    const fetchInterval = setInterval(fetchAllAssets, 30000);
    
    // Set up countdown timer
    const countdownInterval = setInterval(() => {
      setNextUpdate(prev => {
        if (prev <= 1) {
          return 30; // Reset when it reaches 0
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(fetchInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return { assets, loading, error, nextUpdate, refetch: fetchAllAssets };
}