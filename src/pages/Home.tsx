import { events } from "../data/events"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import "../styles/Home.css"

function Home() {

  const lightRef = useRef<HTMLDivElement>(null)

  /* ================= CURSOR ENERGY ================= */
  useEffect(() => {
    const light = lightRef.current
    if (!light) return

    const moveLight = (e: MouseEvent) => {
      light.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
    }

    window.addEventListener("mousemove", moveLight)
    return () => window.removeEventListener("mousemove", moveLight)
  }, [])

  return (
    <div className="home-page">

      {/* ================= INTRO SCREEN ================= */}
      <section className="intro-screen">

        <div ref={lightRef} className="cursor-energy" />

        <div className="intro-logo-wrapper">
          <div className="intro-logo">
            IEEE ComSoc
            <div className="electric-overlay" />
            <div className="sparks-container" />
          </div>
        </div>

        <div className="scroll-indicator">Scroll ↓</div>

      </section>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content glass">

          <h1>Engineering the Future of Connectivity</h1>

          <p>
            IEEE Communications Society empowering innovation in wireless
            systems, embedded intelligence, and next-generation networks.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="btn-outline">
              Explore Events
            </Link>

            <Link to="/about" className="btn-outline">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* REST OF YOUR PAGE UNCHANGED */}

      <section className="home-section">
        <div className="glass about-hero">
          <div className="about-text">
            <h2 className="section-heading">Who We Are</h2>
            <p className="about-lead">
              A student-driven technical chapter building the future of communication technology.
            </p>
            <p>
              IEEE ComSoc creates platforms where students innovate in wireless systems,
              embedded AI, IoT architectures, and next-generation networking.
            </p>
            <p>
              Through expos, hackathons, workshops, and research showcases,
              we bridge academia and industry to cultivate real-world engineers.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-heading">Our Focus Areas</h2>
        <div className="focus-grid">
          <div className="glass focus-card">
            <h3>Wireless Systems</h3>
            <p>Advanced research in modern communication technologies.</p>
          </div>
          <div className="glass focus-card">
            <h3>Embedded AI & IoT</h3>
            <p>Building intelligent and scalable connected systems.</p>
          </div>
          <div className="glass focus-card">
            <h3>5G & Beyond</h3>
            <p>Exploring next-generation networking architectures.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2 className="section-heading">Featured Events</h2>
        <div className="events-grid">
          {events.slice(0, 3).map(event => (
            <EventPreview key={event.id} event={event} />
          ))}
        </div>
        <div className="center">
          <Link to="/events" className="btn-outline">
            View All Events
          </Link>
        </div>
      </section>

      <section className="cta glass">
        <h2>Join IEEE ComSoc</h2>
        <p>
          Be part of a community shaping the future of communication technology.
        </p>
        <button className="btn-filled">
          Become a Member
        </button>
      </section>

    </div>
  )
}

export default Home


/* ================= EVENT PREVIEW ================= */

type Event = {
  id: string
  title: string
  description: string
  images: string[]
}

function EventPreview({ event }: { event: Event }) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex(prev =>
      prev === event.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="glass event-preview">
      <div className="slider">
        <img src={event.images[index]} alt={event.title} />
        <button className="slider-btn" onClick={next}>▶</button>
      </div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`} className="btn-outline small">
        Explore
      </Link>
    </div>
  )
}
