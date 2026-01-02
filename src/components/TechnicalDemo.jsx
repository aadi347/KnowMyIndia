import React, { useState, useEffect } from "react";

function TechnicalDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "input",
      title: "The Raw Input",
      subtitle: "GeoJSON Data Structure",
      description:
        "It all starts with data. We use GeoJSON, a standard format for encoding geographic data structures. Each state is a 'Feature' containing geometry (coordinates) and properties (metadata).",
      code: `{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "st_nm": "Bihar",
        "st_code": "BR"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [ [84.1, 27.5], [84.9, 26.8], ... ]
        ]
      }
    }
  ]
}`,
      visual: (
        <div className="relative w-full h-48 bg-black rounded-lg border border-gray-700/50 flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          {/* Animated Binary Stream */}
          <div className="absolute top-4 left-4 text-[10px] font-mono text-green-500/30 whitespace-pre leading-none animate-pulse">
            01010011 01010100 01000001 01010100 01000101{"\n"}
            01100111 01100101 01101111 01101010 01110011{"\n"}
            01101111 01101110 00100000 01100100 01100001
          </div>
          <div className="z-10 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-green-500/30 shadow-lg shadow-green-500/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/40">
                <svg
                  className="w-6 h-6 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-green-400 font-mono mb-1">
                  FILE_LOADED
                </div>
                <div className="text-sm text-white font-bold">
                  india.geo.json
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "math",
      title: "The Math",
      subtitle: "Mercator Projection",
      description:
        "The Earth is a sphere, but your screen is flat. We use `d3.geoMercator()` to mathematically transform 3D latitude/longitude pairs into 2D x/y pixel coordinates.",
      code: `const projection = d3.geoMercator()
  .center([82, 23]) // Center on India
  .scale(1000)      // Zoom level
  .translate([width/2, height/2]);

const [x, y] = projection([84.1, 27.5]);
// Result: [450, 320]`,
      visual: (
        <div className="relative w-full h-48 bg-black rounded-lg border border-gray-700/50 flex items-center justify-center">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-px opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="bg-blue-500/10"></div>
            ))}
          </div>
          <div className="relative z-10 flex items-center gap-8">
            {/* Sphere */}
            <div className="w-16 h-16 rounded-full border-2 border-blue-400/50 bg-blue-500/10 relative overflow-hidden animate-spin-slow shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <div className="absolute inset-x-0 top-1/2 h-px bg-blue-400/50"></div>
              <div className="absolute inset-y-0 left-1/2 w-px bg-blue-400/50"></div>
              <div className="absolute inset-0 rounded-full border border-blue-300/20 scale-75"></div>
            </div>
            {/* Arrow */}
            <div className="text-blue-400">
              <svg
                className="w-6 h-6 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            {/* Plane */}
            <div className="w-16 h-16 border border-blue-400/50 bg-blue-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <span className="text-xs text-blue-300 font-mono">X, Y</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "render",
      title: "The Rendering",
      subtitle: "SVG Path Generation",
      description:
        "D3's `geoPath` generator takes the projected coordinates and constructs an SVG path string (`d` attribute). This string tells the browser exactly how to draw the shape's boundary.",
      code: `const pathGenerator = d3.geoPath()
  .projection(projection);

// In JSX:
<path 
  d={pathGenerator(feature)} 
  fill="white" 
  stroke="black"
/>`,
      visual: (
        <div className="relative w-full h-48 bg-black rounded-lg border border-gray-700/50 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-32 h-32 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]"
          >
            <path
              d="M20,50 Q40,5 50,50 T90,50"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2"
              className="animate-draw-path"
            />
            <circle cx="20" cy="50" r="2" fill="white" />
            <circle cx="50" cy="50" r="2" fill="white" />
            <circle cx="90" cy="50" r="2" fill="white" />
          </svg>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono text-orange-400 bg-orange-900/20 px-2 py-1 rounded">
            &lt;path d="..." /&gt;
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const section = document.getElementById("tech-demo-section");
      if (section) {
        // Simple logic to trigger steps based on generic scroll - could be improved with IntersectionObserver
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="tech-demo-section" className="bg-black py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Under the Hood
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            From Data to Pixels
          </h2>
          <p className="text-gray-400 max-w-xl">
            A technical breakdown of how we transform raw geographical data into
            a fluid, interactive experience using D3.js.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Left Column: Visualization */}
          <div className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-[#020617] rounded-2xl border border-gray-800 p-1 shadow-2xl overflow-hidden aspect-video lg:aspect-square flex flex-col">
              {/* Header Bar */}
              <div className="bg-gray-900/80 border-b border-gray-800 p-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 text-[10px] text-gray-500 font-mono">
                  system_visualizer.exe
                </div>
              </div>

              {/* Main Visual Display */}
              <div className="flex-1 p-6 flex flex-col relative transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

                {/* Content triggers here */}
                <div className="flex-1 flex items-center justify-center">
                  {steps[activeStep].visual}
                </div>

                {/* Step Indicators */}
                <div className="mt-6 flex justify-between px-2">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStep === idx
                          ? "w-12 bg-blue-500"
                          : "w-4 bg-gray-700 hover:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Steps */}
          <div className="space-y-24 py-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`transition-opacity duration-500 ${
                  activeStep === idx ? "opacity-100" : "opacity-40"
                }`}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/30 text-blue-400 font-mono text-xs">
                    0{idx + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                <h4 className="text-lg text-blue-400 mb-3 font-medium">
                  {step.subtitle}
                </h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Code Block */}
                <div className="rounded-xl bg-[#020617] border border-gray-800 overflow-hidden text-sm font-mono shadow-lg group hover:border-blue-500/30 transition-colors">
                  <div className="flex justify-between items-center px-4 py-2 bg-white/5 border-b border-white/5">
                    <span className="text-xs text-gray-500">
                      {idx === 0
                        ? "data.json"
                        : idx === 1
                        ? "projection.js"
                        : "component.jsx"}
                    </span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    </div>
                  </div>
                  <pre className="p-4 overflow-x-auto text-gray-300">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes draw-path {
          0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
          100% { stroke-dasharray: 100; stroke-dashoffset: 0; }
        }
        .animate-draw-path {
          animation: draw-path 2s ease-out infinite alternate;
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default TechnicalDemo;
