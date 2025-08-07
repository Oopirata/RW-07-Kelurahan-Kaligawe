import React, { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Eye,
  EyeOff,
  Leaf,
  CheckCircle,
  Maximize,
  Minimize,
  Filter,
  Info,
  ArrowLeft,
  Home,
  Droplets,
} from "lucide-react";
import { Link } from "react-router-dom";

const PetaBiopori = () => {
  const [showBiopori, setShowBiopori] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const mapRef = useRef(null);

  // Enhanced animation on mount
  const [itemRefs, setItemRefs] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [itemRefs]);

  // Data biopori yang sudah dibuat tim KKN di lapangan
  const locations = {
    biopori: [
      {
        id: 1,
        name: "Biopori RT 01 - Halaman Masjid",
        description:
          "Biopori dengan kedalaman 100cm, dibuat di area strategis dengan akses mudah untuk maintenance",
        status: "Selesai",
        dateCreated: "28 Jan 2025",
        depth: "100 cm",
        diameter: "10 cm",
        coordinate: "7°00'12\"S, 110°25'18\"E",
        maintenance: "Rutin setiap 2 minggu",
      },
      {
        id: 2,
        name: "Biopori RT 02 - Taman Warga",
        description:
          "Biopori di area taman dengan tanah gembur, resapan air optimal untuk area sekitar",
        status: "Selesai",
        dateCreated: "30 Jan 2025",
        depth: "80 cm",
        diameter: "10 cm",
        coordinate: "7°00'15\"S, 110°25'22\"E",
        maintenance: "Rutin setiap 2 minggu",
      },
      {
        id: 3,
        name: "Biopori RT 03 - Lapangan",
        description:
          "Biopori di area lapangan untuk mengatasi genangan saat hujan deras",
        status: "Selesai",
        dateCreated: "2 Feb 2025",
        depth: "90 cm",
        diameter: "10 cm",
        coordinate: "7°00'18\"S, 110°25'25\"E",
        maintenance: "Rutin setiap 2 minggu",
      },
      {
        id: 4,
        name: "Biopori RT 01 - Gang Keluarga",
        description:
          "Biopori tambahan di gang sempit untuk optimasi daya serap air hujan",
        status: "Dalam Progress",
        dateCreated: "5 Feb 2025",
        depth: "75 cm",
        diameter: "10 cm",
        coordinate: "7°00'10\"S, 110°25'20\"E",
        maintenance: "Belum dijadwalkan",
      },
    ],
  };

  const statistics = {
    totalBiopori: locations.biopori.length,
    completed: locations.biopori.filter((b) => b.status === "Selesai").length,
    inProgress: locations.biopori.filter((b) => b.status === "Dalam Progress")
      .length,
    totalDepth:
      locations.biopori.reduce((sum, b) => sum + parseInt(b.depth), 0) + " cm",
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      mapRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern - Same as Footer */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Elements - Same as Footer */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Math.random() > 0.5 ? (
              <Leaf className="h-5 w-5 text-green-500" />
            ) : (
              <Droplets className="h-5 w-5 text-blue-500" />
            )}
          </div>
        ))}
      </div>

      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 text-white py-12 md:py-16">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Back Button */}
        <div className="relative max-w-7xl mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white transition-all duration-300 hover:text-white hover:scale-105 mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 " />
            <Home className="h-4 w-4" />
            <span className="font-medium">Kembali ke Beranda</span>
          </Link>

          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              🗺️ Platform Peta Biopori
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 animate-fade-in-up animation-delay-200 px-4">
              Solusi Cerdas Mengatasi Genangan Air RW 7 Kaligawe
            </p>

            {/* Quick Stats - Enhanced Mobile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 animate-fade-in-up animation-delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <div className="text-xl md:text-2xl font-bold">
                  {statistics.totalBiopori}
                </div>
                <div className="text-xs md:text-sm text-blue-100">
                  Total Biopori
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-4 py-6 md:py-8 space-y-6 md:space-y-8">
        {/* Enhanced Controls - Mobile Optimized */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 border border-white/20">
          <div className="flex flex-col space-y-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 flex items-center justify-center md:justify-start gap-2">
                <Filter className="h-5 w-5 text-blue-600" />
                Kontrol Tampilan
              </h3>
              <p className="text-gray-600 text-sm">
                Sesuaikan tampilan peta biopori yang telah dibuat
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => setShowBiopori(!showBiopori)}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95 ${
                  showBiopori
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-200"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {showBiopori ? <Eye size={18} /> : <EyeOff size={18} />}
                <Leaf size={16} />
                <span className="text-sm md:text-base">Lokasi Biopori</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {statistics.totalBiopori}
                </span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all duration-300 transform active:scale-95"
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                <span className="text-sm md:text-base">
                  {isFullscreen ? "Keluar" : "Layar Penuh"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Map Container - Mobile Optimized */}
        <div className="relative">
          <div
            ref={mapRef}
            className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Map Header - Mobile Responsive */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-3 md:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">
                      Peta Interaktif RW 7 Kaligawe
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                      Kecamatan Gayamsari, Kota Semarang
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe - Mobile Height */}
            <div className="relative h-[400px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1LF4QTbKvoE_juDsa9ZSJGKUS4ajWbuc&ehbc=2E312F&noprof=1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Biopori RW 07 Kaligawe"
                className="rounded-b-xl md:rounded-b-2xl"
              />

              {/* Overlay Controls - Mobile Responsive */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                <div className="text-xs text-gray-600 mb-2">Legenda</div>
                <div className="space-y-1">
                  {showBiopori && (
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                      <span>Biopori</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Location Cards - Updated Styling */}
        <div className="grid lg:grid-cols-1 gap-6 md:gap-8">
          {showBiopori && (
            <div className="space-y-4 md:space-y-6 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 md:mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl shadow-lg">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Biopori yang Telah Dibuat Tim KKN
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Dokumentasi digital lubang biopori di RW 7 Kaligawe
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {locations.biopori.map((location, index) => (
                  <div
                    key={location.id}
                    ref={(el) => {
                      if (el && !itemRefs.includes(el)) {
                        setItemRefs((prev) => [...prev, el]);
                      }
                    }}
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-300 hover:border-gray-400 transition-all duration-300 transform active:scale-[0.98] md:hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-500 p-2 rounded-lg shadow-md">
                          <Leaf className="h-4 w-4 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors text-sm md:text-base">
                            {location.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 truncate">
                            {location.coordinate}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold ${
                          location.status === "Selesai"
                            ? "bg-green-100 text-green-700"
                            : location.status === "Dalam Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {location.status}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
                      {location.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Kedalaman
                        </div>
                        <div className="font-medium text-gray-900 text-sm">
                          {location.depth}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Diameter
                        </div>
                        <div className="font-medium text-gray-900 text-sm">
                          {location.diameter}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Tanggal Dibuat
                        </div>
                        <div className="font-medium text-gray-900 text-sm">
                          {location.dateCreated}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Maintenance
                        </div>
                        <div className="font-medium text-gray-900 text-sm">
                          {location.maintenance}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info Footer - Mobile Optimized */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Info className="h-5 w-5 md:h-6 md:w-6" />
            <h3 className="text-lg md:text-xl font-bold">Tentang Platform</h3>
          </div>
          <p className="text-blue-100 mb-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Platform ini dikembangkan sebagai bagian dari Program Multidisiplin
            KKN Kelompok 5 untuk membantu warga RW 7 Kaligawe dalam mengatasi
            masalah genangan air melalui implementasi biopori yang terencana dan
            strategis.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              📍 RW 7 Kaligawe
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              💻 Platform Digital Biopori
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              👥 KKN Kelompok 5 TIM 77 Undip
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📅 2025</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .group:active {
            transform: scale(0.98);
          }

          button:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default PetaBiopori;
