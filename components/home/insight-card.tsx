import Image from "next/image"
import { Clock } from "lucide-react"

interface InsightCardProps {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
}

export default function InsightCard({ title, excerpt, author, date, readTime, image }: InsightCardProps) {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row">
      <div className="relative h-56 w-full md:h-auto md:w-1/3">
        <Image
          src={image || "/placeholder.svg?height=400&width=600&text=Article+Image"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="mb-4">
          <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{excerpt}</p>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <p className="text-sm font-medium text-gray-900">{author}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <Clock className="mr-1 h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
          <button className="rounded-md bg-[#FFC700] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFC700]/90">
            Read Article
          </button>
        </div>
      </div>
    </div>
  )
}
