import React from 'react';

const PieChartIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 415 415"
        version="1.1"
        viewBox="0 0 415 415"
        xmlSpace="preserve"
      >
        <path d="M192.5 30C86.185 30 0 116.185 0 222.5S86.185 415 192.5 415 385 328.815 385 222.5H192.5V30z"></path>
        <path d="M222.5 0v192.5H415C415 86.185 328.815 0 222.5 0z"></path>
      </svg>
    </div>
  );
};

export default PieChartIcon;
