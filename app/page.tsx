"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, MapPin, Wifi, Globe } from "lucide-react"
import DestinationCard from "@/components/home/destination-card"
import EventCard from "@/components/home/event-card"
import CoworkingCard from "@/components/home/coworking-card"
import InsightCard from "@/components/home/insight-card"
import DestinationDetailModal from "@/components/home/destination-detail-modal"
import { remoteCasaDestinations } from "@/data/remotecasa-destinations"
import type { RemoteCasaDestination } from "@/data/remotecasa-destinations"

// Sample data for events
const events = [
  {
    id: 1,
    title: "Digital Nomad Meetup",
    location: "Mexico City, Mexico",
    date: "May 15, 2025",
    time: "18:00 - 21:00",
    attendees: 42,
    image: "/images/events/nomad-meetup.jpg",
  },
  {
    id: 2,
    title: "Remote Work Workshop",
    location: "Online",
    date: "May 20, 2025",
    time: "14:00 - 16:00",
    attendees: 128,
    image: "/images/events/remote-workshop.jpg",
  },
  {
    id: 3,
    title: "Coworking Space Tour",
    location: "Medellín, Colombia",
    date: "May 25, 2025",
    time: "10:00 - 12:00",
    attendees: 18,
    image: "/images/events/coworking-tour.jpg",
  },
]

// Sample data for coworking spaces
const coworkingSpaces = [
  {
    id: 1,
    name: "WeWork Reforma",
    location: "Mexico City, Mexico",
    price: "Included in package",
    rating: 4.7,
    amenities: ["Fast WiFi", "Meeting Rooms", "Coffee", "Events"],
    image: "/images/coworking/wework-mexico-city.jpg",
  },
  {
    id: 2,
    name: "Selina Medellín",
    location: "Medellín, Colombia",
    price: "Included in package",
    rating: 4.8,
    amenities: ["Pool", "Fast WiFi", "Coworking", "Community"],
    image: "/images/coworking/selina-medellin.jpg",
  },
  {
    id: 3,
    name: "Digital Nomad House",
    location: "Tulum, Mexico",
    price: "Included in package",
    rating: 4.6,
    amenities: ["Beach Access", "Fast WiFi", "Coliving", "Events"],
    image: "/images/coworking/tulum-nomad-house.jpg",
  },
  {
    id: 4,
    name: "Coworking Cartagena",
    location: "Cartagena, Colombia",
    price: "Included in package",
    rating: 4.5,
    amenities: ["AC", "Fast WiFi", "Meeting Rooms", "City Views"],
    image: "/images/coworking/coworking-cartagena.jpg",
  },
]

export default function HomePage() {
  const [selectedDestination, setSelectedDestination] = useState<RemoteCasaDestination | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDestinationClick = (destination: RemoteCasaDestination) => {
    setSelectedDestination(destination)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="mt-2 text-lg text-gray-600">Ready to discover your next workation destination?</p>
      </section>

      {/* AI Travel Suggestion */}
      <section className="mb-12 overflow-hidden rounded-xl bg-gradient-to-r from-[#FFC700]/10 to-yellow-50 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-2xl">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">AI Travel Suggestion</h2>
            <p className="mb-4 text-lg italic text-gray-700">
              "Based on your preferences for vibrant culture, affordable living, and great weather, you might enjoy{" "}
              <span className="font-semibold">Medellín, Colombia</span> for your next workation."
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                <Wifi className="mr-1 inline h-4 w-4" /> Fast WiFi
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                <MapPin className="mr-1 inline h-4 w-4" /> Eternal Spring Climate
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <Globe className="mr-1 inline h-4 w-4" /> Digital Nomad Hub
              </span>
            </div>
          </div>
          <div className="h-40 w-40 overflow-hidden rounded-lg bg-white shadow-md md:h-48 md:w-48">
            <Image
              src="/images/destinations/medellin-4k.png"
              alt="Medellín, Colombia"
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Destination Spotlight */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">RemoteCasa Workation Destinations</h2>
            <p className="text-sm text-gray-500">Premium workation packages with everything you need</p>
          </div>
          <a
            href="https://remotecasa.co/workation-packages-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-[#FFC700] hover:underline"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-6">
          {remoteCasaDestinations.map((destination) => (
            <div key={destination.id} className="mr-4 w-[280px] flex-shrink-0 snap-start sm:w-[320px]">
              <DestinationCard destination={destination} onClick={handleDestinationClick} />
            </div>
          ))}
        </div>
      </section>

      {/* Local Events */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Local Events</h2>
            <p className="text-sm text-gray-500">Powered by RemoteCasa Local Hosts</p>
          </div>
          <a href="#" className="flex items-center text-sm font-medium text-[#FFC700] hover:underline">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-6">
          {events.map((event) => (
            <div key={event.id} className="mr-4 w-[280px] flex-shrink-0 snap-start sm:w-[320px]">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </section>

      {/* Coworking/Coliving Recommendations */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Co-Working Spaces</h2>
            <p className="text-sm text-gray-500">Included in RemoteCasa Workation Packages</p>
          </div>
          <a href="#" className="flex items-center text-sm font-medium text-[#FFC700] hover:underline">
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coworkingSpaces.map((space) => (
            <CoworkingCard key={space.id} space={space} />
          ))}
        </div>
      </section>

      {/* Nomad Insights */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Nomad Insights</h2>
          <a
            href="https://remotecasa.co/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-[#FFC700] hover:underline"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <InsightCard
            title="How to Choose the Perfect RemoteCasa Workation"
            excerpt="Discover the key factors to consider when selecting your next workation destination, from internet speed to community events and local experiences."
            author="RemoteCasa Team"
            date="April 10, 2025"
            readTime="5 min read"
            image="/images/insights/workation-guide.jpg"
          />
        </div>
      </section>

      {/* Destination Detail Modal */}
      {isModalOpen && <DestinationDetailModal destination={selectedDestination} onClose={handleCloseModal} />}
    </div>
  )
}
