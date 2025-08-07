import React from 'react';
import { motion } from 'motion/react';
import AnimatedSignupCard from '../../organisms/AnimatedSignupCard';

const SignupPageTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-auto py-4 sm:py-6 lg:py-8 px-2 sm:px-4">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/video-bg.mp4" type="video/mp4" />
      </video>
      {/* Background overlay with gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"
      />
      
      {/* Animated background mesh */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-black/30 to-teal-800/20"
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            i % 3 === 0 ? 'w-3 h-3 rounded-full bg-teal-400/20' :
            i % 3 === 1 ? 'w-4 h-1 rounded-full bg-teal-300/15' :
            'w-2 h-2 rotate-45 bg-gray-800/25'
          }`}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
        />
      ))}

      {/* Main content with entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full flex items-center justify-center px-4 py-8"
      >
        <AnimatedSignupCard />
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-16 h-16 border-2 border-teal-400/30 rounded-lg"
      />
      
      <motion.div
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-10 right-10 w-12 h-12 border-2 border-gray-800/40 rounded-full"
      />
    </div>
  );
};

export default SignupPageTemplate;
