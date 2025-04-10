import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import EditCarousel from './pages/news/admin/ArticleList/EditCarousel';
import EditArticle from './pages/news/admin/ArticleList/EditArticle';
import ArticleForm from './pages/news/admin/ArticleEdit/ArticleForm';

import Homepage from './pages/homepage/Homepage';
import ClientNews from './pages/news/client/ClientNews';
import ArticleDetails from './pages/article_details/ArticleDetails';

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
            <Route path='/news' element={<ClientNews />} />
            <Route path="/news/article/:id" element={<ArticleDetails />} />

            {/* Tentang Kami Page */}
            
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
