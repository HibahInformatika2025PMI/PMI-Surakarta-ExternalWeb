import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavbarWrapper from './components/navbar/NavbarWrapper'
import Footer from './components/footer/Footer'

import Homepage from './pages/homepage/Homepage'

import Profile from './pages/profile/Profile'

import News from './pages/news/News'
import ArticleDetails from './pages/news/ArticleDetails'

import ProceduresRequirements from './pages/blood_donation/procedures_requirements/ProceduresRequirements'
import BloodStock from './pages/blood_donation/blood_stock/BloodStock'
import Schedule from './pages/blood_donation/schedule/Schedule'
import Apheresis from './pages/blood_donation/apheresis/Apheresis'

import PMR from './pages/volunteers/pmr/PMR'
import Satgana from './pages/volunteers/satgana/Satgana'

import PratamaClinic from './pages/health_services/pratama_clinic/PratamaClinic'

import Training from './pages/education/training/Training'

import Contact from './pages/contact/Contact'

import Home from './pages/donation/home/Home'
import FAQ from './pages/donation/faq/FAQ'
import MoneyDonate from './pages/donation/money_donation/MoneyDonate'
import MonetaryDonation from './pages/donation/money_donation/MonetaryDonation'
import ItemDonate from './pages/donation/items_donation/ItemDonate'
import ItemDonateForm from './pages/donation/items_donation/ItemDonateForm'
import ItemsDonation from './pages/donation/items_donation/ItemsDonation'
import ItemDonateConfirm from './pages/donation/items_donation/ItemDonateConfirm'
import ItemDonateDone from './pages/donation/items_donation/ItemDonateDone'
import MoneyDonateForm from './pages/donation/money_donation/MoneyDonateForm'
import MoneyDonateConfirm from './pages/donation/money_donation/MoneyDonateConfirm'
import MoneyDonateQRIS from './pages/donation/money_donation/MoneyDonateQRIS'
import MoneyDonateVA from './pages/donation/money_donation/MoneyDonateVA'

import { SecondaryColor } from './themes/color_palletes/ColorPalletes'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWrapper />

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

            {/* Pendidikan Route */}
            <Route path='/pelatihan' element={ <Training /> } />

            {/* Contact Route */}
            <Route path='/contact' element={ <Contact /> } />

            {/* Donation Route */}
            <Route path='/donasi' element={ <Home /> } />
            {/* <Route path='/donasi/donasi-uang' element={ <MonetaryDonation /> } /> */}
            <Route path='/donasi/donasi-uang' element={ <MoneyDonate /> } />
            {/* <Route path='/donasi/donasi-barang' element={ <ItemsDonation /> } /> */}
            <Route path='/donasi/donasi-barang' element={ <ItemDonate /> } />
            <Route path='/donasi/donasi-barang/form' element={ <ItemDonateForm /> } />
            <Route path='/donasi/donasi-barang/form/confirm' element={ <ItemDonateConfirm /> } />
            <Route path='/donasi/donasi-barang/form/confirm/done' element={ <ItemDonateDone /> } />
            <Route path='/donasi/donasi-uang/form' element={ <MoneyDonateForm /> } />
            <Route path='/donasi/donasi-uang/form/confirm' element={ <MoneyDonateConfirm /> } />
            <Route path='/donasi/uang/qris' element={ <MoneyDonateQRIS /> } />
            <Route path='/donasi/uang/va' element={ <MoneyDonateVA /> } />

            <Route path='/donasi/laporan' element={ <Home /> } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
