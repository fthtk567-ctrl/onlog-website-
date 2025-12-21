'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="On'la Gelsin" 
              width={200}
              height={48}
              priority
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/hizmetlerimiz" className="text-gray-700 hover:text-primary-600 transition">
              Hizmetlerimiz
            </Link>
            <a 
              href="https://panel.onlagelsin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition"
            >
              Restoran Paneli
            </a>
            <Link href="/api-entegrasyon" className="text-gray-700 hover:text-primary-600 transition">
              Entegrasyon ve API
            </Link>
            <Link href="/kurye-ol" className="text-gray-700 hover:text-primary-600 transition">
              Kurye Ol
            </Link>
            <Link href="/sss" className="text-gray-700 hover:text-primary-600 transition">
              SSS
            </Link>
            <Link href="/iletisim" className="text-gray-700 hover:text-primary-600 transition">
              İletişim
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://panel.onlagelsin.com/#/login" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
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
            <Link href="/hizmetlerimiz" className="block py-2 text-gray-700 hover:text-primary-600">
              Hizmetlerimiz
            </Link>
            <a 
              href="https://panel.onlagelsin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-gray-700 hover:text-primary-600"
            >
              Restoran Paneli
            </a>
            <Link href="/api-entegrasyon" className="block py-2 text-gray-700 hover:text-primary-600">
              Entegrasyon ve API
            </Link>
            <Link href="/kurye-ol" className="block py-2 text-gray-700 hover:text-primary-600">
              Kurye Ol
            </Link>
            <Link href="/sss" className="block py-2 text-gray-700 hover:text-primary-600">
              SSS
            </Link>
            <Link href="/iletisim" className="block py-2 text-gray-700 hover:text-primary-600">
              İletişim
            </Link>
            <div className="pt-4">
              <a 
                href="https://panel.onlagelsin.com/#/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary-600 text-white px-6 py-2 rounded-lg font-medium"
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
