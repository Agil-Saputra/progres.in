import Link from "next/link"
import Image from "next/image"
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#122775] to-primary text-white ">
      <div className="my-container py-12">
        {/* Top Section with Logo and Description */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <Image
							src={logo}
							alt="Logo"
							width={32}
							height={32}
						  />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 max-w-4xl">
            <p className="text-white leading-relaxed">
              Progres.in berdiri sejak 2025 oleh mahasiswa AMIKOM University. Berawal dari keresahan kami akan kesulitan UMKM dalam 
              mengakselerasi bisnis mereka secara digital. Progres.in hadir sebagai solusi bagi UMKM Indonesia yang ingin mendigitalisasi 
              usahanya.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-blue-500 mb-12"></div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Lokasi */}
          <div>
            <h3 className="font-semibold text-white mb-4">Lokasi</h3>
            <div className="space-y-2 text-blue-100">
              <p>Panorama Residence</p>
              <p>Blok C3/1, Curug,</p>
              <p>Bojongsari, Kota Depok,</p>
              <p>Jawa Barat 16517</p>
            </div>
          </div>

          {/* Fitur */}
          <div>
            <h3 className="font-semibold text-white mb-4">Fitur</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Website Maker
              </Link>
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Education Center
              </Link>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Tutorial
              </Link>
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Kisah Sukses
              </Link>
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Education Center
              </Link>
            </div>
          </div>

          {/* Media Sosial */}
          <div>
            <h3 className="font-semibold text-white mb-4">Media Sosial</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="#" className="block text-blue-100 hover:text-white transition-colors">
                Tiktok
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-blue-100 space-y-2">
          <p>©2025 Progres.in. Website ini dibuat khusus untuk CITECH Web Design Competition 2025.</p>
          <p>Desain, ilustrasi, dan konten dikembangkan sebagai bagian dari karya lomba.</p>
        </div>
      </div>
    </footer>
  )
}
