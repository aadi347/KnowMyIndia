import { useState } from "react";
import IndiaMap from "./IndiaMap";
import StateDetails from "./StateDetails";

function StateInfo({ st_nm }) {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (stateData) => {
    setSelectedState(stateData);
  };

  const nationalStats = [
    {
      label: "States & UTs",
      value: "28 + 8",
      desc: "Federal Republic",
      icon: (
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      label: "Area",
      value: "3.28M",
      desc: "Square Kilometers",
      icon: (
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Population",
      value: "1.4B+",
      desc: "Estimated (2024)",
      icon: (
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      label: "Languages",
      value: "22",
      desc: "Scheduled Languages",
      icon: (
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden text-white font-sans selection:bg-orange-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/50 via-[#020617] to-[#020617] pointer-events-none"></div>

      {/* World Map Background (Subtle) */}
      <div className="absolute inset-0 z-0 flex justify-center items-center opacity-[0.03] pointer-events-none">
        <img
          src="/world-map.svg"
          alt=""
          className="w-[1800px] max-w-none grayscale"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 lg:h-screen lg:flex lg:flex-col lg:justify-center">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center h-full">
          {/* Map Column */}
          <div className="lg:col-span-7 h-[600px] lg:h-[85vh] flex items-center justify-center relative">
            {/* Optional: Add a subtle glow behind the map */}
            <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            <IndiaMap onStateClick={handleStateClick} />
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 h-[600px] lg:h-[85vh] flex flex-col pt-10 lg:pt-0">
            {selectedState ? (
              <div className="h-full animate-slide-in">
                <StateDetails state={selectedState} />
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center">
                {/* IDLE STATE DASHBOARD */}
                <div className="mb-8 space-y-2">
                  <h1 className="text-4xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40">
                    Explore the Nation
                  </h1>
                  <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                    Navigate through the diverse states and union territories.
                    Hover over the map or try the{" "}
                    <span className="text-white font-medium">Search Hub</span>{" "}
                    to begin your journey.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {nationalStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="mb-4 p-2 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-xs font-medium text-gray-300">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {stat.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badge */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-[#F9A03C]/10 border border-[#F9A03C]/20">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-[#F9A03C]"
                        fill="currentColor"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Powered by D3.js
                      </div>
                      <div className="text-[10px] text-gray-500">
                        High-Performance Vector Graphics
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/aadi347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                      title="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditya-kumar-780709320/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors p-1 hover:bg-blue-400/10 rounded-lg"
                      title="LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateInfo;
