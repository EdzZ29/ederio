'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
}

interface AnimatedTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const AnimatedTabs: React.FC<AnimatedTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div
      role="tablist"
      className={cn(
        'flex flex-row flex-nowrap items-center justify-center gap-1 rounded-full p-1 sm:gap-0 sm:p-1.5',
        'bg-card/60', // Glass effect, follows the active palette
        'border border-border', // Border adaptation
        'backdrop-blur-xl', // Strong glass effect
        'shadow-2xl', // Container shadow
        'max-w-full', // Ensure it doesn't overflow
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isHovered = hoveredTab === tab.id;

        return (
          <motion.button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onChange(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'relative z-10 cursor-pointer rounded-full px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4 sm:py-2.5 sm:text-sm md:px-6',
              isActive
                ? 'text-primary-foreground' // Active text
                : 'text-muted-foreground hover:text-foreground' // Inactive text
            )}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {/* Active Pill with "Transferring" Shadow */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 z-[-1] rounded-full bg-primary shadow-lg"
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 32,
                  mass: 0.9,
                }}
              />
            )}

            {/* Hover Background - Subtle highlight */}
            {isHovered && !isActive && (
              <motion.div
                layoutId="hover-pill"
                className="absolute inset-0 z-[-1] rounded-full bg-foreground/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}

            <span className="relative z-10">{tab.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default AnimatedTabs;
