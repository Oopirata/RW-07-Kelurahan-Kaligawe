import { Link } from "react-router-dom";
import BioportNavigation from "../components/biopori/BioportNavigation";
import BioportHeroSection from "../components/biopori/BioportHeroSection";
import BioportFooter from "../components/biopori/BioportFooter";
import { useEffect, useRef } from "react";
import {
  Users,
  Home,
  Droplets,
  Leaf,
  Map,
  School,
  Heart,
  Award,
} from "lucide-react";

export default function LandingPage() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-visible");
            target.classList.remove("opacity-0", "blur-sm", "translate-y-10");
          } else {
            target.classList.remove("animate-visible");
            target.classList.add("opacity-0", "blur-sm", "translate-y-10");
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

  const profileData = [
    {
      icon: Home,
      title: "Profil RW 7",
      description:
        "RW 07 Kelurahan Kaligawe adalah kawasan permukiman yang terletak di Kecamatan Gayamsari, Kota Semarang. Terdiri dari 5 RT dengan total sekitar 150 kepala keluarga.",
      stats: [
        { label: "Total RT", value: "5" },
        { label: "Kepala Keluarga", value: "150+" },
        { label: "Luas Wilayah", value: "±2.5 Ha" },
      ],
    },
    {
      icon: Users,
      title: "Demografi Warga",
      description:
        "Mayoritas warga berusia produktif dengan mata pencaharian sebagai pengusaha rongsok, buruh pabrik, dan pekerja swasta. Memiliki potensi besar dalam pengembangan ekonomi lokal.",
      stats: [
        { label: "Usia Produktif", value: "70%" },
        { label: "Pengusaha Rongsok", value: "40%" },
        { label: "Pekerja Swasta", value: "45%" },
      ],
    },
    {
      icon: Droplets,
      title: "Tantangan Lingkungan",
      description:
        "Menghadapi permasalahan genangan air saat musim hujan dan kebutuhan edukasi sanitasi. Program biopori menjadi solusi berkelanjutan untuk masalah ini.",
      stats: [
        { label: "Area Rawan Genangan", value: "3 RT" },
        { label: "Titik Biopori", value: "25+" },
        { label: "Program Sanitasi", value: "Aktif" },
      ],
    },
  ];

  const programs = [
    {
      icon: Leaf,
      title: "Program Biopori",
      description:
        "Pembuatan lubang resapan biopori untuk mengatasi genangan air",
      link: "/peta-biopori",
      linkText: "Lihat Peta Biopori",
    },
    {
      icon: Heart,
      title: "Posyandu Aktif",
      description: "Layanan kesehatan rutin untuk ibu dan anak",
      link: "#kesehatan",
      linkText: "Info Kesehatan",
    },
    {
      icon: School,
      title: "TPQ & Pendidikan",
      description: "Tempat Pendidikan Al-Quran dan kegiatan pendidikan",
      link: "#pendidikan",
      linkText: "Program Pendidikan",
    },
    {
      icon: Award,
      title: "Bank Sampah",
      description: "Pengelolaan sampah berkelanjutan oleh Bu RW",
      link: "#bank-sampah",
      linkText: "Info Bank Sampah",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Set document title */}
      {/* <title>RW 7 Kelurahan Kaligawe - Gayamsari, Semarang</title> */}

      {/* Navigation */}
      <BioportNavigation />

      {/* Hero Section - Modified for RW 7 Profile */}
      <section id="home" className="relative h-[100dvh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.6] saturate-150"
          style={{
            backgroundImage: "url('/images/posyandu.JPG')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">RW 07</span>
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              KALIGAWE
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed tracking-wide text-gray-200 sm:text-xl md:text-2xl">
            Kawasan Permukiman Berkelanjutan dengan
            <span className="text-green-300"> Inovasi Lingkungan </span>
            dan
            <span className="text-blue-300"> Komunitas Solid</span>
          </p>

          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            {/* <Link
              to="/peta-biopori"
              className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-xl hover:text-white"
            >
              <Map className="h-5 w-5" />
              <span>Lihat Peta Biopori</span>
            </Link> */}

            <Link
              to="#about"
              className="flex items-center space-x-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <Users className="h-5 w-5" />
              <span>Tentang Kami</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Profile Sections */}
      <section
        id="about"
        className="relative min-h-[100dvh] bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            className="mb-16 text-center opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out"
          >
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Mengenal <span className="text-blue-500">RW 7 Kaligawe</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Kawasan permukiman yang berkembang dengan semangat gotong royong
              dan inovasi berkelanjutan
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {profileData.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index + 1] = el;
                }}
                className="rounded-xl bg-white p-8 shadow-lg opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out hover:shadow-xl hover:scale-105"
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-green-500 shadow-lg">
                  <section.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <p className="mb-6 text-gray-600 leading-relaxed">
                  {section.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="relative min-h-[100dvh] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 px-4 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div
            ref={(el) => {
              itemRefs.current[4] = el;
            }}
            className="mb-16 text-center opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out"
          >
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Program & <span className="text-green-400">Kegiatan</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Berbagai program yang berjalan untuk meningkatkan kualitas hidup
              warga RW 7
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index + 5] = el;
                }}
                className="group rounded-xl bg-white/10 p-6 backdrop-blur-sm opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out hover:bg-white/20 hover:scale-105"
                style={{ transitionDelay: `${(index + 5) * 150}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500">
                  <program.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {program.title}
                </h3>
                <p className="mb-4 text-sm text-gray-300">
                  {program.description}
                </p>

                {program.link.startsWith("/") ? (
                  <Link
                    to={program.link}
                    className="text-sm font-medium text-green-400 hover:text-green-300"
                  >
                    {program.linkText} →
                  </Link>
                ) : (
                  <a
                    href={program.link}
                    className="text-sm font-medium text-green-400 hover:text-green-300"
                  >
                    {program.linkText} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Bergabung dalam Pengembangan RW 7
          </h2>
          <p className="mb-8 text-xl text-green-100">
            Mari bersama-sama membangun lingkungan yang lebih baik dan
            berkelanjutan
          </p>

          {/* <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
            <Link
              to="/peta-biopori"
              className="rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl"
            >
              🗺️ Akses Platform Biopori
            </Link>

            <button className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
              📞 Hubungi Pengurus RW
            </button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <BioportFooter />
    </div>
  );
}
