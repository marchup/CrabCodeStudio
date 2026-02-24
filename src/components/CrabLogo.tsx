import { useState, useEffect } from 'react';

interface CrabLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

const CrabLogo = ({ size = 100, animated = true, className = '' }: CrabLogoProps) => {
  const [isWaving, setIsWaving] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (!animated) return;
    
    // Wave animation every 4 seconds
    const waveInterval = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 800);
    }, 4000);

    // Blink animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3500);

    return () => {
      clearInterval(waveInterval);
      clearInterval(blinkInterval);
    };
  }, [animated]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 160"
      className={`${className} ${animated ? 'cursor-pointer' : ''}`}
      onClick={() => animated && setIsWaving(true)}
    >
      <defs>
        <linearGradient id="crabRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3333" />
          <stop offset="100%" stopColor="#cc0000" />
        </linearGradient>
        <filter id="crabGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Left Legs (back) */}
      <g fill="url(#crabRed)" stroke="#990000" strokeWidth="2">
        <path d="M50 110 L25 125 L20 120" />
        <path d="M45 120 L20 135 L15 130" />
        <path d="M55 100 L35 110 L30 105" />
      </g>

      {/* Right Legs (back) */}
      <g fill="url(#crabRed)" stroke="#990000" strokeWidth="2">
        <path d="M150 110 L175 125 L180 120" />
        <path d="M155 120 L180 135 L185 130" />
        <path d="M145 100 L165 110 L170 105" />
      </g>

      {/* Left Claw Arm */}
      <g 
        className="transition-transform duration-500"
        style={{ 
          transformOrigin: '45px 85px',
          transform: isWaving ? 'rotate(-20deg)' : 'rotate(0deg)'
        }}
      >
        {/* Arm segment */}
        <path 
          d="M45 85 Q35 65 25 50" 
          fill="none" 
          stroke="url(#crabRed)" 
          strokeWidth="12" 
          strokeLinecap="round"
        />
        {/* Claw */}
        <g transform="translate(5, 25)">
          <ellipse cx="20" cy="25" rx="28" ry="35" fill="url(#crabRed)" stroke="#990000" strokeWidth="2" />
          {/* Claw cutout */}
          <path 
            d="M5 15 L25 35 L15 45 L0 25 Z" 
            fill="#000" 
          />
          {/* Claw highlight */}
          <ellipse cx="15" cy="20" rx="8" ry="10" fill="#ff6666" opacity="0.5" />
        </g>
      </g>

      {/* Right Claw Arm */}
      <g 
        className="transition-transform duration-500"
        style={{ 
          transformOrigin: '155px 85px',
          transform: isWaving ? 'rotate(20deg)' : 'rotate(0deg)'
        }}
      >
        {/* Arm segment */}
        <path 
          d="M155 85 Q165 65 175 50" 
          fill="none" 
          stroke="url(#crabRed)" 
          strokeWidth="12" 
          strokeLinecap="round"
        />
        {/* Claw */}
        <g transform="translate(155, 25)">
          <ellipse cx="20" cy="25" rx="28" ry="35" fill="url(#crabRed)" stroke="#990000" strokeWidth="2" />
          {/* Claw cutout */}
          <path 
            d="M35 15 L15 35 L25 45 L40 25 Z" 
            fill="#000" 
          />
          {/* Claw highlight */}
          <ellipse cx="25" cy="20" rx="8" ry="10" fill="#ff6666" opacity="0.5" />
        </g>
      </g>

      {/* Body */}
      <ellipse 
        cx="100" 
        cy="100" 
        rx="65" 
        ry="45" 
        fill="url(#crabRed)" 
        stroke="#990000" 
        strokeWidth="2"
        filter={animated ? "url(#crabGlow)" : undefined}
      />
      
      {/* Body highlight */}
      <ellipse 
        cx="85" 
        cy="85" 
        rx="25" 
        ry="15" 
        fill="#ff6666" 
        opacity="0.4"
      />

      {/* Mouth - grumpy line */}
      <path 
        d="M70 115 Q100 105 130 115" 
        fill="none" 
        stroke="#660000" 
        strokeWidth="4" 
        strokeLinecap="round"
      />

      {/* Left Eye Stalk */}
      <path 
        d="M75 70 Q70 50 72 35" 
        fill="none" 
        stroke="url(#crabRed)" 
        strokeWidth="10" 
        strokeLinecap="round"
      />
      
      {/* Right Eye Stalk */}
      <path 
        d="M125 70 Q130 50 128 35" 
        fill="none" 
        stroke="url(#crabRed)" 
        strokeWidth="10" 
        strokeLinecap="round"
      />

      {/* Left Eye */}
      <g>
        <ellipse cx="72" cy="30" rx="22" ry="20" fill="#fff" stroke="#990000" strokeWidth="2" />
        {/* Eyelid (for blinking) */}
        <ellipse 
          cx="72" 
          cy="30" 
          rx="22" 
          ry="20" 
          fill="url(#crabRed)" 
          className="transition-all duration-150"
          style={{ 
            transformOrigin: '72px 30px',
            transform: isBlinking ? 'scaleY(1)' : 'scaleY(0)'
          }}
        />
        {/* Pupil - angry looking up */}
        <circle cx="78" cy="25" r="10" fill="#000" />
        <circle cx="80" cy="23" r="3" fill="#fff" />
        {/* Eyebrow */}
        <path d="M50 18 Q72 8 90 20" fill="none" stroke="#990000" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Right Eye */}
      <g>
        <ellipse cx="128" cy="30" rx="22" ry="20" fill="#fff" stroke="#990000" strokeWidth="2" />
        {/* Eyelid (for blinking) */}
        <ellipse 
          cx="128" 
          cy="30" 
          rx="22" 
          ry="20" 
          fill="url(#crabRed)" 
          className="transition-all duration-150"
          style={{ 
            transformOrigin: '128px 30px',
            transform: isBlinking ? 'scaleY(1)' : 'scaleY(0)'
          }}
        />
        {/* Pupil - angry looking up */}
        <circle cx="134" cy="25" r="10" fill="#000" />
        <circle cx="136" cy="23" r="3" fill="#fff" />
        {/* Eyebrow */}
        <path d="M110 20 Q128 8 150 18" fill="none" stroke="#990000" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default CrabLogo;
