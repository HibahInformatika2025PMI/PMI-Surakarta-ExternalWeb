import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/navbar/main_navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import RedButton from '../../../components/buttons/RedButton';
import GreyButton from '../../../components/buttons/GreyButton';

const ItemDonateConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const donor = location.state?.donor || {};
  const barangList = location.state?.barangList || [];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3F5] font-inter">
      <div className="flex flex-col items-center justify-center flex-1 py-12 px-4" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <div className="flex flex-col items-center w-full" style={{ gap: 48 }}>
          {/* Judul & Subjudul */}
          <div className="flex flex-col items-center" style={{ gap: 16 }}>
            <h1 className="text-[32px] font-bold text-[#872427] leading-[39px]">Konfirmasi Donasi</h1>
            <h2 className="text-[18px] font-semibold text-black leading-[22px]">Tinjau Rincian Donasi Anda</h2>
          </div>
          {/* Card Rincian */}
          <div className="flex flex-col items-center bg-white rounded-2xl shadow-[0_4px_10px_rgba(135,36,39,0.3)] px-16 py-8 w-full max-w-[920px]" style={{ gap: 32 }}>
            {/* Data Donatur */}
            <div className="flex flex-col w-full" style={{ gap: 16 }}>
              <Row label="Nama Donatur" value={donor.nama || '-'} />
              <Row label="Kategori Donasi" value={donor.kategori || '-'} />
              <div className="border-t border-[#E1E1E1] my-2" />
              <Row label="Nama pada Tanda Terima" value={donor.namaKontak || '-'} />
              <Row label="Email" value={donor.email || '-'} />
              <Row label="No Telepon (No WhatsApp)" value={donor.phone || '-'} />
              <div className="border-t border-[#E1E1E1] my-2" />
            </div>
            {/* Data Barang */}
            {barangList.map((barang, idx) => (
              <div key={barang.id || idx} className="flex flex-col w-full" style={{ gap: 8 }}>
                <Row label={`Donasi ${idx + 1}`} value="" bold />
                <Row label="Tujuan Donasi" value={barang.title || '-'} />
                <Row label="Jumlah Barang" value={`${barang.jumlah || 1} ${barang.unit || 'Unit'}`} />
                {barang.catatan && <Row label="Catatan" value={barang.catatan} />}
                {idx !== barangList.length - 1 && <div className="border-t border-[#E1E1E1] my-2" />}
              </div>
            ))}
          </div>
          {/* Tombol Aksi */}
          <div className="flex w-full max-w-[920px] gap-8 justify-between">
            <GreyButton className="flex-1 h-[43px] text-[16px] font-bold rounded-2xl border-[#7A7A7A]" onClick={() => navigate(-1)}>
              Kembali
            </GreyButton>
            <RedButton className="flex-1 h-[43px] text-[16px] font-bold rounded-2xl" onClick={() => navigate('/donasi/donasi-barang/form/confirm/done')}>
              Selesaikan Donasi
            </RedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value, bold }) => (
  <div className="flex flex-row items-center w-full" style={{ gap: 16 }}>
    <span className={`w-[181px] text-[14px] leading-[17px] ${bold ? 'font-bold' : 'font-normal'} text-[#7A7A7A]`}>{label}</span>
    <span className="w-[4px] text-[14px] leading-[17px] text-[#7A7A7A]">{label.startsWith('Donasi') ? '' : ':'}</span>
    <span className="flex-1 text-[14px] leading-[17px] text-[#7A7A7A]">{value}</span>
  </div>
);

export default ItemDonateConfirm; 