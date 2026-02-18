import AlumniCard from "../components/AlumniCard"
import { alumni } from "../data/alumni"
import "../styles/Alumni.css"

function Alumni() {
  return (
    <div className="alumni-page">
      <h1>Our Alumni</h1>

      <div className="alumni-grid">
        {alumni.map(person => (
          <AlumniCard key={person.id} alumni={person} />
        ))}
      </div>
    </div>
  )
}

export default Alumni