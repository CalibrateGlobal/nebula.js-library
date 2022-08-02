import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 0.8 },
  },
};

const circleVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1.05,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
function CloseMenuIcon({ className, ...rest }) {
  return (
    <div className={className} {...rest}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.2,
          transition: {
            delay: 0.2,
            duration: 0.4,
          },
        }}
      >
        <motion.circle
          cx="25"
          cy="25"
          r="24.5"
          fill="#171F34"
          stroke="#049EB8"
          variants={circleVariants}
        />
        <line
          x1="14.6709"
          y1="14.2585"
          x2="36.917"
          y2="34.3859"
          stroke="white"
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="30"
          y2="-1"
          transform="matrix(-0.741536 0.670913 0.670913 0.741536 36.2461 15)"
          stroke="white"
          strokeWidth="2"
        />
      </motion.svg>
    </div>
  );
}

export default CloseMenuIcon;
