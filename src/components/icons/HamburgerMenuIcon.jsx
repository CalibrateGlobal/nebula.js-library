import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.5 + i;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const HamburgerMenuIcon = ({ className }) => {
  return (
    <div className={className}>
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
        <rect
          x="0.5"
          y="0.5"
          width="49"
          height="49"
          fill="#171F34"
          stroke="#049EB8"
        />
        <motion.line
          x1="10"
          y1="19.8333"
          x2="40"
          y2="19.8333"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
        />
        <motion.line
          x1="10"
          y1="19.8333"
          x2="40"
          y2="19.8333"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
        />
        <motion.line
          x1="10"
          y1="15.6667"
          x2="40"
          y2="15.6667"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={0.75}
        />
        <motion.line
          x1="10"
          y1="15.6667"
          x2="40"
          y2="15.6667"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={1}
        />
        <motion.line
          x1="10"
          y1="24"
          x2="40"
          y2="24"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={1.25}
        />
        <motion.line
          x1="10"
          y1="24"
          x2="40"
          y2="24"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={1.5}
        />
        <motion.line
          x1="10"
          y1="28.1667"
          x2="40"
          y2="28.1667"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={1.75}
        />
        <motion.line
          x1="10"
          y1="28.1667"
          x2="40"
          y2="28.1667"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={2}
        />
        <motion.line
          x1="10"
          y1="32.3333"
          x2="40"
          y2="32.3333"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={2.25}
        />
        <motion.line
          x1="10"
          y1="32.3333"
          x2="40"
          y2="32.3333"
          stroke="white"
          strokeWidth="2"
          variants={lineVariants}
          custom={2.5}
        />
      </motion.svg>
    </div>
  );
};

export default HamburgerMenuIcon;
