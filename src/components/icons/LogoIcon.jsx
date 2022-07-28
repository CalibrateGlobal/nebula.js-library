import React from 'react';

const LogoIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="36"
        viewBox="0 0 51 36"
        fill="none"
      >
        <rect
          y="0.570004"
          width="30.0132"
          height="29.5174"
          transform="matrix(0.821642 0.570004 -0.821642 0.570004 25.5427 0.245099)"
          fill="#171F34"
          stroke="#23BDDF"
        />
        <rect
          y="0.285002"
          width="24.3106"
          height="23.9139"
          transform="matrix(0.821642 0.570004 -0.821642 0.570004 25.4196 3.28368)"
          fill="#171F34"
          stroke="#23BDDF"
          stroke-width="0.5"
        />
        <path
          d="M25.1662 22.1611H23.8012L19.7962 13.8361L18.3112 22.1611H16.9462L18.8062 11.6911H20.1712L24.1912 20.0011L25.6612 11.6911H27.0262L25.1662 22.1611ZM29.0531 21.1111H32.7131L32.5181 22.1611H27.4931L29.3531 11.7061H30.7181L29.0531 21.1111Z"
          fill="#23BDDF"
        />
      </svg>
    </div>
  );
};

export default LogoIcon;