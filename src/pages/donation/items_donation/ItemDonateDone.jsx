import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoButton from '../../../components/buttons/InfoButton';
import RedOutlineButton from '../../../components/buttons/RedOutlineButton';
import { FaFileAlt } from 'react-icons/fa';

const ItemDonateDone = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-start bg-[#F7F3F5] font-inter min-h-[65vh]">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-[0_4px_10px_rgba(135,36,39,0.3)] px-16 py-16 gap-6 mt-8">
        {/* Icon Success */}
        <div className="flex items-center justify-center mb-2">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="#F7F3F5"/>
            <path d="M30 50L45 65L70 40" stroke="#5AAA14" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="30" y="25" width="40" height="10" rx="2" fill="#5AAA14"/>
            <rect x="30" y="40" width="25" height="10" rx="2" fill="#5AAA14"/>
          </svg>
        </div>
        {/* Judul */}
        <h1 className="text-[24px] font-bold text-black text-center">Donasi Anda Berhasil Disimpan!</h1>
        {/* Subjudul */}
        <p className="text-[14px] text-black text-center max-w-[472px]">
          Terima Kasih atas kepedulian Anda untuk sesama, verifikasi donasi akan dilakukan terlebih dahulu sebelum kami tampilkan donasi Anda di halaman laporan
        </p>
        {/* Tombol Aksi */}
        <div className="flex flex-row gap-6 mt-4">
          <InfoButton path="/donasi/donasi-barang">
            Donasi Lainnya
          </InfoButton>
          <RedOutlineButton path="/donasi/laporan">
            Cek Laporan
          </RedOutlineButton>
        </div>
      </div>
    </div>
  );
};

export default ItemDonateDone;
