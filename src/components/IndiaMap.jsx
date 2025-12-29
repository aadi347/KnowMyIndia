import * as d3 from "d3";
import { useEffect, useRef, useState, useMemo } from "react";
import indiaData from "../data/india.geo.json";

const width = 900;
const height = 1000;

// Points of Interest Data
const poiData = [
  {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    coords: [78.0421, 27.1751],
    description:
      "An immense mausoleum of white marble, built in Agra between 1631 and 1648.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&q=80",
  },
  {
    name: "India Gate",
    location: "New Delhi",
    coords: [77.2295, 28.6129],
    description:
      "A war memorial located astride the Rajpath, on the eastern edge of the ceremonial axis.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-4-attr-hero?qlt=82&ts=1742167548398",
  },
  {
    name: "Gateway of India",
    location: "Mumbai, Maharashtra",
    coords: [72.8347, 18.922],
    description:
      "An arch-monument built in the early 20th century in the city of Mumbai.",
    image:
      "https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gateway-to-India_0.jpg",
  },
  {
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    coords: [75.8267, 26.9239],
    description:
      "The Palace of Winds, built from red and pink sandstone in Jaipur.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-3-attr-about?qlt=82&ts=1742185270501",
  },
  {
    name: "Charminar",
    location: "Hyderabad, Telangana",
    coords: [78.4747, 17.3616],
    description: "Constructed in 1591, the landmark is a symbol of Hyderabad.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Hyderabad%27s_beautiful_Charminar%2C_on_a_lovely_sunny_morning.jpg",
  },
  {
    name: "Sun Temple",
    location: "Konark, Odisha",
    coords: [86.0945, 19.8876],
    description: "A 13th-century Sun Temple located near Puri, Odisha.",
    image:
      "https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg",
  },
  {
    name: "Victoria Memorial",
    location: "Kolkata, West Bengal",
    coords: [88.3426, 22.5448],
    description:
      "A large marble building built between 1906 and 1921 in Kolkata.",
    image:
      "https://visitplacesindia.com/wp-content/uploads/2024/11/victoria-hall.jpg",
  },

  {
    name: "Bodhi Tree",
    location: "Bodh Gaya, Bihar",
    coords: [84.9916, 24.695],
    description:
      "The sacred fig tree under which Gautama Buddha attained enlightenment, one of the most important pilgrimage sites in Buddhism.",
    image:
      "https://www.shutterstock.com/image-photo/bodh-gaya-bihar-india-13-600nw-2499762303.jpg",
  },

  // -------- Seven Sisters (North-East India) --------

  {
    name: "Kaziranga National Park",
    location: "Assam",
    coords: [93.1711, 26.5775],
    description:
      "A UNESCO World Heritage Site famous for the one-horned rhinoceros.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/kaziranga-national-park-tezpur-assam-2-attr-hero?qlt=82&ts=1751459116928",
  },
  {
    name: "Living Root Bridges",
    location: "Cherrapunji, Meghalaya",
    coords: [91.7035, 25.2754],
    description:
      "Naturally formed bridges made from living tree roots, unique to Meghalaya.",
    image:
      "https://static2.tripoto.com/media/filter/tst/img/50102/TripDocument/root_bridge.jpg",
  },
  {
    name: "Loktak Lake",
    location: "Manipur",
    coords: [93.8123, 24.5539],
    description:
      "The largest freshwater lake in Northeast India, known for floating phumdis.",
    image:
      "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/bw-travel/media/media_files/2025/05/15/Ixn6qd9m52TpTViMKO5N.png",
  },
  {
    name: "Vantawng Falls",
    location: "Mizoram",
    coords: [92.6136, 23.7356],
    description:
      "The highest waterfall in Mizoram, surrounded by lush green forests.",
    image:
      "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2022/10/Vantawng-falls-highest-waterfall-in-Mizoram.jpg?fit=1536%2C1025&ssl=1",
  },
  {
    name: "Tawang Monastery",
    location: "Tawang, Arunachal Pradesh",
    coords: [91.8676, 27.5861],
    description:
      "The largest monastery in India and an important center of Tibetan Buddhism.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tawang_Monastery_%28Tibetan_Buddhist%29.jpg/1200px-Tawang_Monastery_%28Tibetan_Buddhist%29.jpg",
  },
  {
    name: "Neermahal",
    location: "Tripura",
    coords: [91.3216, 23.4969],
    description:
      "A beautiful water palace built in the middle of Rudrasagar Lake.",
    image:
      "https://eastindiantraveller.com/wp-content/uploads/2020/11/neermahal.jpeg?w=1080",
  },
  {
    name: "Hornbill Festival",
    location: "Kisama, Nagaland",
    coords: [94.1036, 25.6747],
    description:
      "A vibrant cultural festival showcasing the traditions of Nagaland.",
    image: "https://images.furbago.com/blog/KlYhtNuN7BDbCapl1753875395329.jpeg",
  },
  {
    name: "Tiger Hill",
    location: "Darjeeling, West Bengal",
    coords: [88.2627, 27.0128],
    description:
      "Famous for its sunrise views over Mount Kanchenjunga and, on clear days, Mount Everest.",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/tiger-hill-darjeeling-west-bengal-1-attr-hero?qlt=82&ts=1726643210594",
  },
  {
    name: "Rumtek Monastery",
    location: "Gangtok, Sikkim",
    coords: [88.6065, 27.3314],
    description:
      "One of the most important monasteries in Tibetan Buddhism, known for its stunning architecture and spiritual significance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNAT28OBu-JgnkLm_5C-Bq8RIoZ800GzDfA&s",
  },
];

