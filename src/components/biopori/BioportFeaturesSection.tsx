import { useEffect, useRef } from "react";
import {
  Map,
  Eye,
  Filter,
  Smartphone,
  BookOpen,
  Download,
  Globe,
  Users2,
} from "lucide-react";

function BioportFeaturesSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-show");
            target.classList.remove("opacity-0", "translate-y-10");
          } else {
            target.classList.remove("animate-show");
            target.classList.add("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Map,
      title: "Peta Interaktif",
      description:
        "Visualisasi lokasi area rawan genangan dan rekomendasi titik biopori optimal",
      details: [
        "Google My Maps Integration",
        "Layer terpisah untuk berbagai data",
        "Marker lokasi yang akurat",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Filter,
      title: "Filter Tampilan",
      description:
        "Toggle untuk menampilkan/menyembunyikan layer sesuai kebutuhan",
      details: [
        "Area Rawan Genangan",
        "Rekomendasi Lokasi Biopori",
        "Filter berdasarkan RT",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Desain responsif yang dapat diakses dari smartphone dengan mudah",
      details: [
        "Interface adaptif",
        "Touch-friendly controls",
        "Optimized untuk semua device",
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: BookOpen,
      title: "Konten Edukasi",
      description: "Informasi lengkap tentang biopori dan cara pembuatannya",
      details: [
        "Panduan step-by-step",
        "Infografis menarik",
        "Tips dan trik pemeliharaan",
      ],
      color: "from-orange-400 to-orange-600",
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Akses 24/7",
      description: "Platform dapat diakses kapan saja tanpa batasan waktu",
    },
    {
      icon: Download,
      title: "Gratis Selamanya",
      description: "Menggunakan teknologi gratis untuk sustainability",
    },
    {
      icon: Users2,
      title: "Berbasis Komunitas",
      description: "Dibuat khusus untuk kebutuhan warga RW 07",
    },
    {
      icon: Eye,
      title: "Interface Intuitif",
      description: "Mudah digunakan bahkan untuk pemula",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-4 py-16 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          className="mb-16 text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Fitur-Fitur{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Platform digital yang dirancang khusus untuk memudahkan warga dalam
            mengatasi masalah genangan air
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index + 1] = el;
              }}
              className="group rounded-2xl bg-white/10 p-8 backdrop-blur-sm opacity-0 translate-y-10 transition-all duration-1000 ease-out hover:bg-white/20 hover:scale-105"
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className="mr-3 h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div
          ref={(el) => {
            itemRefs.current[5] = el;
          }}
          className="mb-16 text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="mb-12 text-3xl font-bold text-white">
            Mengapa Pilih Platform Kami?
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index + 6] = el;
                }}
                className="rounded-xl bg-white/5 p-6 backdrop-blur-sm opacity-0 translate-y-10 transition-all duration-1000 ease-out hover:bg-white/10"
                style={{ transitionDelay: `${(index + 6) * 150}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div
          ref={(el) => {
            itemRefs.current[10] = el;
          }}
          className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-green-600/20 p-8 backdrop-blur-sm opacity-0 translate-y-10 transition-all duration-1000 ease-out"
          style={{ transitionDelay: "800ms" }}
        >
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Teknologi yang Digunakan
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Google My Maps",
                "Tailwind CSS",
                "Vercel",
                "QR Code",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-blue-600 hover:scale-105 hover:shadow-xl">
                Jelajahi Platform Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioportFeaturesSection;
