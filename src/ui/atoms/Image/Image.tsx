import React from 'react';
import { motion } from 'motion/react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className = '' }) => {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
