import React from 'react';
import { motion } from 'motion/react';
import ContractSummary from '../../molecules/ContractSummary';

interface ContractAnalyzerCardProps {
  delay?: number;
  className?: string;
  onBulletPointClick?: (bulletPoint: {
    title: string;
    details: string;
  }) => void;
}

const ContractAnalyzerCard: React.FC<ContractAnalyzerCardProps> = ({ 
  delay = 0,
  className = "",
  onBulletPointClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`h-full flex flex-col ${className}`}
    >
      <ContractSummary 
        title="Contract Clauses" 
        onBulletPointClick={onBulletPointClick}
      />
    </motion.div>
  );
};

export default ContractAnalyzerCard;
