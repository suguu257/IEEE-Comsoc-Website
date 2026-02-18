import { useState } from "react"
import { Link } from "react-router-dom"
import type { TeamMember } from "../data/team"

type Props = {
  member: TeamMember
}

function TeamCard({ member }: Props) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="team-card">
      
      <Link to={`/team/${member.id}`} className="team-link">
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p><strong>{member.role}</strong></p>
        <p>{member.year}</p>
      </Link>

      {expanded && <p className="bio">{member.bio}</p>}

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read Bio"}
      </button>

    </div>
  )
}

export default TeamCard