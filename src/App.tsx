import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import AuroraDemo from './components/AuroraBackground/AuroraDemo';
import { AuroraProvider } from './components/AuroraBackground/AuroraContext';
import './App.scss';

function App() {
  return (
    <AuroraProvider>
      <Routes>
        {/* Aurora Demo - Standalone page */}
        <Route path="/aurora-demo" element={<AuroraDemo />} />

        {/* Main Layout Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AuroraProvider>
  );
}

export default App;

