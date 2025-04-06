import React, { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import articleImage from "../../../assets/images/article_pmi.png"

const EditArtikel = () => {
    const existingArticles = [
        {
            id: 1,
            title: "Artikel 1",
            description: "Article one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-23",
            status: "Published",
        },
        {
            id: 2,
            title: "Artikel 2",
            description: "Article two. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-22",
            status: "Draft",
        },
        {
            id: 3,
            title: "Artikel 3",
            description: "Article three. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-22",
            status: "Published",
        },
        {
            id: 4,
            title: "Artikel 4",
            description: "Article four. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-21",
            status: "Published",
        },
        {
            id: 5,
            title: "Artikel 5",
            description: "Article five. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-20",
            status: "Draft",
        },
        {
            id: 6,
            title: "Artikel 6",
            description: "Article six. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-20",
            status: "Published",
        },
        {
            id: 7,
            title: "Artikel 7",
            description: "Article seven. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-19",
            status: "Draft",
        },
        {
            id: 8,
            title: "Artikel 8",
            description: "Article nine. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
            image: articleImage,
            date: "2025-01-18",
            status: "Published",
        }
    ];

    // State form
    const [articles, setArticles] = useState(existingArticles);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("Semua");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Handling action button
    const handleSearch = () => {
        setCurrentPage(1);
    };
    const handleEdit = (id) => {
        console.log("Edit artikel dengan id:", id);
    };
    const handleDelete = (id) => {
        console.log("Delete artikel dengan id:", id);
    };
    const handleNewArticle = useNavigate();

    // Filter articles
    const filteredArticles = articles
        .filter((article) => {
            if (filter === "Semua") return true;
            return article.status === filter.toLowerCase(); // 'published' / 'draft'
        })
        .filter((article) => {
            if (!searchTerm) return true;
            const lowerSearch = searchTerm.toLowerCase();
            return (
                article.title.toLowerCase().includes(lowerSearch) ||
                article.description.toLowerCase().includes(lowerSearch) ||
                article.date.toLowerCase().includes(lowerSearch)
            );
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Pagination
    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentArticles = filteredArticles.slice( startIndex, startIndex + itemsPerPage );
    const handlePageChange = (page) => { setCurrentPage(page); };

    return (
        <div className="px-32 pb-12">
            {/* Edit Article */}
            <h1 className="text-2xl font-bold mb-6 border-b-4 border-red-500 w-fit">Edit Artikel</h1>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                {/* Search Input */}
                <div className="flex-grow flex items-center border rounded-md px-3 py-2 bg-white">
                    <input
                        type="text"
                        placeholder="Cari artikel di sini..."
                        className="flex-grow focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* Search Button */}
                <button onClick={handleSearch} className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Search
                </button>
                {/* Dropdown Filter */}
                <select
                    className="border rounded-md px-3 py-2 bg-white"
                    value={ filter }
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
                <div key={ article.id } className="bg-white rounded-md shadow flex flex-col md:flex-row overflow-hidden">
                    <div className="md:w-1/6 relative">
                        <img
                            src={ article.image }
                            alt={ article.title }
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent opacity-50"></div>
                    </div>
                    <div className="flex-1 p-4">
                        <div className="p-2 text-xs text-black font-medium mb-2 bg-gray-100 flex items-center gap-2">
                            <p>{article.date}</p>
                            <p>{article.status}</p>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                        <p className="text-sm text-gray-700 line-clamp-3">
                            {article.description}
                        </p>
                    </div>
                    <div className="flex flex-row w-48 md:flex-col items-center justify-center md:justify-between p-6 gap-2">
                        <button
                            onClick={() => handleEdit(article.id)}
                            className="w-full py-2 bg-yellow-400 text-white rounded-md flex justify-center items-center gap-2 hover:bg-yellow-500"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(article.id)}
                            className="w-full py-2 bg-red-400 text-white rounded-md flex justify-center items-center gap-2 hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
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
                  &lt;
                </button>

                <p>Page {currentPage}/{totalPages}</p>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md ${
                        currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:text-red-500"
                    }`}
                >
                  &gt;
                </button>
              </div>
            )}

            {/* New Article Button */}
            <div className="flex justify-end">
                <button
                    onClick={() => handleNewArticle("/news/form")}
                    className="px-6 py-3 bg-gradient-to-b from-red-500 to-red-700 text-white font-semibold rounded-md"
                >
                    + New Article
                </button>
            </div>
        </div>
    );
};

export default EditArtikel;