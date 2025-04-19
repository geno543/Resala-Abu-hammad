import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="donate" element={<Donate />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;