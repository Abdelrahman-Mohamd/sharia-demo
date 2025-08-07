import React, { useState } from 'react';
import { motion } from 'motion/react';
import ScoreBar from '../../atoms/ScoreBar';
import ToggleAgent from '../../atoms/ToggleAgent';
import CalculateIcon from '@mui/icons-material/Calculate';

interface ShariaAnalysisProps {
  className?: string;
}

const ShariaAnalysis: React.FC<ShariaAnalysisProps> = ({ className = "" }) => {
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Sample scores - these would come from actual analysis
  const [scores, setScores] = useState([
    { label: 'Religion', percentage: 85, color: '#bad6b8' },
    { label: 'Law', percentage: 72, color: '#bad6b8' },
    { label: 'Ethics', percentage: 91, color: '#bad6b8' }
  ]);

  // Islamic doctrine AI agents state
  const [agents, setAgents] = useState([
    { 
      id: 'hanafi', 
      name: 'Hanafi School',
      isActive: true 
    },
    { 
      id: 'maliki', 
      name: 'Maliki School',
      isActive: false 
    },
    { 
      id: 'shafii', 
      name: 'Shafi\'i School',
      isActive: true 
    },
    { 
      id: 'hanbali', 
      name: 'Hanbali School',
      isActive: false 
    },
    { 
      id: 'jafari', 
      name: 'Ja\'fari School',
      isActive: false 
    }
  ]);

  const toggleAgent = (id: string) => {
    setAgents(prev => prev.map(agent => 
      agent.id === id ? { ...agent, isActive: !agent.isActive } : agent
    ));
  };

  const calculateScores = () => {
    const activeAgents = agents.filter(agent => agent.isActive);
    
    if (activeAgents.length === 0) {
      alert('Please select at least one Islamic doctrine AI agent to calculate scores');
      return;
    }

    setIsCalculating(true);
    console.log('Calculating scores based on agents:', activeAgents.map(a => a.name));

    // Simulate calculation process
    setTimeout(() => {
      // Generate new scores based on selected agents
      const newScores = [
        { 
          label: 'Religion', 
          percentage: Math.floor(Math.random() * 30) + 60 + (activeAgents.length * 2), 
          color: '#bad6b8' 
        },
        { 
          label: 'Law', 
          percentage: Math.floor(Math.random() * 25) + 65 + (activeAgents.length * 3), 
          color: '#bad6b8' 
        },
        { 
          label: 'Ethics', 
          percentage: Math.floor(Math.random() * 20) + 70 + (activeAgents.length * 1), 
          color: '#bad6b8' 
        }
      ];

      setScores(newScores);
      setIsCalculating(false);
      console.log('Score calculation complete:', newScores);
    }, 2000);
  };

  return (
    <div className={`h-full flex flex-col ${className}`}>
      <div className="flex-1">
        {/* Scores Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
         
          <div className="space-y-2 sm:space-y-3">
            {scores.map((score, index) => (
              <ScoreBar
                key={score.label}
                label={score.label}
                percentage={score.percentage}
                color={score.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* AI Agents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="text-sm sm:text-md font-semibold text-[#FFFF] mb-3 sm:mb-4 text-center">
            Islamic Doctrine AI Agents
          </h4>
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            {agents.map((agent, index) => (
              <ToggleAgent
                key={agent.id}
                name={agent.name}
                isActive={agent.isActive}
                onToggle={() => toggleAgent(agent.id)}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Calculate Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 pt-4 border-t border-white/10"
      >
        <button
          onClick={calculateScores}
          disabled={isCalculating}
          className="w-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 
                   rounded-xl px-2 sm:px-3 md:px-2 lg:px-4 py-2 sm:py-2.5 md:py-2 lg:py-3 
                   text-white font-medium transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer
                   flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base"
        >
          {isCalculating ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Calculating...
            </>
          ) : (
            <>
              <CalculateIcon sx={{ fontSize: 18 }} />
              Calculate Scores
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default ShariaAnalysis;