export default function IndiaMap({ st_nm, onStateClick }) {
  const svgRef = useRef(null);
  const gRef = useRef(null);
  const zoomRef = useRef(null);
  const tooltipRef = useRef(null);
  const [activeState, setActiveState] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const projection = d3.geoMercator().fitSize([width, height], indiaData);
  const pathGenerator = d3.geoPath().projection(projection);

  // Get unique state names for search
  const uniqueStates = useMemo(() => {
    return [
      ...new Set(indiaData.features.map((f) => f.properties.st_nm)),
    ].sort();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = uniqueStates.filter((state) =>
        state.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  const selectState = (stateName) => {
    const feature = indiaData.features.find(
      (f) => f.properties.st_nm === stateName
    );
    if (feature) {
      zoomToState(feature);
      setSearchQuery("");
      setSearchResults([]);
      setIsSearchFocused(false);
    }
  };

  const handleRandomExplore = () => {
    const randomState =
      uniqueStates[Math.floor(Math.random() * uniqueStates.length)];
    selectState(randomState);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    zoomRef.current = d3
      .zoom()
      .scaleExtent([1, 10])
      .filter((event) => false)
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoomRef.current);
    svg.on("wheel.zoom", null);
    svg.on("dblclick.zoom", null);
  }, []);

  const zoomToState = (feature) => {
    const svg = d3.select(svgRef.current);
    const stateName = feature.properties.st_nm;

    if (activeState === stateName && isZoomed) {
      // If clicking the same state, do nothing or reset?
      // User might want to re-center. Let's allowing re-centering if needed,
      // but for "Toggle" behavior, we traditionally reset.
      // For search, we always want to ZOOM IN.
      // Let's just return if already zoomed to avoid jitter,
      // UNLESS getting called from search (which might pass the same feature).
      // Ideally check if transform matches. For now, keep existing logic.
    }

    const [[x0, y0], [x1, y1]] = pathGenerator.bounds(feature);
    const dx = x1 - x0;
    const dy = y1 - y0;
    const x = (x0 + x1) / 2;
    const y = (y0 + y1) / 2;

    const scale = Math.min(8, 0.8 / Math.max(dx / width, dy / height));
    const translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg
      .transition()
      .duration(750)
      .ease(d3.easeCubicOut)
      .call(
        zoomRef.current.transform,
        d3.zoomIdentity.translate(...translate).scale(scale)
      );

    setActiveState(stateName);
    setIsZoomed(true);

    if (onStateClick) {
      onStateClick({
        name: stateName,
        code: feature.properties.st_code,
        fullData: feature.properties,
      });
    }
  };

  const resetZoom = () => {
    const svg = d3.select(svgRef.current);

    svg
      .transition()
      .duration(750)
      .ease(d3.easeCubicOut)
      .call(zoomRef.current.transform, d3.zoomIdentity);

    setActiveState(null);
    setIsZoomed(false);
    if (onStateClick) {
      onStateClick(null);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === svgRef.current && isZoomed) {
      resetZoom();
    }
  };

  const showTooltip = (event, data, type = "state") => {
    const tooltip = d3.select(tooltipRef.current);
    let htmlContent = "";

    if (type === "poi") {
      htmlContent = `
        <div class="max-w-[200px]">
          <div class="h-24 w-full mb-2 overflow-hidden rounded-md">
            <img src="${data.image}" class="w-full h-full object-cover" alt="${data.name}"/>
          </div>
          <div class="font-bold text-sm text-white">${data.name}</div>
          <div class="text-[10px] text-gray-300 mb-1">${data.location}</div>
          <div class="text-[10px] text-gray-400 leading-tight">${data.description}</div>
        </div>
      `;
    } else {
      const stateName = data.properties.st_nm;
      const districtName = data.properties.district;

      htmlContent = `
        <div class="font-bold text-sm text-white">${
          districtName || stateName
        }</div>
        ${
          districtName
            ? `<div class="text-xs text-gray-300">${stateName}</div>`
            : '<div class="text-xs text-gray-400">Click to explore</div>'
        }
      `;
    }

    // Improve tooltip positioning
    const left = event.clientX + 20;
    const top = event.clientY - 20;

    // Boundary checks could be added here preferably, but CSS basic positioning handles most cases
    tooltip
      .style("opacity", 1)
      .style("left", left + "px")
      .style("top", top + "px")
      .html(htmlContent);
  };

  const hideTooltip = () => {
    d3.select(tooltipRef.current).style("opacity", 0);
  };

  return (
    <div className="relative w-full h-full">
      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="fixed pointer-events-none bg-black/90 backdrop-blur-md text-white px-3 py-2 rounded-lg border border-white/20 shadow-xl z-50 opacity-0 transition-opacity"
        style={{ opacity: 0 }}
      />

      {/* ============ CONTROL PANEL (Search + Info + Reset) ============ */}
      <div className="absolute top-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Status Badge */}
        <div className="pointer-events-auto flex items-center gap-2 bg-black/60 backdrop-blur-md text-white/90 px-4 py-1.5 rounded-full border border-white/10 shadow-lg animate-slide-in">
          <div
            className={`w-2 h-2 rounded-full ${
              activeState ? "bg-green-500 animate-pulse" : "bg-orange-500"
            }`}
          ></div>
          <span className="text-xs font-medium tracking-wide">
            {activeState ? `Exploring ${activeState}` : "Explore India"}
          </span>
          {activeState && (
            <span className="text-[10px] text-gray-400 border-l border-white/20 pl-2 ml-1">
              District View Active
            </span>
          )}
        </div>

        {/* Main Controls */}
        <div className="pointer-events-auto relative">
          <div className="flex items-center gap-2 p-1.5 bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5">
            {/* Search Icon */}
            <div className="pl-3 text-orange-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search districts, states..."
              className="bg-transparent border-none outline-none text-white text-sm w-48 placeholder-gray-500 font-medium focus:w-64 transition-all duration-300"
            />

            {/* Actions Group */}
            <div className="flex items-center gap-1 pl-2 border-l border-white/10">
              {/* Random Button */}
              <button
                onClick={handleRandomExplore}
                className="p-2 hover:bg-white/10 rounded-xl text-white/80 hover:text-orange-400 transition-colors group relative"
                title="Surprise Me"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {/* Reset Button (Conditional) */}
              {isZoomed && (
                <button
                  onClick={resetZoom}
                  className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold rounded-xl border border-red-500/20 transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Exit</span>
                </button>
              )}
            </div>
          </div>

          {/* Dropdown Results */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute top-full right-0 mt-3 w-72 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl max-h-[300px] overflow-y-auto animate-slide-in z-50">
              <div className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-black/20">
                Search Results
              </div>
              {searchResults.map((state, i) => (
                <button
                  key={i}
                  onClick={() => selectState(state)}
                  className="w-full text-left px-4 py-3 text-gray-300 text-sm hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-none flex items-center justify-between group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {state}
                  </span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SVG Map */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        onClick={handleBackgroundClick}
        className="w-full h-full"
        style={{
          overflow: "visible",
          cursor: isZoomed ? "zoom-out" : "default",
        }}
      >
        <rect
          width={width}
          height={height}
          fill="transparent"
          onClick={handleBackgroundClick}
        />

        <g ref={gRef}>
          {/* Map Features */}
          {indiaData.features.map((feature, i) => {
            const stateName = feature.properties.st_nm;
            const isActive = activeState === stateName;

            return (
              <path
                key={i}
                d={pathGenerator(feature)}
                fill={isActive ? "#22c55e" : "#ffffff"}
                stroke={isActive ? "#16a34a" : "#000000"}
                strokeWidth={isActive ? 1.5 : 0.5}
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  filter: isActive
                    ? "drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.fill = "#fb923c";
                  }
                  showTooltip(e, feature, "state");
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.fill = "#ffffff";
                  }
                  hideTooltip();
                }}
                onMouseMove={(e) => showTooltip(e, feature, "state")}
                onClick={(e) => {
                  e.stopPropagation();
                  zoomToState(feature);
                }}
              />
            );
          })}

          {/* POI Markers */}
          {poiData.map((poi, i) => {
            const [x, y] = projection(poi.coords);
            if (!x || !y) return null;

            return (
              <g
                key={`poi-${i}`}
                className="group cursor-pointer"
                onMouseEnter={(e) => showTooltip(e, poi, "poi")}
                onMouseLeave={hideTooltip}
                onClick={(e) => e.stopPropagation()} // Prevent zooming when clicking POI
              >
                {/* Pulsing Effect */}
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="#fb923c"
                  className="animate-ping"
                  opacity="0.75"
                />
                {/* Main Dot */}
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="white"
                  stroke="#fb923c"
                  strokeWidth="2"
                  className="transition-all duration-300 group-hover:scale-150"
                />
              </g>
            );
          })}
        </g>
      </svg>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.4s ease-out;
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
      `}</style>
    </div>
  );
}
