import React from 'react';
import { motion } from 'motion/react';
import CheckIcon from '@mui/icons-material/Check';

interface ToggleAgentProps {
  name: string;
  description?: string; // Made optional since we're simplifying
  isActive: boolean;
  onToggle: () => void;
  delay?: number;
}

const ToggleAgent: React.FC<ToggleAgentProps> = ({ 
  name, 
  isActive, 
  onToggle, 
  delay = 0 
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      onClick={onToggle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full 
        text-xs sm:text-sm font-medium transition-all duration-300 ease-out hover:cursor-pointer
        ${isActive 
          ? 'bg-[#bad6b8]/30 text-[#ffffff] border border-[#bad6b8]/50 shadow-sm' 
          : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/15 hover:text-white/90'
        }
      `}
    >
      {/* Icon with animation - only show when active */}
      {isActive && (
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          <CheckIcon sx={{ fontSize: 14 }} />
        </motion.div>
      )}
      
      {/* Name */}
      <span className="leading-tight">{name}</span>
    </motion.button>
  );
};

export default ToggleAgent;
