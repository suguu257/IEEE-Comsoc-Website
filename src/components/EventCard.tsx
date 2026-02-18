import { Link } from "react-router-dom"
import type { Event } from "../data/events"

type Props = {
  event: Event
}

function EventCard({ event }: Props) {

  if (!event) return null   // safety guard

  const category = event.title.includes("Hack")
    ? "Hackathon"
    : "Expo"

  return (
    <div className="event-card fade-in">

      <div className="event-top-accent" />

      <span className="event-tag">{category}</span>

      <div className="event-image-wrapper">
        <img src={event.images[0]} alt={event.title} />
      </div>

      <div className="event-card-content">
        <h2>{event.title}</h2>
        <p>{event.description}</p>

        <Link to={`/events/${event.id}`} className="event-btn">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default EventCard
