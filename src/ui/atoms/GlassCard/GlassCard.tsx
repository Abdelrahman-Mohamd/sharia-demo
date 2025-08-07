import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  header?: {
    title?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onLeftIconClick?: () => void;
    onRightIconClick?: () => void;
  };
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  header 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`
        relative overflow-hidden rounded-xl sm:rounded-2xl
        bg-black/40 backdrop-blur-md
        border border-white/20
        shadow-xl shadow-black/20
        min-h-96 md:h-160
        ${className}
        glasscard-texture
      `}
      style={{}}
    >
      {/* Glassmorphic overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent" /> */}
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header Section */}
        {header && (
          <div className="flex items-center justify-between p-2 sm:p-3 md:p-2 lg:p-4 pb-2 border-b border-white/10 ">
            {/* Title */}
            <div className="flex-1 text-left">
              {header.title && (
                <h2 className="text-xs sm:text-sm md:text-xs lg:text-sm font-normal text-[#FFFFFF] tracking-wide">
                  {header.title}
                </h2>
              )}
            </div>
            
            {/* Right Icon */}
            {header.rightIcon && (
              <motion.button
                onClick={header.onRightIconClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white hover:cursor-pointer transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                {header.rightIcon}
              </motion.button>
            )}
            
            {/* Left Icon */}
            {header.leftIcon && (
              <motion.button
                onClick={header.onLeftIconClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors hover:cursor-pointer p-2 rounded-lg hover:bg-white/10"
              >
                {header.leftIcon}
              </motion.button>
            )}
          </div>
        )}
        
        {/* Main Content */}
        <div className={`flex-1 ${header ? 'p-2 sm:p-3 md:p-2 lg:p-4 pt-2' : 'p-3 sm:p-4 md:p-3 lg:p-6'} flex flex-col`}>
          {children}
        </div>
      </div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none" />
    </motion.div>
  );
};

export default GlassCard;
