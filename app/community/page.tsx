import Image from "next/image"
import { MapPin, MessageCircle, ThumbsUp, Share2, Plus, Calendar } from "lucide-react"

export default function CommunityPage() {
  // Sample data for featured nomads
  const featuredNomads = [
    {
      id: 1,
      name: "Emma Wilson",
      location: "Lisbon, Portugal",
      image: "/images/community/emma.jpg",
      profession: "UX Designer",
    },
    {
      id: 2,
      name: "Alex Chen",
      location: "Bali, Indonesia",
      image: "/images/community/alex.jpg",
      profession: "Software Engineer",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      location: "Mexico City, Mexico",
      image: "/images/community/sofia.jpg",
      profession: "Content Creator",
    },
    {
      id: 4,
      name: "James Kim",
      location: "Chiang Mai, Thailand",
      image: "/images/community/james.jpg",
      profession: "Digital Marketer",
    },
    {
      id: 5,
      name: "Olivia Taylor",
      location: "Barcelona, Spain",
      image: "/images/community/olivia.jpg",
      profession: "Freelance Writer",
    },
  ]

  // Sample data for Q&A feed
  const qaFeed = [
    {
      id: 1,
      title: "Best coworking spaces in Lisbon?",
      summary:
        "I'm heading to Lisbon next month and looking for recommendations on coworking spaces with good community events and fast internet.",
      author: {
        name: "Michael S.",
        image: "/placeholder.svg?height=40&width=40&text=MS",
      },
      upvotes: 24,
      comments: 12,
      tags: ["Lisbon", "Coworking", "Portugal"],
    },
    {
      id: 2,
      title: "How to find long-term accommodation in Bali?",
      summary:
        "I'm planning to stay in Bali for 3 months. What's the best way to find affordable long-term accommodation? Should I book in advance or find something when I arrive?",
      author: {
        name: "Jessica T.",
        image: "/placeholder.svg?height=40&width=40&text=JT",
      },
      upvotes: 32,
      comments: 18,
      tags: ["Bali", "Accommodation", "Indonesia"],
    },
    {
      id: 3,
      title: "Digital nomad visa requirements for Mexico?",
      summary:
        "Has anyone applied for the digital nomad visa for Mexico? What are the requirements and how long did the process take?",
      author: {
        name: "David L.",
        image: "/placeholder.svg?height=40&width=40&text=DL",
      },
      upvotes: 19,
      comments: 8,
      tags: ["Mexico", "Visa", "Legal"],
    },
  ]

  // Sample data for community events
  const communityEvents = [
    {
      id: 1,
      title: "Nomad Networking Mixer",
      location: "Lisbon, Portugal",
      date: "May 15, 2025",
      time: "18:00 - 21:00",
      attendees: 42,
      description: "Connect with fellow digital nomads in Lisbon over drinks and casual networking.",
      image: "/placeholder.svg?height=200&width=350&text=Nomad+Networking",
    },
    {
      id: 2,
      title: "Remote Work Workshop",
      location: "Online",
      date: "May 20, 2025",
      time: "14:00 - 16:00",
      attendees: 128,
      description: "Learn productivity tips and tools for effective remote work from anywhere in the world.",
      image: "/placeholder.svg?height=200&width=350&text=Remote+Workshop",
    },
    {
      id: 3,
      title: "Coworking Space Tour",
      location: "Barcelona, Spain",
      date: "May 25, 2025",
      time: "10:00 - 12:00",
      attendees: 18,
      description: "Explore the best coworking spaces in Barcelona with guided tours and special day passes.",
      image: "/placeholder.svg?height=200&width=350&text=Coworking+Tour",
    },
    {
      id: 4,
      title: "Digital Nomad Mastermind",
      location: "Bali, Indonesia",
      date: "June 5, 2025",
      time: "16:00 - 18:00",
      attendees: 24,
      description: "Join a focused group discussion on building sustainable remote careers and businesses.",
      image: "/placeholder.svg?height=200&width=350&text=Nomad+Mastermind",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Community</h1>

      {/* Featured Nomads */}
      <section className="mb-10">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Featured Nomads</h2>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-6">
          {featuredNomads.map((nomad) => (
            <div key={nomad.id} className="mr-6 w-[180px] flex-shrink-0 snap-start">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={nomad.image || "/placeholder.svg"}
                    alt={nomad.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{nomad.name}</h3>
                <p className="text-sm text-gray-500">{nomad.profession}</p>
                <div className="mt-1 flex items-center text-xs text-gray-500">
                  <MapPin className="mr-1 h-3 w-3" />
                  <span>{nomad.location}</span>
                </div>
                <button className="mt-3 rounded-full border border-[#FFC700] px-3 py-1 text-xs font-medium text-[#FFC700] hover:bg-[#FFC700]/10">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content - Q&A Feed and Sidebar */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Q&A Feed */}
        <section className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Q&A Feed</h2>
            <button className="flex items-center rounded-md bg-[#FFC700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90">
              <Plus className="mr-1 h-4 w-4" /> Ask a Question
            </button>
          </div>

          <div className="space-y-6">
            {qaFeed.map((post) => (
              <div key={post.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
                <div className="p-6">
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={post.author.image || "/placeholder.svg"}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                      <p className="text-xs text-gray-500">Posted 2 days ago</p>
                    </div>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{post.title}</h2>
                  <p className="mb-4 text-gray-600">{post.summary}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-[#FFC700]">
                        <ThumbsUp className="mr-1 h-4 w-4" />
                        <span>{post.upvotes}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-[#FFC700]">
                        <MessageCircle className="mr-1 h-4 w-4" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-[#FFC700]">
                      <Share2 className="mr-1 h-4 w-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Load More
            </button>
          </div>
        </section>

        {/* Sidebar - Community Events */}
        <section className="w-full lg:w-80">
          <div className="sticky top-20">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Community Events</h2>
              <a href="#" className="text-sm font-medium text-[#FFC700] hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-5">
              {communityEvents.map((event) => (
                <div
                  key={event.id}
                  className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-32 w-full">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full p-3">
                      <h3 className="font-semibold text-white">{event.title}</h3>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="mb-2 space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="mr-1 h-3.5 w-3.5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span>
                          {event.date} • {event.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                        {event.attendees} attending
                      </span>
                      <button className="rounded-md bg-[#FFC700] px-3 py-1 text-xs font-medium text-gray-900 hover:bg-[#FFC700]/90">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className="w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center text-sm font-medium text-gray-500 hover:border-[#FFC700] hover:text-[#FFC700] transition-colors">
                <Plus className="mx-auto mb-1 h-5 w-5" />
                Create an Event
              </button>
            </div>

            <div className="mt-8 rounded-lg bg-gradient-to-r from-[#FFC700]/10 to-yellow-50 p-5">
              <h3 className="mb-2 font-semibold text-gray-900">Share Your Experience</h3>
              <p className="mb-4 text-sm text-gray-600">
                Help other nomads by sharing your insights and experiences from your travels.
              </p>
              <button className="w-full rounded-md bg-[#FFC700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90">
                Share a Story
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
