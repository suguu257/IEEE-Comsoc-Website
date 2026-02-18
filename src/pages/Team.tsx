import TeamCard from "../components/TeamCard"
import { team } from "../data/team"
import "../styles/Team.css"

function Team() {
  return (
    <div className="team-page">
      <h1>Our Team</h1>

      <div className="team-grid">
        {team.map(member => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Team