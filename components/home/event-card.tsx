import Image from "next/image"
import { MapPin, Calendar, Users } from "lucide-react"
import type { Event } from "@/data/destinations"

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px]">
      <div className="relative h-40 w-full">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <h3 className="text-sm font-semibold text-white">{event.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="mr-1 h-4 w-4" />
            <span>
              {event.date} • {event.time}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="mr-1 h-4 w-4" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
        <button className="w-full rounded-md bg-[#FFC700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90">
          RSVP
        </button>
      </div>
    </div>
  )
}
