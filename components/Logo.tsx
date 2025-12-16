import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto", color = "currentColor" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Stylized Pergola Roof */}
        <path d="M10 30 H90" stroke={color} strokeWidth="8" strokeLinecap="round" />
        <path d="M15 30 V20" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path d="M38 30 V20" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path d="M62 30 V20" stroke={color} strokeWidth="6" strokeLinecap="round" />
        <path d="M85 30 V20" stroke={color} strokeWidth="6" strokeLinecap="round" />

        {/* Pillars */}
        <path d="M25 30 V90" stroke={color} strokeWidth="8" strokeLinecap="round" />
        <path d="M75 30 V90" stroke={color} strokeWidth="8" strokeLinecap="round" />
        
        {/* Leaf Accent representing 'Life' */}
        <path d="M75 50 C85 45 95 55 95 65 C95 55 85 50 75 50Z" fill="#16a34a" />
      </svg>
      <span className={`font-serif font-bold text-2xl tracking-wide ${color === 'white' ? 'text-white' : 'text-wood-800'}`}>
        PERGO<span className="text-wood-500">LIFE</span>
      </span>
    </div>
  );
};