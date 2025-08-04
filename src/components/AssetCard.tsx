import React from 'react';
import { AssetData } from '../types';

interface AssetCardProps {
  asset: AssetData;
}

export function AssetCard({ asset }: AssetCardProps) {
  const getLogoPath = (symbol: string) => {
    const logoMap: { [key: string]: string } = {
      'Apple': '/assets/logos/apple.svg',
      'Amazon': '/assets/logos/amazon.svg',
      'Bitcoin': '/assets/logos/btc.svg',
      'Ethereum': '/assets/logos/eth.svg'
    };
    return logoMap[symbol] || '/assets/logos/apple.svg';
  };

  const formatPrice = (price: number) => {
    if (asset.symbol.includes('BTC') || asset.symbol.includes('ETH')) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 max-w-6xl mx-auto">
      <div className="flex">
        {/* Left side - Company info and price */}
        <div className="flex-1 p-8 flex flex-col justify-center items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={getLogoPath(asset.symbol)} 
                alt={`${asset.name} logo`}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{asset.symbol}</h3>
            </div>
          </div>
          
          <div className="text-4xl font-bold text-gray-900">
            {formatPrice(asset.price)}
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-px bg-gray-200 my-6"></div>
        
        {/* Right side - Description */}
        <div className="flex-1 p-8 flex items-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            {asset.description}
          </p>
        </div>
      </div>
    </div>
  );
}