"use client"

import { useState } from "react"
import Image from "next/image"
import {
  X,
  MapPin,
  Star,
  ExternalLink,
  Check,
  DollarSign,
  Wifi,
  Globe,
  Shield,
  Music,
  Train,
  Footprints,
  Heart,
  Clock,
  Building,
  Users,
} from "lucide-react"
import type { RemoteCasaDestination } from "@/data/remotecasa-destinations"
import FeatureScoreBar from "@/components/home/feature-score-bar"

interface DestinationDetailModalProps {
  destination: RemoteCasaDestination | null
  onClose: () => void
}

export default function DestinationDetailModal({ destination, onClose }: DestinationDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "accommodation" | "features" | "packages">("overview")
  const [selectedPackage, setSelectedPackage] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!destination) return null

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % destination.accommodation.images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + destination.accommodation.images.length) % destination.accommodation.images.length,
    )
  }

  const packagesTabContent = (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Available Packages</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {destination.packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className={`cursor-pointer overflow-hidden rounded-lg border-2 transition-all ${
              selectedPackage === index
                ? "border-[#FFC700] bg-[#FFC700]/5"
                : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
            }`}
            onClick={() => setSelectedPackage(index)}
          >
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 dark:text-white">{pkg.name}</h4>
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">{pkg.price}</span>
                </div>
              </div>
              <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium">{pkg.duration}</span> • {pkg.description}
              </div>
              {selectedPackage === index && (
                <div className="mt-4 space-y-2">
                  <h5 className="text-sm font-medium text-gray-900 dark:text-white">What's included:</h5>
                  <ul className="space-y-1">
                    {pkg.included.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="mr-2 mt-0.5 h-3 w-3 flex-shrink-0 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <a
                      href={destination.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-[#FFC700] px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90"
                    >
                      Book this package
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
        <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Need a custom package?</h4>
        <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
          Contact RemoteCasa for custom workation packages tailored to your specific needs and preferences.
        </p>
        <a
          href="https://remotecasa.co/contact/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-[#FFC700] hover:underline"
        >
          Contact for custom options
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  )

  // Update the overview tab to show the updated pricing
  const overviewTabContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About this Workation</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{destination.longDescription}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features</h3>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {destination.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg bg-[#FFC700]/10 p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-900">Ready to book your workation?</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-700">
              Starting from <span className="font-semibold">{destination.startingPrice}</span> per{" "}
              {destination.priceUnit}
            </p>
          </div>
          <a
            href={destination.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md bg-[#FFC700] px-4 py-2 font-medium text-gray-900 hover:bg-[#FFC700]/90"
          >
            <span>Book on RemoteCasa</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-xl dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-1.5 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-900 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-64 w-full sm:h-80">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={`${destination.name}, ${destination.location}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <div className="flex items-center space-x-2">
              <span className="rounded-full bg-[#FFC700]/90 px-2 py-1 text-xs font-medium text-gray-900">
                RemoteCasa Workation
              </span>
              <span className="rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-900">
                From {destination.startingPrice}/{destination.priceUnit}
              </span>
            </div>
            <h2 className="mt-2 text-3xl font-bold text-white">
              {destination.name}, {destination.location}
            </h2>
            <div className="mt-1 flex items-center space-x-3">
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 fill-[#FFC700] text-[#FFC700]" />
                <span className="text-sm font-medium text-white">{destination.rating} rating</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">{destination.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "overview"
                  ? "border-[#FFC700] text-[#FFC700]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("accommodation")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "accommodation"
                  ? "border-[#FFC700] text-[#FFC700]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Accommodation
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "features"
                  ? "border-[#FFC700] text-[#FFC700]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`border-b-2 px-1 py-4 text-sm font-medium ${
                activeTab === "packages"
                  ? "border-[#FFC700] text-[#FFC700]"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Packages
            </button>
          </nav>
        </div>

        {/* Tab content */}
        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && overviewTabContent}

          {/* Accommodation Tab */}
          {activeTab === "accommodation" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {destination.accommodation.type}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{destination.accommodation.description}</p>
              </div>

              {/* Image carousel */}
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80">
                <Image
                  src={destination.accommodation.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${destination.name} accommodation`}
                  fill
                  className="object-cover"
                />

                {/* Navigation arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                  {currentImageIndex + 1}/{destination.accommodation.images.length}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Highlights</h3>
                <ul className="space-y-2">
                  {destination.accommodation.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Amenities</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {destination.accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center rounded-md bg-gray-50 px-3 py-2 dark:bg-gray-700">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Digital Nomad Scorecard</h3>
                <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
                  See how {destination.name} ranks across key factors that matter most to digital nomads. These scores
                  are based on real data and nomad experiences.
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                    <h4 className="mb-3 text-base font-medium text-gray-900 dark:text-white">Cost & Connectivity</h4>
                    <FeatureScoreBar
                      label="Cost of Living"
                      score={destination.featureScores.costOfLiving}
                      description="How affordable is daily life, including accommodation, food, and transportation."
                      colorClass="bg-green-500"
                      icon={<DollarSign className="h-4 w-4 text-green-600" />}
                    />
                    <FeatureScoreBar
                      label="Internet Speed & Reliability"
                      score={destination.featureScores.internetSpeed}
                      description="Average internet speeds and connection reliability for remote work."
                      colorClass="bg-blue-500"
                      icon={<Wifi className="h-4 w-4 text-blue-600" />}
                    />
                    <FeatureScoreBar
                      label="Coworking Availability"
                      score={destination.featureScores.coworkingSpaces}
                      description="Quantity, quality, and accessibility of coworking spaces."
                      colorClass="bg-purple-500"
                      icon={<Building className="h-4 w-4 text-purple-600" />}
                    />
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                    <h4 className="mb-3 text-base font-medium text-gray-900 dark:text-white">
                      Community & Practicalities
                    </h4>
                    <FeatureScoreBar
                      label="Digital Nomad Community"
                      score={destination.featureScores.community}
                      description="Size and activity level of the local digital nomad community."
                      colorClass="bg-yellow-500"
                      icon={<Users className="h-4 w-4 text-yellow-600" />}
                    />
                    <FeatureScoreBar
                      label="Visa Friendliness"
                      score={destination.featureScores.visaFriendliness}
                      description="Ease of obtaining visas and length of permitted stays."
                      colorClass="bg-indigo-500"
                      icon={<Globe className="h-4 w-4 text-indigo-600" />}
                    />
                    <FeatureScoreBar
                      label="Safety"
                      score={destination.featureScores.safety}
                      description="Overall safety and security for visitors and residents."
                      colorClass="bg-teal-500"
                      icon={<Shield className="h-4 w-4 text-teal-600" />}
                    />
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                    <h4 className="mb-3 text-base font-medium text-gray-900 dark:text-white">Lifestyle & Mobility</h4>
                    <FeatureScoreBar
                      label="Nightlife & Culture"
                      score={destination.featureScores.nightlife}
                      description="Quality and variety of entertainment, cultural activities, and nightlife."
                      colorClass="bg-pink-500"
                      icon={<Music className="h-4 w-4 text-pink-600" />}
                    />
                    <FeatureScoreBar
                      label="Public Transportation"
                      score={destination.featureScores.publicTransport}
                      description="Quality, reliability, and coverage of public transportation options."
                      colorClass="bg-orange-500"
                      icon={<Train className="h-4 w-4 text-orange-600" />}
                    />
                    <FeatureScoreBar
                      label="Walkability"
                      score={destination.featureScores.walkability}
                      description="How easy it is to navigate the city on foot."
                      colorClass="bg-cyan-500"
                      icon={<Footprints className="h-4 w-4 text-cyan-600" />}
                    />
                  </div>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                    <h4 className="mb-3 text-base font-medium text-gray-900 dark:text-white">Quality of Life</h4>
                    <FeatureScoreBar
                      label="Healthcare Access"
                      score={destination.featureScores.healthcare}
                      description="Quality and accessibility of healthcare services for visitors."
                      colorClass="bg-red-500"
                      icon={<Heart className="h-4 w-4 text-red-600" />}
                    />
                    <FeatureScoreBar
                      label="Work-Life Balance"
                      score={destination.featureScores.workLifeBalance}
                      description="Overall quality of life and ease of balancing work with leisure activities."
                      colorClass="bg-emerald-500"
                      icon={<Clock className="h-4 w-4 text-emerald-600" />}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-[#FFC700]/10 p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-900">
                      Overall Nomad Score: {destination.nomadScore}/100
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-700">
                      {destination.name} is{" "}
                      {destination.nomadScore >= 90
                        ? "an exceptional"
                        : destination.nomadScore >= 80
                          ? "an excellent"
                          : destination.nomadScore >= 70
                            ? "a very good"
                            : "a good"}{" "}
                      destination for digital nomads.
                    </p>
                  </div>
                  <a
                    href={destination.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-md bg-[#FFC700] px-4 py-2 font-medium text-gray-900 hover:bg-[#FFC700]/90"
                  >
                    <span>Book Now</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Packages Tab */}
          {activeTab === "packages" && packagesTabContent}
        </div>
      </div>
    </div>
  )
}
