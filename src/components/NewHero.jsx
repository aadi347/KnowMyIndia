import React from "react";

function NewHero() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* ========== DECORATIVE SVG BACKGROUNDS ========== */}

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#ff6b35", stopOpacity: 0.2 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#f7931e", stopOpacity: 0.1 }}
              />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#22c55e", stopOpacity: 0.15 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#10b981", stopOpacity: 0.08 }}
              />
            </linearGradient>
            <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#3b82f6", stopOpacity: 0.12 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#8b5cf6", stopOpacity: 0.06 }}
              />
            </linearGradient>
          </defs>

          <circle
            cx="10%"
            cy="15%"
            r="300"
            fill="url(#grad1)"
            className="animate-blob"
          />
          <ellipse
            cx="85%"
            cy="20%"
            rx="250"
            ry="200"
            fill="url(#grad2)"
            className="animate-blob animation-delay-2000"
          />
          <circle
            cx="50%"
            cy="85%"
            r="350"
            fill="url(#grad3)"
            className="animate-blob animation-delay-4000"
          />
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-[2]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="100,50 150,150 50,150"
            fill="none"
            stroke="rgba(251, 146, 60, 0.2)"
            strokeWidth="2"
            className="animate-float"
          />
          <circle
            cx="90%"
            cy="40%"
            r="40"
            fill="none"
            stroke="rgba(34, 197, 94, 0.25)"
            strokeWidth="2"
            className="animate-float animation-delay-1000"
          />
          <polygon
            points="150,700 180,730 180,780 150,810 120,780 120,730"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2"
            className="animate-float animation-delay-3000"
          />
          <rect
            x="20%"
            y="60%"
            width="30"
            height="30"
            fill="none"
            stroke="rgba(251, 146, 60, 0.15)"
            strokeWidth="1.5"
            className="animate-pulse"
          />
          <rect
            x="75%"
            y="75%"
            width="25"
            height="25"
            fill="none"
            stroke="rgba(34, 197, 94, 0.15)"
            strokeWidth="1.5"
            className="animate-pulse animation-delay-2000"
          />
        </svg>
      </div>

      {/* Radial Glow Effects */}
      <div className="absolute inset-0 z-[3]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-[120px] animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/6 rounded-full blur-[150px] animate-pulse-slow animation-delay-5000"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 z-[4]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(251, 146, 60, 0)", stopOpacity: 0 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "rgba(251, 146, 60, 0.3)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(251, 146, 60, 0)", stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>

          <line
            x1="0%"
            y1="25%"
            x2="100%"
            y2="25%"
            stroke="url(#lineGrad1)"
            strokeWidth="1"
            className="animate-draw"
          />
          <line
            x1="0%"
            y1="75%"
            x2="100%"
            y2="75%"
            stroke="url(#lineGrad1)"
            strokeWidth="1"
            className="animate-draw animation-delay-2000"
          />
          <line
            x1="10%"
            y1="0%"
            x2="30%"
            y2="100%"
            stroke="rgba(34, 197, 94, 0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="70%"
            y1="0%"
            x2="90%"
            y2="100%"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Dot Pattern Accent */}
      <div className="absolute inset-0 z-[5]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.05)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* ========== MAIN CONTENT WITH STATS ========== */}

      {/* TEXT CONTENT - Center */}
      <div className="relative z-20 flex justify-center flex-col items-center py-20">
        <h1 className="text-6xl font-bold font-sans text-white">
          Welcome to digital India
        </h1>
        <p className="text-white text-xs py-5">
          Explore the incredible diversity, rich heritage, and vibrant culture
          of India through an immersive digital experience.
        </p>
        <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
          Explore Now
        </button>
      </div>

      {/* STAT 1: Years of History - Left Top */}
      <div className="absolute z-20 flex justify-center flex-col items-center py-20 left-20 top-10">
        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          5000+
        </div>
        <div className="text-xs text-gray-400 mt-0.5">Years of History</div>
      </div>

      {/* STAT 2: UNESCO Sites - Left Middle */}
      <div className="absolute z-20 left-20 top-1/2 -translate-y-1/2 flex flex-col items-start">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          42
        </div>
        <div className="text-xs text-gray-400 mt-0.5">UNESCO Sites</div>
      </div>

      {/* STAT 3: National Monuments - Left Bottom */}
      <div className="absolute z-20 left-20 bottom-32 flex flex-col items-start">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          3,687+
        </div>
        <div className="text-xs text-gray-400 mt-0.5">Monuments</div>
      </div>

      {/* STAT 4: Destinations - Right Top */}
      <div className="absolute z-20 right-20 top-1/3 flex flex-col items-end">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          100+
        </div>
        <div className="text-xs text-gray-400 mt-0.5">Destinations</div>
      </div>

      {/* STAT 5: Population - Right Middle */}
      <div className="absolute z-20 right-20 top-1/2 -translate-y-1/2 flex flex-col items-end">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
          1.4B+
        </div>
        <div className="text-xs text-gray-400 mt-0.5">Population</div>
      </div>

      {/* STAT 7: States & UTs - Right Bottom Pills */}
      <div className="absolute z-20 right-20 bottom-20 flex flex-wrap gap-2 justify-end max-w-xs">
        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <span className="text-xs font-medium text-white">29 States</span>
        </div>

        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <span className="text-xs font-medium text-white">
            8 Union Territories
          </span>
        </div>

        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <span className="text-xs font-medium text-white">
            22 Official Languages
          </span>
        </div>
      </div>

      {/* STAT 8: Biodiversity - Bottom Left Pills */}
      <div className="absolute z-20 left-20 bottom-20 flex flex-wrap gap-2 justify-start max-w-xs">
        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <span className="text-xs font-medium text-white">
            <span className="text-green-400 font-bold">8</span> Biodiversity
            Hotspots
          </span>
        </div>

        <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <span className="text-xs font-medium text-white">
            <span className="text-orange-400 font-bold">120+</span> National
            Parks
          </span>
        </div>
      </div>

      {/* MAP BACKGROUND */}
      <div className="absolute z-10 bottom-0 top-64 left-1/2 -translate-x-1/2">
        <img src="/india.svg" alt="" className="w-[1800px] max-w-none" />
      </div>

      {/* ========== ANIMATION STYLES ========== */}
      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(20px, 20px) scale(1.03);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.3;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-draw {
          stroke-dasharray: 1000;
          animation: draw 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </div>
  );
}

export default NewHero;
