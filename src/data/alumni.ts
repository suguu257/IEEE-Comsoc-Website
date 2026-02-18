export type Alumni = {
  id: string
  name: string
  graduationYear: string
  currentRole: string
  bio: string
  image: string
  linkedin: string
}

export const alumni: Alumni[] = [
  {
    id: "ananya-sharma",
    name: "Ananya Sharma",
    graduationYear: "2022",
    currentRole: "Software Engineer at Google",
    bio: "Worked on scalable backend systems and AI-driven platforms during her time at IEEE ComSoc.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    id: "rahul-verma",
    name: "Rahul Verma",
    graduationYear: "2021",
    currentRole: "Network Engineer at Cisco",
    bio: "Specialized in networking protocols and distributed systems research.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    linkedin: "https://linkedin.com"
  },
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    graduationYear: "2020",
    currentRole: "AI Research Associate at Microsoft",
    bio: "Focused on machine learning models for communication systems optimization.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    linkedin: "https://linkedin.com"
  }
]