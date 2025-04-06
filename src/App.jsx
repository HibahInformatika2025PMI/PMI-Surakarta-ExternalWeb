import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

import EditCarousel from './pages/admin/ArticleList/EditCarousel';
import EditArticle from './pages/admin/ArticleList/EditArticle';
import ArticleForm from './pages/admin/ArticleEdit/ArticleForm';

import Homepage from './pages/client/Homepage';
import News from './pages/client/News/News';
import DetailArticle from './pages/client/DetailArticle/DetailArticle';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className='bg-[#F7F3F5]'>
          <Routes>
            {/* Admin */}
            {/* Edit Artikel */}
            <Route path="/admin-news" element={
              <div>
                <EditCarousel />
                <EditArticle />
              </div>
            } />
            <Route path="/admin-news/form" element={ <ArticleForm /> } />


            {/* Client */}
            {/* Beranda Page */}
            <Route path="/" element={<Homepage />} />

            {/* Donor Darah Page */}

            {/* Layanan Ambulance Page */}

            {/* Portal Info Page */}

            {/* Berita Page */}
            <Route path='/news' element={<News />} />
            <Route path="/news/article/:id" element={<DetailArticle />} />

            {/* Tentang Kami Page */}
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
