import React from 'react';
import { motion } from 'motion/react';

interface ScoreBarProps {
  label: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ 
  label, 
  percentage, 
  color = '#bad6b8', 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-3 sm:mb-4"
    >
      {/* Label and Percentage */}
      <div className="flex justify-between items-center mb-1 sm:mb-2">
        <span className="text-xs sm:text-sm font-medium text-white">{label}</span>
        <span className="text-xs sm:text-sm font-bold text-white">{percentage}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

export default ScoreBar;
