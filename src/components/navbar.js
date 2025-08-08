import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import logo from "../assets/logo.svg";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-gray-50 backdrop-blur-sm px-6 py-4 shadow-lg shadow-black/5 rounded-md mt-3 z-[999999]">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Beranda
          </Link>
          <Link 
            href="#testimonials" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Testimonial
          </Link>
          <Link 
            href="#success-stories" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Kisah Sukses
          </Link>
          <Link 
            href="/education-center" 
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Pusat Edukasi
          </Link>
        </div>

        {/* Auth Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/login">
            <Button 
              className="bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full font-medium transition-colors border border-gray-300"
            >
              Masuk
            </Button>
          </Link>
          <Link href="/register">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Daftar
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonial
            </Link>
            <Link 
              href="#success-stories" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kisah Sukses
            </Link>
            <Link 
              href="/education-center" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pusat Edukasi
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors border border-gray-300"
                >
                  Masuk
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
