"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Activity, RefreshCw, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface HeaderProps {
  nextUpdate: number;
  onRefresh: () => void;
}

export function Header({ nextUpdate, onRefresh }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setTimeout(() => setRefreshing(false), 1000);
  };

  if (!currentTime) {
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(currentTime);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  }).format(currentTime);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Orbitron, monospace' }}>
                Oracles
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <div className="text-sm">
                <span className="font-medium">{formattedDate}</span>
                <span className="mx-2">•</span>
                <span className="font-mono" suppressHydrationWarning>
                  {formattedTime}
                </span>
                <span className="ml-1 text-xs text-gray-500">UTC</span>
              </div>
            </div>
            <div className="text-right border-l border-gray-200 pl-6">
              <p className="text-sm text-gray-600">Next update in</p>
              <p className="font-medium text-gray-900">
                {isMounted ? `${nextUpdate}s` : ""}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              disabled={refreshing}
              className={`text-gray-700 ${refreshing ? "animate-spin" : ""}`}
            >
              <RefreshCw className="h-6 w-6" />
            </Button>
          </motion.div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white/95 backdrop-blur-md p-4 border-t border-gray-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-4 w-4" />
              <div className="text-sm">
                <div className="font-medium">{formattedDate}</div>
                <div className="font-mono" suppressHydrationWarning>
                  {formattedTime}
                  <span className="ml-1 text-xs text-gray-500">UTC</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Next update in</div>
                <div className="font-medium text-gray-900">{isMounted ? `${nextUpdate}s` : ""}</div>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={refreshing}
              className="w-full justify-center"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              Refresh Data
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}