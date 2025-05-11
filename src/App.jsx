import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SecondaryColor } from './themes/color_palletes/ColorPalletes';

import Navbar from './components/navbar/main_navbar/Navbar';
import Footer from './components/footer/Footer';

import Homepage from './pages/homepage/Homepage';

import Profile from './pages/profile/Profile';

import News from './pages/news/News';
import ArticleDetails from './pages/news/ArticleDetails';

import ProceduresRequirements from './pages/blood_donation/procedures_requirements/ProceduresRequirements';
import BloodStock from './pages/blood_donation/blood_stock/BloodStock';
import Schedule from './pages/blood_donation/schedule/Schedule';
import Apheresis from './pages/blood_donation/apheresis/Apheresis';

import PMR from './pages/volunteers/pmr/PMR';
import Satgana from './pages/volunteers/satgana/Satgana';

import PratamaClinic from './pages/health_services/pratama_clinic/PratamaClinic';

import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main style={{ backgroundColor: SecondaryColor.white_greyish }}>
          <Routes>
            {/* Homepage Route */}
            <Route path='/' element={ <Homepage /> } />

            {/* Profil Route */}
            <Route path='/profile' element={ <Profile /> } />

            {/* News and Article Details Route */}
            <Route path='/news' element={ <News /> } />
            <Route path='/news/article/:id' element={ <ArticleDetails /> } />

            {/* Donor Darah Route */}
            <Route path='/prosedur-syarat-donor-darah' element={ <ProceduresRequirements /> } />
            <Route path='/stok-darah' element={ <BloodStock /> } />
            <Route path='/jadwal' element={ <Schedule /> } />
            <Route path='/apheresis' element={ <Apheresis /> } />

            {/* Relawan Route */}
            <Route path='/pmr' element={ <PMR /> } />
            <Route path='/satgana' element={ <Satgana /> } />

            {/* Yankes Route */}
            <Route path='/klinik-pratama' element={ <PratamaClinic /> } />

            {/* Contact Route */}
            <Route path='/contact' element={ <Contact /> } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
