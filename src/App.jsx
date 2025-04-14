import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import EditCarousel from './pages/news/admin/ArticleList/EditCarousel';
import EditArticle from './pages/news/admin/ArticleList/EditArticle';
import ArticleForm from './pages/news/admin/ArticleEdit/ArticleForm';

import Homepage from './pages/homepage/Homepage';
import ClientNews from './pages/news/client/ClientNews';
import AboutUs from './pages/about_us/AboutUs';
import ArticleDetails from './pages/article_details/ArticleDetails';
import AdminNews from './pages/news/admin/AdminNews';
import UserProfile from './pages/user_profile/UserProfile';
import EditProfile from './pages/user_profile/EditProfile';
import AuthIndex from './pages/authentication/AuthIndex';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className='bg-[#F7F3F5]'>
          <Routes>
            {/* Authentication */}
            <Route path='/auth' element={ <AuthIndex /> } />

            {/* Admin */}
            {/* Edit Artikel */}
            <Route path="/admin-news" element={ <AdminNews /> } />
            <Route path="/admin-news/form" element={ <ArticleForm /> } />


            {/* Client */}
            {/* Beranda Page */}
            <Route path="/" element={ <Homepage /> } />

            {/* Donor Darah Page */}

            {/* Layanan Ambulance Page */}

            {/* Portal Info Page */}

            {/* Berita Page */}
            <Route path='/news' element={ <ClientNews /> } />
            <Route path="/news/article/:id" element={ <ArticleDetails /> } />

            {/* Tentang Kami Page */}
            <Route path='/about-us' element={ <AboutUs /> } />

            {/* User Profile Pages */}
            <Route path="/profile" element={ <UserProfile /> } />
            <Route path="/profile/:userId" element={ <UserProfile /> } />
            <Route path="/profile/edit/:userId" element={ <EditProfile /> } />
            <Route path="/profile/edit" element={ <EditProfile /> } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
