import React, { useEffect, useState, useRef } from "react";

function StateDetails({ state }) {
  const [stateInfo, setStateInfo] = useState(null);
  const scrollContainerRef = useRef(null);

  // Expanded Data for North East + Others
  const stateData = {
    "Uttar Pradesh": {
      capital: "Lucknow",
      population: "199.8M",
      area: "240,928 km²",
      languages: ["Hindi", "Urdu"],
      description:
        "The heartland of India, known for its rich history, culture, and religious significance.",
      tags: ["Heritage", "Spirituality", "Cuisine"],
      bestTime: "Oct - Mar",
      places: [
        { name: "Taj Mahal", loc: "Agra", type: "Monument" },
        { name: "Varanasi Ghats", loc: "Varanasi", type: "Spiritual" },
        { name: "Ayodhya", loc: "Ayodhya", type: "Heritage" },
      ],
    },
    Bihar: {
      capital: "Patna",
      population: "124.8M",
      area: "94,163 km²",
      languages: ["Hindi", "Maithili"],
      description:
        "A land of ancient universities and spiritual enlightenment, birthplace of Buddhism.",
      tags: ["History", "Buddhism", "Culture"],
      bestTime: "Oct - Mar",
      places: [
        { name: "Mahabodhi Temple", loc: "Bodh Gaya", type: "Spiritual" },
        { name: "Nalanda Ruins", loc: "Nalanda", type: "Heritage" },
      ],
    },
    // Seven Sisters
    "Arunachal Pradesh": {
      capital: "Itanagar",
      population: "1.4M",
      area: "83,743 km²",
      languages: ["English", "Hindi"],
      description:
        "The 'Land of Dawn-Lit Mountains', known for its pristine beauty and orchid paradise.",
      tags: ["Mountains", "Orchids", "Tribal Culture"],
      bestTime: "Oct - Apr",
      places: [
        { name: "Tawang Monastery", loc: "Tawang", type: "Spiritual" },
        { name: "Ziro Valley", loc: "Ziro", type: "Nature" },
        { name: "Namdapha Park", loc: "Changlang", type: "Wildlife" },
      ],
    },
    Assam: {
      capital: "Dispur",
      population: "31.2M",
      area: "78,438 km²",
      languages: ["Assamese"],
      description:
        "The gateway to North East India, famous for its tea gardens, silk, and the one-horned rhino.",
      tags: ["Tea", "Wildlife", "Silk"],
      bestTime: "Nov - May",
      places: [
        { name: "Kaziranga Park", loc: "Golaghat", type: "Wildlife" },
        { name: "Kamakhya Temple", loc: "Guwahati", type: "Spiritual" },
        { name: "Majuli Island", loc: "Majuli", type: "Nature" },
      ],
    },
    Manipur: {
      capital: "Imphal",
      population: "2.8M",
      area: "22,327 km²",
      languages: ["Meitei"],
      description:
        "The 'Jewel of India', famous for its classical dance, Loktak Lake, and rich martial arts tradition.",
      tags: ["Culture", "Lake", "Dance"],
      bestTime: "Oct - Mar",
      places: [
        { name: "Loktak Lake", loc: "Moirang", type: "Nature" },
        { name: "Kangla Fort", loc: "Imphal", type: "Heritage" },
        { name: "Ima Keithel", loc: "Imphal", type: "Market" },
      ],
    },
    Meghalaya: {
      capital: "Shillong",
      population: "2.9M",
      area: "22,429 km²",
      languages: ["Khasi", "Garo", "English"],
      description:
        "The 'Abode of Clouds', home to the wettest places on Earth, living root bridges, and waterfalls.",
      tags: ["Rainforest", "Waterfalls", "Caves"],
      bestTime: "Oct - Jun",
      places: [
        { name: "Root Bridges", loc: "Cherrapunji", type: "Nature" },
        { name: "Umiam Lake", loc: "Shillong", type: "Nature" },
        { name: "Dawki River", loc: "Dawki", type: "Nature" },
      ],
    },
    Mizoram: {
      capital: "Aizawl",
      population: "1.1M",
      area: "21,081 km²",
      languages: ["Mizo", "English"],
      description:
        "The 'Land of the Hill People', known for its dramatic landscape, pleasant climate, and vibrant festivals.",
      tags: ["Hills", "Festivals", "Nature"],
      bestTime: "Nov - Mar",
      places: [
        { name: "Reiek Peak", loc: "Aizawl", type: "Adventure" },
        { name: "Vantawng Falls", loc: "Serchhip", type: "Nature" },
        { name: "Solomon's Temple", loc: "Aizawl", type: "Spiritual" },
      ],
    },
    Nagaland: {
      capital: "Kohima",
      population: "1.9M",
      area: "16,579 km²",
      languages: ["English"],
      description:
        "The 'Land of Festivals', famous for the Hornbill Festival and its distinct tribal heritage.",
      tags: ["Tribal", "Festivals", "History"],
      bestTime: "Oct - May",
      places: [
        { name: "Kohima War Cemetery", loc: "Kohima", type: "History" },
        { name: "Dzukou Valley", loc: "Viswema", type: "Nature" },
        { name: "Naga Heritage Village", loc: "Kisama", type: "Culture" },
      ],
    },
    Tripura: {
      capital: "Agartala",
      population: "3.7M",
      area: "10,491 km²",
      languages: ["Bengali", "Kokborok"],
      description:
        "A land of palaces and temples, blending tribal culture with Bengali heritage.",
      tags: ["Palaces", "Temples", "Heritage"],
      bestTime: "Oct - Mar",
      places: [
        { name: "Ujjayanta Palace", loc: "Agartala", type: "Heritage" },
        { name: "Neermahal", loc: "Melaghar", type: "Heritage" },
        { name: "Unakoti", loc: "Kailashahar", type: "Spiritual" },
      ],
    },
  };

  useEffect(() => {
    // If we have specific data, use it. Otherwise use a generic template based on the map props
    const info = stateData[state.name] || {
      capital: "N/A",
      population: "N/A",
      area: "N/A",
      languages: ["English"],
      description: `Explore the beautiful state of ${state.name}. Detailed information is being curated.`,
      tags: ["Explore", "India"],
      bestTime: "Oct - Mar",
      places: [],
    };
    setStateInfo(info);

    // Scroll to top on change
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [state]);

  if (!stateInfo) return null;

  return (
    <div
      ref={scrollContainerRef}
      className="h-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden flex flex-col animate-slide-in shadow-2xl"
    >
      {/* HEADER SECTION */}
      <div className="relative p-8 pb-12 overflow-hidden shrink-0">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/10 opacity-50"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-[60px]"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/5 text-[10px] font-bold tracking-widest uppercase text-orange-400">
              State Profile
            </span>
            {state.code && (
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400">
                {state.code}
              </span>
            )}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 font-heading tracking-tight">
            {state.name}
          </h1>
          <p className="text-lg text-gray-300 font-light leading-relaxed max-w-md">
            {stateInfo.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {stateInfo.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-gray-400 bg-black/20 px-2 py-1 rounded-md border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT SCROLLABLE AREA */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 pt-0 space-y-6">
        {/* QUICK STATS GRID */}
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Capital" value={stateInfo.capital} icon="landmark" />
          <StatCard
            label="Population"
            value={stateInfo.population}
            icon="users"
          />
          <StatCard
            label="Languages"
            value={stateInfo.languages[0]}
            icon="chat"
          />
          <StatCard
            label="Best Time"
            value={stateInfo.bestTime}
            icon="calendar"
          />
        </div>
        {/* TOURISM HIGHLIGHTS */}
        {stateInfo.places.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white font-heading">
                Must Visit
              </h3>
              <span className="text-xs text-gray-500">Top Attractions</span>
            </div>

            <div className="space-y-3">
              {stateInfo.places.map((place, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-orange-400 font-bold text-sm border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {place.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-orange-400/80">{place.loc}</span>
                      <span>•</span>
                      <span>{place.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* ADDITIONAL INFO SECTION */}
        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
          <h4 className="text-sm font-semibold text-blue-200 mb-2">
            Did You Know?
          </h4>
          <p className="text-xs text-blue-200/70 leading-relaxed">
            {stateInfo.area !== "N/A"
              ? `${state.name} covers an area of ${stateInfo.area}, making it a significant part of India's diverse geography.`
              : `Detailed geographical data for ${state.name} is improving.`}
          </p>
        </div>
        <div className="h-10"></div> {/* Bottom Spacer */}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .font-heading {
          font-family: "Outfit", sans-serif;
        }
      `}</style>
    </div>
  );
}

// Helper Component for Stats
function StatCard({ label, value, icon }) {
  // Simple icon mapping
  const icons = {
    landmark: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
    users: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    ),
    chat: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
    calendar: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  };

  return (
    <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.06] transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
          {label}
        </span>
        <svg
          className="w-4 h-4 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icons[icon]}
        </svg>
      </div>
      <div className="text-lg font-semibold text-white truncate" title={value}>
        {value}
      </div>
    </div>
  );
}

export default StateDetails;
