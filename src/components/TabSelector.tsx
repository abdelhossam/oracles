import React from 'react';
import { AssetData } from '../types';

interface TabSelectorProps {
  assets: AssetData[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function TabSelector({ assets, activeTab, onTabChange }: TabSelectorProps) {
  const getLogoPath = (symbol: string) => {
    const logoMap: { [key: string]: string } = {
      'Apple': '/assets/logos/apple.svg',
      'Amazon': '/assets/logos/amazon.svg',
      'Bitcoin': '/assets/logos/btc.svg',
      'Ethereum': '/assets/logos/eth.svg'
    };
    return logoMap[symbol] || '/assets/logos/apple.svg';
  };

  return (
    <div className="flex justify-center mb-8 border-b border-gray-200">
      <div className="flex gap-8">
          {assets.map((asset, index) => (
            <button
              key={asset.symbol}
              onClick={() => onTabChange(index)}
              className={`relative px-4 py-4 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === index
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <img 
                src={getLogoPath(asset.symbol)} 
                alt={`${asset.symbol} logo`}
                className="w-5 h-5 object-contain"
              />
              {asset.symbol}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
              )}
            </button>
          ))}
      </div>
    </div>
  );
}