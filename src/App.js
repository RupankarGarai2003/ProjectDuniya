import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; // ✅ Use HashRouter


// Components
import Header from './components/Header';
import HeroForm from './components/HeroForm';
import Services from './components/Services';
import Stats from './components/Stats';
import Team from './components/Team';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSlider from './components/TestimonialsSlider';
import Hero from './components/Home';
import Footer from './components/Footer';

// Styles
import './styles/Header.css';
import './styles/HeroForm.css';
import './styles/Services.css';
import './styles/Stats.css';
import './styles/Team.css';
import './styles/WhyChooseUs.css';
import './styles/TestimonialsSlider.css';
import './styles/Home.css';
import './styles/Footer.css';

function App() {
  return (
    <Router> {/* ✅ Wrap app in HashRouter for anchor scrolls */}
      <div className="App">
        <Header />
        
        <Hero />
        <HeroForm />
        <Services /> {/* ✅ Ensure this has id="services" in Services.js */}
        <Stats />
        <Team />
        <WhyChooseUs />
        <TestimonialsSlider />
        {/* <FAQs /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
