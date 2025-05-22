/***
 * this component will display the Money Donation for the donation page.
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import pmiGriya3 from '../../../assets/images/pmi_griya3.png'
import { griyaMoneyDonations } from '../../../assets/dummy_api/ExampleGriyaDonation'
import { umumMoneyDonations } from '../../../assets/dummy_api/ExampleUmumDonation'

import GradRedPurpleButton from '../../../components/buttons/GradRedPurpleButton'
import DonationListCard from '../../../components/cards/DonationListCard'
import { SearchBar2 } from '../../../components/shared/SearchBar'
import PopUpMoneyDetail from '../../../components/pop_up/PopUpMoneyDetail'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

const MoneyDonate = () => {
  UseScrollToTop();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('griya');
  const [search, setSearch] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupItem, setPopupItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]); // simpan detail donasi uang

  // Filter data sesuai tab dan pencarian
  const data = activeTab === 'griya' ? griyaMoneyDonations : umumMoneyDonations;
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleCheck = (id) => {
    const dataSource = activeTab === 'griya' ? griyaMoneyDonations : umumMoneyDonations;
    const item = dataSource.find((itm) => itm.id === id);
    if (!checkedItems.includes(id)) {
      setPopupItem(item);
      setPopupOpen(true);
    } else {
      // Uncheck: remove from checkedItems & selectedItems
      setCheckedItems((prev) => prev.filter((itemId) => itemId !== id));
      setSelectedItems((prev) => prev.filter((itm) => itm.id !== id));
    }
  };

  const handleSaveDetail = (detail) => {
    setCheckedItems((prev) => [...prev, detail.id]);
    setSelectedItems((prev) => {
      // replace if already exists
      const filtered = prev.filter((itm) => itm.id !== detail.id);
      return [...filtered, detail];
    });
    setPopupOpen(false);
    setPopupItem(null);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setPopupItem(null);
  };

  const handleLanjutDonasi = () => {
    navigate('/donasi/donasi-uang/form', { state: { items: selectedItems, tab: activeTab } });
  };

  return (
    <div className='min-h-screen flex flex-col bg-[#F7F3F5]'>
      {/* Banner/Header Section */}
      <div className='relative w-full h-[210px]'>
        <img
          src={pmiGriya3}
          alt='PMI Kota Surakarta Malam'
          className='absolute w-full h-full object-cover object-center z-0'
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-[#D60100] via-[#A01837E6] to-[#692F6E66] opacity-90 z-10'></div>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-l from-[#5A24870D] via-[#5A248780] to-[#6A0003D4] opacity-50 z-20'></div>
        <div className='absolute w-full h-full flex items-center justify-end pr-[250px] z-30'>
          <div className='flex flex-col items-end'>
            <h1 className='text-3xl font-bold text-white drop-shadow-lg mb-2 text-right'>
              Daftar Donasi Uang
            </h1>
            <p className='text-lg text-white drop-shadow-md text-right max-w-xl'>
              Salurkan donasi uang untuk mendukung aksi kemanusiaan dan menyelamatkan lebih banyak nyawa.
            </p>
          </div>
        </div>
      </div>
      {/* Tab Switcher & Garis Merah */}
      <div className='w-full max-w-[1180px] mx-auto mt-8'>
        <div className='flex'>
          <button
            className={`px-8 py-3 rounded-t-2xl font-semibold text-lg border-b-0 ${activeTab === 'griya' ? 'bg-gradient-to-b from-[#D60100] to-[#872427] text-white' : 'bg-white text-[#D60100]'}`}
            onClick={() => setActiveTab('griya')}
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            Griya PMI
          </button>
          <button
            className={`px-8 py-3 rounded-t-2xl font-semibold text-lg border-b-0 ${activeTab === 'umum' ? 'bg-gradient-to-b from-[#D60100] to-[#872427] text-white' : 'bg-white text-[#D60100]'}`}
            onClick={() => setActiveTab('umum')}
            style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          >
            Umum
          </button>
        </div>
        <div className='h-1 bg-[#872427] rounded-b-xl w-full'></div>
      </div>
      {/* SearchBar & Filter/Cari */}
      <div className='flex flex-col items-center w-full mt-4 mb-6'>
        <div className='w-full max-w-[1180px]'>
          <SearchBar2
            placeholder={activeTab === 'griya' ? 'Ketik kebutuhan Griya ...' : 'Ketik nama pasien atau kampanye donasi ...'}
            onSearch={setSearch}
          />
        </div>
      </div>
      {/* Info Section (khusus Griya) */}
      {activeTab === 'griya' && (
        <div className='w-full flex flex-col items-center mb-4'>
          <h2 className='text-[#D60100] font-bold text-2xl text-center mb-1'>
            YUK, BANTU GRIYA PMI PEDULI! <span className='font-normal text-base'>- "Satu uluran tanganmu, sejuta harapan bagi mereka."</span>
          </h2>
          <p className='text-black text-lg text-center'>
            Mari bantu penuhi kebutuhan sehari-hari para penghuni Griya PMI Peduli agar mereka bisa menjalani hidup yang lebih layak!
          </p>
        </div>
      )}
      {/* Daftar Donasi */}
      <div className='flex flex-col items-center w-full mb-8'>
        <div className='w-full max-w-[1180px] flex flex-col'>
          {filteredData.length === 0 ? (
            <div className='text-center text-gray-500 py-10'>Tidak ada donasi ditemukan.</div>
          ) : (
            filteredData.map((item) => (
              <DonationListCard
                key={item.id}
                checked={checkedItems.includes(item.id)}
                onCheck={() => handleCheck(item.id)}
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
                progress={item.progress}
                progressText={item.progressText}
                fundText={item.fundText}
                nominalText={item.nominalText}
                onDetail={() => alert('Lihat Detail clicked!')}
                onShare={() => alert('Bagikan clicked!')}
                className="rounded-none border-b border-[#D9D9D9]"
              />
            ))
          )}
        </div>
      </div>
      {/* Button Lanjut Donasi */}
      <div className='flex justify-center mb-12'>
        <GradRedPurpleButton className='w-[300px] h-[46px] text-lg font-semibold rounded-2xl' onClick={handleLanjutDonasi} disabled={selectedItems.length === 0}>
          Lanjut Donasi
        </GradRedPurpleButton>
      </div>
      {/* PopUp Money Detail */}
      <PopUpMoneyDetail
        open={popupOpen}
        onClose={handleClosePopup}
        onSave={handleSaveDetail}
        item={popupItem}
      />
    </div>
  );
};

export default MoneyDonate;