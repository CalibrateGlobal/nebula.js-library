import React from 'react';

const ComboChartIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        version="1"
        viewBox="0 0 48 48"
      >
        <g fill="#00BCD4">
          <path d="M37 18H43V42H37z"></path>
          <path d="M29 26H35V42H29z"></path>
          <path d="M21 22H27V42H21z"></path>
          <path d="M13 32H19V42H13z"></path>
          <path d="M5 28H11V42H5z"></path>
        </g>
        <g fill="#3F51B5">
          <circle cx="8" cy="16" r="3"></circle>
          <circle cx="16" cy="18" r="3"></circle>
          <circle cx="24" cy="11" r="3"></circle>
          <circle cx="32" cy="13" r="3"></circle>
          <circle cx="40" cy="9" r="3"></circle>
          <path d="M39.1 7.2L31.8 10.9 23.5 8.8 15.5 15.8 8.5 14.1 7.5 17.9 16.5 20.2 24.5 13.2 32.2 15.1 40.9 10.8z"></path>
        </g>
      </svg>
    </div>
  );
};

export default ComboChartIcon;
