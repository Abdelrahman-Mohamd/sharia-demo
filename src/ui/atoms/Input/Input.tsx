import React from 'react';
import { motion } from 'motion/react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  required = false,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
        className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200 bg-gray-800 text-white placeholder-gray-400 ${className}`}
      />
    </motion.div>
  );
};

export default Input;
