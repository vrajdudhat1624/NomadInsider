"use client"

import { X } from "lucide-react"
import Image from "next/image"

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="mb-6 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-green-600 dark:text-green-400"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
              <path d="M7.5 14a4.5 4.5 0 0 0 9 0" />
            </svg>
          </div>
        </div>

        <h2 className="mb-2 text-center text-xl font-bold text-gray-900 dark:text-white">
          Join Our Nomad Insider WhatsApp Group
        </h2>

        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
          Join our exclusive Insider WhatsApp group to connect with fellow nomads.
        </p>

        <div className="mb-6 overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=200&width=400&text=Nomad+Community"
            alt="Nomad Community"
            width={400}
            height={200}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex justify-center">
          <a
            href="https://chat.whatsapp.com/yourInviteCode"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600"
          >
            <span className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                <path d="M7.5 14a4.5 4.5 0 0 0 9 0" />
              </svg>
              Join WhatsApp Group
            </span>
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Connect with 200+ nomads worldwide and share travel tips, experiences, and opportunities.
        </p>
      </div>
    </div>
  )
}
