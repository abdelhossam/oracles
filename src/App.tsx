import React, { useState } from 'react';
import { Header } from './components/Header';
import { TabSelector } from './components/TabSelector';
import { AssetCard } from './components/AssetCard';
import { Footer } from './components/Footer';
import { ParticlesBackground } from './components/Background';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { ReadmeToggle } from './components/ReadmeToggle';
import { useChainlinkData } from './hooks/useChainlinkData';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const { assets, loading, error, nextUpdate, refetch } = useChainlinkData();
  const [activeTab, setActiveTab] = useState(0);

  const currentAsset = assets[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ParticlesBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header nextUpdate={nextUpdate} onRefresh={refetch} />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <ReadmeToggle />
            
            {loading && assets.length === 0 ? (
              <LoadingSpinner />
            ) : error ? (
              <ErrorMessage message={error} onRetry={refetch} />
            ) : (
              <>
                <TabSelector
                  assets={assets}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
                
                <div className="flex justify-center">
                  <AnimatePresence mode="wait">
                    {currentAsset && (
                      <motion.div
                        key={currentAsset.symbol}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                          duration: 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-full max-w-6xl"
                      >
                        <AssetCard asset={currentAsset} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {loading && (
                  <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-3 border">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-600"></div>
                      Updating...
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;