import React from 'react';
import { motion } from 'motion/react';
import Image from '../../atoms/Image';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`overflow-hidden rounded-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ImageCard;
