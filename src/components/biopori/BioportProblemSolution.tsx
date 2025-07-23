import { useEffect, useRef } from "react";
import { AlertTriangle, Target, Zap, Users, Map, QrCode } from "lucide-react";

function BioportProblemSolution() {
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

  const problems = [
    {
      icon: AlertTriangle,
      title: "Genangan Air Berulang",
      description:
        "RW 07 sering mengalami genangan air saat musim hujan yang mengganggu aktivitas warga",
    },
    {
      icon: Target,
      title: "Penentuan Lokasi Sulit",
      description:
        "Kesulitan menentukan titik optimal untuk pembuatan biopori tanpa analisis yang tepat",
    },
    {
      icon: Users,
      title: "Kurangnya Edukasi",
      description:
        "Minimnya pemahaman warga tentang manfaat dan cara pembuatan biopori yang benar",
    },
  ];

  const solutions = [
    {
      icon: Map,
      title: "Peta Digital Interaktif",
      description:
        "Platform pemetaan menggunakan Google My Maps dengan layer area rawan genangan dan rekomendasi lokasi biopori",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: QrCode,
      title: "Akses Mudah via QR Code",
      description:
        "QR Code yang dapat diakses warga kapan saja untuk melihat informasi lokasi biopori terdekat",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Konten Edukasi Digital",
      description:
        "Infografis dan panduan digital tentang pembuatan biopori yang mudah dipahami",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="relative min-h-[100dvh] bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          ref={(el) => {
            itemRefs.current[0] = el;
          }}
          className="mb-16 text-center opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            Dari <span className="text-red-500">Masalah</span> ke{" "}
            <span className="text-green-500">Solusi</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Memahami permasalahan genangan air di RW 07 dan bagaimana teknologi
            digital dapat memberikan solusi berkelanjutan
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-20">
          <div
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            className="mb-12 text-center opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out"
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              ⚠️ Permasalahan yang Dihadapi
            </h3>
            <div className="mx-auto h-1 w-24 bg-red-500 rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index + 2] = el;
                }}
                className="group rounded-xl bg-white p-6 shadow-lg opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out hover:shadow-xl"
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 group-hover:bg-red-200 transition-colors">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">
                  {problem.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <div
            ref={(el) => {
              itemRefs.current[5] = el;
            }}
            className="mb-12 text-center opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out"
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              ✨ Solusi Digital yang Kami Tawarkan
            </h3>
            <div className="mx-auto h-1 w-24 bg-green-500 rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index + 6] = el;
                }}
                className="group rounded-xl bg-white p-6 shadow-lg opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out hover:shadow-xl hover:scale-105"
                style={{ transitionDelay: `${(index + 6) * 150}ms` }}
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${solution.color} shadow-lg`}
                >
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900">
                  {solution.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${solution.color} transition-all duration-1000 ease-out`}
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          ref={(el) => {
            itemRefs.current[9] = el;
          }}
          className="mt-16 text-center opacity-0 blur-sm translate-y-10 transition-all duration-1000 ease-out"
          style={{ transitionDelay: "600ms" }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 p-8 text-white shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">
              Siap Menggunakan Platform Biopori?
            </h3>
            <p className="mb-6 text-blue-100">
              Akses peta interaktif dan pelajari cara membuat biopori untuk
              lingkungan yang lebih baik
            </p>
            <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioportProblemSolution;
