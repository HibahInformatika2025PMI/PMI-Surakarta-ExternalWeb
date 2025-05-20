/***
 * This is the form for the item donation page
 */

import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import pmiBanner from '../../../assets/images/pmi_griya3.png'

import UseScrollToTop from '../../../hooks/UseScrollToTop'

const ItemDonateForm = () => {
  UseScrollToTop();

  const location = useLocation();
  const navigate = useNavigate();
  const items = location.state?.items || [];
  const tab = location.state?.tab || 'griya';

  // State untuk form donatur
  const [donor, setDonor] = useState({
    nama: '',
    namaKontak: '',
    email: '',
    phone: '',
    kategori: '',
  });
  // State untuk form barang
  const [barangList, setBarangList] = useState(
    items.map(item => ({ ...item, jumlah: item.jumlah || 1, unit: item.unit || 'Unit', catatan: item.catatan || '' }))
  );

  const handleDonorChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };
  const handleBarangChange = (idx, field, value) => {
    setBarangList(barangList => barangList.map((b, i) => i === idx ? { ...b, [field]: value } : b));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/donasi/donasi-barang/form/confirm', { state: { donor, barangList } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F7F3F5] pb-16">
      {/* Banner/Header */}
      <div className="relative w-full h-[210px] mb-0">
        <img src={pmiBanner} alt="PMI Banner" className="absolute w-full h-full object-cover object-center z-0" />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#D60100] via-[#A01837E6] to-[#692F6E66] opacity-90 z-10"></div>
        <div className="absolute w-full h-full bg-gradient-to-l from-[#5A24870D] via-[#5A248780] to-[#6A0003D4] opacity-50 z-20"></div>
      </div>
      {/* Judul & Deskripsi di bawah gambar */}
      <div className="w-full flex flex-col items-center mt-2 mb-8">
        <div className="max-w-5xl w-full flex flex-col items-center px-4">
          <h1 className="text-4xl font-bold text-[#872427] mb-4 text-center">Donasi Barang</h1>
          <p className="text-lg text-[#261317] text-center max-w-3xl mb-2">
            Bantu kami dengan melakukan donasi berupa barang penting yang masih layak pakai. Donasi Anda akan sangat berarti bagi mereka yang membutuhkan, khususnya masyarakat kurang mampu yang sedang berjuang menghadapi keterbatasan fisik maupun ekonomi. Bersama, kita bisa menjadi jembatan harapan dan memberikan kehidupan yang lebih layak bagi sesama. Mari salurkan kebaikan Anda dan jadilah bagian dari gerakan kemanusiaan ini.
          </p>
        </div>
      </div>
      {/* Syarat & Ketentuan */}
      <div className="w-full flex justify-center mb-6">
        <div className="bg-white rounded-2xl shadow p-8 max-w-5xl w-full">
          <h2 className="text-xl font-bold mb-2">Syarat & Ketentuan</h2>
          <ul className="list-disc pl-5 text-sm text-black space-y-1">
            <li>Pastikan barang dalam kondisi baik dan layak pakai atau konsumsi.</li>
            <li>Barang yang dibutuhkan meliputi: makanan kering, alat kebersihan, pakaian layak pakai, dan perlengkapan kesehatan.</li>
            <li>Kirimkan barang ke Markas PMI Kota Surakarta, atau hubungi kami untuk penjemputan.</li>
            <li>Sertakan catatan jenis dan jumlah barang saat donasi.</li>
            <li>PMI berhak menolak barang yang tidak sesuai dengan ketentuan di atas.</li>
            <li>Donasi bersifat sukarela dan tidak dipungut biaya apa pun.</li>
          </ul>
        </div>
      </div>
      {/* Cara Berdonasi */}
      <div className="w-full flex justify-center mb-8">
        <div className="bg-white rounded-2xl shadow p-8 max-w-5xl w-full flex flex-col items-center">
          <h2 className="text-xl font-bold mb-6">Cara Berdonasi</h2>
          <div className="flex flex-wrap justify-center gap-8 w-full">
            <div className="flex flex-col items-center w-40">
              <div className="w-12 h-12 bg-gradient-to-b from-[#D60100] to-[#872427] rounded-full flex items-center justify-center mb-2"><span role="img" aria-label="box">📦</span></div>
              <div className="font-bold text-[#D60100] text-center">Siapkan Barang</div>
              <div className="text-xs text-center">Pastikan barang donasi sesuai dengan S&K dan beri label pada setiap jenis barang.</div>
            </div>
            <div className="flex flex-col items-center w-40">
              <div className="w-12 h-12 bg-gradient-to-b from-[#D60100] to-[#872427] rounded-full flex items-center justify-center mb-2"><span role="img" aria-label="contact">📞</span></div>
              <div className="font-bold text-[#D60100] text-center">Hubungi PMI</div>
              <div className="text-xs text-center">Hubungi PMI Kota Surakarta melalui WhatsApp/telepon atau datang langsung ke kantor untuk konfirmasi jenis dan waktu pengiriman donasi.</div>
            </div>
            <div className="flex flex-col items-center w-40">
              <div className="w-12 h-12 bg-gradient-to-b from-[#D60100] to-[#872427] rounded-full flex items-center justify-center mb-2"><span role="img" aria-label="delivery">🚚</span></div>
              <div className="font-bold text-[#D60100] text-center">Antar Langsung ke Lokasi</div>
              <div className="text-xs text-center">Antar langsung ke kantor PMI untuk konfirmasi jenis dan waktu pengiriman donasi.</div>
            </div>
            <div className="flex flex-col items-center w-40">
              <div className="w-12 h-12 bg-gradient-to-b from-[#D60100] to-[#872427] rounded-full flex items-center justify-center mb-2"><span role="img" aria-label="doc">📄</span></div>
              <div className="font-bold text-[#D60100] text-center">Dokumentasi</div>
              <div className="text-xs text-center">Petugas PMI akan menerima dan mencatat barang yang diterima. Bukti serah terima akan diberikan kepada donatur sebagai arsip.</div>
            </div>
          </div>
        </div>
      </div>
      {/* Form Donatur & Barang */}
      <div className="w-full flex justify-center">
        <form className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl w-full flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* Informasi Donatur */}
          <div>
            <h3 className="text-lg font-bold text-[#872427] mb-4">Informasi Donatur</h3>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Nama Donatur/Perusahaan</label>
              <input name="nama" value={donor.nama} onChange={handleDonorChange} className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" placeholder="Nama Donatur" />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Detail Kontak</label>
              <div className="flex gap-4 mb-2">
                <input name="namaKontak" value={donor.namaKontak} onChange={handleDonorChange} className="flex-1 bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" placeholder="Nama" />
                <input name="email" value={donor.email} onChange={handleDonorChange} className="flex-1 bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" placeholder="Email" />
                <input name="phone" value={donor.phone} onChange={handleDonorChange} className="flex-1 bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3" placeholder="+62" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Kategori Donatur</label>
              <select name="kategori" value={donor.kategori} onChange={handleDonorChange} className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3">
                <option value="">Pilih Kategori Donasi Anda</option>
                <option value="perorangan">Perorangan</option>
                <option value="perusahaan">Perusahaan</option>
                <option value="komunitas">Komunitas</option>
              </select>
            </div>
          </div>
          {/* Form Barang */}
          {barangList.map((barang, idx) => (
            <div key={barang.id} className="bg-[#F7F3F5] rounded-xl p-6 mb-2">
              <h4 className="text-lg font-bold mb-4">Donasi {idx + 1}</h4>
              <div className="mb-3">
                <label className="block font-semibold mb-1">Tujuan Donasi</label>
                <input value={barang.title} disabled className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3 text-[#7A7A7A]" />
              </div>
              <div className="flex gap-4 mb-3">
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Jumlah Barang</label>
                  <input type="number" min="1" value={barang.jumlah} onChange={e => handleBarangChange(idx, 'jumlah', e.target.value)} className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3" />
                </div>
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Unit</label>
                  <input value={barang.unit} readOnly className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Catatan (Opsional)</label>
                <input value={barang.catatan} onChange={e => handleBarangChange(idx, 'catatan', e.target.value)} className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3" placeholder="Catatan" />
              </div>
            </div>
          ))}
          <button type="submit" className="w-full h-[46px] text-lg font-semibold rounded-2xl bg-[#D60100] text-white mt-2">Lanjutkan Donasi</button>
        </form>
      </div>
    </div>
  );
};

export default ItemDonateForm; 