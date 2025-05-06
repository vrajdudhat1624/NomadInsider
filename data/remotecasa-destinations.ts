// This file contains the official RemoteCasa workation destinations data

export interface RemoteCasaDestination {
  id: number
  name: string
  location: string
  image: string
  startingPrice: string
  startingPriceNumeric: number
  priceUnit: string
  description: string
  longDescription: string
  features: string[]
  packages: Package[]
  link: string
  rating: number
  nomadScore: number
  accommodation: Accommodation
  featureScores: FeatureScores
}

export interface Accommodation {
  type: string
  description: string
  amenities: string[]
  images: string[]
  highlights: string[]
}

export interface FeatureScores {
  costOfLiving: number
  internetSpeed: number
  coworkingSpaces: number
  community: number
  visaFriendliness: number
  safety: number
  nightlife: number
  publicTransport: number
  walkability: number
  healthcare: number
  workLifeBalance: number
}

export interface Package {
  id: number
  name: string
  price: string
  duration: string
  description: string
  included: string[]
}

export const remoteCasaDestinations: RemoteCasaDestination[] = [
  {
    id: 1,
    name: "Mexico City",
    location: "Mexico",
    image: "/placeholder.svg?height=300&width=400&text=Mexico+City",
    startingPrice: "$2,490",
    startingPriceNumeric: 2490,
    priceUnit: "month",
    description: "City of tacos, street art, and endless surprises. Think you've seen it all? Think again.",
    longDescription:
      "Mexico City is a vibrant metropolis that perfectly blends ancient history with modern innovation. As one of Latin America's most exciting destinations, it offers an incredible mix of culture, cuisine, and creativity. Work from trendy neighborhoods like Roma or Condesa, explore ancient ruins, and indulge in world-class dining. With RemoteCasa's workation package, you'll experience the best of CDMX while maintaining productivity in a comfortable, fully-equipped workspace.",
    features: [
      "Private, premium accommodation",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "3 local guided tours",
      "Pet-friendly options",
    ],
    packages: [
      {
        id: 101,
        name: "Urban Explorer",
        price: "$2,490",
        duration: "1 month",
        description: "Experience the vibrant culture and energy of Mexico City with our premium workation package.",
        included: [
          "Private apartment in Roma or Condesa",
          "Dedicated workspace with ergonomic chair",
          "High-speed fiber internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (Historic Center, Teotihuacan, Coyoacan)",
          "24/7 travel support",
        ],
      },
      {
        id: 102,
        name: "Mexico City Extended Stay",
        price: "$4,490",
        duration: "2 months",
        description: "Immerse yourself in Mexico City's culture with our extended stay package.",
        included: [
          "All Urban Explorer inclusions",
          "Weekly cleaning service",
          "Spanish language crash course",
          "2 additional guided experiences",
          "Networking event with local professionals",
        ],
      },
    ],
    link: "https://remotecasa.co/workation-packages-3/",
    rating: 4.8,
    nomadScore: 89,
    accommodation: {
      type: "Private Apartment",
      description:
        "Modern, fully-furnished apartments in the trendy Roma and Condesa neighborhoods, known for their tree-lined streets, art deco architecture, and vibrant cafe culture.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed fiber internet",
        "Dedicated workspace",
        "Weekly cleaning",
        "Laundry facilities",
        "24/7 support",
        "Air conditioning",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=CDMX+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=CDMX+Apartment+2",
        "/placeholder.svg?height=300&width=400&text=CDMX+Workspace",
      ],
      highlights: [
        "Located in safe, walkable neighborhoods",
        "Close to parks, cafes, and restaurants",
        "Easy access to public transportation",
        "Nearby coworking spaces and digital nomad hotspots",
      ],
    },
    featureScores: {
      costOfLiving: 70, // 0-100, higher means more affordable
      internetSpeed: 85, // 0-100, higher means faster/more reliable
      coworkingSpaces: 90, // 0-100, higher means more availability
      community: 85, // 0-100, higher means stronger digital nomad community
      visaFriendliness: 75, // 0-100, higher means easier visa situation
      safety: 65, // 0-100, higher means safer
      nightlife: 95, // 0-100, higher means better nightlife
      publicTransport: 80, // 0-100, higher means better public transport
      walkability: 75, // 0-100, higher means more walkable
      healthcare: 70, // 0-100, higher means better healthcare access
      workLifeBalance: 80, // 0-100, higher means better work-life balance
    },
  },
  {
    id: 2,
    name: "Medellín",
    location: "Colombia",
    image: "/placeholder.svg?height=300&width=400&text=Medellin+Colombia",
    startingPrice: "$2,490",
    startingPriceNumeric: 2490,
    priceUnit: "month",
    description:
      "The city of eternal spring. Medellín offers a vibrant culture, affordable living, and a thriving digital nomad community.",
    longDescription:
      "Discover why Medellín has transformed into one of Latin America's top digital nomad destinations. Enjoy perfect year-round spring weather, a low cost of living, and a growing tech ecosystem. Our package includes accommodation in the popular El Poblado district, coworking access, and Spanish lessons to help you integrate into the local community. Experience the warmth of Colombian culture while staying productive in this innovative city.",
    features: [
      "Private, premium accommodation",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "3 local guided tours",
      "Pet-friendly options",
    ],
    packages: [
      {
        id: 103,
        name: "Eternal Spring",
        price: "$2,490",
        duration: "1 month",
        description:
          "Experience the perfect climate and vibrant culture of Medellín with our premium workation package.",
        included: [
          "Private apartment in El Poblado",
          "Dedicated workspace with ergonomic chair",
          "High-speed fiber internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (Comuna 13, City Tour, Guatapé)",
          "24/7 travel support",
        ],
      },
      {
        id: 104,
        name: "Medellín Extended Stay",
        price: "$4,490",
        duration: "2 months",
        description: "Immerse yourself in Medellín's culture with our extended stay package.",
        included: [
          "All Eternal Spring inclusions",
          "Weekly cleaning service",
          "Spanish language crash course",
          "2 additional guided experiences",
          "Networking event with local professionals",
        ],
      },
    ],
    link: "https://www.remotecasa.co/blog/medellin-guidebook-remotecasa/",
    rating: 4.9,
    nomadScore: 92,
    accommodation: {
      type: "Private Apartment",
      description:
        "Modern, fully-furnished apartments in the upscale El Poblado neighborhood, known for its lush greenery, excellent restaurants, and vibrant nightlife.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed fiber internet",
        "Dedicated workspace",
        "Weekly cleaning",
        "Building gym access",
        "Swimming pool",
        "24/7 security",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Medellin+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=Medellin+Apartment+2",
        "/placeholder.svg?height=300&width=400&text=Medellin+View",
      ],
      highlights: [
        "Located in safe, upscale neighborhood",
        "Walking distance to cafes, restaurants, and malls",
        "Easy access to metro system",
        "Perfect year-round spring climate",
      ],
    },
    featureScores: {
      costOfLiving: 85,
      internetSpeed: 80,
      coworkingSpaces: 85,
      community: 95,
      visaFriendliness: 90,
      safety: 70,
      nightlife: 85,
      publicTransport: 75,
      walkability: 65,
      healthcare: 75,
      workLifeBalance: 90,
    },
  },
  {
    id: 3,
    name: "Buenos Aires",
    location: "Argentina",
    image: "/placeholder.svg?height=300&width=400&text=Buenos+Aires+Argentina",
    startingPrice: "$2,490",
    startingPriceNumeric: 2490,
    priceUnit: "month",
    description:
      "A city that dances to its own rhythm. Experience the passion of tango, rich history, and vibrant nightlife.",
    longDescription:
      "Buenos Aires combines European elegance with Latin American passion. Known as the 'Paris of South America,' this cosmopolitan city offers stunning architecture, world-class cuisine, and a vibrant arts scene. Our workation package places you in the heart of popular neighborhoods like Palermo or Recoleta, with everything you need to stay productive while immersing yourself in porteño culture. Experience tango, steak, and the unique energy that makes Buenos Aires unforgettable.",
    features: [
      "Private, premium accommodation",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "3 local guided tours",
      "Pet-friendly options",
    ],
    packages: [
      {
        id: 105,
        name: "Tango & Tech",
        price: "$2,490",
        duration: "1 month",
        description: "Experience the passion and elegance of Buenos Aires with our premium workation package.",
        included: [
          "Private apartment in Palermo or Recoleta",
          "Dedicated workspace with ergonomic chair",
          "High-speed fiber internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (City Tour, Tango Show, San Telmo Market)",
          "24/7 travel support",
        ],
      },
      {
        id: 106,
        name: "Buenos Aires Extended Stay",
        price: "$4,490",
        duration: "2 months",
        description: "Immerse yourself in Buenos Aires' culture with our extended stay package.",
        included: [
          "All Tango & Tech inclusions",
          "Weekly cleaning service",
          "Spanish language crash course",
          "2 additional guided experiences",
          "Networking event with local professionals",
        ],
      },
    ],
    link: "https://remotecasa.co/workation-packages-3/",
    rating: 4.7,
    nomadScore: 86,
    accommodation: {
      type: "Private Apartment",
      description:
        "Stylish, fully-furnished apartments in the trendy Palermo or elegant Recoleta neighborhoods, known for their European architecture, parks, and cultural attractions.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed fiber internet",
        "Dedicated workspace",
        "Weekly cleaning",
        "Laundry facilities",
        "24/7 support",
        "Air conditioning",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Buenos+Aires+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=Buenos+Aires+Apartment+2",
        "/placeholder.svg?height=300&width=400&text=Buenos+Aires+Workspace",
      ],
      highlights: [
        "Located in culturally rich neighborhoods",
        "Walking distance to cafes, restaurants, and parks",
        "Easy access to public transportation",
        "Close to coworking spaces and cultural attractions",
      ],
    },
    featureScores: {
      costOfLiving: 90,
      internetSpeed: 75,
      coworkingSpaces: 80,
      community: 85,
      visaFriendliness: 80,
      safety: 65,
      nightlife: 95,
      publicTransport: 85,
      walkability: 90,
      healthcare: 75,
      workLifeBalance: 85,
    },
  },
  {
    id: 4,
    name: "Bogotá",
    location: "Colombia",
    image: "/placeholder.svg?height=300&width=400&text=Bogota+Colombia",
    startingPrice: "$750",
    startingPriceNumeric: 750,
    priceUnit: "week",
    description: "Where altitude meets attitude. Culture, coffee, and chaotic charm collide in Colombia's capital.",
    longDescription:
      "Bogotá, Colombia's high-altitude capital, offers a unique blend of colonial charm and urban sophistication. At 8,660 feet above sea level, the city enjoys a perpetual spring-like climate. Explore historic La Candelaria, visit world-class museums, and enjoy the thriving culinary scene. Our workation package places you in the modern northern districts with easy access to the city's best attractions while providing everything you need to stay productive.",
    features: [
      "Private, premium accommodation",
      "Airport pick-up",
      "3 local guided tours",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "Option to add a companion",
      "Free cancellation up to 31 days before departure",
      "Access to exclusive networking events",
      "Pet-friendly accommodations",
    ],
    packages: [
      {
        id: 107,
        name: "Bogotá Weekly Explorer",
        price: "$750",
        duration: "1 week",
        description: "Experience the vibrant culture and energy of Bogotá with our premium weekly package.",
        included: [
          "Private accommodation in Chapinero or Usaquén",
          "Dedicated workspace with ergonomic chair",
          "High-speed fiber internet",
          "Airport pickup",
          "Welcome dinner",
          "City tour including Monserrate and Gold Museum",
          "24/7 travel support",
        ],
      },
      {
        id: 108,
        name: "Bogotá Monthly Immersion",
        price: "$2,490",
        duration: "1 month",
        description: "Immerse yourself in Bogotá's culture with our monthly package.",
        included: [
          "All Weekly Explorer inclusions",
          "Weekly cleaning service",
          "Spanish language crash course",
          "2 additional guided experiences",
          "Day trip to Salt Cathedral of Zipaquirá",
          "Coffee tasting experience",
        ],
      },
    ],
    link: "https://www.remotecasa.co/bogota-packages-remotecasa/",
    rating: 4.6,
    nomadScore: 84,
    accommodation: {
      type: "Private Apartment",
      description:
        "Modern, fully-furnished apartments in the trendy Chapinero or upscale Usaquén neighborhoods, offering a perfect blend of local culture and urban convenience.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed fiber internet",
        "Dedicated workspace",
        "Weekly cleaning",
        "Laundry facilities",
        "24/7 security",
        "Heating system",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Bogota+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=Bogota+Apartment+2",
        "/placeholder.svg?height=300&width=400&text=Bogota+Workspace",
      ],
      highlights: [
        "Located in safe, trendy neighborhoods",
        "Close to restaurants, cafes, and shopping",
        "Easy access to TransMilenio bus system",
        "Nearby parks and cultural attractions",
      ],
    },
    featureScores: {
      costOfLiving: 80,
      internetSpeed: 75,
      coworkingSpaces: 80,
      community: 75,
      visaFriendliness: 85,
      safety: 60,
      nightlife: 80,
      publicTransport: 70,
      walkability: 65,
      healthcare: 75,
      workLifeBalance: 75,
    },
  },
  {
    id: 5,
    name: "Santa Marta",
    location: "Colombia",
    image: "/placeholder.svg?height=300&width=400&text=Santa+Marta+Colombia",
    startingPrice: "$850",
    startingPriceNumeric: 850,
    priceUnit: "week",
    description:
      "Santa Marta's blend of beaches, jungles, and history is the ultimate escape. Hike, relax, or explore—this coastal gem has it all.",
    longDescription:
      "Santa Marta offers the perfect blend of Caribbean coastline, lush mountains, and colonial history. As Colombia's oldest city, it serves as the gateway to Tayrona National Park and the Lost City trek. Our workation package provides beachside accommodation with reliable internet, allowing you to work with ocean views before exploring the region's natural wonders. Experience the laid-back coastal lifestyle while staying connected and productive.",
    features: [
      "Private, premium accommodation",
      "Airport pick-up",
      "3 local guided tours",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "Option to add a companion",
      "Free cancellation up to 31 days before departure",
      "Access to exclusive networking and beach events",
      "Pet-friendly accommodations",
    ],
    packages: [
      {
        id: 109,
        name: "Santa Marta Weekly Escape",
        price: "$850",
        duration: "1 week",
        description: "Experience the perfect blend of beach and productivity in Santa Marta.",
        included: [
          "Private accommodation near the beach",
          "Dedicated workspace with ocean views",
          "High-speed internet",
          "Airport pickup",
          "Welcome dinner",
          "Guided tour of Tayrona National Park",
          "24/7 travel support",
        ],
      },
      {
        id: 110,
        name: "Santa Marta Monthly Paradise",
        price: "$2,270",
        duration: "1 month",
        description: "Immerse yourself in Santa Marta's coastal lifestyle with our monthly package.",
        included: [
          "All Weekly Escape inclusions",
          "Weekly cleaning service",
          "2 additional guided experiences",
          "Lost City trek option",
          "Beach club access",
          "Sunset sailing experience",
        ],
      },
    ],
    link: "https://remotecasa.co/santa-marta-city-packages-remotecasa/",
    rating: 4.7,
    nomadScore: 85,
    accommodation: {
      type: "Beachside Apartment",
      description:
        "Comfortable, fully-furnished apartments near the beach in Rodadero or the historic center, offering easy access to both the Caribbean Sea and the city's colonial charm.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed internet",
        "Dedicated workspace with ocean views",
        "Weekly cleaning",
        "Air conditioning",
        "Swimming pool access",
        "24/7 support",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Santa+Marta+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=Santa+Marta+View",
        "/placeholder.svg?height=300&width=400&text=Santa+Marta+Workspace",
      ],
      highlights: [
        "Walking distance to beaches",
        "Close to restaurants and cafes",
        "Easy access to Tayrona National Park",
        "Perfect base for exploring the Sierra Nevada mountains",
      ],
    },
    featureScores: {
      costOfLiving: 85,
      internetSpeed: 70,
      coworkingSpaces: 65,
      community: 70,
      visaFriendliness: 85,
      safety: 70,
      nightlife: 75,
      publicTransport: 60,
      walkability: 75,
      healthcare: 65,
      workLifeBalance: 90,
    },
  },
  {
    id: 6,
    name: "Cancun",
    location: "Mexico",
    image: "/placeholder.svg?height=300&width=400&text=Cancun+Mexico",
    startingPrice: "$2,270",
    startingPriceNumeric: 2270,
    priceUnit: "month",
    description:
      "White sands, turquoise waters, and adventure waiting around every corner. Cancun's got your next story.",
    longDescription:
      "Cancun offers the perfect balance of tropical paradise and modern amenities. Known for its stunning beaches and crystal-clear waters, it's also a gateway to Mayan ruins and cenotes. Our Sandcastle Slacker package provides beachside accommodation with reliable internet, allowing you to work with ocean views before exploring the Yucatan Peninsula's natural and cultural wonders. Experience resort-style living while staying connected and productive.",
    features: [
      "Private, premium accommodation",
      "Airport pick-up",
      "3 local guided tours",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "Option to add a companion",
      "Free cancellation up to 31 days before departure",
      "Access to exclusive networking events and beach clubs",
      "Pet-friendly accommodations",
    ],
    packages: [
      {
        id: 111,
        name: "Sandcastle Slacker",
        price: "$2,270",
        duration: "1 month",
        description: "Work from paradise with our premium Cancun workation package.",
        included: [
          "Private accommodation near the beach",
          "Dedicated workspace with ocean views",
          "High-speed internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (Chichen Itza, Cenotes, Isla Mujeres)",
          "Beach club access",
          "24/7 travel support",
        ],
      },
      {
        id: 112,
        name: "Cancun Extended Paradise",
        price: "$4,200",
        duration: "2 months",
        description: "Extend your stay in paradise with our two-month Cancun package.",
        included: [
          "All Sandcastle Slacker inclusions",
          "Weekly cleaning service",
          "2 additional guided experiences",
          "Scuba diving or snorkeling excursion",
          "Sunset sailing experience",
        ],
      },
    ],
    link: "https://remotecasa.co/workation-packages-sandcastle-slacker/",
    rating: 4.8,
    nomadScore: 83,
    accommodation: {
      type: "Beachside Apartment",
      description:
        "Modern, fully-furnished apartments in the Hotel Zone or Downtown Cancun, offering the perfect balance between beach access and urban convenience.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed internet",
        "Dedicated workspace",
        "Weekly cleaning",
        "Air conditioning",
        "Swimming pool access",
        "Beach access",
        "24/7 security",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Cancun+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=Cancun+Beach+View",
        "/placeholder.svg?height=300&width=400&text=Cancun+Workspace",
      ],
      highlights: [
        "Walking distance to pristine beaches",
        "Close to restaurants, shops, and nightlife",
        "Easy access to Mayan ruins and cenotes",
        "Perfect base for exploring the Yucatan Peninsula",
      ],
    },
    featureScores: {
      costOfLiving: 65,
      internetSpeed: 75,
      coworkingSpaces: 70,
      community: 75,
      visaFriendliness: 90,
      safety: 75,
      nightlife: 90,
      publicTransport: 65,
      walkability: 60,
      healthcare: 75,
      workLifeBalance: 85,
    },
  },
  {
    id: 7,
    name: "Santa Marta",
    location: "Colombia",
    image: "/placeholder.svg?height=300&width=400&text=Santa+Marta+Beach",
    startingPrice: "$2,270",
    startingPriceNumeric: 2270,
    priceUnit: "month",
    description:
      "Sun, sand, and seamless work-life balance in Santa Marta. This package places you right on the beach with Wi-Fi that actually works.",
    longDescription:
      "Experience the ultimate work-life balance in Santa Marta with our Sandcastle Slacker package. This extended stay option places you in premium accommodation right by the Caribbean Sea, with reliable high-speed internet that lets you work productively with ocean views. After work, explore Colombia's oldest city, trek through Tayrona National Park, or simply relax on pristine beaches. This package is perfect for those seeking a longer tropical escape without sacrificing connectivity.",
    features: [
      "Private, premium accommodation",
      "Airport pick-up",
      "3 local guided tours",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "Option to add a companion",
      "Free cancellation up to 31 days before departure",
      "Access to exclusive networking and beach events",
      "Pet-friendly accommodations",
    ],
    packages: [
      {
        id: 113,
        name: "Sandcastle Slacker",
        price: "$2,270",
        duration: "1 month",
        description: "Work from the Caribbean coast with our premium Santa Marta monthly package.",
        included: [
          "Private beachside accommodation",
          "Dedicated workspace with ocean views",
          "High-speed internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (Tayrona Park, City Tour, Minca)",
          "Beach club access",
          "24/7 travel support",
        ],
      },
      {
        id: 114,
        name: "Santa Marta Extended Paradise",
        price: "$4,200",
        duration: "2 months",
        description: "Extend your stay in Caribbean paradise with our two-month Santa Marta package.",
        included: [
          "All Sandcastle Slacker inclusions",
          "Weekly cleaning service",
          "2 additional guided experiences",
          "Lost City trek option",
          "Sunset sailing experience",
        ],
      },
    ],
    link: "https://remotecasa.co/workation-packages-sandcastle-slacker/",
    rating: 4.7,
    nomadScore: 85,
    accommodation: {
      type: "Beachfront Villa",
      description:
        "Luxurious, fully-furnished beachfront villas or premium apartments with direct access to the Caribbean Sea, perfect for those seeking the ultimate work-from-paradise experience.",
      amenities: [
        "Fully-equipped kitchen",
        "Premium high-speed internet",
        "Dedicated workspace with ocean views",
        "Weekly cleaning",
        "Air conditioning",
        "Private or semi-private beach access",
        "Swimming pool",
        "24/7 support",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Santa+Marta+Villa+1",
        "/placeholder.svg?height=300&width=400&text=Santa+Marta+Beach+Access",
        "/placeholder.svg?height=300&width=400&text=Santa+Marta+Villa+Workspace",
      ],
      highlights: [
        "Direct beach access",
        "Stunning Caribbean Sea views",
        "Close to restaurants and local markets",
        "Perfect base for exploring Tayrona National Park and the Lost City",
      ],
    },
    featureScores: {
      costOfLiving: 85,
      internetSpeed: 75,
      coworkingSpaces: 65,
      community: 70,
      visaFriendliness: 85,
      safety: 70,
      nightlife: 75,
      publicTransport: 60,
      walkability: 75,
      healthcare: 65,
      workLifeBalance: 95,
    },
  },
  {
    id: 8,
    name: "Cartagena",
    location: "Colombia",
    image: "/placeholder.svg?height=300&width=400&text=Cartagena+Colombia",
    startingPrice: "$2,270",
    startingPriceNumeric: 2270,
    priceUnit: "month",
    description:
      "Historic charm meets Caribbean vibes. Explore colonial architecture, vibrant streets, and coastal beauty.",
    longDescription:
      "Cartagena de Indias is a UNESCO World Heritage site that perfectly blends colonial charm with Caribbean flair. Wander through the colorful walled city, explore nearby islands, and enjoy the vibrant local culture. Our Sandcastle Slacker package provides accommodation in or near the historic center, with reliable internet allowing you to work productively before exploring this magical coastal city. Experience Colombia's most romantic destination while maintaining your remote work routine.",
    features: [
      "Private, premium accommodation",
      "Airport pick-up",
      "3 local guided tours",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "Option to add a companion",
      "Free cancellation up to 31 days before departure",
      "Access to exclusive networking events and beach clubs",
      "Pet-friendly accommodations",
    ],
    packages: [
      {
        id: 115,
        name: "Sandcastle Slacker",
        price: "$2,270",
        duration: "1 month",
        description: "Work from Colombia's most beautiful colonial city with our premium Cartagena package.",
        included: [
          "Private accommodation in or near the walled city",
          "Dedicated workspace",
          "High-speed internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (Walled City, Rosario Islands, Getsemani)",
          "Beach club access",
          "24/7 travel support",
        ],
      },
      {
        id: 116,
        name: "Cartagena Extended Magic",
        price: "$4,200",
        duration: "2 months",
        description: "Extend your stay in magical Cartagena with our two-month package.",
        included: [
          "All Sandcastle Slacker inclusions",
          "Weekly cleaning service",
          "2 additional guided experiences",
          "Day trip to Palenque",
          "Sunset sailing on the bay",
        ],
      },
    ],
    link: "https://remotecasa.co/workation-packages-sandcastle-slacker/",
    rating: 4.8,
    nomadScore: 84,
    accommodation: {
      type: "Colonial Apartment",
      description:
        "Charming, fully-furnished apartments in or near the historic walled city, offering a perfect blend of colonial architecture and modern amenities.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed internet",
        "Dedicated workspace",
        "Weekly cleaning",
        "Air conditioning",
        "Rooftop terrace access (in select properties)",
        "24/7 support",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Cartagena+Apartment+1",
        "/placeholder.svg?height=300&width=400&text=Cartagena+Colonial+View",
        "/placeholder.svg?height=300&width=400&text=Cartagena+Workspace",
      ],
      highlights: [
        "Located in or near the UNESCO World Heritage walled city",
        "Walking distance to restaurants, cafes, and cultural sites",
        "Easy access to beaches and islands",
        "Immersive colonial atmosphere with modern comforts",
      ],
    },
    featureScores: {
      costOfLiving: 75,
      internetSpeed: 70,
      coworkingSpaces: 65,
      community: 75,
      visaFriendliness: 85,
      safety: 75,
      nightlife: 85,
      publicTransport: 65,
      walkability: 85,
      healthcare: 70,
      workLifeBalance: 80,
    },
  },
  {
    id: 9,
    name: "Tulum",
    location: "Mexico",
    image: "/placeholder.svg?height=300&width=400&text=Tulum+Mexico",
    startingPrice: "$2,270",
    startingPriceNumeric: 2270,
    priceUnit: "month",
    description:
      "Bohemian paradise with pristine beaches and a laid-back atmosphere. Perfect for creatives and free spirits.",
    longDescription:
      "Tulum has evolved from a sleepy beach town to a bohemian paradise that attracts digital nomads and creatives from around the world. With its pristine beaches, ancient Mayan ruins, and cenotes, it offers the perfect backdrop for a productive workation. Our Sandcastle Slacker package provides accommodation near the beach or in the town, with reliable internet allowing you to work effectively before exploring this magical coastal destination. Experience Tulum's unique energy while maintaining your remote work routine.",
    features: [
      "Private, premium accommodation",
      "Airport pick-up",
      "3 local guided tours",
      "High-speed Wi-Fi",
      "Fully-equipped workstation",
      "Centrally located",
      "Travel support",
      "Option to add a companion",
      "Free cancellation up to 31 days before departure",
      "Access to exclusive networking events and beach clubs",
      "Pet-friendly accommodations",
    ],
    packages: [
      {
        id: 117,
        name: "Sandcastle Slacker",
        price: "$2,270",
        duration: "1 month",
        description: "Work from bohemian paradise with our premium Tulum workation package.",
        included: [
          "Private accommodation near the beach or in town",
          "Dedicated workspace",
          "High-speed internet",
          "Airport pickup",
          "Welcome dinner",
          "3 guided tours (Tulum Ruins, Cenotes, Sian Ka'an)",
          "Beach club access",
          "24/7 travel support",
        ],
      },
      {
        id: 118,
        name: "Tulum Extended Bliss",
        price: "$4,200",
        duration: "2 months",
        description: "Extend your stay in bohemian Tulum with our two-month package.",
        included: [
          "All Sandcastle Slacker inclusions",
          "Weekly cleaning service",
          "2 additional guided experiences",
          "Yoga classes",
          "Coba ruins excursion",
        ],
      },
    ],
    link: "https://remotecasa.co/workation-packages-sandcastle-slacker/",
    rating: 4.7,
    nomadScore: 86,
    accommodation: {
      type: "Bohemian Villa/Apartment",
      description:
        "Stylish, eco-friendly accommodations either near the beach or in Tulum town, featuring bohemian design elements and sustainable amenities.",
      amenities: [
        "Fully-equipped kitchen",
        "High-speed internet (more reliable in town)",
        "Dedicated workspace",
        "Weekly cleaning",
        "Air conditioning",
        "Bicycle access",
        "Yoga mat and equipment",
        "24/7 support",
        "Smart TV with streaming services",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Tulum+Accommodation+1",
        "/placeholder.svg?height=300&width=400&text=Tulum+Beach+View",
        "/placeholder.svg?height=300&width=400&text=Tulum+Workspace",
      ],
      highlights: [
        "Eco-friendly design and amenities",
        "Close to pristine beaches or in the vibrant town",
        "Easy access to cenotes and Mayan ruins",
        "Surrounded by yoga studios, healthy restaurants, and wellness centers",
      ],
    },
    featureScores: {
      costOfLiving: 60,
      internetSpeed: 65,
      coworkingSpaces: 75,
      community: 85,
      visaFriendliness: 90,
      safety: 75,
      nightlife: 80,
      publicTransport: 50,
      walkability: 60,
      healthcare: 65,
      workLifeBalance: 90,
    },
  },
]

