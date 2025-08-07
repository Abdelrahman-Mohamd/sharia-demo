import React, { useState } from 'react';
import { motion } from 'motion/react';
import GlassCard from '../../atoms/GlassCard';
import ContractAnalyzerCard from '../ContractAnalyzerCard';
import ShariaAnalysis from '../../molecules/ShariaAnalysis';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EditIcon from '@mui/icons-material/Edit';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CancelIcon from '@mui/icons-material/Cancel';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';

const ContractAnalyzerGrid: React.FC = () => {
  const [isCard3Collapsed, setIsCard3Collapsed] = useState(false);
  const [isCard1Collapsed, setIsCard1Collapsed] = useState(false);
  const [selectedBulletPoint, setSelectedBulletPoint] = useState<{
    title: string;
    details: string;
  } | null>(null);
  const [showRephraseOptions, setShowRephraseOptions] = useState(false);
  const [selectedRephraseOptions, setSelectedRephraseOptions] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [chatHeads, setChatHeads] = useState<Array<{
    id: string;
    name: string;
    isOpen: boolean;
    rephrasedContent: string;
    isLoading: boolean;
  }>>([]);
  const [activeChatHead, setActiveChatHead] = useState<string | null>(null);

  const generateMockRephraseContent = (perspectiveId: string, originalContent: string) => {
    const perspectives = {
      hanafi: "From a Hanafi perspective, this clause should emphasize mutual consent and clarity in contractual obligations, ensuring both parties understand their duties according to traditional Islamic jurisprudence.",
      maliki: "According to Maliki school interpretation, this section requires greater emphasis on community benefit (maslaha) and should include provisions for social responsibility in business dealings.",
      shafii: "The Shafi'i approach suggests this clause needs more detailed specifications regarding permissible business practices and clear guidelines on avoiding ambiguous terms (gharar).",
      hanbali: "From a Hanbali standpoint, this provision should be more conservative and include stricter adherence to textual sources, with clearer prohibition of potentially questionable practices.",
      jafari: "According to Ja'fari jurisprudence, this clause should incorporate principles of justice ('adl) and include provisions for equitable treatment and fair distribution of risks and benefits.",
      modern: "A modern Islamic finance perspective suggests updating this clause to align with contemporary financial instruments while maintaining Sharia compliance through innovative structural approaches.",
      classical: "Classical Islamic scholars would recommend simplifying this clause to focus on fundamental principles of honesty, transparency, and mutual benefit as outlined in traditional texts."
    };
    
    return perspectives[perspectiveId as keyof typeof perspectives] || originalContent;
  };

  const toggleChatHead = (id: string) => {
    if (activeChatHead === id) {
      setActiveChatHead(null);
    } else {
      setActiveChatHead(id);
    }
  };

  const closeChatHead = (id: string) => {
    setChatHeads(prev => prev.filter(head => head.id !== id));
    if (activeChatHead === id) {
      setActiveChatHead(null);
    }
  };

  const acceptRephrase = (id: string) => {
    const chatHead = chatHeads.find(head => head.id === id);
    if (chatHead && selectedBulletPoint) {
      // Update the bullet point content with the rephrased version
      setSelectedBulletPoint({
        ...selectedBulletPoint,
        details: chatHead.rephrasedContent
      });
      // Close all chat heads after accepting
      setChatHeads([]);
      setActiveChatHead(null);
    }
  };

  const rephraseOptions = [
    { id: 'hanafi', name: 'Hanafi School', description: 'Sunni Islamic jurisprudence' },
    { id: 'maliki', name: 'Maliki School', description: 'Sunni Islamic jurisprudence' },
    { id: 'shafii', name: 'Shafi\'i School', description: 'Sunni Islamic jurisprudence' },
    { id: 'hanbali', name: 'Hanbali School', description: 'Sunni Islamic jurisprudence' },
    { id: 'jafari', name: 'Ja\'fari School', description: 'Shia Islamic jurisprudence' },
    { id: 'modern', name: 'Modern Islamic Finance', description: 'Contemporary interpretations' },
    { id: 'classical', name: 'Classical Scholars', description: 'Traditional interpretations' }
  ];

  const handleRephraseOptionToggle = (optionId: string) => {
    setSelectedRephraseOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleRephrase = () => {
    if (selectedRephraseOptions.length === 0) {
      alert('Please select at least one option to rephrase with');
      return;
    }
    
    console.log('Rephrasing with options:', selectedRephraseOptions);
    
    // Create chat heads for each selected perspective
    const newChatHeads = selectedRephraseOptions.map(optionId => {
      const option = rephraseOptions.find(opt => opt.id === optionId);
      return {
        id: optionId,
        name: option?.name || '',
        isOpen: false,
        rephrasedContent: '',
        isLoading: true
      };
    });
    
    setChatHeads(newChatHeads);
    setShowRephraseOptions(false);
    setSelectedRephraseOptions([]);
    
    // Simulate rephrasing process for each perspective
    newChatHeads.forEach((chatHead, index) => {
      setTimeout(() => {
        const mockRephrasedContent = generateMockRephraseContent(chatHead.id, selectedBulletPoint?.details || '');
        setChatHeads(prev => prev.map(head => 
          head.id === chatHead.id 
            ? { ...head, isLoading: false, rephrasedContent: mockRephrasedContent }
            : head
        ));
      }, 1000 + index * 500); // Stagger the loading
    });
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    console.log('Analyzing and recalculating scores...');
    
    // Simulate analysis process
    setTimeout(() => {
      setIsAnalyzing(false);
      // TODO: Trigger score recalculation in Card 1
      console.log('Analysis complete - scores updated');
    }, 2000);
  };

  const toggleCard3 = () => {
    setIsCard3Collapsed(!isCard3Collapsed);
  };

  const toggleCard1 = () => {
    console.log('toggleCard1 called, current state:', isCard1Collapsed);
    setIsCard1Collapsed(!isCard1Collapsed);
  };
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row gap-6 md:gap-6 p-4 md:p-6">
      {/* Card 1 - Scores */}
      <div
        className={`flex-shrink-0 transition-all duration-300 ease-out 
          ${isCard1Collapsed 
            ? 'w-full md:w-12 h-20 md:h-auto' 
            : 'w-full md:w-64 lg:w-80 xl:w-96'
          }`}
      >
        <GlassCard 
          delay={0.1}
          header={isCard1Collapsed ? undefined : {
            title: "Scores",
            rightIcon: <KeyboardArrowLeftIcon sx={{ fontSize: 24 }} />,
            onRightIconClick: toggleCard1
          }}
        >
          {isCard1Collapsed ? (
            /* Collapsed State - Vertical Strip */
            <div className="h-full flex md:flex-col flex-row items-center justify-between p-2">
              {/* Expand Button */}
              <motion.button
                onClick={toggleCard1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white hover:cursor-pointer transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
              </motion.button>
              
              {/* Title */}
              <div className="flex-1 flex items-center justify-center">
                <div className="md:transform md:rotate-90 whitespace-nowrap">
                  <span className="text-sm font-light text-white tracking-wide">
                    Scores
                  </span>
                </div>
              </div>
            </div>
          ) : (
            /* Expanded State with Content */
            <div className="h-full overflow-y-auto">
              <ShariaAnalysis />
            </div>
          )}
        </GlassCard>
      </div>

      {/* Card 2 - Takes up remaining space - Priority for medium+ screens */}
      <div
        className="flex-1 md:flex-[2] transition-all duration-300 ease-out w-full"
      >
        <GlassCard 
          delay={0.2}
          header={selectedBulletPoint ? {
            title: "Overview",
            leftIcon: <CloseIcon sx={{ fontSize: 24 }} />,
            onLeftIconClick: showRephraseOptions 
              ? () => setShowRephraseOptions(false)
              : () => setSelectedBulletPoint(null)
          } : undefined}
        >
          {selectedBulletPoint ? (
            showRephraseOptions ? (
              /* Rephrase Options View */
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                    Rephrase with Islamic Perspectives
                  </h2>
                  <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                    Select the Islamic schools or perspectives you'd like to consider for rephrasing:
                  </p>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {rephraseOptions.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-white/20 
                                 hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedRephraseOptions.includes(option.id)}
                          onChange={() => handleRephraseOptionToggle(option.id)}
                          className="w-3 h-3 sm:w-4 sm:h-4 accent-[#bad6b8]"
                        />
                        <div>
                          <div className="text-white font-medium text-sm sm:text-base">{option.name}</div>
                          <div className="text-white/60 text-xs sm:text-sm">{option.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex gap-2 flex-col sm:flex-row md:flex-col lg:flex-row justify-center">
                    <button
                      onClick={handleRephrase}
                      disabled={selectedRephraseOptions.length === 0}
                      className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 
                               rounded-xl px-2 sm:px-3 md:px-2 lg:px-4 py-2 sm:py-2.5 md:py-2 lg:py-3 
                               text-white font-medium transition-colors duration-200
                               disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer
                               flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base"
                    >
                      <AutoFixHighIcon sx={{ fontSize: 18 }} />
                      Rephrase Content
                    </button>
                    <button
                      onClick={() => setShowRephraseOptions(false)}
                      className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 
                               rounded-xl px-2 sm:px-3 md:px-2 lg:px-4 py-2 sm:py-2.5 md:py-2 lg:py-3 
                               text-white font-medium transition-colors duration-200 hover:cursor-pointer
                               flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base"
                    >
                      <CancelIcon sx={{ fontSize: 18 }} />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Detailed View */
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                    {selectedBulletPoint.title}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                    {selectedBulletPoint.details}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex gap-2 flex-col sm:flex-row md:flex-col lg:flex-row justify-center">
                    <button
                      onClick={() => setShowRephraseOptions(true)}
                      className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 
                               rounded-xl px-2 sm:px-3 md:px-2 lg:px-4 py-2 sm:py-2.5 md:py-2 lg:py-3 
                               text-white font-medium transition-colors duration-200 hover:cursor-pointer
                               flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base"
                    >
                      <EditIcon sx={{ fontSize: 18 }} />
                      Rephrase
                    </button>
                    <button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 
                               rounded-xl px-2 sm:px-3 md:px-2 lg:px-4 py-2 sm:py-2.5 md:py-2 lg:py-3 
                               text-white font-medium transition-colors duration-200
                               disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer
                               flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base"
                    >
                      <AnalyticsIcon sx={{ fontSize: 18 }} />
                      {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                    </button>
                  </div>
                </div>
              </div>
            )
          ) : (
            /* Default View */
            <div className="flex items-center justify-center h-full">
              <div className="text-center px-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#597362] mb-3 sm:mb-4">
                  Contract Details
                </h3>
                <p className="text-[#597362]/80 text-sm sm:text-base">
                  Click on any summary point to view details
                </p>
              </div>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Card 3 - Contract Analysis */}
      <div
        className={`flex-shrink-0 transition-all duration-300 ease-out 
          ${isCard3Collapsed 
            ? 'w-full md:w-12 h-20 md:h-auto' 
            : 'w-full md:w-64 lg:w-80 xl:w-96'
          }`}
      >
        <GlassCard 
          delay={0.3} 
          header={isCard3Collapsed ? undefined : {
            title: "Contract Analysis",
            rightIcon: <KeyboardArrowRightIcon sx={{ fontSize: 24 }} />,
            onRightIconClick: toggleCard3
          }}
        >
          {isCard3Collapsed ? (
            /* Collapsed State - Vertical Strip */
            <div className="h-full flex md:flex-col flex-row items-center justify-between p-2">
              {/* Expand Button */}
              <motion.button
                onClick={toggleCard3}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white hover:cursor-pointer transition-colors p-2 rounded-lg hover:bg-white/10"
              >
                <KeyboardArrowLeftIcon sx={{ fontSize: 20 }} />
              </motion.button>
              
              {/* Title */}
              <div className="flex-1 flex items-center justify-center">
                <div className="md:transform md:rotate-90 whitespace-nowrap">
                  <span className="text-sm font-light text-white tracking-wide">
                    Contract
                  </span>
                </div>
              </div>
              
             
            </div>
          ) : (
            /* Expanded State with Header */
            <div className="h-full overflow-y-auto">
              <ContractAnalyzerCard 
                delay={0.3} 
                onBulletPointClick={setSelectedBulletPoint}
              />
            </div>
          )}
        </GlassCard>
      </div>

      {/* Chat Heads for Rephrase Perspectives */}
      {chatHeads.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Chat Head Bubbles */}
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 flex flex-col gap-2 pointer-events-auto">
            {chatHeads.map((chatHead, index) => (
              <motion.div
                key={chatHead.id}
                initial={{ opacity: 0, scale: 0, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Chat Head Bubble */}
                <motion.button
                  onClick={() => toggleChatHead(chatHead.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#bad6b8] to-[#597362] 
                           border-2 border-white/30 shadow-lg flex items-center justify-center
                           text-white font-bold text-xs sm:text-sm relative overflow-hidden"
                >
                  {chatHead.isLoading ? (
                    <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>{chatHead.name.charAt(0)}</span>
                  )}
                  
                  {/* Close button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeChatHead(chatHead.id);
                    }}
                    className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full 
                             flex items-center justify-center text-white text-xs hover:bg-red-600"
                  >
                    <CloseIcon sx={{ fontSize: 12 }} />
                  </button>
                </motion.button>

                {/* Chat Window */}
                {activeChatHead === chatHead.id && !chatHead.isLoading && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    className="absolute bottom-0 right-12 sm:right-14 w-72 sm:w-80 bg-black/90 backdrop-blur-md 
                             border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl max-w-[calc(100vw-2rem)]"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                      <h3 className="text-white font-medium text-sm">{chatHead.name}</h3>
                      <button
                        onClick={() => setActiveChatHead(null)}
                        className="text-white/60 hover:text-white"
                      >
                        <MinimizeIcon sx={{ fontSize: 16 }} />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="text-white/80 text-sm leading-relaxed mb-4 max-h-32 overflow-y-auto">
                      {chatHead.rephrasedContent}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => acceptRephrase(chatHead.id)}
                      className="w-full bg-[#bad6b8]/20 hover:bg-[#bad6b8]/30 
                               border border-[#bad6b8]/30 rounded-lg px-3 py-2
                               text-white text-sm font-medium transition-colors duration-200
                               flex items-center justify-center gap-2"
                    >
                      <CheckIcon sx={{ fontSize: 16 }} />
                      Accept This Rephrase
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractAnalyzerGrid;
