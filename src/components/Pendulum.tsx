


import Link from "next/link";

import React, { useEffect, useRef, useState } from 'react';

const PendulumTextReveal: React.FC = () => {
  const pendulumRef = useRef<HTMLDivElement>(null);
  const stringRef = useRef<HTMLDivElement>(null);
  const [activeLetters, setActiveLetters] = useState<Set<number>>(new Set());
  const text = "REVEALING SOON";
  const letters = text.split('');

  useEffect(() => {
    const pendulum = pendulumRef.current;
    const string = stringRef.current;
    if (!pendulum || !string) return;

    let animationId: number;
    let angle = -Math.PI / 3;
    let angularVelocity = 0;
    const gravity = 0.5;
    const damping = 0.998;
    const length = 200;
    let lastTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = Math.min((timestamp - lastTime) / 16, 2);
      lastTime = timestamp;

      const angularAcceleration = (-gravity / length) * Math.sin(angle);
      angularVelocity += angularAcceleration * deltaTime;
      angularVelocity *= damping;
      angle += angularVelocity * deltaTime;

      // Update string rotation
      string.style.transform = `rotate(${angle * (180 / -Math.PI)}deg)`;

      // Calculate ball position for glow effect - use the SAME angle
      const ballX = Math.sin(angle) * length;
      // const normalizedX = (ballX + length) / (2 * length);
      const normalizedX = (Math.sin(angle) + 1) / 2;
      const ballCenter = normalizedX * letters.length;
      const ballRadius = 1.5;
      
      const newActiveLetters = new Set<number>();
      for (let i = 0; i < letters.length; i++) {
        const distance = Math.abs(i - ballCenter);
        if (distance <= ballRadius) {
          newActiveLetters.add(i);
        }
      }
      
      setActiveLetters(newActiveLetters);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [letters.length]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br  bg-[#0f172a] flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Pendulum System */}
      <div className="relative w-full  max-w-2xl h-96 flex items-start justify-center">
        {/* Pendulum Pivot Point */}
        {/* <div className="absolute top-0 w-4 h-4 rounded-full bg-white/90 z-20" /> */}
        
        {/* Pendulum String - Connected to pivot and ball */}
        <div
          ref={stringRef}
          className="absolute top-[-110] w-1 h-90 bg-gradient-to-b from-white/90 to-white/40 z-10"
          style={{
            transformOrigin: 'top center',
          }}
        >
          {/* Fluid Glass Ball - Attached to the END of string */}
          <div
            ref={pendulumRef}
            className="absolute top-90 w-36 h-36 rounded-full z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(120, 220, 255, 0.95), rgba(60, 140, 255, 0.8))',
              boxShadow: `
                inset 0 0 25px rgba(255, 255, 255, 0.7),
                inset 0 0 50px rgba(100, 200, 255, 0.5),
                0 0 80px rgba(80, 180, 255, 0.9),
                0 0 120px rgba(60, 150, 255, 0.6)
              `,
              filter: 'blur(0.5px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* Inner glow and reflection */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/40 to-blue-500/30 blur-[2px]" />
            {/* <div className="absolute top-2 left-3 w-4 h-4 rounded-full bg-white/60 blur-[1px]" /> */}
          </div>
        </div>

        {/* Text Container - Positioned below the pendulum swing area */}
        <div className="absolute bottom-8 w-full flex justify-center items-center space-x-2 md:space-x-3 px-4">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`relative transition-all duration-75 ease-out font-black ${
                activeLetters.has(index)
                  ? 'text-5xl md:text-7xl text-cyan-200 scale-110'
                  : 'text-3xl md:text-5xl text-amber-50 scale-110'
              }`}
              style={{
                textShadow: activeLetters.has(index) 
                  ? '0 0 25px rgba(34, 211, 238, 1), 0 0 50px rgba(34, 211, 238, 0.8), 0 0 75px rgba(34, 211, 238, 0.5)'
                  : '0 0 5px rgba(255, 255, 255, 0.1)',
                transition: 'all 0.1s ease-out',
              }}
            >
              {letter}
              
              {/* Active letter glow background */}
              {activeLetters.has(index) && (
                <div 
                  className="absolute inset-0 -z-10 rounded-full bg-cyan-400/40 blur-xl"
                  style={{
                    width: '180%',
                    height: '180%',
                    top: '-40%',
                    left: '-40%',
                  
                  }}
                />
              )}
            </div>
          ))}

         </div>
         </div>
        
         {/* BUTTONS BELOW TEXT */}
   <div className="mb-20 mt-14 flex justify-center items-center gap-60 w-screen">
   
   {/* SHARED BUTTON STYLE */}
  <Link href="/events">
    <button
      className="
        w-56                                /* SAME WIDTH FOR BOTH */
        px-8 py-4 text-lg font-semibold rounded-xl
        bg-gradient-to-br from-[#0a0f24] via-[#1b1440] to-[#3a2075]
        text-[#b9d8ff]
        border border-white/10
        shadow-inner shadow-blue-900/40
        hover:brightness-125 hover:scale-105
        transition-all duration-300
      "
    >
      EXPLORE
    </button>
  </Link>

  <Link href="/home">
    <button
      className="
        w-56                              
        px-6 py-4 text-lg font-semibold rounded-xl
        bg-gradient-to-br from-[#0e0a26] via-[#241046] to-[#532b8f]
        text-[#e7c6ff]
        border border-white/10
        shadow-inner shadow-purple-900/40
        hover:brightness-125 hover:scale-105
        transition-all duration-300
      "
    >
      KNOW ABOUT US
    </button>
  </Link>



 </div>
 </div>
  );
};

export default PendulumTextReveal;

















