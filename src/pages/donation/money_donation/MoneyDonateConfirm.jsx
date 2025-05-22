import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import RedButton from '../../../components/buttons/RedButton';
import GreyButton from '../../../components/buttons/GreyButton';

// Import gambar logo pembayaran secara statis
import gopayLogo from '../../../assets/images/gopay.png';
import danaLogo from '../../../assets/images/dana.png';
import ovoLogo from '../../../assets/images/ovo.png';
import linkajaLogo from '../../../assets/images/linkaja.png';
import mandiriLogo from '../../../assets/images/mandiri.png';
import briLogo from '../../../assets/images/bri.png';
import bniLogo from '../../../assets/images/bni.png';
import banklainLogo from '../../../assets/images/banklain.png';

// Helper untuk menampilkan logo metode pembayaran
const paymentLogos = {
  gopay: gopayLogo,
  dana: danaLogo,
  ovo: ovoLogo,
  linkaja: linkajaLogo,
  mandiri: mandiriLogo,
  bri: briLogo,
  bni: bniLogo,
  banklain: banklainLogo,
};

const MoneyDonateConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const donor = location.state?.donor || {};
  const donasiList = location.state?.donasiList || [];
  const metode = location.state?.metode || {};
  const nominal = location.state?.nominal || 0;

  // Nama metode pembayaran
  let metodeLabel = '-';
  let metodeLogo = null;
  if (metode.type === 'qris') {
    if (metode.option) {
      metodeLabel = metode.option.charAt(0).toUpperCase() + metode.option.slice(1);
      metodeLogo = paymentLogos[metode.option];
    } else {
      metodeLabel = 'QRIS E-Wallet';
    }
  } else if (metode.type === 'va') {
    if (metode.option) {
      metodeLabel = metode.option.charAt(0).toUpperCase() + metode.option.slice(1);
      metodeLogo = paymentLogos[metode.option];
    } else {
      metodeLabel = 'Virtual Account';
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F7F3F5] font-inter py-8">
      <div className="w-full flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold text-[#872427] mb-2 text-center">Konfirmasi Donasi</h1>
        <h2 className="text-xl font-semibold text-black text-center">Tinjau Rincian Donasi Anda</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-[0_4px_10px_rgba(135,36,39,0.3)] px-12 py-10 w-full max-w-[600px] flex flex-col items-center gap-6">
        {/* Total Donasi */}
        <div className="flex flex-col items-center mb-2">
          <span className="text-base text-black">Total Donasi</span>
          <span className="text-3xl font-bold text-[#872427]">Rp {nominal.toLocaleString('id-ID')}</span>
        </div>
        {/* Data Donatur & Metode Pembayaran */}
        <div className="w-full flex flex-row justify-between mb-2">
          <div className="flex flex-col gap-2 text-[15px] text-[#222]">
            <div>Nama Donatur</div>
            <div>Kategori Donasi</div>
            <div>Metode Pembayaran</div>
          </div>
          <div className="flex flex-col gap-2 text-[15px] text-right text-[#222] font-semibold">
            <div>{donor.nama || '-'}</div>
            <div>{donor.kategori || '-'}</div>
            <div className="flex items-center justify-end gap-2">
              {metodeLogo && <img src={metodeLogo} alt={metodeLabel} className="h-6" />}
            </div>
          </div>
        </div>
        <hr className="border-[#E1E1E1] w-full my-2" />
        {/* Detail Donasi */}
        <div className="w-full flex flex-col gap-2">
          {donasiList.map((donasi, idx) => (
            <div key={donasi.id} className="mb-2">
              <div className="font-bold">Donasi {idx + 1}</div>
              <div className="flex flex-row justify-between text-[15px]">
                <span>Tujuan Donasi</span>
                <span className="text-right">{donasi.title}</span>
              </div>
              <div className="flex flex-row justify-between text-[15px]">
                <span>Jumlah Donasi</span>
                <span className="text-right">Rp {(parseInt((donasi.nominalText||'').replace(/\D/g, '')) * (parseInt(donasi.jumlah)||1)).toLocaleString('id-ID')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tombol Aksi */}
      <div className="flex flex-row gap-6 mt-8 w-full max-w-[600px] justify-between">
        <GreyButton className="flex-1 h-[46px] text-[16px] font-bold rounded-2xl border-[#7A7A7A]" onClick={() => navigate(-1)}>
          Kembali
        </GreyButton>
        <RedButton className="flex-1 h-[46px] text-[16px] font-bold rounded-2xl" onClick={() => alert('Donasi diselesaikan!')}>
          Lanjutkan Donasi
        </RedButton>
      </div>
    </div>
  );
};

export default MoneyDonateConfirm; 