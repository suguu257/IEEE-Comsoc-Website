import { useState } from "react"
import type { Alumni } from "../data/alumni"

type AlumniCardProps = {
  alumni: Alumni
}

function AlumniCard({ alumni }: AlumniCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="alumni-card">

      <a 
        href={alumni.linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="alumni-link"
      >
        <img src={alumni.image} alt={alumni.name} />
        <h3>{alumni.name}</h3>
      </a>

      <p>Class of {alumni.graduationYear}</p>
      <p>{alumni.currentRole}</p>

      {expanded && <p className="bio">{alumni.bio}</p>}

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read Bio"}
      </button>

    </div>
  )
}

export default AlumniCard