// This file contains the data for RemoteCasa workation destinations

export interface Destination {
  id: number
  name: string
  location: string
  image: string
  rating: number
  nomadScore: number
  description: string
  longDescription: string
  price: string
  duration: string
  amenities: string[]
  highlights: string[]
  workspaces: Workspace[]
  events?: Event[]
}

export interface Workspace {
  id: number
  name: string
  type: "coworking" | "villa" | "cafe" | "hotel"
  location: string
  price: string
  rating: number
  amenities: string[]
  image: string
  description: string
}

export interface Event {
  id: number
  title: string
  location: string
  date: string
  time: string
  attendees: number
  image: string
  description: string
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "/placeholder.svg?height=300&width=400&text=Bali+Indonesia",
    rating: 4.9,
    nomadScore: 94,
    description: "Island paradise with established digital nomad ecosystem and vibrant community",
    longDescription:
      "Experience the ultimate digital nomad lifestyle in Bali, where tropical beaches meet lush rice terraces. Our curated workation package includes a stay in a remote-ready villa with dedicated workspace, daily breakfast, and access to Bali's top coworking spaces. Immerse yourself in the island's rich culture while maintaining productivity in this nomad-friendly paradise.",
    price: "$1,200",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Pool", "Daily Cleaning", "Airport Transfer", "Scooter Rental"],
    highlights: [
      "Stay in a remote-ready villa in Canggu or Ubud",
      "Access to premium coworking spaces",
      "Weekly community dinners with fellow nomads",
      "Optional guided tours to temples and rice terraces",
    ],
    workspaces: [
      {
        id: 101,
        name: "Outpost Canggu",
        type: "coworking",
        location: "Canggu, Bali",
        price: "Included in package",
        rating: 4.8,
        amenities: ["High-speed WiFi", "Meeting Rooms", "Pool", "Cafe", "24/7 Access"],
        image: "/placeholder.svg?height=200&width=300&text=Outpost+Canggu",
        description: "Premium coworking space with pool, cafe, and vibrant community of digital nomads.",
      },
      {
        id: 102,
        name: "Remote-Ready Villa",
        type: "villa",
        location: "Ubud, Bali",
        price: "Included in package",
        rating: 4.9,
        amenities: ["Dedicated Workspace", "Pool", "Garden", "Kitchen", "Fast WiFi"],
        image: "/placeholder.svg?height=200&width=300&text=Bali+Villa",
        description:
          "Luxury villa with dedicated workspace, pool, and all amenities needed for productive remote work.",
      },
    ],
    events: [
      {
        id: 201,
        title: "Bali Digital Nomad Meetup",
        location: "Canggu, Bali",
        date: "Weekly on Thursdays",
        time: "18:00 - 21:00",
        attendees: 45,
        image: "/placeholder.svg?height=200&width=300&text=Bali+Nomad+Meetup",
        description:
          "Weekly networking event for digital nomads in Bali. Share experiences, make connections, and enjoy drinks with like-minded professionals.",
      },
    ],
  },
  {
    id: 2,
    name: "Lisbon",
    location: "Portugal",
    image: "/placeholder.svg?height=300&width=400&text=Lisbon+Portugal",
    rating: 4.8,
    nomadScore: 92,
    description: "European hub for digital nomads with perfect blend of history, beaches, and vibrant tech scene",
    longDescription:
      "Discover why Lisbon has become Europe's digital nomad capital. Our workation package offers accommodation in the historic center, access to top coworking spaces, and immersion in the city's unique blend of traditional charm and modern innovation. Enjoy the perfect climate, affordable living, and Portugal's digital nomad visa opportunities.",
    price: "$1,500",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Public Transport Pass", "Welcome Dinner", "Airport Transfer", "City Tour"],
    highlights: [
      "Centrally located apartment in historic Alfama or trendy Bairro Alto",
      "Access to premium coworking spaces",
      "Portuguese language crash course",
      "Guided tour of Lisbon's startup ecosystem",
    ],
    workspaces: [
      {
        id: 103,
        name: "Second Home Lisboa",
        type: "coworking",
        location: "Mercado da Ribeira, Lisbon",
        price: "Included in package",
        rating: 4.7,
        amenities: ["High-speed WiFi", "Meeting Rooms", "Events", "Cafe", "Plant-filled Environment"],
        image: "/placeholder.svg?height=200&width=300&text=Second+Home+Lisboa",
        description: "Stunning plant-filled coworking space in the heart of Lisbon's famous market.",
      },
      {
        id: 104,
        name: "Selina Secret Garden",
        type: "hotel",
        location: "Lisbon City Center",
        price: "Included in package",
        rating: 4.6,
        amenities: ["CoWork Space", "Restaurant", "Bar", "Garden", "Events"],
        image: "/placeholder.svg?height=200&width=300&text=Selina+Lisbon",
        description: "Nomad-friendly hotel with dedicated coworking space and regular community events.",
      },
    ],
    events: [
      {
        id: 202,
        title: "Lisbon Digital Nomads Meetup",
        location: "Park Bar, Lisbon",
        date: "Monthly - First Tuesday",
        time: "19:00 - 22:00",
        attendees: 60,
        image: "/placeholder.svg?height=200&width=300&text=Lisbon+Nomad+Meetup",
        description:
          "Monthly gathering of Lisbon's thriving digital nomad community with rooftop views and networking opportunities.",
      },
    ],
  },
  {
    id: 3,
    name: "Chiang Mai",
    location: "Thailand",
    image: "/placeholder.svg?height=300&width=400&text=Chiang+Mai+Thailand",
    rating: 4.7,
    nomadScore: 89,
    description: "Low cost of living with excellent coworking infrastructure and rich cultural experiences",
    longDescription:
      "Experience the original digital nomad hub in Southeast Asia. Chiang Mai offers an unbeatable combination of low cost of living, excellent infrastructure, and rich cultural experiences. Our package includes accommodation in the popular Nimman area, coworking access, and cultural immersion activities to help you experience the best of northern Thailand while staying productive.",
    price: "$850",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Airport Pickup", "Welcome Dinner", "Scooter Rental Option", "Local SIM Card"],
    highlights: [
      "Apartment in the nomad-friendly Nimman area",
      "Access to multiple coworking spaces",
      "Thai cooking class and cultural experiences",
      "Weekend trip to Doi Suthep temple",
    ],
    workspaces: [
      {
        id: 105,
        name: "CAMP at MAYA",
        type: "coworking",
        location: "MAYA Shopping Center, Chiang Mai",
        price: "Included in package",
        rating: 4.5,
        amenities: ["Free WiFi", "24/7 Access", "Cafe", "Meeting Rooms", "Events"],
        image: "/placeholder.svg?height=200&width=300&text=CAMP+Chiang+Mai",
        description: "Popular coworking space in a shopping mall with 24/7 access and cafe.",
      },
      {
        id: 106,
        name: "Punspace Nimman",
        type: "coworking",
        location: "Nimman, Chiang Mai",
        price: "Included in package",
        rating: 4.8,
        amenities: ["High-speed WiFi", "24/7 Access", "Meeting Rooms", "Kitchen", "Garden"],
        image: "/placeholder.svg?height=200&width=300&text=Punspace+Nimman",
        description: "One of Chiang Mai's original and most popular coworking spaces in the heart of Nimman.",
      },
    ],
  },
  {
    id: 4,
    name: "Medellín",
    location: "Colombia",
    image: "/placeholder.svg?height=300&width=400&text=Medellin+Colombia",
    rating: 4.6,
    nomadScore: 87,
    description: "City of eternal spring with growing tech community and vibrant Latin culture",
    longDescription:
      "Discover why Medellín has transformed into one of Latin America's top digital nomad destinations. Enjoy perfect year-round spring weather, a low cost of living, and a growing tech ecosystem. Our package includes accommodation in the popular El Poblado district, coworking access, and Spanish lessons to help you integrate into the local community.",
    price: "$950",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Airport Transfer", "Metro Card", "Welcome Dinner", "Spanish Lessons"],
    highlights: [
      "Modern apartment in El Poblado or Laureles",
      "Access to premium coworking spaces",
      "Spanish language crash course",
      "Weekend trip to Guatapé",
    ],
    workspaces: [
      {
        id: 107,
        name: "Selina Medellín",
        type: "coworking",
        location: "El Poblado, Medellín",
        price: "Included in package",
        rating: 4.6,
        amenities: ["High-speed WiFi", "Meeting Rooms", "Events", "Cafe", "Coliving Option"],
        image: "/placeholder.svg?height=200&width=300&text=Selina+Medellin",
        description: "Popular coworking and coliving space in the heart of El Poblado with regular community events.",
      },
    ],
    events: [
      {
        id: 203,
        title: "Medellín Digital Nomads Meetup",
        location: "Pergamino Cafe, Medellín",
        date: "Weekly on Wednesdays",
        time: "18:00 - 20:00",
        attendees: 35,
        image: "/placeholder.svg?height=200&width=300&text=Medellin+Nomad+Meetup",
        description: "Weekly gathering of digital nomads in Medellín's popular El Poblado district.",
      },
    ],
  },
  {
    id: 5,
    name: "Tuscany",
    location: "Italy",
    image: "/placeholder.svg?height=300&width=400&text=Tuscany+Italy",
    rating: 4.8,
    nomadScore: 86,
    description: "Remote-ready villa in the Italian countryside with dedicated workspace and authentic experiences",
    longDescription:
      "Work remotely from a stunning Tuscan villa surrounded by rolling hills, vineyards, and olive groves. Our workation package offers the perfect blend of productivity and Italian dolce vita. Enjoy high-speed internet, dedicated workspace, and authentic cultural experiences including wine tastings, cooking classes, and excursions to medieval towns.",
    price: "$1,800",
    duration: "14 nights",
    amenities: ["High-speed WiFi", "Dedicated Workspace", "Pool", "Daily Cleaning", "Welcome Basket"],
    highlights: [
      "Stay in a remote-ready traditional Tuscan villa",
      "Dedicated workspace with scenic views",
      "Italian cooking classes and wine tastings",
      "Excursions to Florence, Siena, and medieval towns",
    ],
    workspaces: [
      {
        id: 108,
        name: "Tuscan Villa Workspace",
        type: "villa",
        location: "Tuscan Countryside",
        price: "Included in package",
        rating: 4.9,
        amenities: ["Dedicated Workspace", "High-speed WiFi", "Garden", "Pool", "Scenic Views"],
        image: "/placeholder.svg?height=200&width=300&text=Tuscany+Villa+Workspace",
        description: "Dedicated workspace in a traditional Tuscan villa with high-speed internet and inspiring views.",
      },
    ],
  },
  {
    id: 6,
    name: "Mexico City",
    location: "Mexico",
    image: "/placeholder.svg?height=300&width=400&text=Mexico+City",
    rating: 4.7,
    nomadScore: 88,
    description: "Vibrant metropolis with rich culture, excellent food scene, and growing digital nomad community",
    longDescription:
      "Immerse yourself in the energy of Mexico City, a vibrant metropolis that perfectly blends ancient history with modern innovation. Our workation package includes accommodation in the trendy Roma or Condesa neighborhoods, access to top coworking spaces, and cultural experiences to help you discover the best of CDMX while maintaining productivity.",
    price: "$1,100",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Airport Transfer", "Metro Card", "Welcome Dinner", "Spanish Lessons"],
    highlights: [
      "Apartment in Roma Norte or Condesa",
      "Access to premium coworking spaces",
      "Spanish language crash course",
      "Guided tours of historic center and museums",
    ],
    workspaces: [
      {
        id: 109,
        name: "WeWork Reforma",
        type: "coworking",
        location: "Reforma, Mexico City",
        price: "Included in package",
        rating: 4.7,
        amenities: ["High-speed WiFi", "Meeting Rooms", "Events", "Coffee Bar", "Phone Booths"],
        image: "/placeholder.svg?height=200&width=300&text=WeWork+Mexico+City",
        description:
          "Premium coworking space on the iconic Reforma avenue with all amenities needed for productive work.",
      },
      {
        id: 110,
        name: "Público Café",
        type: "cafe",
        location: "Roma Norte, Mexico City",
        price: "Pay as you go",
        rating: 4.5,
        amenities: ["WiFi", "Great Coffee", "Food Menu", "Outdoor Seating", "Nomad-friendly"],
        image: "/placeholder.svg?height=200&width=300&text=Publico+Cafe+CDMX",
        description: "Popular nomad-friendly cafe with great coffee, food, and reliable WiFi in Roma Norte.",
      },
    ],
    events: [
      {
        id: 204,
        title: "Mexico City Nomad Meetup",
        location: "Parque México, Condesa",
        date: "Monthly - Second Saturday",
        time: "16:00 - 19:00",
        attendees: 50,
        image: "/placeholder.svg?height=200&width=300&text=CDMX+Nomad+Meetup",
        description: "Monthly gathering of digital nomads in Mexico City's beautiful Parque México.",
      },
    ],
  },
  {
    id: 7,
    name: "Cape Town",
    location: "South Africa",
    image: "/placeholder.svg?height=300&width=400&text=Cape+Town+South+Africa",
    rating: 4.7,
    nomadScore: 85,
    description: "Stunning coastal city with diverse culture, outdoor activities, and growing tech scene",
    longDescription:
      "Experience the best of Cape Town, where stunning natural beauty meets urban innovation. Our workation package includes accommodation in the popular City Bowl or Sea Point areas, access to coworking spaces, and adventures to help you explore this diverse city while staying productive. Enjoy mountain hikes, beach days, and a vibrant food and wine scene.",
    price: "$1,200",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Airport Transfer", "Welcome Dinner", "Local SIM Card", "MyCity Transport Card"],
    highlights: [
      "Apartment in City Bowl or Sea Point",
      "Access to premium coworking spaces",
      "Table Mountain hike and Cape Peninsula tour",
      "Wine tasting in Stellenbosch",
    ],
    workspaces: [
      {
        id: 111,
        name: "Workshop17",
        type: "coworking",
        location: "V&A Waterfront, Cape Town",
        price: "Included in package",
        rating: 4.8,
        amenities: ["High-speed WiFi", "Meeting Rooms", "Events", "Cafe", "Harbor Views"],
        image: "/placeholder.svg?height=200&width=300&text=Workshop17+Cape+Town",
        description:
          "Premium coworking space at the V&A Waterfront with beautiful harbor views and excellent facilities.",
      },
    ],
  },
  {
    id: 8,
    name: "Tulum",
    location: "Mexico",
    image: "/placeholder.svg?height=300&width=400&text=Tulum+Mexico",
    rating: 4.6,
    nomadScore: 83,
    description: "Beachside paradise with eco-conscious community and growing digital nomad scene",
    longDescription:
      "Work from paradise in Tulum, where Caribbean beaches meet ancient Mayan ruins and a bohemian atmosphere. Our workation package includes accommodation in a beach or jungle setting, access to nomad-friendly coworking spaces, and activities to help you experience the magic of Tulum while maintaining productivity.",
    price: "$1,400",
    duration: "14 nights",
    amenities: ["WiFi", "Bicycle", "Airport Transfer", "Welcome Dinner", "Yoga Classes"],
    highlights: [
      "Eco-friendly accommodation near the beach or in the jungle",
      "Access to coworking spaces with reliable internet",
      "Cenote tours and visits to Mayan ruins",
      "Beach yoga and wellness activities",
    ],
    workspaces: [
      {
        id: 112,
        name: "Selina Tulum",
        type: "coworking",
        location: "Tulum Beach Road",
        price: "Included in package",
        rating: 4.5,
        amenities: ["WiFi", "Beach Access", "Cafe", "Events", "Coliving Option"],
        image: "/placeholder.svg?height=200&width=300&text=Selina+Tulum",
        description: "Beachside coworking and coliving space with regular community events and yoga classes.",
      },
      {
        id: 113,
        name: "Digital Jungle",
        type: "coworking",
        location: "Tulum Town",
        price: "Included in package",
        rating: 4.6,
        amenities: ["High-speed WiFi", "Air Conditioning", "Meeting Rooms", "Coffee", "24/7 Access"],
        image: "/placeholder.svg?height=200&width=300&text=Digital+Jungle+Tulum",
        description: "Reliable coworking space in Tulum town with air conditioning and 24/7 access.",
      },
    ],
  },
  {
    id: 9,
    name: "Madeira",
    location: "Portugal",
    image: "/placeholder.svg?height=300&width=400&text=Madeira+Portugal",
    rating: 4.8,
    nomadScore: 90,
    description: "Island paradise with digital nomad village, perfect climate, and stunning natural beauty",
    longDescription:
      "Join the innovative Digital Nomad Village in Madeira, a Portuguese island paradise with perfect year-round climate and breathtaking landscapes. Our workation package includes accommodation in Ponta do Sol, access to community coworking spaces, and activities to help you explore this stunning island while connecting with a vibrant nomad community.",
    price: "$1,300",
    duration: "14 nights",
    amenities: ["Fast WiFi", "Airport Transfer", "Welcome Dinner", "Community Events", "Hiking Tours"],
    highlights: [
      "Accommodation in the Digital Nomad Village in Ponta do Sol",
      "Access to community coworking spaces",
      "Levada walks and nature excursions",
      "Community events and networking opportunities",
    ],
    workspaces: [
      {
        id: 114,
        name: "Digital Nomad Village Coworking",
        type: "coworking",
        location: "Ponta do Sol, Madeira",
        price: "Included in package",
        rating: 4.7,
        amenities: ["High-speed WiFi", "Ocean Views", "Community Events", "Outdoor Spaces", "Meeting Rooms"],
        image: "/placeholder.svg?height=200&width=300&text=Madeira+Nomad+Village",
        description: "Community coworking space in the Digital Nomad Village with ocean views and regular events.",
      },
    ],
    events: [
      {
        id: 205,
        title: "Madeira Digital Nomads Meetup",
        location: "Ponta do Sol, Madeira",
        date: "Weekly on Fridays",
        time: "18:00 - 21:00",
        attendees: 40,
        image: "/placeholder.svg?height=200&width=300&text=Madeira+Nomad+Meetup",
        description: "Weekly community gathering at the Digital Nomad Village with networking and social activities.",
      },
    ],
  },
]

// Extract all workspaces from destinations
export const allWorkspaces = destinations.flatMap((destination) => destination.workspaces)

// Extract all events from destinations
export const allEvents = destinations
  .flatMap((destination) => destination.events || [])
  .concat([
    {
      id: 206,
      title: "Remote Work Workshop",
      location: "Online",
      date: "Monthly - First Monday",
      time: "16:00 - 18:00",
      attendees: 120,
      image: "/placeholder.svg?height=200&width=300&text=Remote+Work+Workshop",
      description: "Monthly online workshop covering remote work best practices, tools, and strategies.",
    },
    {
      id: 207,
      title: "Nomad Networking Global",
      location: "Online",
      date: "Quarterly",
      time: "Various Timezones",
      attendees: 200,
      image: "/placeholder.svg?height=200&width=300&text=Global+Nomad+Networking",
      description: "Quarterly online networking event connecting digital nomads worldwide across multiple timezones.",
    },
  ])
