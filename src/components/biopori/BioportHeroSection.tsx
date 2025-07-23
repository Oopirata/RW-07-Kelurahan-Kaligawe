import { useEffect, useRef } from "react";
import { MapPin, Droplets, Leaf } from "lucide-react";

function BioportHeroSection() {
  const zoomRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Zoom image effect
      if (zoomRef.current) {
        const scale = 1 + scrollTop / 8000;
        zoomRef.current.style.transform = `scale(${scale})`;
      }

      // Animate text scroll
      if (textRef.current) {
        const translateY = Math.min(scrollTop / 8, 40);
        const opacity = Math.max(1 - scrollTop / 500, 0);
        textRef.current.style.transform = `translateY(-${translateY}px)`;
        textRef.current.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100dvh] overflow-hidden">
      {/* Background image - using a flood/rain related image */}
      <div
        ref={zoomRef}
        className="absolute inset-0 bg-cover bg-center brightness-[0.6] saturate-150 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Droplets className="h-6 w-6 text-blue-300" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        ref={textRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white transition-all duration-300 ease-out"
      >
        <div className="mb-6 flex items-center space-x-3 text-blue-200">
          <MapPin className="h-8 w-8" />
          <span className="text-lg font-medium tracking-wide">
            RW 07 Kelurahan Kaligawe
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">PLATFORM</span>
          <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            PEMETAAN BIOPORI
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed tracking-wide text-gray-200 sm:text-xl md:text-2xl">
          Solusi Digital untuk Mengatasi Genangan Air melalui
          <span className="text-green-300"> Edukasi </span>
          dan
          <span className="text-blue-300"> Pemetaan Interaktif</span>
        </p>

        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <button className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-xl">
            <Leaf className="h-5 w-5" />
            <span>Lihat Peta Biopori</span>
          </button>

          <button className="flex items-center space-x-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
            <Droplets className="h-5 w-5" />
            <span>Pelajari Biopori</span>
          </button>
        </div>

        {/* Stats cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-green-300">5+ RT</div>
            <div className="text-sm text-gray-300">Area Terpetakan</div>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-blue-300">24/7</div>
            <div className="text-sm text-gray-300">Akses Digital</div>
          </div>
          <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-yellow-300">100%</div>
            <div className="text-sm text-gray-300">Gratis</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll untuk jelajahi</span>
          <div className="h-6 w-4 rounded-full border-2 border-white/60">
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioportHeroSection;
