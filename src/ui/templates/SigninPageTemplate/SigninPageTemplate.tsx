import React from 'react';
import { motion } from 'motion/react';
import AnimatedSigninCard from '../../organisms/AnimatedSigninCard/AnimatedSigninCard';

const SigninPageTemplate: React.FC = () => {
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
      {/* Floating geometric shapes (optional, can copy from signup) */}
      <AnimatedSigninCard />
    </div>
  );
};

export default SigninPageTemplate;
