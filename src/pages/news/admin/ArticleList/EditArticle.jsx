import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import SearchBar from "../../../../components/shared/SearchBar";
import Heading from "../../../../themes/typography/Heading";
import PrimaryColor from "../../../../themes/color_pallete/PrimaryColor";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import EditNewsCard from "../../../../components/card/EditNewsCard";

const EditArtikel = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch articles from API
    const fetchArticles = async () => {
      try {
        // Fetch both published and draft articles
        const [publishedRes, draftRes] = await Promise.all([
          fetch("http://localhost:8080/news?is_draft=false"),
          fetch("http://localhost:8080/news?is_draft=true")
        ]);

        const publishedData = await publishedRes.json();
        const draftData = await draftRes.json();

        if (publishedData.status === "success" && draftData.status === "success") {
          // Combine and mark the articles with their status
          const publishedArticles = publishedData.data.map(article => ({
            ...article,
            status: 'published'
          }));
          const draftArticles = draftData.data.map(article => ({
            ...article,
            status: 'draft'
          }));

          setArticles([...publishedArticles, ...draftArticles]);
        } else {
          console.error("Error fetching articles");
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Handling action button
  const handleEdit = (id) => {
    console.log("Edit artikel dengan id:", id);
    navigate(`/admin-news/form?id=${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
      try {
        const response = await fetch(`http://localhost:8080/news/${id}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        
        if (data.status === "success") {
          setArticles(articles.filter(article => article.id !== id));
          alert('Artikel berhasil dihapus!');
        } else {
          alert('Gagal menghapus artikel: ' + data.message);
        }
      } catch (error) {
        console.error('Error deleting article:', error);
        alert('Terjadi kesalahan saat menghapus artikel');
      }
    }
  };

  // Filter articles
  const filteredArticles = articles
    .filter((article) => {
      if (filter === "Semua") return true;
      return article.status === filter.toLowerCase();
    })
    .filter((article) => {
      if (!searchTerm) return true;
      const lowerSearch = searchTerm.toLowerCase();
      return (
        article.title.toLowerCase().includes(lowerSearch) ||
        article.summary.toLowerCase().includes(lowerSearch) ||
        new Date(article.updated_at).toLocaleDateString('id-ID').toLowerCase().includes(lowerSearch)
      );
    })
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page) => { setCurrentPage(page); };

  return (
    <div className="px-32 pb-12">
      {/* Edit Article */}
      <Heading className={`text-2xl border-b-4 w-fit`} style={{ borderColor: PrimaryColor.red }}>
        Edit Article
      </Heading>
      
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        {/* Search Input */}
        <SearchBar />
        
        {/* Dropdown Filter */}
        <select
          className="border rounded-md px-3 py-2 bg-white"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="Semua">Semua</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {/* Article detected */}
        {currentArticles.map((article) => (
          <EditNewsCard
            key={article.id}
            article={article}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
        {/* No article detected */}
        {currentArticles.length === 0 && (
          <p className="text-center text-gray-500">Tidak ada artikel.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mb-6 font-semibold">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:text-red-500"
            }`}
          >
            <FaChevronCircleLeft size={30} />
          </button>
          <p>Page {currentPage}/{totalPages}</p>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:text-red-500"
            }`}
          >
            <FaChevronCircleRight size={30} />
          </button>
        </div>
      )}

      {/* New Article Button */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/admin-news/form")}
          className="px-6 py-3 bg-gradient-to-b from-red-500 to-red-700 text-white font-semibold rounded-md"
        >
          + New Article
        </button>
      </div>
    </div>
  );
};

export default EditArtikel;