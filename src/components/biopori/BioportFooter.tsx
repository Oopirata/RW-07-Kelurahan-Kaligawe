import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Heart,
  Droplets,
  Leaf,
} from "lucide-react";

function BioportFooter() {
  const quickLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#about", label: "Tentang Biopori" },
    { href: "#features", label: "Fitur Platform" },
    { href: "#education", label: "Panduan Edukasi" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "RW 07 Kelurahan Kaligawe, Gayamsari, Semarang" },
    { icon: Mail, text: "hanif.herofa@students.undip.ac.id" },
    { icon: Phone, text: "Tim KKN 77 Universitas Diponegoro" },
  ];

  const teamMembers = [
    "Hanif Herofa (Informatika) - Platform Developer",
    "Nur Mardiani (Matematika) - Data Analysis",
    "Revina Natasya (Statistika) - Survei & Biopori",
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Droplets className="h-4 w-4 text-blue-400" />
            ) : i % 3 === 1 ? (
              <Leaf className="h-4 w-4 text-green-400" />
            ) : (
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
            {/* Platform Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Platform Pemetaan Biopori
                  </h3>
                  <p className="text-sm text-gray-300">
                    Solusi Digital untuk RW 07 Kaligawe
                  </p>
                </div>
              </div>

              <p className="mb-6 text-gray-300 leading-relaxed">
                Platform digital yang dikembangkan untuk membantu warga RW 07
                Kelurahan Kaligawe dalam mengatasi masalah genangan air melalui
                pemetaan interaktif lokasi biopori dan edukasi berkelanjutan.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    🌱 Ramah Lingkungan
                  </span>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    📱 Mobile Friendly
                  </span>
                </div>
                {/* <div className="rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    🆓 Gratis Selamanya
                  </span>
                </div> */}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-lg font-semibold">Navigasi Cepat</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center text-gray-300 transition-colors hover:text-green-400"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info
            <div>
              <h4 className="mb-6 text-lg font-semibold">Kontak & Informasi</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index} className="flex items-start">
                    <contact.icon className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span className="text-sm text-gray-300 leading-relaxed">
                      {contact.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Team Section */}
          {/* <div className="mt-12 rounded-xl bg-white/5 p-6 backdrop-blur-sm">
            <h4 className="mb-4 text-lg font-semibold text-center">
              Tim Pengembang
            </h4>
            <div className="grid gap-3 md:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-white/5 p-3 text-center backdrop-blur-sm"
                >
                  <p className="text-sm text-gray-300">{member}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Statistics */}
          {/* <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-sm text-gray-400">RT Terpetakan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-400">Gratis Akses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">Tersedia Online</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">2025</div>
              <div className="text-sm text-gray-400">Tahun Pengembangan</div>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © 2025 KKN KELOMPOK 5 TIM 77 Universitas Diponegoro
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Kelurahan Kaligawe, RW 07, Kecamatan Gayamsari, Kota Semarang
                </p>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>for the community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BioportFooter;
