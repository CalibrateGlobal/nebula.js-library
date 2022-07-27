import React from 'react';

const GridChartIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        <path
          d="M15 17H4a2 2 0 01-2-2V8a2 2 0 012-2h11a2 2 0 012 2v7a2 2 0 01-2 2zM4 8v7h11V8z"
          className="clr-i-outline clr-i-outline-path-1"
        ></path>
        <path
          d="M32 17H21a2 2 0 01-2-2V8a2 2 0 012-2h11a2 2 0 012 2v7a2 2 0 01-2 2zM21 8v7h11V8z"
          className="clr-i-outline clr-i-outline-path-2"
        ></path>
        <path
          d="M15 30H4a2 2 0 01-2-2v-7a2 2 0 012-2h11a2 2 0 012 2v7a2 2 0 01-2 2zM4 21v7h11v-7z"
          className="clr-i-outline clr-i-outline-path-3"
        ></path>
        <path
          d="M32 30H21a2 2 0 01-2-2v-7a2 2 0 012-2h11a2 2 0 012 2v7a2 2 0 01-2 2zm-11-9v7h11v-7z"
          className="clr-i-outline clr-i-outline-path-4"
        ></path>
        <path fillOpacity="0" d="M0 0H36V36H0z"></path>
      </svg>
    </div>
  );
};

export default GridChartIcon;
