import React, { memo } from 'react';
// Memoize the Stars component to prevent unnecessary re-renders
const Stars = memo(() => {
  return <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => <div key={i} className="absolute h-0.5 w-0.5 rounded-full bg-white" style={{
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: 0.2 + Math.random() * 0.7,
      animation: `twinkle ${1 + Math.random() * 5}s infinite alternate ${Math.random() * 5}s`
    }} />)}
    </div>;
});
// Memoize the MeteorEffect component
export const MeteorEffect = memo(({
  className = ''
}) => {
  return <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {[...Array(5)].map((_, i) => <div key={i} className="absolute h-0.5 w-0.5 rounded-full bg-white shadow-lg shadow-white" style={{
      top: `${Math.random() * 40}%`,
      left: `${80 + Math.random() * 15}%`,
      opacity: 0.6 + Math.random() * 0.4,
      transform: `rotate(${-15 - Math.random() * 15}deg) translateX(${-i * 5}px)`,
      boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
      width: `${2 + Math.random() * 20}px`,
      height: `${1 + Math.random() * 1}px`
    }} />)}
      <div className="absolute top-[15%] right-[10%] h-20 w-20">
        <div className="absolute animate-meteor opacity-80 h-1 w-40 bg-gradient-to-r from-white via-white to-transparent rounded-full transform -rotate-[35deg]"></div>
      </div>
    </div>;
});
// Memoize the NebulaBackground component
export const NebulaBackground = memo(({
  children,
  className = ''
}) => {
  return <div className={`relative overflow-hidden bg-[#1a237e] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#0d47a1] opacity-80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-20 bg-cover bg-center mix-blend-soft-light"></div>
      <Stars />
      <MeteorEffect />
      <div className="relative z-10">{children}</div>
    </div>;
});
// Add display names for better debugging
Stars.displayName = 'Stars';
MeteorEffect.displayName = 'MeteorEffect';
NebulaBackground.displayName = 'NebulaBackground';