import React from 'react';

const HistogramChartIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 48 48"
      >
        {/* <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path> */}
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M6 6v36h36M14 30v4M22 22v12M30 6v28M38 14v20"
        ></path>
      </svg>
    </div>
  );
};

export default HistogramChartIcon;
