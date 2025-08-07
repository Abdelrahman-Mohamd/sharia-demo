import React from 'react';
import { motion } from 'motion/react';
import BulletPoint from '../../atoms/BulletPoint';

interface ContractSummaryProps {
  title?: string;
  className?: string;
  onBulletPointClick?: (bulletPoint: {
    title: string;
    details: string;
  }) => void;
}

const ContractSummary: React.FC<ContractSummaryProps> = ({ 
  title = "Contract Summary",
  className = "",
  onBulletPointClick
}) => {
  const summaryPoints = [
    {
      text: "Service Agreement between Company A and Company B for software development services",
      variant: 'default' as const,
      icon: "•",
      details: {
        title: "Service Agreement Details",
        content: "This comprehensive service agreement establishes a professional relationship between Company A (the service provider) and Company B (the client) for the development of custom software solutions. The agreement outlines the scope of work, responsibilities of each party, and the framework for successful project delivery. Company A will provide full-stack development services including front-end user interfaces, back-end systems, database design, and system integration."
      }
    },
    {
      text: "Contract duration: 12 months starting January 1, 2025",
      variant: 'default' as const,
      icon: "•",
      details: {
        title: "Contract Duration & Timeline",
        content: "The contract establishes a 12-month engagement period beginning January 1, 2025, and concluding December 31, 2025. This timeline includes all phases of development: planning (1 month), design and prototyping (2 months), development (7 months), testing and deployment (1 month), and a transition period (1 month). The timeline includes built-in flexibility for scope adjustments and milestone reviews every quarter."
      }
    },
    {
      text: "Total contract value: $250,000 paid in monthly installments",
      variant: 'default' as const,
      icon: "•",
      details: {
        title: "Financial Terms & Payment Schedule",
        content: "The total project value is set at $250,000 USD, structured as monthly payments of approximately $20,833. Payment terms include a 30% upfront payment upon contract signing, followed by monthly installments tied to milestone completion. All payments are due within 15 days of invoice receipt. The contract includes provisions for scope changes, with additional work billed at pre-agreed hourly rates."
      }
    },
    {
      text: "Key deliverables include web application, mobile app, and API documentation",
      variant: 'default' as const,
      icon: "•",
      details: {
        title: "Project Deliverables & Scope",
        content: "The project encompasses three main deliverables: a responsive web application built with modern frameworks, native mobile applications for iOS and Android platforms, and comprehensive API documentation. Each deliverable includes full source code, deployment guides, user manuals, and maintenance documentation. The web application will support user authentication, data management, and reporting features. Mobile apps will maintain feature parity with the web platform."
      }
    },
    {
      text: "Notice period for termination: 30 days written notice required",
      variant: 'default' as const,
      icon: "•",
      details: {
        title: "Termination Clauses & Procedures",
        content: "Either party may terminate this agreement with 30 days written notice. Termination procedures include project handover documentation, final deliverable transfer, prorated final payment calculation, and intellectual property rights transfer. In case of termination for cause, different notice periods may apply. The contract includes provisions for early termination fees and work-in-progress compensation."
      }
    },
    {
      text: "Intellectual property rights remain with Company A upon full payment",
      variant: 'default' as const,
      icon: "•",
      details: {
        title: "Intellectual Property Rights",
        content: "All intellectual property developed during the project, including source code, designs, documentation, and proprietary methodologies, will be transferred to Company A upon full payment completion. This includes exclusive rights to use, modify, and distribute the software. Company B retains rights to general methodologies and pre-existing intellectual property used in the project. The transfer includes all necessary licenses and documentation for ongoing maintenance."
      }
    },
   
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`h-full flex flex-col ${className}`}
    >
      <div className="flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-[#FFFF] mb-2 flex items-center gap-2">
            
            {title}
          </h3>
          <div className="h-0.5 bg-gradient-to-r from-[#FFFF] to-transparent rounded-full w-16 sm:w-24"></div>
        </motion.div>

        {/* Summary Points */}
        <div className="space-y-3 sm:space-y-4 max-h-72 sm:max-h-96 overflow-y-auto">
          {summaryPoints.map((point, index) => (
            <div
              key={index}
              onClick={() => onBulletPointClick?.({
                title: point.details.title,
                details: point.details.content
              })}
              className="cursor-pointer hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              <BulletPoint
                text={point.text}
                icon={point.icon}
                variant={point.variant}
                delay={0.2 + index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Upload New Contract Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 pt-4 border-t border-white/10"
      >
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 
                     rounded-xl px-2 sm:px-3 md:px-2 lg:px-4 py-2 sm:py-2.5 md:py-2 lg:py-3 
                     flex items-center justify-center gap-2 sm:gap-3 hover:cursor-pointer
                     text-white font-medium transition-colors duration-200 text-xs sm:text-sm lg:text-base"
          onClick={() => {
            // TODO: Implement file upload functionality
            console.log('Upload new contract clicked');
          }}
        >
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
            />
          </svg>
          Replace Current Contract
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContractSummary;
