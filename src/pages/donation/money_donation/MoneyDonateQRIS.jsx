import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import pmiLogo from '../../../assets/images/pmi_logo_white.png';
import qrCode from '../../../assets/images/qr_code.png';
import RedButton from '../../../components/buttons/RedButton';
import RedOutlineButton from '../../../components/buttons/RedOutlineButton';

// Import logo metode pembayaran
import gopayLogo from '../../../assets/images/gopay.png';
import danaLogo from '../../../assets/images/dana.png';
import ovoLogo from '../../../assets/images/ovo.png';
import linkajaLogo from '../../../assets/images/linkaja.png';

// Helper untuk logo metode pembayaran
const paymentLogos = {
  gopay: gopayLogo,
  dana: danaLogo,
  ovo: ovoLogo,
  linkaja: linkajaLogo,
};

const MoneyDonateQRIS = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nominal, metode } = location.state || { nominal: 100000, metode: { type: 'qris', option: 'ovo' } };
  
  // Order ID statis
  const orderId = "#5640-1747982773";
  
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

  // Determine payment method display name
  const getPaymentMethodDisplay = () => {
    if (!metode || !metode.option) return "QRIS";
    
    const methodName = metode.option.charAt(0).toUpperCase() + metode.option.slice(1);
    return methodName;
  };
  
  // Handler untuk tombol Download QRIS
  const handleDownloadQris = () => {
    alert("QRIS berhasil diunduh");
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
        
        {/* QRIS Content */}
        <div className="flex flex-col items-center w-full px-8 py-6 gap-4">
          {/* Amount & Order ID */}
          <div className="flex flex-col items-center mb-2 w-full">
            <h1 className="text-5xl font-bold text-[#333]">Rp{nominal.toLocaleString('id-ID')}</h1>
            <div className="mt-3 mb-2" />
            <p className="text-base text-gray-500 mt-1 cursor-pointer" 
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
            {metode.option && paymentLogos[metode.option] && (
              <img src={paymentLogos[metode.option]} alt={getPaymentMethodDisplay()} className="h-10 w-25 object-contain" />
            )}
          </div>
          
          {/* QR Code */}
          <div className="flex justify-center w-full my-4">
            <img 
              src={qrCode} 
              alt="QRIS Code" 
              className="w-[300px] h-[300px] object-contain"
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '8px'
              }}
            />
          </div>
          
          {/* "Cara bayar" accordion */}
          <div className="w-full">
            <div 
              className="flex items-center gap-2 text-[#4A73E0] cursor-pointer w-full mt-2 mb-2"
              onClick={() => setIsCaraBayarOpen(!isCaraBayarOpen)}
            >
              <span className="w-6 h-6 rounded-full bg-[#4A73E0] flex items-center justify-center text-white text-xs font-bold">?</span>
              <p className="font-medium">Cara bayar</p>
              <span className="text-lg transition-transform duration-200" style={{ transform: isCaraBayarOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>↓</span>
            </div>
            
            {isCaraBayarOpen && (
              <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                <div className="mb-2">
                  <div className="font-semibold mb-1">Step 1</div>
                  <p>Buka aplikasi {getPaymentMethodDisplay()} di smartphone Anda</p>
                </div>
                <div className="mb-2">
                  <div className="font-semibold mb-1">Step 2</div>
                  <p>Pilih menu Scan QR atau QRIS</p>
                </div>
                <div>
                  <div className="font-semibold mb-1">Step 3</div>
                  <p>Scan QR code di atas dan konfirmasi pembayaran</p>
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
            onClick={handleDownloadQris}
          >
            Download Qris
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

export default MoneyDonateQRIS; 