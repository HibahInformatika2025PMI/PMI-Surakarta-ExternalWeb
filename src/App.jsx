import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SecondaryColor } from './themes/color_palletes/ColorPalletes';

import Navbar from './components/navbar/main_navbar/Navbar';
import Footer from './components/footer/Footer';

import Homepage from './pages/homepage/Homepage';
import Profile from './pages/profile/Profile';
import News from './pages/news/News';
import Article_Details from './pages/news/ArticleDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main style={{ backgroundColor: SecondaryColor.white_greyish }}>
          <Routes>
            <Route path='/' element={ <Homepage /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/news' element={ <News /> } />
            <Route path='/news/article/:id' element={ <Article_Details /> } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
