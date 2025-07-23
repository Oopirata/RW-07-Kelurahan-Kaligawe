import {
  Menu,
  X,
  MapPin,
  Home,
  Info,
  Map,
  BookOpen,
  Users,
  LayoutGrid,
  Settings,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CenteredNavWithSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click on navigation items
  const handleNavClick = () => {
    // Close sidebar if open
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  // Main navigation items (center)
  const centerNavItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/peta-biopori", label: "Peta Biopori", icon: Map },
    { href: "#about", label: "Tentang RW 7", icon: Info },
    { href: "#programs", label: "Program", icon: BookOpen },
  ];

  // Sidebar menu items
  const sidebarItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/peta-biopori", label: "Platform Peta Biopori", icon: Map },
    { href: "#about", label: "Tentang RW 7", icon: Info },
    { href: "#programs", label: "Program & Kegiatan", icon: BookOpen },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo (Left) */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={handleNavClick}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                RW 7 Kaligawe
              </h1>
              <p
                className={`text-sm transition-colors ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Gayamsari, Semarang
              </p>
            </div>
          </Link>
          {/* <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={handleNavClick}
          >
            <div className="flex h-20 w-20 items-center justify-center">
              <img
                src={logoImage}
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`text-xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                RW 7 Kaligawe
              </h1>
              <p
                className={`text-sm transition-colors ${
                  scrolled ? "text-gray-600" : "text-gray-200"
                }`}
              >
                Gayamsari, Semarang
              </p>
            </div>
          </Link> */}

          {/* Center Navigation - Hidden when sidebar is open */}
          <div
            className={`flex items-center space-x-8 transition-all duration-300  ${
              isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {centerNavItems.map((item) => {
              if (item.href.startsWith("#")) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:text-white ${
                      scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:text-white ${
                    scrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Hamburger Menu Button (Right) - Custom CSS Lines */}
          <button
            onClick={toggleSidebar}
            className={`z-50 flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 border-2 gap-1 ${
              isSidebarOpen
                ? "bg-gray-800 text-white border-gray-600"
                : scrolled
                ? "bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-300"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
            }`}
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? (
              // Close X icon
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className="absolute w-6 h-0.5 bg-current transform rotate-45"></span>
                <span className="absolute w-6 h-0.5 bg-current transform -rotate-45"></span>
              </div>
            ) : (
              // Hamburger 3 lines
              <>
                <span className="w-6 h-0.5 bg-current transition-all duration-300"></span>
                <span className="w-6 h-0.5 bg-current transition-all duration-300"></span>
                <span className="w-6 h-0.5 bg-current transition-all duration-300"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Platform RW 7</h2>
              <p className="text-sm text-gray-600">Akses Menu & Fitur</p>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex h-full flex-col justify-between pb-20">
          <div className="px-4 py-6">
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                if (item.href.startsWith("#")) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:scale-105"
                    >
                      <item.icon className="h-5 w-5 text-gray-500" />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleNavClick}
                    className="flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:scale-105"
                  >
                    <item.icon className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-gray-200 px-4 py-4">
            <div className="text-center">
              <p className="text-xs text-gray-500">
                © 2025 KKN KELOMPOK 5 TIM 77
              </p>
              <p className="text-xs text-gray-400">Universitas Diponegoro</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default CenteredNavWithSidebar;
