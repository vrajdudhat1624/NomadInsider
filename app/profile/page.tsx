import Image from "next/image"
import { Edit, Upload, Wifi, MapPin, Thermometer, DollarSign, Compass, Calendar } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Your Profile</h1>

      {/* User Profile Card */}
      <section className="mb-10 overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="relative h-40 w-full bg-gradient-to-r from-yellow-400 to-[#FFC700]">
          <div className="absolute -bottom-16 left-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white">
            <Image
              src="/placeholder.svg?height=128&width=128&text=John"
              alt="User avatar"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
            <button className="absolute bottom-0 right-0 rounded-full bg-gray-900/70 p-1.5 text-white hover:bg-gray-900">
              <Upload className="h-4 w-4" />
            </button>
          </div>
          <button className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm hover:bg-white/30">
            <Edit className="h-4 w-4" />
          </button>
        </div>
        <div className="pt-20 sm:pt-16">
          <div className="px-6 pb-6">
            <div className="flex flex-col justify-between sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
                <p className="text-gray-600">Digital Nomad since 2022</p>
              </div>
              <button className="mt-4 rounded-md bg-[#FFC700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90 sm:mt-0">
                Edit Profile
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">Explorer</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                Remote-first
              </span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                Urban Nomad
              </span>
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                Coffee Enthusiast
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Your Preferences</h2>
          <button className="flex items-center text-sm font-medium text-[#FFC700] hover:underline">
            <Edit className="mr-1 h-4 w-4" /> Edit Preferences
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Internet Speed */}
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center">
              <Wifi className="mr-2 h-5 w-5 text-[#FFC700]" />
              <h3 className="text-lg font-semibold text-gray-900">Internet Speed</h3>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Minimum Required</span>
              <span className="font-medium text-gray-900">50+ Mbps</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-3/4 rounded-full bg-[#FFC700]"></div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              You prefer locations with reliable, fast internet for video calls and large file transfers.
            </p>
          </div>

          {/* Location Type */}
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-[#FFC700]" />
              <h3 className="text-lg font-semibold text-gray-900">Location Type</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Urban</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-5/6 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Beach</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-2/3 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Mountain</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-1/3 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Rural</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-1/6 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">You prefer urban environments with occasional beach getaways.</p>
          </div>

          {/* Weather */}
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center">
              <Thermometer className="mr-2 h-5 w-5 text-[#FFC700]" />
              <h3 className="text-lg font-semibold text-gray-900">Weather</h3>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Preferred Temperature</span>
              <span className="font-medium text-gray-900">20-30°C</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Cold</span>
              <span className="text-xs text-gray-500">Hot</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-2/3 rounded-full bg-[#FFC700]"></div>
            </div>
            <p className="mt-3 text-xs text-gray-500">You prefer warm climates but not extremely hot weather.</p>
          </div>

          {/* Budget */}
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-[#FFC700]" />
              <h3 className="text-lg font-semibold text-gray-900">Budget</h3>
            </div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Monthly Budget</span>
              <span className="font-medium text-gray-900">$1,500 - $2,500</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Budget</span>
              <span className="text-xs text-gray-500">Luxury</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 w-1/2 rounded-full bg-[#FFC700]"></div>
            </div>
            <p className="mt-3 text-xs text-gray-500">You prefer mid-range accommodations and experiences.</p>
          </div>

          {/* Activity Level */}
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center">
              <Compass className="mr-2 h-5 w-5 text-[#FFC700]" />
              <h3 className="text-lg font-semibold text-gray-900">Activity Level</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Cultural</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-5/6 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Adventure</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-1/2 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Relaxation</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-2/3 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Nightlife</span>
                <div className="h-2 w-24 rounded-full bg-gray-200">
                  <div className="h-2 w-1/3 rounded-full bg-[#FFC700]"></div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">You enjoy cultural experiences with some relaxation time.</p>
          </div>
        </div>
      </section>

      {/* AI Personalization Note */}
      <section className="mb-10 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">We're training AI with your insights</h2>
            <p className="mt-2 text-gray-600">
              The more you interact with Nomad Insider, the better our AI can personalize recommendations for your nomad
              journey.
            </p>
          </div>
          <button className="rounded-md bg-[#FFC700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90">
            Update Preferences
          </button>
        </div>
      </section>

      {/* Travel Badge Tags */}
      <section className="mb-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Your Travel Badges</h2>
          <button className="flex items-center text-sm font-medium text-[#FFC700] hover:underline">
            View All Badges
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Badge 1 */}
          <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Compass className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Explorer</h3>
            <p className="mt-1 text-xs text-gray-500">Visited 5+ countries</p>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Wifi className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Remote-first</h3>
            <p className="mt-1 text-xs text-gray-500">100% remote worker</p>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Urban Nomad</h3>
            <p className="mt-1 text-xs text-gray-500">Prefers city living</p>
          </div>

          {/* Badge 4 - Locked */}
          <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm opacity-60">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <DollarSign className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Budget Master</h3>
            <p className="mt-1 text-xs text-gray-500">Locked</p>
          </div>

          {/* Badge 5 - Locked */}
          <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow-sm opacity-60">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900">Long-termer</h3>
            <p className="mt-1 text-xs text-gray-500">Locked</p>
          </div>
        </div>
      </section>
    </div>
  )
}
