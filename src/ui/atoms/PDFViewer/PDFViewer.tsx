import React from 'react';
import { motion } from 'motion/react';

interface PDFViewerProps {
  documentTitle?: string;
  className?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ 
  documentTitle = "Sample Contract.pdf",
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 overflow-hidden ${className}`}
    >
      {/* PDF Header */}
      <div className="bg-[#597362]/20 px-4 py-3 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-red-500/80 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">PDF</span>
          </div>
          <span className="text-[#597362] font-medium text-sm truncate">
            {documentTitle}
          </span>
        </div>
      </div>

      {/* Mock PDF Content */}
      <div className="p-4 space-y-3 h-64 overflow-y-auto">
        {/* Mock PDF Pages */}
        {[1, 2, 3].map((page) => (
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: page * 0.1 }}
            className="bg-white/90 rounded-lg p-4 shadow-sm border border-gray-200/50"
          >
            <div className="text-xs text-gray-500 mb-2">Page {page}</div>
            
            {/* Mock contract text */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-300/60 rounded w-full"></div>
              <div className="h-3 bg-gray-300/60 rounded w-4/5"></div>
              <div className="h-3 bg-gray-300/60 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300/60 rounded w-5/6"></div>
              
              {page === 1 && (
                <div className="mt-3 p-2 bg-yellow-100/80 rounded text-xs text-gray-700">
                  <strong>Contract Title:</strong> Service Agreement
                </div>
              )}
              
              {page === 2 && (
                <div className="mt-3 p-2 bg-blue-100/80 rounded text-xs text-gray-700">
                  <strong>Key Terms:</strong> Payment & Deliverables
                </div>
              )}
              
              <div className="h-3 bg-gray-300/60 rounded w-2/3"></div>
              <div className="h-3 bg-gray-300/60 rounded w-4/5"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PDF Controls */}
      <div className="bg-[#597362]/10 px-4 py-2 border-t border-white/20">
        <div className="flex items-center justify-between text-xs text-[#597362]">
          <span>3 pages</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
              ↑
            </button>
            <button className="px-2 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
              ↓
            </button>
            <button className="px-2 py-1 bg-white/20 rounded hover:bg-white/30 transition-colors">
              🔍
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PDFViewer;
