import EventCard from "../components/EventCard"
import { events } from "../data/events"
import "../styles/Events.css"

function Events() {
  console.log(events)
  return (
    <div className="events-page">
      <h1>Our Events</h1>

      <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default Events
