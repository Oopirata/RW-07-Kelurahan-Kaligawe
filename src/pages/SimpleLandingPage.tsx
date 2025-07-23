import { Link } from "react-router-dom";
import { MapPin, Home, Map as MapIcon, Users, Droplets } from "lucide-react";

function SimpleLandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-gray-900/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">RW 7 Kaligawe</h1>
              <p className="text-sm text-gray-300">Gayamsari, Semarang</p>
            </div>
          </div>

          <Link
            to="/peta-biopori"
            className="rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2 font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-blue-600"
          >
            Peta Biopori
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-6xl">
            RW 7 <span className="text-blue-400">KALIGAWE</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            Kawasan Permukiman Berkelanjutan
          </p>
          <div className="space-x-4">
            <Link
              to="/peta-biopori"
              className="inline-block rounded-full bg-green-500 px-8 py-3 font-semibold text-white hover:bg-green-600"
            >
              Lihat Peta Biopori
            </Link>
            <button className="inline-block rounded-full border border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-gray-900">
              Tentang RW 7
            </button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Profil RW 7 Kaligawe
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-700 p-6">
              <Home className="mb-4 h-12 w-12 text-blue-400" />
              <h3 className="mb-2 text-xl font-bold">Wilayah</h3>
              <p className="text-gray-300">
                5 RT dengan 150+ kepala keluarga di kawasan Kelurahan Kaligawe
              </p>
            </div>

            <div className="rounded-lg bg-gray-700 p-6">
              <Users className="mb-4 h-12 w-12 text-green-400" />
              <h3 className="mb-2 text-xl font-bold">Demografi</h3>
              <p className="text-gray-300">
                Mayoritas pengusaha rongsok, buruh pabrik, dan pekerja swasta
              </p>
            </div>

            <div className="rounded-lg bg-gray-700 p-6">
              <Droplets className="mb-4 h-12 w-12 text-purple-400" />
              <h3 className="mb-2 text-xl font-bold">Program Biopori</h3>
              <p className="text-gray-300">
                Solusi mengatasi genangan air melalui lubang resapan biopori
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-12 text-3xl font-bold">Program & Kegiatan</h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-lg bg-gray-800 p-6">
              <MapIcon className="mx-auto mb-4 h-8 w-8 text-green-400" />
              <h3 className="font-bold">Peta Biopori</h3>
              <Link
                to="/peta-biopori"
                className="mt-2 text-blue-400 hover:text-blue-300"
              >
                Lihat Peta →
              </Link>
            </div>

            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="font-bold">Posyandu</h3>
              <p className="text-gray-400">Layanan kesehatan rutin</p>
            </div>

            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="font-bold">TPQ</h3>
              <p className="text-gray-400">Pendidikan Al-Quran</p>
            </div>

            <div className="rounded-lg bg-gray-800 p-6">
              <h3 className="font-bold">Bank Sampah</h3>
              <p className="text-gray-400">Pengelolaan sampah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-gray-400">
            © 2025 KKN TIM 77 Universitas Diponegoro
          </p>
          <p className="text-gray-500">Developed by Hanif Herofa</p>
        </div>
      </footer>
    </div>
  );
}

export default SimpleLandingPage;
