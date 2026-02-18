import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Alumni from './pages/Alumni'
import Team from './pages/Team'
import EventDetails from './pages/EventDetails'  
import TeamMemberDetails from "./pages/TeamMemberDetails"
import './styles/App.css'
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
         <Route path="/team" element={<Team />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/team/:id" element={<TeamMemberDetails />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App