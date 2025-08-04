export interface AssetData {
  symbol: string;
  name: string;
  description: string;
  oracleAddress: string;
  price: number;
  decimals: number;
  updatedAt: string;
  lastFetch: Date;
}

export interface PriceData {
  answer: bigint;
  decimals: number;
  updatedAt: bigint;
}