import React from 'react';

const BulletChartIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path fill='white' d="M30 22H16v-1h-2v1H2v6h12v1h2v-1h14zM4 26v-2h10v2zm24 0H16v-2h12zM30 13h-6v-1h-2v1H2v6h20v1h2v-1h6zM4 17v-2h18v2zm24 0h-4v-2h4zM30 4H10V3H8v1H2v6h6v1h2v-1h20zM4 8V6h4v2zm24 0H10V6h18z"></path>
        <path
          d="M0 0H32V32H0z"
          fill="transparent"
          data-name="&lt;Transparent Rectangle&gt;"
        ></path>
      </svg>
    </div>
  );
};

export default BulletChartIcon;
