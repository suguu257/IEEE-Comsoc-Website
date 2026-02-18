export type TeamMember = {
  id: string
  name: string
  role: string
  category: "Board" | "Core" | "Technical"
  bio: string
  year: string
  image: string
}

export const team: TeamMember[] = [
  {
    id: "president",
    name: "President Name",
    role: "President",
    category: "Board",
    year: "Final Year",
    bio: "Leads the chapter, oversees strategy and long-term planning.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "vice-president",
    name: "Vice President Name",
    role: "Vice President",
    category: "Board",
    year: "Final Year",
    bio: "Supports leadership and coordinates internal teams.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "secretary",
    name: "Secretary Name",
    role: "Secretary",
    category: "Board",
    year: "Third Year",
    bio: "Manages documentation and communication.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "co-secretary",
    name: "Co Secretary Name",
    role: "Co Secretary",
    category: "Board",
    year: "Third Year",
    bio: "Manages documentation and communication.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "technical-head",
    name: "Tech Head Name",
    role: "Technical Head",
    category: "Board",
    year: "Third Year",
    bio: "Leads workshops and hackathons.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "design-head",
    name: "Design Head Name",
    role: "Design Head",
    category: "Board",
    year: "Second Year",
    bio: "Handles creative assets and branding.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "management-head",
    name: "Management Head Name",
    role: "Management Head",
    category: "Board",
    year: "Second Year",
    bio: "Handles operations and logistics.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "events-head",
    name: "Events Head Name",
    role: "Events Head",
    category: "Board",
    year: "Second Year",
    bio: "Organizes and coordinates major events.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "finance-head",
    name: "Finance Head Name",
    role: "Finance Head",
    category: "Board",
    year: "Second Year",
    bio: "Manages finances and budgeting.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
]