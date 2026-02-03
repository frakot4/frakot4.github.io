
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/gabarit/navbar';
import Footer from './components/gabarit/footer';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import ExperienceDetails from './components/pages/ExperienceDetails';
import Projects from './components/pages/Projects';
import Skills from './components/pages/skills';

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:id" element={<ExperienceDetails />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Home />
      <Footer />
    </div>
  )
}

export default App
