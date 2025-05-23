import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pmiLogo from '../../../assets/images/pmi_logo_white.png';
import RedButton from '../../../components/buttons/RedButton';
import RedOutlineButton from '../../../components/buttons/RedOutlineButton';

// Import logo bank
import mandiriLogo from '../../../assets/images/mandiri.png';
import briLogo from '../../../assets/images/bri.png';
import bniLogo from '../../../assets/images/bni.png';
import banklainLogo from '../../../assets/images/banklain.png';

// Helper untuk menampilkan logo metode pembayaran
const bankLogos = {
  mandiri: mandiriLogo,
  bri: briLogo,
  bni: bniLogo,
  banklain: banklainLogo,
};

const MoneyDonateVA = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nominal, metode } = location.state || { nominal: 100000, metode: { type: 'va', option: 'mandiri' } };
  
  // Order ID statis dan VA number
  const orderId = "#5640-1747982773";
  const vaNumber = "8277345678901";
  
  // Countdown timer
  const [countdown, setCountdown] = useState(14 * 60 + 8); // 14:08 in seconds
  
  // State untuk dropdown cara bayar
  const [isCaraBayarOpen, setIsCaraBayarOpen] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format countdown to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get bank name display
  const getBankName = () => {
    if (!metode || !metode.option) return "Virtual Account";
    
    const bankMap = {
      'mandiri': 'Bank Mandiri',
      'bri': 'Bank BRI',
      'bni': 'Bank BNI',
      'banklain': 'Bank Lainnya'
    };
    
    return bankMap[metode.option] || "Virtual Account";
  };

  // Handler untuk tombol Salin Nomor VA
  const handleSalinVA = () => {
    navigator.clipboard.writeText(vaNumber);
    alert("Nomor Virtual Account berhasil disalin ke clipboard");
  };
  
  // Handler untuk tombol Cek Status
  const handleCekStatus = () => {
    alert("Status pembayaran: Menunggu pembayaran");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F7F3F5] py-12 px-4">
      <div className="flex flex-col items-center w-full max-w-[660px] bg-white shadow-md">
        {/* Header with PMI Logo */}
        <div className="flex flex-col items-start w-full p-8 bg-[#D60100]">
          <img src={pmiLogo} alt="PMI Kota Surakarta" className="h-9" />
        </div>
        
        {/* VA Content */}
        <div className="flex flex-col items-center w-full px-8 py-6 gap-4">
          {/* Amount & Order ID */}
          <div className="flex flex-col items-center mb-2">
            <h1 className="text-5xl font-bold text-[#333]">Rp{nominal.toLocaleString('id-ID')}</h1>
            <div className="mt-4" />
            <p className="text-sm text-gray-500 cursor-pointer" 
               onClick={() => {navigator.clipboard.writeText(orderId); alert("Order ID disalin ke clipboard");}}
            >
              Order ID {orderId}
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div className="w-full bg-gray-100 p-3 text-center mb-2">
            <p className="text-base font-medium">Bayar dalam {formatTime(countdown)}</p>
          </div>
          
          {/* Payment Method */}
          <div>
            {metode.option && bankLogos[metode.option] && (
              <img src={bankLogos[metode.option]} alt={getBankName()} className="h-8 object-contain" />
            )}
          </div>
          
          {/* Virtual Account Number */}
          <div className="w-full border border-gray-300 rounded-lg p-4 mb-4">
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-1">Nomor Virtual Account</p>
              <p className="text-xl font-bold">{vaNumber}</p>
              <button className="mt-2 text-blue-600 text-sm" onClick={handleSalinVA}>Salin</button>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="w-full mb-4">
            <div 
              className="flex items-center gap-2 text-[#4A73E0] cursor-pointer w-full mb-2"
              onClick={() => setIsCaraBayarOpen(!isCaraBayarOpen)}
            >
              <span className="w-6 h-6 rounded-full bg-[#4A73E0] flex items-center justify-center text-white text-xs font-bold">?</span>
              <p className="font-medium">Cara bayar</p>
              <span className="text-lg transition-transform duration-200" style={{ transform: isCaraBayarOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </div>
            
            {isCaraBayarOpen && (
              <div className="bg-gray-50 p-4 rounded-lg mb-2 border border-gray-200">
                <div className="mb-2">
                  <div className="font-semibold mb-1">Step 1</div>
                  <p>Login ke Internet Banking / Mobile Banking {getBankName()}</p>
                </div>
                <div className="mb-2">
                  <div className="font-semibold mb-1">Step 2</div>
                  <p>Pilih menu Transfer {'->'} Virtual Account</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Step 3</div>
                  <p>Masukkan nomor VA dan konfirmasi pembayaran</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <hr className="border-[2.5px] border-[#E1E1E1] w-[610px] my-1" />
        
        {/* Action Buttons */}
        <div className="flex flex-col items-center w-full p-8 gap-4">
          <RedOutlineButton 
            className="w-full"
            onClick={handleSalinVA}
          >
            Salin Nomor VA
          </RedOutlineButton>
          <RedOutlineButton 
            className="w-full"
            onClick={handleCekStatus}
          >
            Cek Status
          </RedOutlineButton>
          <RedButton 
            className="w-full"
            onClick={() => navigate('/donasi')}
          >
            Keluar dari Halaman Pembayaran
          </RedButton>
        </div>
      </div>
    </div>
  );
};

export default MoneyDonateVA; 