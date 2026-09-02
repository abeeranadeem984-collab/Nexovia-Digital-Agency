import React from 'react';

interface NexoviaLogoProps {
  variant?: 'full' | 'icon' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  showTagline?: boolean;
  className?: string;
  iconOnlyClassName?: string;
  textClassName?: string;
  isDark?: boolean;
}

export const NexoviaLogo: React.FC<NexoviaLogoProps> = ({
  variant = 'full',
  size = 'md',
  showTagline = true,
  className = '',
  iconOnlyClassName = '',
  textClassName = '',
  isDark,
}) => {
  const iconSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32',
    custom: '',
  };

  const textTitleSizeMap = {
    sm: 'text-base font-extrabold',
    md: 'text-xl sm:text-2xl font-extrabold',
    lg: 'text-3xl sm:text-4xl font-extrabold',
    xl: 'text-4xl sm:text-5xl font-extrabold',
    '2xl': 'text-5xl sm:text-6xl font-extrabold',
    custom: '',
  };

  const textSubSizeMap = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] sm:text-[12px] tracking-[0.25em]',
    lg: 'text-[13px] sm:text-[15px] tracking-[0.3em]',
    xl: 'text-[16px] tracking-[0.32em]',
    '2xl': 'text-[20px] tracking-[0.35em]',
    custom: '',
  };

  const tagSizeMap = {
    sm: 'text-[7px]',
    md: 'text-[9px] sm:text-[10px]',
    lg: 'text-[11px] sm:text-[12px]',
    xl: 'text-[13px]',
    '2xl': 'text-[16px]',
    custom: '',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* ICON MARK */}
      {(variant === 'full' || variant === 'icon' || variant === 'horizontal' || variant === 'compact') && (
        <div className={`relative shrink-0 ${iconSizeMap[size]} ${iconOnlyClassName}`}>
          <svg
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-md transition-transform duration-200 group-hover:scale-105"
          >
            <defs>
              {/* Blue Gradient Left Arrow */}
              <linearGradient id="nexoviaBlueMain" x1="20" y1="210" x2="150" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0a2e7a" />
                <stop offset="25%" stopColor="#004cd8" />
                <stop offset="65%" stopColor="#0084ff" />
                <stop offset="100%" stopColor="#00c8ff" />
              </linearGradient>

              {/* Blue Facet Top Light */}
              <linearGradient id="nexoviaBlueTop" x1="80" y1="30" x2="160" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00d0ff" />
                <stop offset="100%" stopColor="#0077ff" />
              </linearGradient>

              {/* Blue Dark Inner Fold */}
              <linearGradient id="nexoviaBlueDark" x1="70" y1="130" x2="120" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#031644" />
                <stop offset="100%" stopColor="#003db3" />
              </linearGradient>

              {/* Orange Gradient Right Arrow */}
              <linearGradient id="nexoviaOrangeMain" x1="80" y1="170" x2="220" y2="10" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#c72e00" />
                <stop offset="35%" stopColor="#ff4800" />
                <stop offset="70%" stopColor="#ff8800" />
                <stop offset="100%" stopColor="#ffbb00" />
              </linearGradient>

              {/* Orange Facet Light */}
              <linearGradient id="nexoviaOrangeLight" x1="120" y1="110" x2="210" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffaa00" />
                <stop offset="100%" stopColor="#ffd200" />
              </linearGradient>

              {/* Orange Dark Fold */}
              <linearGradient id="nexoviaOrangeDark" x1="80" y1="150" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7a1800" />
                <stop offset="100%" stopColor="#ff4800" />
              </linearGradient>

              {/* Drop Shadow Filter for 3D Overlaps */}
              <filter id="foldShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* BLUE RIBBON & DOWN ARROW (LEFT SIDE OF N) */}
            <g>
              {/* Blue Down Arrow Head */}
              <path
                d="M 20,205 L 10,155 L 60,155 Z"
                fill="url(#nexoviaBlueMain)"
              />
              {/* Blue Main Diagonal Stem */}
              <path
                d="M 32,155 L 118,30 L 158,30 L 72,155 Z"
                fill="url(#nexoviaBlueMain)"
              />
              {/* Blue Top Turn Facet */}
              <path
                d="M 118,30 L 158,30 L 128,70 L 88,70 Z"
                fill="url(#nexoviaBlueTop)"
              />
              {/* Blue Inner Fold Shadow */}
              <path
                d="M 88,70 L 128,70 L 82,132 L 72,155 Z"
                fill="url(#nexoviaBlueDark)"
                filter="url(#foldShadow)"
              />
            </g>

            {/* ORANGE RIBBON & UP ARROW (RIGHT SIDE OF N) */}
            <g>
              {/* Orange Bottom Fold Base */}
              <path
                d="M 72,155 L 110,195 L 138,155 L 100,118 Z"
                fill="url(#nexoviaOrangeDark)"
              />
              {/* Orange Main Upward Ribbon Stem */}
              <path
                d="M 100,118 L 180,25 L 210,55 L 130,148 Z"
                fill="url(#nexoviaOrangeMain)"
                filter="url(#foldShadow)"
              />
              {/* Orange Upward Arrow Head */}
              <path
                d="M 210,15 L 225,75 L 165,60 Z"
                fill="url(#nexoviaOrangeLight)"
              />
              {/* Orange Top Fold Highlight */}
              <path
                d="M 180,25 L 210,15 L 210,55 Z"
                fill="url(#nexoviaOrangeMain)"
              />
            </g>
          </svg>
        </div>
      )}

      {/* TYPOGRAPHY BRANDING */}
      {variant !== 'icon' && (
        <div className={`flex flex-col justify-center ${textClassName}`}>
          {/* NEXOVIA TITLE */}
          <div className={`font-heading tracking-tight leading-none ${textTitleSizeMap[size]}`}>
            <span className={isDark === true ? 'text-white' : isDark === false ? 'text-[#060e20]' : 'text-[#060e20] dark:text-white'}>
              NEXO
            </span>
            <span className="text-[#0088ff] dark:text-[#38a0ff]">
              VIA
            </span>
          </div>

          {/* — DIGITAL — SUBTITLE */}
          <div className="flex items-center gap-1.5 my-0.5">
            <span className="h-[2px] w-3 sm:w-4 bg-[#ff5500] rounded-full shrink-0"></span>
            <span className={`font-heading font-extrabold uppercase text-[#0088ff] dark:text-[#38a0ff] leading-none ${textSubSizeMap[size]}`}>
              DIGITAL
            </span>
            <span className="h-[2px] w-3 sm:w-4 bg-[#ff5500] rounded-full shrink-0"></span>
          </div>

          {/* EMPOWERING BRANDS TO GROW */}
          {showTagline && (
            <span className={`font-sans font-bold uppercase tracking-[0.25em] ${tagSizeMap[size]} ${
              isDark === true 
                ? 'text-gray-300' 
                : isDark === false 
                  ? 'text-gray-600' 
                  : 'text-gray-600 dark:text-gray-300'
            }`}>
              EMPOWERING BRANDS TO GROW.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

