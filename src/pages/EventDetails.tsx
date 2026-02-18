import { useParams } from "react-router-dom"
import { events } from "../data/events"
import { useState } from "react"

function EventDetails() {
  const { id } = useParams()
  const event = events.find(e => e.id === id)

  const [currentImage, setCurrentImage] = useState(0)

  if (!event) {
    return <h2>Event not found</h2>
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === event.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? event.images.length - 1 : prev - 1
    )
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{event.title}</h1>
      <p style={{ marginBottom: "30px" }}>{event.content}</p>

      <div style={{ textAlign: "center" }}>
        <button onClick={prevImage}>◀</button>

        <img
          src={event.images[currentImage]}
          alt="event"
          style={{
            width: "600px",
            height: "400px",
            objectFit: "cover",
            margin: "0 20px"
          }}
        />

        <button onClick={nextImage}>▶</button>
      </div>
    </div>
  )
}

export default EventDetails