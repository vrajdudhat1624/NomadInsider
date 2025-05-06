"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, User, MessageCircle, Heart, Menu, X, MessageSquare } from "lucide-react"
import WhatsAppModal from "@/components/whatsapp-modal"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Community", href: "/community", icon: MessageCircle },
    { name: "Favorites", href: "/favorites", icon: Heart },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">Nomad Insider</span>
          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
            Beta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#FFC700] dark:text-[#FFC700]"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}

          {/* WhatsApp Group Button */}
          <button
            onClick={() => setIsWhatsAppModalOpen(true)}
            className="group flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400"
            aria-label="Join WhatsApp Group"
          >
            <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-transparent transition-transform duration-200 group-hover:scale-110">
              <MessageSquare className="h-4 w-4 transition-colors group-hover:text-green-600 dark:group-hover:text-green-400" />
              <span className="absolute -right-1 -top-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 dark:bg-green-500"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 dark:bg-green-400"></span>
              </span>
            </div>
            <span>WhatsApp</span>
          </button>

          {/* Avatar */}
          <div className="ml-4 flex items-center">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <Image
                src="/placeholder.svg?height=32&width=32&text=JD"
                alt="User avatar"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFC700] dark:hover:bg-gray-800 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-gray-100 text-[#FFC700] dark:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}

          {/* Mobile WhatsApp Button */}
          <button
            onClick={() => {
              setIsMenuOpen(false)
              setIsWhatsAppModalOpen(true)
            }}
            className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-green-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-green-400"
          >
            <MessageSquare className="h-5 w-5" />
            <span>WhatsApp Group</span>
          </button>

          {/* Mobile Avatar */}
          <div className="mt-4 flex items-center space-x-3 px-3">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <Image
                src="/placeholder.svg?height=40&width=40&text=JD"
                alt="User avatar"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">John Doe</span>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={isWhatsAppModalOpen} onClose={() => setIsWhatsAppModalOpen(false)} />
    </header>
  )
}
