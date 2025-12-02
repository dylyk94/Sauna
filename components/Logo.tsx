import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Diamond Frame */}
      <path 
        d="M100 15 L185 100 L100 185 L15 100 Z" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinejoin="miter"
      />
      
      {/* Steam lines */}
      <path 
        d="M100 35 Q115 65 100 95" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <path 
        d="M75 50 Q90 80 75 100" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      <path 
        d="M125 50 Q140 80 125 100" 
        stroke="currentColor" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />

      {/* Stones (Mounds) */}
      <circle cx="70" cy="125" r="18" fill="currentColor" />
      <circle cx="130" cy="125" r="18" fill="currentColor" />
      <circle cx="100" cy="115" r="22" fill="currentColor" />

      {/* Grate / Water Lines */}
      <path d="M60 150 H140" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M75 165 H125" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
};

export default Logo;