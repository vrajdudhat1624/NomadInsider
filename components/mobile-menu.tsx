"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, User, MessageCircle, Heart, Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-700"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)} />}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Yellow Header */}
          <div className="flex h-16 items-center justify-between bg-[#FFC700] px-4">
            <span className="text-lg font-bold">Navigation</span>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <ul className="space-y-6">
              <li>
                <Link href="#" className="flex items-center space-x-4 py-2" onClick={() => setIsOpen(false)}>
                  <Home className="h-6 w-6" />
                  <span className="text-base font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-4 py-2" onClick={() => setIsOpen(false)}>
                  <User className="h-6 w-6" />
                  <span className="text-base font-medium">Profile</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-4 py-2" onClick={() => setIsOpen(false)}>
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-base font-medium">Community</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-4 py-2" onClick={() => setIsOpen(false)}>
                  <Heart className="h-6 w-6" />
                  <span className="text-base font-medium">Favorites</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
