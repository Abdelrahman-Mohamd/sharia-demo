import React from 'react';
import { motion } from 'motion/react';

interface BulletPointProps {
  text: string;
  icon?: string;
  delay?: number;
  variant?: 'default' | 'warning' | 'success' | 'info';
}

const BulletPoint: React.FC<BulletPointProps> = ({ 
  text, 
  icon = "•", 
  delay = 0,
  variant = 'default'
}) => {
  const variantStyles = {
    default: 'text-[#FFFFFF]',
    warning: 'text-amber-600',
    success: 'text-emerald-600',
    info: 'text-blue-600'
  };

  const iconStyles = {
    default: 'text-[#FFFFFF]',
    warning: 'text-amber-500',
    success: 'text-emerald-500',
    info: 'text-blue-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-2 sm:gap-3 group"
    >
      <motion.span 
        className={`text-base sm:text-lg font-bold mt-0.5 ${iconStyles[variant]}`}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.span>
      <span className={`text-xs sm:text-sm leading-relaxed ${variantStyles[variant]} group-hover:text-[#bad6b8] hover:cursor-pointer transition-colors`}>
        {text}
      </span>
    </motion.div>
  );
};

export default BulletPoint;
