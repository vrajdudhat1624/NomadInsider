import Image from "next/image"
import { MapPin, Star, Heart } from "lucide-react"
import type { Workspace } from "@/data/destinations"

interface CoworkingCardProps {
  space: Workspace
}

export default function CoworkingCard({ space }: CoworkingCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px]">
      <div className="relative h-40 w-full">
        <Image src={space.image || "/placeholder.svg"} alt={space.name} fill className="object-cover" />
        <button className="absolute right-2 top-2 rounded-full bg-white/80 p-1.5 backdrop-blur-sm hover:bg-white">
          <Heart className="h-4 w-4 text-gray-700 hover:text-red-500" />
        </button>
        {space.type !== "coworking" && (
          <div className="absolute left-2 top-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 backdrop-blur-sm">
            {space.type === "cafe" ? "Café" : space.type === "villa" ? "Villa" : "Hotel"}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{space.name}</h3>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-[#FFC700] text-[#FFC700]" />
            <span className="text-sm font-medium">{space.rating}</span>
          </div>
        </div>
        <div className="mb-3 flex items-center text-sm text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{space.location}</span>
        </div>
        <div className="mb-3 flex flex-wrap gap-1">
          {space.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
              {amenity}
            </span>
          ))}
          {space.amenities.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
              +{space.amenities.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">{space.price}</span>
          <button className="rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}
