import React from "react";
import FreeGoogleMapComponent from "./components/Map/FreeGoogleMap";
import { MapPin, Droplets, Leaf } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <MapPin size={32} />
            Platform Pemetaan Biopori
          </h1>
          <p className="text-blue-100 mt-2">
            RW 07 Kelurahan Kaligawe, Kecamatan Gayamsari, Kota Semarang
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Legend */}
        <div className="mb-6 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Legenda Peta</h2>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-sm">Area Rawan Genangan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span className="text-sm">Rekomendasi Lokasi Biopori</span>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin size={20} />
            Peta Interaktif Lokasi Biopori
          </h2>
          <FreeGoogleMapComponent />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tentang Biopori */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Leaf size={20} className="text-green-600" />
              Apa itu Biopori?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Biopori adalah teknologi sederhana berupa lubang silindris yang
              dibuat secara vertikal ke dalam tanah dengan diameter 10-30 cm dan
              kedalaman 30-100 cm. Biopori berfungsi untuk meningkatkan daya
              resap air hujan dan mengurangi genangan air.
            </p>
          </div>

          {/* Manfaat */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Droplets size={20} className="text-blue-600" />
              Manfaat Biopori
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Mengurangi genangan air hujan</li>
              <li>• Meningkatkan resapan air ke tanah</li>
              <li>• Mencegah banjir skala kecil</li>
              <li>• Menghasilkan kompos alami</li>
              <li>• Memperbaiki struktur tanah</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 KKN Kelompok 5 TIM 77 - Universitas Diponegoro</p>
          <p className="text-gray-400 text-sm mt-1">
            Program Multidisiplin 1: Pengembangan Platform Digital untuk
            Pemetaan dan Edukasi Biopori
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
