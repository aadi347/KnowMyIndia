import React, { useEffect, useState, useRef } from "react";

function StateDetails({ state }) {
  const [stateInfo, setStateInfo] = useState(null);
  const scrollContainerRef = useRef(null);

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
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop", // Taj Mahal
      places: [
        {
          name: "Taj Mahal",
          loc: "Agra",
          type: "Monument",
          img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=400&auto=format&fit=crop",
        },
        {
          name: "Varanasi Ghats",
          loc: "Varanasi",
          type: "Spiritual",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4a/3d/a3/img-20180308-055907-hht.jpg?w=1200&h=-1&s=1",
        },
        {
          name: "Ayodhya",
          loc: "Ayodhya",
          type: "Heritage",
          img: "https://blog.zenithholidays.com/wp-content/uploads/2024/03/Ayodhya-to.webp",
        }, // Placeholder search
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
      image:
        "https://images.news18.com/ibnkhabar/uploads/2024/07/HYP_4571008_untitled_design_20240727_064441_0000_watermark_270_9.jpg", // Bodh Gaya
      places: [
        {
          name: "Mahabodhi Temple",
          loc: "Bodh Gaya",
          type: "Spiritual",
          img: "https://www.tripsavvy.com/thmb/vzVTgJuv8L5RU3iXFaaZ0KYoh5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg",
        },
        {
          name: "Nalanda Ruins",
          loc: "Nalanda",
          type: "Heritage",
          img: "https://s7ap1.scene7.com/is/image/incredibleindia/nalanda-stupa-heritage-nalanda-bihar-1-attr-hero?qlt=82&ts=1742167674914",
        }, // Placeholder
      ],
    },
    Kerala: {
      capital: "Thiruvananthapuram",
      population: "35.6M",
      area: "38,863 km²",
      languages: ["Malayalam", "English"],
      description:
        "Known as 'God's Own Country', famous for its tranquil backwaters, tea plantations, and rich cultural heritage.",
      tags: ["Backwaters", "Ayurveda", "Nature"],
      bestTime: "Sep - Mar",
      image: "https://static.toiimg.com/photo/58490365/.jpg",
      places: [
        {
          name: "Alleppey",
          loc: "Alappuzha",
          type: "Backwaters",
          img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=400&auto=format&fit=crop",
        },
        {
          name: "Munnar",
          loc: "Idukki",
          type: "Hill Station",
          img: "https://images.unsplash.com/photo-1596328704204-638e5539d07f?q=80&w=400&auto=format&fit=crop",
        },
        {
          name: "Fort Kochi",
          loc: "Kochi",
          type: "Heritage",
          img: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=400&auto=format&fit=crop",
        },
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
      image:
        "https://media.istockphoto.com/id/910430170/photo/tawang-arunachal-pradesh.jpg?s=612x612&w=0&k=20&c=MKKYsHH_6JRMYROO2bHIsQAW9XoSnl-9nkRGOFgAg0M=", // Tawang
      places: [
        {
          name: "Tawang Monastery",
          loc: "Tawang",
          type: "Spiritual",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsfm9wgFTzv_obV4x08Lcosr-mEyjQoQpHw&s",
        },
        {
          name: "Ziro Valley",
          loc: "Ziro",
          type: "Nature",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW1AIRNHZHbx9VJUuzCXXNsfi4yEO0x8Alg&s",
        },
        {
          name: "Namdapha National Park",
          loc: "Changlang",
          type: "Wildlife",
          img: "https://images.squarespace-cdn.com/content/v1/5ab61c67ec4eb7ab7a2f40f2/1576684364831-7WFKMQA56EA1R3X9IJDY/The+Noa+Dhing+River+with+Rain+Forested+Hills+in+the+background+and+the+Dapha+Bum+Mountain+in+the+distant+background.",
        },
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw-Noqgg_MRkLqwtp9rWr_Fu57S4ZCsFrsw&s", // Tea Garden
      places: [
        {
          name: "Kaziranga National Park",
          loc: "Golaghat",
          type: "Wildlife",
          img: "https://oddessemania.in/wp-content/uploads/2023/09/Kaziranga-1-1290x540.jpg",
        }, // Rhino
        {
          name: "Kamakhya Temple",
          loc: "Guwahati",
          type: "Spiritual",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUNtt1Y-62rFWdEvXh6xPH7wLwKN6vx6cNA&s",
        },
        {
          name: "Majuli Island",
          loc: "Majuli",
          type: "Nature",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnvO_P-QPi7Pq0AlCOy8bThWtU6Gpur60hg&s",
        },
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
      image:
        "https://media.assettype.com/sentinelassam-english%2F2024-03%2F4cddf8f7-8ce0-457f-b7ed-e3e387cff31b%2Fmanipur.jpg?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85", // Loktak
      places: [
        {
          name: "Loktak Lake",
          loc: "Moirang",
          type: "Nature",
          img: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/bw-travel/media/media_files/2025/05/15/Ixn6qd9m52TpTViMKO5N.png",
        },
        {
          name: "Kangla Fort",
          loc: "Imphal",
          type: "Heritage",
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Uttra_Sanglen.JPG",
        },
        {
          name: "Ima Keithel",
          loc: "Imphal",
          type: "Market",
          img: "https://www.northeastbullet.com/wp-content/uploads/2023/11/main.jpg.webp",
        },
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
      image:
        "https://yaronkisawari.com/wp-content/uploads/2024/09/01/post/908/attractions-in-Meghalaya.webp", // Root Bridge
      places: [
        {
          name: "Root Bridges",
          loc: "Cherrapunji",
          type: "Nature",
          img: "https://res.cloudinary.com/roundglass/image/upload/v1649765953/rg/collective/media/meghalaya-nongriat-double-decker-living-root-bridge-greenery-people-ashwin-ezhumalai_mmdvms.jpg",
        },
        {
          name: "Umiam Lake",
          loc: "Shillong",
          type: "Nature",
          img: "https://wanderon-images.gumlet.io/gallery/new/2025/08/14/1755160034878-sunset-over-umiam-lake.jpg",
        },
        {
          name: "Dawki River",
          loc: "Dawki",
          type: "Nature",
          img: "https://nomadicweekends.com/blog/wp-content/uploads/2019/09/66851483_2355591914534526_8824396371357335552_o.jpg",
        },
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
      image:
        "https://static.wixstatic.com/media/762265_3a336285bc984cca969938ab1b1777f6~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/762265_3a336285bc984cca969938ab1b1777f6~mv2.jpg", // Hills
      places: [
        {
          name: "Reiek Peak",
          loc: "Aizawl",
          type: "Adventure",
          img: "https://aravindgundumane.com/wp-content/uploads/2022/11/Trail-to-the-Reiek-peak.jpg",
        },
        {
          name: "Vantawng Falls",
          loc: "Serchhip",
          type: "Nature",
          img: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2022/10/Vantawng-falls-highest-waterfall-in-Mizoram.jpg?fit=1536%2C1025&ssl=1",
        },
        {
          name: "Solomon's Temple",
          loc: "Aizawl",
          type: "Spiritual",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1VL_rc3lngLmxc3df22oLhNXgF8ONKh9eA&s",
        },
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
      image:
        "https://media.istockphoto.com/id/897229558/photo/dzukou-valley-nagaland-north-east-india.jpg?s=170667a&w=0&k=20&c=o_e6zOrD6DkUOlqQDOgFgTToKlxf3jCt0hJ4Q1vZ7NY=", // Hornbill
      places: [
        {
          name: "Kohima War Cemetery",
          loc: "Kohima",
          type: "History",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdz4F9OhywPvLfisAwWwXGc0zT-fUFUvGJuA&s",
        },
        {
          name: "Dzukou Valley",
          loc: "Viswema",
          type: "Nature",
          img: "https://roytellstales.com/wp-content/uploads/2020/01/IMG_20191210_1600370001-scaled.jpg",
        },
        {
          name: "Naga Heritage Village",
          loc: "Kisama",
          type: "Culture",
          img: "https://www.hlimg.com/images/things2do/738X538/hornbill_1511353900t.jpg",
        },
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
      image: "https://tripuratourism.gov.in/images/slider/3328915.png", // Ujjayanta
      places: [
        {
          name: "Ujjayanta Palace",
          loc: "Agartala",
          type: "Heritage",
          img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_35,w_736,h_414,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/hotel-polo-towers-group/Agartala_Tripura_India_-_Luxury_Trails_of_India_xqy2ou",
        },
        {
          name: "Neermahal",
          loc: "Melaghar",
          type: "Heritage",
          img: "https://eastindiantraveller.com/wp-content/uploads/2020/11/neermahal.jpeg?w=1080",
        },
        {
          name: "Unakoti",
          loc: "Kailashahar",
          type: "Spiritual",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP-L-pQsOsT1aDj0xlqYTXLc1oGvmprQ2MQ&s",
        },
      ],
    },
    Sikkim: {
      capital: "Gangtok",
      population: "0.69M",
      area: "7,096 km²",
      languages: ["Nepali", "English"],
      description:
        "The organic state of India, home to Kanchenjunga, alpine meadows, and vibrant Buddhist monasteries.",
      tags: ["Himalayas", "Buddhism", "Organic"],
      bestTime: "Mar - Jun",
      image:
        "https://www.remotelands.com/travelogues/app/uploads/2019/12/Sikkim-India-1.jpg", // Placeholder
      places: [
        {
          name: "Tsomgo Lake",
          loc: "Gangtok",
          type: "Nature",
          img: "https://eastindiatour.com/wp-content/uploads/elementor/thumbs/Gangtok-1-1-q61xr74a0mxbks12c9bavbyvbhy0x0bse2hkilgoz4.jpg",
        },
        {
          name: "Nathula Pass",
          loc: "Gangtok",
          type: "Adventure",
          img: "https://travelnthrill.com/wp-content/uploads/2019/04/Nathula-Pass.jpg",
        }, // Placeholder
      ],
    },
  };

  useEffect(() => {
    // If we have specific data, use it. Otherwise use a generic template
    const info = stateData[state.name] || {
      capital: "N/A",
      population: "N/A",
      area: "N/A",
      languages: ["English", "Hindi"],
      description: `Explore the vibrant culture and heritage of ${state.name}. Extensive data is currently being curated for this region.`,
      tags: ["Explore", "India", "Heritage"],
      bestTime: "Year-round",
      image:
        "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1000&auto=format&fit=crop", // Generic India
      places: [],
    };
    setStateInfo(info);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [state]);

  if (!stateInfo) return null;

  return (
    <div
      ref={scrollContainerRef}
      className="h-full bg-zinc-950 flex flex-col shadow-3xl animate-fade-in relative z-50"
      style={{ boxShadow: "20px 0 50px rgba(0,0,0,0.5)" }}
    >
      {/* HEADER HERO SECTION */}
      <div className="relative h-64 shrink-0 overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img
          src={stateInfo.image}
          alt={state.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/20 text-[10px] uppercase font-bold tracking-widest">
              India
            </span>
            {state.code && (
              <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 text-[10px] font-mono">
                {state.code}
              </span>
            )}
          </div>
          <h1 className="text-5xl font-bold text-white mb-2 font-heading tracking-tight drop-shadow-lg">
            {state.name}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {stateInfo.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-zinc-300 bg-zinc-900/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-8 space-y-8">
          {/* DESCRIPTION */}
          <div>
            <p className="text-zinc-400 leading-relaxed font-light text-lg border-l-2 border-orange-500/50 pl-4">
              {stateInfo.description}
            </p>
          </div>
          {/* KEY METRICS GRID */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              Key Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                label="Capital City"
                value={stateInfo.capital}
                icon="landmark"
              />
              <MetricCard
                label="Population"
                value={stateInfo.population}
                icon="users"
              />
              <MetricCard
                label="Languages"
                value={stateInfo.languages.join(", ")}
                icon="chat"
              />
              <MetricCard
                label="Best Time"
                value={stateInfo.bestTime}
                icon="calendar"
              />
            </div>
          </div>
          {/* PLACES TO VISIT */}
          {stateInfo.places.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  Top Attractions
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {stateInfo.places.map((place, i) => (
                  <div
                    key={i}
                    className="group flex gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-3 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-default"
                  >
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-zinc-800 relative">
                      {place.img ? (
                        <img
                          src={place.img}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-600">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-semibold text-zinc-200 group-hover:text-white transition-colors text-lg">
                        {place.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mt-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{place.loc}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                        <span className="text-zinc-600 border border-zinc-800 px-1.5 py-0.5 rounded textxs">
                          {place.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* DID YOU KNOW */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20">
            <div className="flex gap-3">
              <div className="mt-1 shrink-0 p-2 rounded-full bg-indigo-500/20 text-indigo-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold text-indigo-300 text-sm mb-1">
                  Quick Fact
                </h5>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {stateInfo.area !== "N/A"
                    ? `${state.name} spans across ${stateInfo.area}, making it a vital region in India's geographical tapestry.`
                    : `Discovering more about ${state.name} every day.`}
                </p>
              </div>
            </div>
          </div>
          <div className="h-20" /> {/* Spacer */}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .font-heading {
          font-family: "Outfit", sans-serif;
        }
      `}</style>
    </div>
  );
}

function MetricCard({ label, value, icon }) {
  const icons = {
    landmark: (
      <svg
        className="w-4 h-4"
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
    users: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    chat: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    calendar: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col gap-3 hover:border-zinc-700 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          {label}
        </span>
        <div className="text-zinc-600">{icons[icon]}</div>
      </div>
      <span
        className="text-lg font-medium text-zinc-200 truncate"
        title={value}
      >
        {value}
      </span>
    </div>
  );
}

export default StateDetails;
