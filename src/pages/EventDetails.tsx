import { useParams } from "react-router-dom"
import { events } from "../data/events"
import { useState } from "react"
import "../styles/EventDetails.css"

function EventDetails() {
  const { id } = useParams()
  const event = events.find(e => e.id === id)

  const [currentImage, setCurrentImage] = useState(0)

  if (!event) {
    return <h2 className="event-not-found">Event not found</h2>
  }

  const nextImage = () => {
    setCurrentImage(prev =>
      prev === event.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage(prev =>
      prev === 0 ? event.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="event-details-page">

      <div className="event-details-container">

        {/* TITLE */}
        <div className="event-header">
          <h1>{event.title}</h1>
          <p className="event-subtitle">{event.description}</p>
        </div>

        {/* SLIDER */}
        <div className="event-slider">

          <div className="event-slider-wrapper">
            <img
              key={currentImage}
              src={event.images[currentImage]}
              alt={event.title}
              className="event-slider-image"
            />

            <button
              className="slider-arrow left"
              onClick={prevImage}
            >
              ◀
            </button>

            <button
              className="slider-arrow right"
              onClick={nextImage}
            >
              ▶
            </button>
          </div>

          {/* DOTS */}
          <div className="slider-dots">
            {event.images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>

        </div>

        {/* CONTENT */}
        <div className="event-content">
          <p>{event.content}</p>
        </div>

      </div>
    </div>
  )
}

export default EventDetails
