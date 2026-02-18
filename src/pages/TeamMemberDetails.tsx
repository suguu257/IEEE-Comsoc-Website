import { useParams } from "react-router-dom"
import { team } from "../data/team"

function TeamMemberDetails() {
  const { id } = useParams()

  const member = team.find(m => m.id === id)

  if (!member) {
    return <h2>Member not found</h2>
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px"
        }}
      />

      <h1>{member.name}</h1>
      <h3>{member.role}</h3>
      <p>{member.year}</p>
      <p>{member.bio}</p>
    </div>
  )
}

export default TeamMemberDetails