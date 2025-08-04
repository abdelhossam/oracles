import { AssetData } from '../types';

export const ASSETS: Omit<AssetData, 'price' | 'decimals' | 'updatedAt' | 'lastFetch'>[] = [
  {
    symbol: 'Apple',
    name: 'Apple Inc.',
    description: 'Apple Inc. is a leading global technology company known for designing innovative consumer electronics, software, and services. Founded in 1976, Apple revolutionized personal technology with iconic products like the iPhone, Mac, iPad, and Apple Watch. It is also recognized for its seamless ecosystem and emphasis on user experience, privacy, and sleek design.',
    oracleAddress: '0x7E7B45b08F68EC69A99AAb12e42FcCB078e10094'
  },
  {
    symbol: 'Amazon', 
    name: 'Amazon.com Inc.',
    description: 'Amazon.com, Inc. is a global e-commerce and cloud computing giant founded in 1994. Initially an online bookstore, it has grown into one of the world\'s most influential companies, offering services from online retail and logistics to AWS (Amazon Web Services), AI, and streaming content. Amazon is known for its scale, innovation, and customer-centric approach.',
    oracleAddress: '0xf9184b8E5da48C19fA4E06f83f77742e748cca96'
  },
  {
    symbol: 'Bitcoin',
    name: 'Bitcoin',
    description: 'Bitcoin (BTC) is the first decentralized digital currency, launched in 2009 by an anonymous creator known as Satoshi Nakamoto. It enables peer-to-peer transactions on a secure, immutable blockchain without the need for intermediaries. Bitcoin is often considered digital gold and is widely regarded as a hedge against inflation and traditional financial systems.',
    oracleAddress: '0xc907E116054Ad103354f2D350FD2514433D57F6f'
  },
  {
    symbol: 'Ethereum',
    name: 'Ethereum',
    description: 'Ethereum (ETH) is a decentralized blockchain platform introduced in 2015 by Vitalik Buterin. It enables developers to build smart contracts and decentralized applications (dApps). Ethereum is the foundation for most of the decentralized finance (DeFi) ecosystem and NFTs, making it one of the most influential technologies in Web3.',
    oracleAddress: '0xF9680D99D6C9589e2a93a78A04A279e509205945'
  }
];

export const CONTRACT_ADDRESS = '0x5143816ed83fb77550e4a65f960fbe5d9979789b';
export const RPC_URL = 'https://polygon-mainnet.g.alchemy.com/v2/ED3A57EuqQxuQLQhxy1CsVIxFBc-PIT0';