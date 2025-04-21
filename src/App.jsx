import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import ArticleForm from './pages/news/admin/ArticleEdit/ArticleForm';
import ClientNews from './pages/news/client/ClientNews';
import AdminNews from './pages/news/admin/AdminNews';

import ArticleDetails from './pages/article_details/ArticleDetails';

import Homepage from './pages/homepage/Homepage';

import AboutUs from './pages/about_us/AboutUs';

import UserProfile from './pages/user_profile/UserProfile';
import EditProfile from './pages/user_profile/EditProfile';

import AuthIndex from './pages/authentication/AuthIndex';

function App() {
  return (
    <Router>
      <div className="App">
        <main className='bg-[#F7F3F5]'>
          <Routes>
            <Route path='/' element={ <Homepage /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
