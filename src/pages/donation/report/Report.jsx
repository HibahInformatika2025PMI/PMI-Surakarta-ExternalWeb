import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Nav, Tab, Table, Pagination } from 'react-bootstrap'
import { SecondaryColor, PrimaryColor, GradientColor } from '../../../themes/color_palletes/ColorPalletes'
import UseScrollToTop from '../../../hooks/UseScrollToTop'

const Report = () => {
  // For auto scroll to top when the page is loaded
  UseScrollToTop();

  const [activePage, setActivePage] = useState(1);
  const [activeTab, setActiveTab] = useState('donasi-uang');
  const indicatorRef = useRef(null);
  
  // Pagination state
  const [moneyReceivedPage, setMoneyReceivedPage] = useState(1);
  const [moneyDistributedPage, setMoneyDistributedPage] = useState(1);
  const [goodsPage, setGoodsPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  // Search state
  const [searchMoneyReceived, setSearchMoneyReceived] = useState('');
  const [searchMoneyDistributed, setSearchMoneyDistributed] = useState('');
  const [searchGoods, setSearchGoods] = useState('');

  // Handle tab change and animate the indicator
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Pagination handlers
  const handleMoneyReceivedPageChange = (pageNumber) => {
    setMoneyReceivedPage(pageNumber);
  };

  const handleMoneyDistributedPageChange = (pageNumber) => {
    setMoneyDistributedPage(pageNumber);
  };

  const handleGoodsPageChange = (pageNumber) => {
    setGoodsPage(pageNumber);
  };
  
  // Handle entries per page change
  const handleEntriesChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    // Reset to first page when changing entries per page
    setMoneyReceivedPage(1);
    setMoneyDistributedPage(1);
    setGoodsPage(1);
  };

  // Search handlers
  const handleSearchMoneyReceived = (e) => {
    setSearchMoneyReceived(e.target.value);
    setMoneyReceivedPage(1); // Reset to first page when searching
  };
  
  const handleSearchMoneyDistributed = (e) => {
    setSearchMoneyDistributed(e.target.value);
    setMoneyDistributedPage(1); // Reset to first page when searching
  };
  
  const handleSearchGoods = (e) => {
    setSearchGoods(e.target.value);
    setGoodsPage(1); // Reset to first page when searching
  };

  // Generate more dummy data for money donations received (25 items)
  const moneyDonationsReceived = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    donatur: `Donatur ${i + 1}${i < 5 ? '' : ' (Anonim)'}`,
    tanggal: `${25 - (i % 25)} April 2023`,
    nominal: `Rp ${Math.floor(Math.random() * 10 + 1)}.000.000`
  }));

  // Generate more dummy data for money donations distributed (25 items)
  const moneyDonationsDistributed = Array.from({ length: 25 }, (_, i) => {
    const lembagaOptions = [
      'Dinas Sosial Solo', 
      'Bantuan Ge Panti', 
      'Bantuan Sembako', 
      'Program Pendampingan', 
      'Bantuan Banjir'
    ];
    return {
      id: i + 1,
      lembaga: lembagaOptions[i % lembagaOptions.length],
      keterangan: i % 3 === 0 ? 'Bantuan Bencana' : '',
      tanggal: `${25 - (i % 25)} April 2023`,
      nominal: `Rp ${Math.floor(Math.random() * 10 + 1)}.000.000`
    };
  });

  // Generate more dummy data for goods donations (12 items)
  const goodsDonations = Array.from({ length: 12 }, (_, i) => {
    const jenisOptions = ['Pakaian', 'Makanan', 'Selimut', 'Obat-obatan', 'Peralatan Medis', 'Alat Kebersihan'];
    const jumlahTypes = ['paket', 'buah', 'dus', 'karton', 'set', 'box'];
    return {
      id: i + 1,
      donatur: `Donatur ${i + 1}${i < 3 ? '' : ' (Anonim)'}`,
      jenis: jenisOptions[i % jenisOptions.length],
      tanggal: `${25 - (i % 25)} April 2023`,
      jumlah: `${Math.floor(Math.random() * 20 + 5)} ${jumlahTypes[i % jumlahTypes.length]}`
    };
  });

  // Filter data based on search terms
  const filteredMoneyDonationsReceived = moneyDonationsReceived.filter(donation => 
    donation.donatur.toLowerCase().includes(searchMoneyReceived.toLowerCase())
  );
  
  const filteredMoneyDonationsDistributed = moneyDonationsDistributed.filter(donation => 
    donation.lembaga.toLowerCase().includes(searchMoneyDistributed.toLowerCase())
  );
  
  const filteredGoodsDonations = goodsDonations.filter(donation => 
    donation.donatur.toLowerCase().includes(searchGoods.toLowerCase()) ||
    donation.jenis.toLowerCase().includes(searchGoods.toLowerCase())
  );

  return (
    <section style={{ marginTop: "3rem", marginBottom: "8rem" }}>
      <div className="position-relative overflow-hidden banner-container">
        <div
          className="w-100"
          style={{ 
            height: "210px", 
            backgroundColor: PrimaryColor.red,
            background: "linear-gradient(135deg, #D60100 0%, #BA2145 100%)"
          }}
        />
        
        <div 
          className="position-absolute top-0 start-0 end-0 bottom-0" 
          style={{ background: GradientColor.gradient5, opacity: 0.7 }}
        />
        
        <div 
          className="position-absolute top-0 start-0 end-0 bottom-0" 
          style={{ background: GradientColor.gradient4 }}
        />
        
        {/* Wave overlay */}
        <div className="wave-overlay"></div>
        
        <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-end align-items-center px-3 px-md-4 px-lg-5">
          <div className="d-flex flex-column banner-text">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-2 text-right">Daftar Donasi Uang</h1>
            <p className="text-lg text-white drop-shadow-md text-right max-w-xl" style={{ maxWidth: "500px" }}>
              Salurkan donasi uang untuk mendukung aksi kemanusiaan dan menyelamatkan lebih banyak nyawa.
            </p>
            <div className="text-end mt-3">
              <div className="animated-underline"></div>
            </div>
          </div>
        </div>
      </div>

      <Container fluid className="mt-4 px-3 px-md-4 px-lg-5">
        <Row>
          <Col>
            <Tab.Container 
              id="donation-tabs" 
              activeKey={activeTab}
              onSelect={(key) => handleTabChange(key)}
            >
              <div className="position-relative w-100">
                <div className="d-flex flex-wrap">
                  <button
                    className={`px-3 px-md-4 py-2 py-md-3 fw-semibold fs-5 border-0 ${activeTab === 'donasi-uang' ? 'text-white' : 'text-danger'}`}
                    onClick={() => handleTabChange('donasi-uang')}
                    style={{ 
                      borderTopLeftRadius: "1rem", 
                      borderTopRightRadius: "1rem",
                      borderBottomLeftRadius: 0, 
                      borderBottomRightRadius: 0,
                      minWidth: "120px",
                      background: activeTab === 'donasi-uang' 
                        ? 'linear-gradient(to bottom, #D60100, #872427)' 
                        : 'white'
                    }}
                  >
                    Donasi Uang
                  </button>
                  <button
                    className={`px-3 px-md-4 py-2 py-md-3 fw-semibold fs-5 border-0 ${activeTab === 'donasi-barang' ? 'text-white' : 'text-danger'}`}
                    onClick={() => handleTabChange('donasi-barang')}
                    style={{ 
                      borderTopLeftRadius: "1rem", 
                      borderTopRightRadius: "1rem",
                      borderBottomLeftRadius: 0, 
                      borderBottomRightRadius: 0,
                      minWidth: "120px",
                      background: activeTab === 'donasi-barang' 
                        ? 'linear-gradient(to bottom, #D60100, #872427)' 
                        : 'white'
                    }}
                  >
                    Donasi Barang
                  </button>
                </div>
                <div className="w-100" style={{ height: "4px", backgroundColor: "#872427", borderBottomLeftRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}></div>
              </div>

              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="donasi-uang">
                  <div className="content-card p-3 p-md-4 bg-white rounded shadow-sm">
                    <h4 className="section-title text-danger fw-bold mb-4 pb-2 border-bottom">
                      <span className="me-2">📥</span>
                      DONASI UANG DITERIMA
                    </h4>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center filter-section">
                        <span className="me-2 text-secondary">Show</span>
                        <select 
                          className="form-select form-select-sm border-0 bg-light" 
                          style={{ width: "70px" }}
                          value={itemsPerPage}
                          onChange={handleEntriesChange}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                        <span className="ms-2 text-secondary">entries</span>
                      </div>
                      <div>
                        <input 
                          type="search" 
                          className="form-control form-control-sm" 
                          placeholder="Cari donatur..." 
                          style={{ width: "200px", borderRadius: "4px" }}
                          value={searchMoneyReceived}
                          onChange={handleSearchMoneyReceived}
                        />
                      </div>
                    </div>

                    <div className="table-responsive mb-4 table-container">
                      <Table hover className="table-borderless modern-table">
                        <thead>
                          <tr className="bg-light">
                            <th className="text-center py-3" style={{ width: "5%" }}>No</th>
                            <th className="py-3" style={{ width: "40%" }}>Donatur</th>
                            <th className="py-3" style={{ width: "30%" }}>Tanggal</th>
                            <th className="py-3" style={{ width: "25%" }}>Nominal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredMoneyDonationsReceived
                            .slice((moneyReceivedPage - 1) * itemsPerPage, moneyReceivedPage * itemsPerPage)
                            .map((donation, index) => (
                            <tr key={donation.id} className={index % 2 === 0 ? "bg-white" : "bg-light"}>
                              <td className="text-center py-3">{donation.id}</td>
                              <td className="py-3">{donation.donatur}</td>
                              <td className="py-3">{donation.tanggal}</td>
                              <td className="py-3 fw-bold amount">{donation.nominal}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>

                    {/* Pagination for Money Received */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 pagination-container">
                      <div className="mb-3 mb-md-0">
                        <span className="text-secondary">
                          Menampilkan {filteredMoneyDonationsReceived.length > 0 ? ((moneyReceivedPage - 1) * itemsPerPage) + 1 : 0}-{Math.min(moneyReceivedPage * itemsPerPage, filteredMoneyDonationsReceived.length)} dari {filteredMoneyDonationsReceived.length} data
                        </span>
                      </div>
                      <Pagination className="custom-pagination">
                        <Pagination.First onClick={() => handleMoneyReceivedPageChange(1)} />
                        <Pagination.Prev 
                          onClick={() => handleMoneyReceivedPageChange(Math.max(1, moneyReceivedPage - 1))}
                          disabled={moneyReceivedPage === 1}
                        />
                        {[...Array(Math.min(3, Math.ceil(filteredMoneyDonationsReceived.length / itemsPerPage)))].map((_, idx) => (
                          <Pagination.Item 
                            key={idx + 1} 
                            active={moneyReceivedPage === idx + 1}
                            onClick={() => handleMoneyReceivedPageChange(idx + 1)}
                          >
                            {idx + 1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next 
                          onClick={() => handleMoneyReceivedPageChange(Math.min(Math.ceil(filteredMoneyDonationsReceived.length / itemsPerPage), moneyReceivedPage + 1))}
                          disabled={moneyReceivedPage === Math.ceil(filteredMoneyDonationsReceived.length / itemsPerPage) || filteredMoneyDonationsReceived.length === 0}
                        />
                        <Pagination.Last 
                          onClick={() => handleMoneyReceivedPageChange(Math.ceil(filteredMoneyDonationsReceived.length / itemsPerPage))}
                          disabled={filteredMoneyDonationsReceived.length === 0}
                        />
                      </Pagination>
                    </div>

                    <h4 className="section-title text-danger fw-bold mb-4 pb-2 border-bottom">
                      <span className="me-2">📤</span>
                      DONASI UANG TERSALURKAN
                    </h4>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center filter-section">
                        <span className="me-2 text-secondary">Show</span>
                        <select 
                          className="form-select form-select-sm border-0 bg-light" 
                          style={{ width: "70px" }}
                          value={itemsPerPage}
                          onChange={handleEntriesChange}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                        <span className="ms-2 text-secondary">entries</span>
                      </div>
                      <div>
                        <input 
                          type="search" 
                          className="form-control form-control-sm" 
                          placeholder="Cari lembaga..." 
                          style={{ width: "200px", borderRadius: "4px" }}
                          value={searchMoneyDistributed}
                          onChange={handleSearchMoneyDistributed}
                        />
                      </div>
                    </div>

                    <div className="table-responsive mb-4 table-container">
                      <Table hover className="table-borderless modern-table">
                        <thead>
                          <tr className="bg-light">
                            <th className="text-center py-3" style={{ width: "5%" }}>No</th>
                            <th className="py-3" style={{ width: "25%" }}>Lembaga</th>
                            <th className="py-3" style={{ width: "25%" }}>Keterangan</th>
                            <th className="py-3" style={{ width: "20%" }}>Tanggal</th>
                            <th className="py-3" style={{ width: "25%" }}>Nominal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredMoneyDonationsDistributed
                            .slice((moneyDistributedPage - 1) * itemsPerPage, moneyDistributedPage * itemsPerPage)
                            .map((donation, index) => (
                            <tr key={donation.id} className={index % 2 === 0 ? "bg-white" : "bg-light"}>
                              <td className="text-center py-3">{donation.id}</td>
                              <td className="py-3 fw-medium">{donation.lembaga}</td>
                              <td className="py-3">{donation.keterangan || "-"}</td>
                              <td className="py-3">{donation.tanggal}</td>
                              <td className="py-3 fw-bold amount">{donation.nominal}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>

                    {/* Pagination for Money Distributed */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pagination-container">
                      <div className="mb-3 mb-md-0">
                        <span className="text-secondary">
                          Menampilkan {filteredMoneyDonationsDistributed.length > 0 ? ((moneyDistributedPage - 1) * itemsPerPage) + 1 : 0}-{Math.min(moneyDistributedPage * itemsPerPage, filteredMoneyDonationsDistributed.length)} dari {filteredMoneyDonationsDistributed.length} data
                        </span>
                      </div>
                      <Pagination className="custom-pagination">
                        <Pagination.First onClick={() => handleMoneyDistributedPageChange(1)} />
                        <Pagination.Prev 
                          onClick={() => handleMoneyDistributedPageChange(Math.max(1, moneyDistributedPage - 1))}
                          disabled={moneyDistributedPage === 1}
                        />
                        {[...Array(Math.min(3, Math.ceil(filteredMoneyDonationsDistributed.length / itemsPerPage)))].map((_, idx) => (
                          <Pagination.Item 
                            key={idx + 1} 
                            active={moneyDistributedPage === idx + 1}
                            onClick={() => handleMoneyDistributedPageChange(idx + 1)}
                          >
                            {idx + 1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next 
                          onClick={() => handleMoneyDistributedPageChange(Math.min(Math.ceil(filteredMoneyDonationsDistributed.length / itemsPerPage), moneyDistributedPage + 1))}
                          disabled={moneyDistributedPage === Math.ceil(filteredMoneyDonationsDistributed.length / itemsPerPage) || filteredMoneyDonationsDistributed.length === 0}
                        />
                        <Pagination.Last 
                          onClick={() => handleMoneyDistributedPageChange(Math.ceil(filteredMoneyDonationsDistributed.length / itemsPerPage))}
                          disabled={filteredMoneyDonationsDistributed.length === 0}
                        />
                      </Pagination>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="donasi-barang">
                  <div className="content-card p-3 p-md-4 bg-white rounded shadow-sm">
                    <h4 className="section-title text-danger fw-bold mb-4 pb-2 border-bottom">
                      <span className="me-2">📦</span>
                      DONASI BARANG
                    </h4>
                    
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="d-flex align-items-center filter-section">
                        <span className="me-2 text-secondary">Show</span>
                        <select 
                          className="form-select form-select-sm border-0 bg-light" 
                          style={{ width: "70px" }}
                          value={itemsPerPage}
                          onChange={handleEntriesChange}
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                        </select>
                        <span className="ms-2 text-secondary">entries</span>
                      </div>
                      <div>
                        <input 
                          type="search" 
                          className="form-control form-control-sm" 
                          placeholder="Cari donatur..." 
                          style={{ width: "200px", borderRadius: "4px" }}
                          value={searchGoods}
                          onChange={handleSearchGoods}
                        />
                      </div>
                    </div>

                    <div className="table-responsive mb-4 table-container">
                      <Table hover className="table-borderless modern-table">
                        <thead>
                          <tr className="bg-light">
                            <th className="text-center py-3" style={{ width: "5%" }}>No</th>
                            <th className="py-3" style={{ width: "25%" }}>Donatur</th>
                            <th className="py-3" style={{ width: "25%" }}>Jenis Barang</th>
                            <th className="py-3" style={{ width: "20%" }}>Tanggal</th>
                            <th className="py-3" style={{ width: "25%" }}>Jumlah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredGoodsDonations
                            .slice((goodsPage - 1) * itemsPerPage, goodsPage * itemsPerPage)
                            .map((donation, index) => (
                            <tr key={donation.id} className={index % 2 === 0 ? "bg-white" : "bg-light"}>
                              <td className="text-center py-3">{donation.id}</td>
                              <td className="py-3">{donation.donatur}</td>
                              <td className="py-3 fw-medium">{donation.jenis}</td>
                              <td className="py-3">{donation.tanggal}</td>
                              <td className="py-3 fw-bold amount">{donation.jumlah}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>

                    {/* Pagination for Goods Donations */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pagination-container">
                      <div className="mb-3 mb-md-0">
                        <span className="text-secondary">
                          Menampilkan {filteredGoodsDonations.length > 0 ? ((goodsPage - 1) * itemsPerPage) + 1 : 0}-{Math.min(goodsPage * itemsPerPage, filteredGoodsDonations.length)} dari {filteredGoodsDonations.length} data
                        </span>
                      </div>
                      <Pagination className="custom-pagination">
                        <Pagination.First onClick={() => handleGoodsPageChange(1)} />
                        <Pagination.Prev 
                          onClick={() => handleGoodsPageChange(Math.max(1, goodsPage - 1))}
                          disabled={goodsPage === 1}
                        />
                        {[...Array(Math.min(3, Math.ceil(filteredGoodsDonations.length / itemsPerPage)))].map((_, idx) => (
                          <Pagination.Item 
                            key={idx + 1} 
                            active={goodsPage === idx + 1}
                            onClick={() => handleGoodsPageChange(idx + 1)}
                          >
                            {idx + 1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next 
                          onClick={() => handleGoodsPageChange(Math.min(Math.ceil(filteredGoodsDonations.length / itemsPerPage), goodsPage + 1))}
                          disabled={goodsPage === Math.ceil(filteredGoodsDonations.length / itemsPerPage) || filteredGoodsDonations.length === 0}
                        />
                        <Pagination.Last 
                          onClick={() => handleGoodsPageChange(Math.ceil(filteredGoodsDonations.length / itemsPerPage))}
                          disabled={filteredGoodsDonations.length === 0}
                        />
                      </Pagination>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      
      {/* Add a visual divider before footer */}
      <div className="mt-5 pt-5">
        <hr className="divider" />
        <div className="py-4"></div>
      </div>

      <style jsx="true">{`
        /* Banner styling */
        .banner-container {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .banner-text {
          position: relative;
          z-index: 10;
        }
        
        @media (max-width: 768px) {
          .banner-text h1 {
            font-size: 1.75rem !important;
          }
          .banner-text p {
            font-size: 1rem !important;
          }
        }
        
        .animate-text {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animated-underline {
          height: 3px;
          width: 100px;
          background: white;
          margin-left: auto;
          animation: expandWidth 1s ease-out forwards;
        }
        
        .wave-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 60px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 3;
        }
        
        /* Tab styling */
        .tab-container {
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
          button.fs-5 {
            font-size: 1rem !important;
          }
        }
        
        .custom-tabs-container {
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .sliding-background {
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          background: linear-gradient(90deg, ${PrimaryColor.red} 0%, ${PrimaryColor.maroon} 100%);
          z-index: 5;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 10px rgba(186, 33, 69, 0.3);
        }
        
        .custom-tabs .nav-link {
          transition: color 0.3s ease;
          background-color: transparent !important;
          letter-spacing: 0.5px;
          font-size: 15px;
        }
        
        /* Content styling */
        .content-card {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .section-title {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 1.1rem;
          }
        }
        
        .filter-section select {
          transition: all 0.2s ease;
          border-radius: 4px;
        }
        
        .filter-section select:focus {
          box-shadow: 0 0 0 0.2rem rgba(214, 1, 0, 0.15);
        }
        
        .search-box {
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }
        
        .search-box input {
          border-radius: 0 50px 50px 0;
          transition: all 0.3s ease;
        }
        
        .search-box input:focus {
          box-shadow: none;
          background-color: white !important;
        }
        
        /* Table styling */
        .table-container {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }
        
        .modern-table thead tr {
          background: linear-gradient(90deg, #f8f9fa 0%, #eff1f3 100%);
          letter-spacing: 0.5px;
          font-size: 14px;
        }
        
        .modern-table tbody tr {
          transition: all 0.2s ease;
        }
        
        .modern-table tbody tr:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }
        
        .amount {
          color: ${PrimaryColor.red};
        }
        
        /* Pagination styling */
        .pagination-container {
          padding: 0.5rem 0;
        }
        
        .custom-pagination .page-item.active .page-link {
          background-color: ${PrimaryColor.red};
          border-color: ${PrimaryColor.red};
          color: white !important;
          font-weight: bold;
          box-shadow: 0 2px 5px rgba(214, 1, 0, 0.3);
        }
        
        .custom-pagination .page-link {
          color: ${PrimaryColor.red};
          border: 1px solid #dee2e6;
          margin: 0 2px;
          min-width: 40px;
          text-align: center;
          transition: all 0.2s ease;
        }
        
        .custom-pagination .page-item:not(.active) .page-link:hover {
          background-color: #f8f9fa;
          color: ${PrimaryColor.maroon};
          border-color: #dee2e6;
        }
        
        .custom-pagination .page-item:first-child .page-link,
        .custom-pagination .page-item:last-child .page-link {
          border-radius: 0.25rem;
        }
        
        @media (max-width: 576px) {
          .custom-pagination {
            margin-top: 1rem;
          }
          
          .custom-pagination .page-link {
            min-width: 35px;
            padding: 0.25rem 0.5rem;
          }
        }
        
        .divider {
          border-color: rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          width: 80%;
        }
        
        /* Animations */
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }
      `}</style>
    </section>
  )
}

export default Report 