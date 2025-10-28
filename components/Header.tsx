'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-green-600">OnLog</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-green-600 transition">
              Hizmetlerimiz
            </Link>
            <Link href="/entegrasyonlar" className="text-gray-700 hover:text-green-600 transition">
              Entegrasyon ve API
            </Link>
            <Link href="/kurye-ol" className="text-gray-700 hover:text-green-600 transition">
              Kurye Ol
            </Link>
            <Link href="/sss" className="text-gray-700 hover:text-green-600 transition">
              SSS
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-green-600 transition">
              İletişim
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/giris" 
              className="text-green-600 hover:text-green-700 transition font-medium"
            >
              Müşteri ol
            </Link>
            <a 
              href="https://panel.onlog.com.tr/#/login" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium"
            >
              Kurye Çağır
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/hizmetlerimiz" className="block py-2 text-gray-700 hover:text-green-600">
              Hizmetlerimiz
            </Link>
            <Link href="/entegrasyonlar" className="block py-2 text-gray-700 hover:text-green-600">
              Entegrasyon ve API
            </Link>
            <Link href="/kurye-ol" className="block py-2 text-gray-700 hover:text-green-600">
              Kurye Ol
            </Link>
            <Link href="/sss" className="block py-2 text-gray-700 hover:text-green-600">
              SSS
            </Link>
            <Link href="/iletisim" className="block py-2 text-gray-700 hover:text-green-600">
              İletişim
            </Link>
            <div className="pt-4 space-y-2">
              <Link 
                href="/giris" 
                className="block text-center text-green-600 font-medium py-2"
              >
                Müşteri ol
              </Link>
              <a 
                href="https://panel.onlog.com.tr/#/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
              >
                Kurye Çağır
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
