import React from 'react';
import { motion } from 'motion/react';
import ContractAnalyzerGrid from '../../organisms/ContractAnalyzerGrid';

const ContractAnalyzerPageTemplate: React.FC = () => {
  return (
    <div 
      className="min-h-screen relative overflow-auto"
      style={{
        background: `linear-gradient(135deg, #bad6b8 0%, #597362 100%)`
      }}
    >
      {/* Animated background pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFFFFF 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #bad6b8 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${5 + i * 8}%`,
            top: `${20 + i * 5}%`,
          }}
        />
      ))}

    

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10"
      >
        <ContractAnalyzerGrid />
      </motion.main>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#597362]/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default ContractAnalyzerPageTemplate;
