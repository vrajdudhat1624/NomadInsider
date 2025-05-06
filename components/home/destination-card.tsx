"use client"

import Image from "next/image"
import { Star, DollarSign } from "lucide-react"
import type { RemoteCasaDestination } from "@/data/remotecasa-destinations"

interface DestinationCardProps {
  destination: RemoteCasaDestination
  onClick: (destination: RemoteCasaDestination) => void
}

export default function DestinationCard({ destination, onClick }: DestinationCardProps) {
  return (
    <div
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px] cursor-pointer"
      onClick={() => onClick(destination)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={`${destination.name}, ${destination.location}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100" />
        <div className="absolute left-3 top-3 rounded-full bg-[#FFC700]/90 px-2 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm">
          RemoteCasa
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">
            {destination.name}, <span className="text-gray-600">{destination.location}</span>
          </h3>
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-[#FFC700] text-[#FFC700]" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">{destination.description}</p>
        <div className="mb-3 flex flex-wrap gap-1">
          {destination.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
              {feature.split(" ")[0]}
            </span>
          ))}
          {destination.features.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
              +{destination.features.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <DollarSign className="mr-1 h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-900">
              From {destination.startingPrice}/{destination.priceUnit}
            </span>
          </div>
          <button className="rounded-md bg-[#FFC700] px-3 py-1 text-xs font-medium text-gray-900 hover:bg-[#FFC700]/90">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
