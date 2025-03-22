import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainContent from './components/MainContent/MainContent';
import EditCarousel from './components/ArticleList/EditCarousel';
import EditArticle from './components/ArticleList/EditArticle';
import DetailArticle from './components/DetailArticle/DetailArticle';
import ArticleForm from './components/ArticleEdit/ArticleForm';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            {/* Beranda Page */}
            <Route path="/" element={<MainContent />} />
            <Route path="/article/:id" element={<DetailArticle />} />

            {/* Donor Darah Page */}

            {/* Layanan Ambulance Page */}

            {/* Portal Info Page */}

            {/* Berita Page */}
            <Route path="/berita" element={
              <div>
                <EditCarousel />
                <EditArticle />
              </div>
            } />
            <Route path="/berita/form" element={ <ArticleForm /> } />

            {/* Tentang Kami Page */}
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
