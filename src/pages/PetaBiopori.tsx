import React, { useState } from "react";
import { MapPin, Eye, EyeOff } from "lucide-react";

const PetaBiopori = () => {
  const [showFlooding, setShowFlooding] = useState(true);
  const [showBiopori, setShowBiopori] = useState(true);

  // Sample data for demo (nanti bisa diganti dengan real data)
  const locations = {
    flooding: [
      {
        id: 1,
        name: "Area Genangan RT 01",
        description: "Sering terjadi genangan saat hujan deras",
        severity: "Tinggi",
      },
      {
        id: 2,
        name: "Area Genangan RT 02",
        description: "Genangan akibat saluran tersumbat",
        severity: "Sedang",
      },
    ],
    biopori: [
      {
        id: 1,
        name: "Lokasi Biopori Rekomendasi A",
        description: "Titik strategis dengan potensi resapan tinggi",
        priority: "Tinggi",
      },
      {
        id: 2,
        name: "Lokasi Biopori Rekomendasi B",
        description: "Area yang cocok untuk pembuatan biopori",
        priority: "Sedang",
      },
    ],
  };

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-3">Filter Tampilan</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setShowFlooding(!showFlooding)}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              showFlooding
                ? "bg-red-100 text-red-700 border border-red-200"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {showFlooding ? <Eye size={16} /> : <EyeOff size={16} />}
            Area Genangan
          </button>

          <button
            onClick={() => setShowBiopori(!showBiopori)}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              showBiopori
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {showBiopori ? <Eye size={16} /> : <EyeOff size={16} />}
            Rekomendasi Biopori
          </button>
        </div>
      </div>

      {/* Embedded Google My Maps */}
      <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg relative">
        {/* Real Google My Maps Embed */}
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1LF4QTbKvoE_juDsa9ZSJGKUS4ajWbuc&ehbc=2E312F&noprof=1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta Biopori RW 07 Kaligawe"
        />
      </div>

      {/* Location Lists */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Area Genangan */}
        {showFlooding && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              Area Rawan Genangan
            </h3>
            <div className="space-y-3">
              {locations.flooding.map((location) => (
                <div
                  key={location.id}
                  className="border-l-4 border-red-500 pl-4 py-2"
                >
                  <h4 className="font-medium">{location.name}</h4>
                  <p className="text-sm text-gray-600">
                    {location.description}
                  </p>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                      location.severity === "Tinggi"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    Tingkat: {location.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rekomendasi Biopori */}
        {showBiopori && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              Rekomendasi Lokasi Biopori
            </h3>
            <div className="space-y-3">
              {locations.biopori.map((location) => (
                <div
                  key={location.id}
                  className="border-l-4 border-green-500 pl-4 py-2"
                >
                  <h4 className="font-medium">{location.name}</h4>
                  <p className="text-sm text-gray-600">
                    {location.description}
                  </p>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${
                      location.priority === "Tinggi"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    Prioritas: {location.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetaBiopori;
