import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Database, Globe, Zap, Shield, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ReadmeToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "Chainlink Oracle Integration",
      description: "Real-time price feeds from Chainlink's decentralized oracle network"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Polygon Mainnet",
      description: "Smart contract deployed on Polygon for low-cost transactions"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <motion.div
        className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100/50 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">Project Info</h3>
              <p className="text-sm text-gray-600">On-Chain Price Oracle (Polygon)</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-gray-200">
                <div className="pt-4 space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      This prototype demonstrates advanced blockchain integration skills by building a real-time oracle data dashboard. 
                      The application fetches live price data from <strong>Chainlink oracles</strong> through a custom smart contract 
                      deployed on <strong>Polygon mainnet</strong>, showcasing proficiency in Web3 development and smart contract interaction.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100"
                      >
                        <div className="text-gray-700 mt-0.5">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                    <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Smart Contract Address
                    </h4>
                    <code className="text-green-400 text-sm font-mono break-all">
                      0x5143816ed83fb77550e4a65f960fbe5d9979789b
                    </code>
                    <p className="text-gray-400 text-xs mt-2">Deployed on Polygon Mainnet</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Solidity', 'Hardhat', 'Ethers.js', 'Chainlink Oracles'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}