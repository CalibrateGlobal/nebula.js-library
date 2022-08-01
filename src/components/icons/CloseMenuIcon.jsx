import React from 'react';

function CloseMenuIcon({ className, ...rest }) {
  return (
    <div className={className} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle cx="25" cy="25" r="24.5" fill="#171F34" stroke="#049EB8" />
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
      </svg>
    </div>
  );
}

export default CloseMenuIcon;
