import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'motion/react';
import ImageCard from '../../molecules/ImageCard';
import SignupForm from '../SignupForm';

const AnimatedSignupCard: React.FC = () => {
  // React Spring animations for swipe effects
  const imageSpring = useSpring({
    transform: 'translateX(0%)',
    opacity: 1,
    config: { tension: 300, friction: 30 }
  });

  const formSpring = useSpring({
    transform: 'translateX(0%)',
    opacity: 1,
    config: { tension: 300, friction: 30 }
  });

  const cardSpring = useSpring({
    from: { opacity: 0, scale: 0.8, rotateY: -10 },
    to: { opacity: 1, scale: 1, rotateY: 0 },
    config: { tension: 200, friction: 20 }
  });

  return (
    <animated.div
      style={cardSpring}
      className="bg-gray-900 rounded-xl sm:rounded-2xl shadow-2xl shadow-teal-500/10 overflow-hidden max-w-4xl w-full mx-2 sm:mx-4 relative border border-gray-700"
    >
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px] relative overflow-hidden h-full max-h-full">
        {/* Image Section with React Spring */}
        <animated.div
          style={imageSpring}
          className="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-auto relative flex-shrink-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            <ImageCard
              src="/src/assets/signup-form.jpg"
              alt="Signup illustration"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-black/40"></div>
          </motion.div>
        </animated.div>

        {/* Form Section with React Spring - Black with Turquoise */}
        <animated.div
          style={formSpring}
          className="w-full lg:w-1/2 p-3 sm:p-4 lg:p-6 flex items-start justify-center bg-black/90 flex-1 min-h-0 border-t lg:border-t-0 lg:border-l border-teal-500/30 shadow-2xl relative"
        >
          {/* Subtle turquoise glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent"></div>
          <div className="w-full h-full max-h-full overflow-y-auto relative z-10 pr-2 sm:pr-3">
            <SignupForm />
          </div>
        </animated.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full opacity-20"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-black to-gray-800 rounded-full opacity-30"
        />
      </div>
    </animated.div>
  );
};

export default AnimatedSignupCard;
