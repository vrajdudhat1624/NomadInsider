import Image from "next/image"
import { MapPin, Star, Heart, Clock, Plus, Grid, List, Calendar } from "lucide-react"

export default function FavoritesPage() {
  // Sample data for saved listings
  const savedListings = {
    accommodation: [
      {
        id: 1,
        name: "Selina Coliving",
        location: "Lisbon, Portugal",
        price: "€45/night",
        rating: 4.8,
        image: "/placeholder.svg?height=200&width=300&text=Selina+Lisbon",
        saved: true,
      },
      {
        id: 2,
        name: "Outsite Bali",
        location: "Canggu, Bali",
        price: "€55/night",
        rating: 4.9,
        image: "/placeholder.svg?height=200&width=300&text=Outsite+Bali",
        saved: true,
      },
    ],
    coworking: [
      {
        id: 3,
        name: "WeWork Mexico City",
        location: "Mexico City, Mexico",
        price: "€20/day",
        rating: 4.6,
        image: "/placeholder.svg?height=200&width=300&text=WeWork+Mexico",
        saved: true,
      },
      {
        id: 4,
        name: "Hubud",
        location: "Ubud, Bali",
        price: "€18/day",
        rating: 4.7,
        image: "/placeholder.svg?height=200&width=300&text=Hubud+Bali",
        saved: true,
      },
    ],
    experiences: [
      {
        id: 5,
        name: "Digital Nomad Meetup",
        location: "Barcelona, Spain",
        price: "Free",
        date: "May 15, 2025",
        image: "/placeholder.svg?height=200&width=300&text=Barcelona+Meetup",
        saved: true,
      },
    ],
  }

  // Sample data for recently viewed
  const recentlyViewed = [
    {
      id: 6,
      name: "Nomad House",
      location: "Chiang Mai, Thailand",
      price: "€30/night",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300&text=Nomad+House",
      saved: false,
    },
    {
      id: 7,
      name: "Coworking Lounge",
      location: "Medellin, Colombia",
      price: "€12/day",
      rating: 4.4,
      image: "/placeholder.svg?height=200&width=300&text=Coworking+Lounge",
      saved: false,
    },
    {
      id: 8,
      name: "Nomad Retreat",
      location: "Tulum, Mexico",
      price: "€65/night",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300&text=Tulum+Retreat",
      saved: false,
    },
  ]

  // Sample data for trending
  const trending = [
    {
      id: 9,
      name: "Digital Nomad Village",
      location: "Madeira, Portugal",
      price: "€40/night",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300&text=Madeira+Village",
      saved: false,
    },
    {
      id: 10,
      name: "Nomad Coliving",
      location: "Las Palmas, Spain",
      price: "€35/night",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300&text=Las+Palmas",
      saved: false,
    },
    {
      id: 11,
      name: "Remote Year Experience",
      location: "Multiple Locations",
      price: "€1,800/month",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300&text=Remote+Year",
      saved: false,
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Your Favorites</h1>

      {/* Saved Listings */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Saved Listings</h2>
          <div className="flex items-center space-x-2">
            <button className="rounded-md bg-white p-2 text-gray-500 shadow-sm hover:text-[#FFC700]">
              <Grid className="h-5 w-5" />
            </button>
            <button className="rounded-md bg-white p-2 text-[#FFC700] shadow-sm">
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Accommodation */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Accommodation</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedListings.accommodation.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <button className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-red-500 backdrop-blur-sm">
                    <Heart className="h-4 w-4 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-[#FFC700] text-[#FFC700]" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center text-sm text-gray-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{item.price}</span>
                    <button className="rounded-md bg-[#FFC700] px-3 py-1 text-xs font-medium text-gray-900 hover:bg-[#FFC700]/90">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex h-full min-h-[200px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 text-center">
              <div>
                <Plus className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                <p className="text-sm font-medium text-gray-500">Add to your wishlist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coworking Spaces */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Coworking Spaces</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedListings.coworking.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <button className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-red-500 backdrop-blur-sm">
                    <Heart className="h-4 w-4 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-[#FFC700] text-[#FFC700]" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center text-sm text-gray-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{item.price}</span>
                    <button className="rounded-md bg-[#FFC700] px-3 py-1 text-xs font-medium text-gray-900 hover:bg-[#FFC700]/90">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Experiences</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedListings.experiences.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <button className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-red-500 backdrop-blur-sm">
                    <Heart className="h-4 w-4 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {item.price}
                    </span>
                  </div>
                  <div className="mb-3 flex items-center text-sm text-gray-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <button className="rounded-md bg-[#FFC700] px-3 py-1 text-xs font-medium text-gray-900 hover:bg-[#FFC700]/90">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="mb-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
          <a href="#" className="flex items-center text-sm font-medium text-[#FFC700] hover:underline">
            View History
          </a>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-6">
          {recentlyViewed.map((item) => (
            <div key={item.id} className="mr-6 w-[280px] flex-shrink-0 snap-start">
              <div className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="relative h-40">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <button className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-gray-500 backdrop-blur-sm hover:text-red-500">
                    <Heart className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                      <div className="flex items-center">
                        <Star className="mr-1 h-3 w-3 fill-[#FFC700] text-[#FFC700]" />
                        <span className="text-xs font-medium text-white">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="mb-2 flex items-center text-xs text-gray-600">
                    <MapPin className="mr-1 h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{item.price}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Among Other Nomads */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Trending Among Nomads</h2>
          <a href="#" className="flex items-center text-sm font-medium text-[#FFC700] hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <button className="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-gray-500 backdrop-blur-sm hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute left-3 top-3 rounded-full bg-[#FFC700]/90 px-2 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm">
                  Trending
                </div>
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-[#FFC700] text-[#FFC700]" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="mb-3 flex items-center text-sm text-gray-600">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{item.price}</span>
                  <button className="rounded-md bg-[#FFC700] px-3 py-1 text-xs font-medium text-gray-900 hover:bg-[#FFC700]/90">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
