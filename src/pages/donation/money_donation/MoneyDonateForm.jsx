import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import pmiBanner from '../../../assets/images/pmi_griya3.png';
// Import logo bank/e-wallet
import gopayLogo from '../../../assets/images/gopay.png';
import danaLogo from '../../../assets/images/dana.png';
import ovoLogo from '../../../assets/images/ovo.png';
import linkajaLogo from '../../../assets/images/linkaja.png';
import mandiriLogo from '../../../assets/images/mandiri.png';
import briLogo from '../../../assets/images/bri.png';
import bniLogo from '../../../assets/images/bni.png';
import banklainLogo from '../../../assets/images/banklain.png';

import UseScrollToTop from '../../../hooks/UseScrollToTop';

const MoneyDonateForm = () => {
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
  // State untuk form donasi uang
  const [donasiList, setDonasiList] = useState(
    items.map(item => ({
      ...item,
      jumlah: item.jumlah || 1,
      nominal: item.total || 0,
      catatan: item.catatan || ''
    }))
  );

  // State untuk metode pembayaran
  const [paymentOpen, setPaymentOpen] = useState(''); // '' | 'qris' | 'va'
  const [selectedPayment, setSelectedPayment] = useState(''); // 'qris' | 'va'

  // State untuk pilihan sub-metode pembayaran
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null); // {type: 'qris'|'va', option: 'gopay'|'dana'|'ovo'|'linkaja'|'mandiri'|'bri'|'bni'|'banklain'}

  const handleDonorChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };
  const handleDonasiChange = (idx, field, value) => {
    setDonasiList(list => list.map((d, i) => i === idx ? { ...d, [field]: value } : d));
  };

  const handleSelectPaymentOption = (type, option) => {
    if (selectedPaymentOption && selectedPaymentOption.type === type && selectedPaymentOption.option === option) {
      setSelectedPaymentOption(null); // toggle off
    } else {
      setSelectedPaymentOption({ type, option });
      setPaymentOpen(type); // pastikan panel terbuka
      setSelectedPayment(type);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPaymentOption) return;
    // Simpan data ke backend atau lanjut ke halaman konfirmasi
    const data = {
      metode: selectedPaymentOption,
      nominal: totalNominal,
      donasiList,
      donor,
    };
    navigate('/donasi/donasi-uang/form/confirm', { state: data });
  };

  // Handler untuk membuka/collapse metode pembayaran
  const handleTogglePayment = (type) => {
    if (paymentOpen === type) {
      setPaymentOpen('');
      setSelectedPayment('');
    } else {
      setPaymentOpen(type);
      setSelectedPayment(type);
    }
  };

  // Hitung total nominal donasi yang dipilih user
  const totalNominal = donasiList.reduce((sum, d) => {
    const nominal = parseInt((d.nominalText||'').replace(/\D/g, '')) || 0;
    return sum + nominal * (parseInt(d.jumlah) || 1);
  }, 0);

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
          <h1 className="text-4xl font-bold text-[#872427] mb-4 text-center">Donasi Uang</h1>
          <p className="text-lg text-[#261317] text-center max-w-3xl mb-2">
            Bantu kami dengan melakukan donasi uang untuk mendukung aksi kemanusiaan. Donasi Anda akan sangat berarti bagi mereka yang membutuhkan, khususnya masyarakat kurang mampu yang sedang berjuang menghadapi keterbatasan fisik maupun ekonomi. Bersama, kita bisa menjadi jembatan harapan dan memberikan kehidupan yang lebih layak bagi sesama. Mari salurkan kebaikan Anda dan jadilah bagian dari gerakan kemanusiaan ini.
          </p>
        </div>
      </div>
      {/* Syarat & Ketentuan */}
      <div className="w-full flex justify-center mb-6">
        <div className="bg-white rounded-2xl shadow p-8 max-w-5xl w-full">
          <h2 className="text-xl font-bold mb-2">Syarat & Ketentuan</h2>
          <ul className="list-disc pl-5 text-sm text-black space-y-1">
            <li>Donasi uang akan digunakan sesuai dengan tujuan donasi yang dipilih.</li>
            <li>Pastikan data donatur diisi dengan benar untuk keperluan administrasi dan laporan.</li>
            <li>PMI berhak menolak donasi yang tidak sesuai dengan ketentuan di atas.</li>
            <li>Donasi bersifat sukarela dan tidak dipungut biaya apa pun.</li>
          </ul>
        </div>
      </div>
      {/* Form Donatur & Donasi Uang */}
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
          {/* Form Donasi Uang */}
          {donasiList.map((donasi, idx) => (
            <div key={donasi.id} className="bg-[#F7F3F5] rounded-xl p-6 mb-2">
              <h4 className="text-lg font-bold mb-4">Donasi {idx + 1}</h4>
              <div className="mb-3">
                <label className="block font-semibold mb-1">Tujuan Donasi</label>
                <input value={donasi.title} disabled className="w-full bg-[#F7F3F5] border border-[#E1E1E1] rounded-lg p-3 text-[#7A7A7A]" />
              </div>
              <div className="flex gap-4 mb-3">
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Jumlah Unit</label>
                  <input type="number" min="1" value={donasi.jumlah} onChange={e => handleDonasiChange(idx, 'jumlah', e.target.value)} className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3" />
                </div>
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Nominal per Unit</label>
                  <input value={donasi.nominalText || '-'} disabled className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3" />
                </div>
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Total Nominal</label>
                  <input value={`Rp ${(parseInt((donasi.nominalText||'').replace(/\D/g, '')) * donasi.jumlah).toLocaleString('id-ID')}`} disabled className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3 font-bold" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Catatan (Opsional)</label>
                <input value={donasi.catatan} onChange={e => handleDonasiChange(idx, 'catatan', e.target.value)} className="w-full bg-white border border-[#E1E1E1] rounded-lg p-3" placeholder="Catatan" />
              </div>
            </div>
          ))}

          {/* Metode Pembayaran Accordion */}
          <div className="flex flex-col items-start bg-white rounded-2xl p-6 gap-6 w-full shadow-none border border-[#E1E1E1]">
            <span className="text-[18px] font-semibold text-black mb-2">Metode Pembayaran</span>
            {/* QRIS E-Wallet Accordion */}
            <div className="w-full">
              <button type="button" className="flex flex-row items-center justify-between w-full py-3 px-2 border-b border-[#E1E1E1]" onClick={() => handleTogglePayment('qris')}>
                <div className="flex items-center gap-2">
                  {/* <input type="radio" checked={selectedPayment === 'qris'} onChange={() => handleTogglePayment('qris')} className="accent-[#872427]" /> */}
                  <span className="material-icons text-lg">account_balance_wallet</span>
                  <span className="font-bold text-[15px]">QRIS E-Wallet</span>
                </div>
              </button>
              {paymentOpen === 'qris' && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {/* Gopay */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'qris' && selectedPaymentOption.option === 'gopay' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('qris', 'gopay')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={gopayLogo} alt="Gopay" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">QRIS Gopay/Gopay Latter</span>
                  </div>
                  {/* Dana */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'qris' && selectedPaymentOption.option === 'dana' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('qris', 'dana')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={danaLogo} alt="Dana" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">QRIS Dana</span>
                  </div>
                  {/* OVO */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'qris' && selectedPaymentOption.option === 'ovo' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('qris', 'ovo')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={ovoLogo} alt="OVO" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">QRIS OVO</span>
                  </div>
                  {/* LinkAja */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'qris' && selectedPaymentOption.option === 'linkaja' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('qris', 'linkaja')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={linkajaLogo} alt="LinkAja" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">QRIS LinkAja</span>
                  </div>
                </div>
              )}
            </div>
            {/* Virtual Account Accordion */}
            <div className="w-full mt-6">
              <button type="button" className="flex flex-row items-center justify-between w-full py-3 px-2 border-b border-[#E1E1E1]" onClick={() => handleTogglePayment('va')}>
                <div className="flex items-center gap-2">
                  {/* <input type="radio" checked={selectedPayment === 'va'} onChange={() => handleTogglePayment('va')} className="accent-[#872427]" /> */}
                  <span className="material-icons text-lg">account_balance</span>
                  <span className="font-bold text-[15px]">Virtual Account</span>
                </div>
              </button>
              {paymentOpen === 'va' && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {/* Mandiri */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'va' && selectedPaymentOption.option === 'mandiri' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('va', 'mandiri')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={mandiriLogo} alt="Mandiri" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">Mandiri Virtual Account</span>
                  </div>
                  {/* BRI */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'va' && selectedPaymentOption.option === 'bri' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('va', 'bri')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={briLogo} alt="BRI" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">BRI Virtual Account</span>
                  </div>
                  {/* BNI */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'va' && selectedPaymentOption.option === 'bni' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('va', 'bni')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={bniLogo} alt="BNI" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">BNI Virtual Account</span>
                  </div>
                  {/* Bank Lain */}
                  <div
                    className={`flex flex-col bg-white border-2 rounded-md p-4 w-[300px] h-[84px] justify-between cursor-pointer ${selectedPaymentOption && selectedPaymentOption.type === 'va' && selectedPaymentOption.option === 'banklain' ? 'border-[#872427]' : 'border-[#E1E1E1]'}`}
                    onClick={() => handleSelectPaymentOption('va', 'banklain')}
                  >
                    <div className="flex flex-row items-center gap-2 mb-2">
                      <img src={banklainLogo} alt="Bank Lain" className="h-6" />
                      <span className="text-[18px] font-semibold text-[#872427] ml-auto">{totalNominal.toLocaleString('id-ID')}</span>
                      <span className="text-xs text-black">Rp</span>
                    </div>
                    <hr className="border-[#E1E1E1]" />
                    <span className="text-xs mt-1">Virtual Account Bank Lain</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="w-full h-[46px] text-lg font-semibold rounded-2xl bg-[#D60100] text-white mt-2" disabled={!selectedPaymentOption}>Lanjutkan Donasi</button>
        </form>
      </div>
    </div>
  );
};

export default MoneyDonateForm; 