// Update Mexico City pricing and packages
const mexicoCity = remoteCasaDestinations.find((d) => d.id === 1)
if (mexicoCity) {
  mexicoCity.startingPrice = "$1,499"
  mexicoCity.startingPriceNumeric = 1499
  mexicoCity.packages = [
    {
      id: 101,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Mexico City with all the basics covered.",
      included: [
        "Private apartment in Roma or Condesa",
        "Dedicated workspace with ergonomic chair",
        "High-speed fiber internet",
        "Airport pickup",
        "Welcome dinner",
        "City tour",
        "24/7 travel support",
      ],
    },
    {
      id: 102,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Mexico City experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Spanish language crash course",
        "2 additional guided experiences",
        "Networking event with local professionals",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Medellín pricing and packages
const medellin = remoteCasaDestinations.find((d) => d.id === 2)
if (medellin) {
  medellin.startingPrice = "$1,499"
  medellin.startingPriceNumeric = 1499
  medellin.packages = [
    {
      id: 103,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Medellín with all the basics covered.",
      included: [
        "Private apartment in El Poblado",
        "Dedicated workspace with ergonomic chair",
        "High-speed fiber internet",
        "Airport pickup",
        "Welcome dinner",
        "City tour",
        "24/7 travel support",
      ],
    },
    {
      id: 104,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Medellín experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Spanish language crash course",
        "2 additional guided experiences (Comuna 13, Guatapé)",
        "Networking event with local professionals",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Buenos Aires pricing and packages
const buenosAires = remoteCasaDestinations.find((d) => d.id === 3)
if (buenosAires) {
  buenosAires.startingPrice = "$1,499"
  buenosAires.startingPriceNumeric = 1499
  buenosAires.packages = [
    {
      id: 105,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Buenos Aires with all the basics covered.",
      included: [
        "Private apartment in Palermo or Recoleta",
        "Dedicated workspace with ergonomic chair",
        "High-speed fiber internet",
        "Airport pickup",
        "Welcome dinner",
        "City tour",
        "24/7 travel support",
      ],
    },
    {
      id: 106,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Buenos Aires experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Spanish language crash course",
        "Tango class experience",
        "San Telmo market tour",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Bogotá pricing and packages
const bogota = remoteCasaDestinations.find((d) => d.id === 4)
if (bogota) {
  bogota.startingPrice = "$1,499"
  bogota.startingPriceNumeric = 1499
  bogota.priceUnit = "month"
  bogota.packages = [
    {
      id: 107,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Bogotá with all the basics covered.",
      included: [
        "Private accommodation in Chapinero or Usaquén",
        "Dedicated workspace with ergonomic chair",
        "High-speed fiber internet",
        "Airport pickup",
        "Welcome dinner",
        "City tour including Monserrate",
        "24/7 travel support",
      ],
    },
    {
      id: 108,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Bogotá experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Spanish language crash course",
        "Day trip to Salt Cathedral of Zipaquirá",
        "Coffee tasting experience",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Santa Marta pricing and packages
const santaMarta = remoteCasaDestinations.find((d) => d.id === 5)
if (santaMarta) {
  santaMarta.startingPrice = "$1,499"
  santaMarta.startingPriceNumeric = 1499
  santaMarta.priceUnit = "month"
  santaMarta.packages = [
    {
      id: 109,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Santa Marta with all the basics covered.",
      included: [
        "Private accommodation near the beach",
        "Dedicated workspace with ocean views",
        "High-speed internet",
        "Airport pickup",
        "Welcome dinner",
        "Guided tour of Tayrona National Park",
        "24/7 travel support",
      ],
    },
    {
      id: 110,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Santa Marta experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Lost City trek option",
        "Beach club access",
        "Sunset sailing experience",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Cancun pricing and packages
const cancun = remoteCasaDestinations.find((d) => d.id === 6)
if (cancun) {
  cancun.startingPrice = "$1,499"
  cancun.startingPriceNumeric = 1499
  cancun.packages = [
    {
      id: 111,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Cancun with all the basics covered.",
      included: [
        "Private accommodation near the beach",
        "Dedicated workspace with ocean views",
        "High-speed internet",
        "Airport pickup",
        "Welcome dinner",
        "Guided tour of Chichen Itza",
        "24/7 travel support",
      ],
    },
    {
      id: 112,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Cancun experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Cenotes tour",
        "Isla Mujeres day trip",
        "Beach club access",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Santa Marta (Sandcastle) pricing and packages
const santaMartaSandcastle = remoteCasaDestinations.find((d) => d.id === 7)
if (santaMartaSandcastle) {
  santaMartaSandcastle.startingPrice = "$1,499"
  santaMartaSandcastle.startingPriceNumeric = 1499
  santaMartaSandcastle.packages = [
    {
      id: 113,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Santa Marta with all the basics covered.",
      included: [
        "Private beachside accommodation",
        "Dedicated workspace with ocean views",
        "High-speed internet",
        "Airport pickup",
        "Welcome dinner",
        "Guided tour of Tayrona Park",
        "24/7 travel support",
      ],
    },
    {
      id: 114,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Santa Marta experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Lost City trek option",
        "Beach club access",
        "Sunset sailing experience",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Cartagena pricing and packages
const cartagena = remoteCasaDestinations.find((d) => d.id === 8)
if (cartagena) {
  cartagena.startingPrice = "$1,499"
  cartagena.startingPriceNumeric = 1499
  cartagena.packages = [
    {
      id: 115,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Cartagena with all the basics covered.",
      included: [
        "Private accommodation in or near the walled city",
        "Dedicated workspace",
        "High-speed internet",
        "Airport pickup",
        "Welcome dinner",
        "Guided tour of the Walled City",
        "24/7 travel support",
      ],
    },
    {
      id: 116,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Cartagena experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Rosario Islands day trip",
        "Getsemani neighborhood tour",
        "Beach club access",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}

// Update Tulum pricing and packages
const tulum = remoteCasaDestinations.find((d) => d.id === 9)
if (tulum) {
  tulum.startingPrice = "$1,499"
  tulum.startingPriceNumeric = 1499
  tulum.packages = [
    {
      id: 117,
      name: "Basic Package",
      price: "$1,499",
      duration: "1 month",
      description: "Essential workation experience in Tulum with all the basics covered.",
      included: [
        "Private accommodation near the beach or in town",
        "Dedicated workspace",
        "High-speed internet",
        "Airport pickup",
        "Welcome dinner",
        "Guided tour of Tulum Ruins",
        "24/7 travel support",
      ],
    },
    {
      id: 118,
      name: "Premium Package",
      price: "$1,999",
      duration: "1 month",
      description: "Enhanced Tulum experience with premium amenities and additional activities.",
      included: [
        "All Basic Package inclusions",
        "Weekly cleaning service",
        "Cenotes tour",
        "Sian Ka'an biosphere reserve trip",
        "Beach club access",
        "Premium workspace setup",
        "Local SIM card with data",
      ],
    },
  ]
}
