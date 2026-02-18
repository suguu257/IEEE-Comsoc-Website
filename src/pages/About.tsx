import '../styles/About.css'

function About() {
  return (
    <div className="about-page">

      {/* HERO INTRO */}
      <section className="about-hero">
    <div className="about-hero-content">
      <h1>About IEEE Communications Society</h1>

      <p className="about-subtext">
        IEEE ComSoc is a student-led technical community dedicated to advancing
        communication technologies, intelligent networking systems,
        and the future of global connectivity.
      </p>
    </div>
  </section>
      {/* MISSION & VISION */}
      <section className="about-section">
        <div className="about-grid">

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              To advance communication technologies and empower students to innovate
              in networking, wireless systems, embedded intelligence, and digital connectivity.
            </p>
            <p>
              We cultivate an ecosystem of research, experimentation, and collaboration
              that prepares students for real-world engineering challenges.
            </p>
          </div>

          <div className="about-card">
            <h2>Our Vision</h2>
            <p>
              To build the next generation of communication engineers through
              technical excellence, leadership development, and industry engagement.
            </p>
            <p>
              We envision becoming a leading technical chapter recognized for
              innovation, impact, and community-driven growth.
            </p>
          </div>

        </div>
      </section>

      {/* HISTORY */}
      <section className="about-section">
        <h2>Our Journey</h2>
        <p>
          Founded to create a platform for students passionate about communication
          systems, IEEE ComSoc has evolved into a hub of innovation and collaboration.
        </p>
        <p>
          Over the years, we have hosted national hackathons, Riviera Expos,
          technical workshops, research seminars, and industry collaborations
          that bridge academia with real-world application.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>

        <div className="what-we-do-grid">
          <div className="what-card">
            <h3>Workshops & Hackathons</h3>
            <p>Hands-on technical events focused on communication and embedded systems.</p>
          </div>

          <div className="what-card">
            <h3>Innovation Expos</h3>
            <p>Showcasing student-led research and next-gen prototypes.</p>
          </div>

          <div className="what-card">
            <h3>Industry Collaboration</h3>
            <p>Connecting students with experts and emerging technologies.</p>
          </div>

          <div className="what-card">
            <h3>Research & Projects</h3>
            <p>Encouraging problem-solving and real-world engineering solutions.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
