import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40, showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Branded Symbol: S-shaped mechanical gear edge */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Outer Gear Teeth circle */}
        <circle cx="50" cy="50" r="45" stroke="#d4a017" stroke-width="2" stroke-dasharray="8 6" />
        
        {/* Main Badge Background */}
        <path 
          d="M50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5ZM50 15C69.33 15 85 30.67 85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50C15 30.67 30.67 15 50 15Z" 
          fill="#1c1c1c"
        />
        
        {/* Mustard Gold S-Gear Inlay */}
        <path 
          d="M60 35H40C37.2386 35 35 37.2386 35 40V45C35 47.7614 37.2386 50 40 50H55C57.7614 50 60 52.2386 60 55V60C60 62.7614 57.7614 65 55 65H35" 
          stroke="#d4a017" 
          stroke-width="10" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <circle cx="50" cy="50" r="45" stroke="#d4a017" stroke-width="4" />
      </svg>
      
      {showText && (
        <span className="text-[20px] font-bold text-white tracking-[0.1em] uppercase">
          SAI POORNA
        </span>
      )}
    </div>
  );
};

export default Logo;