// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, maxDots = 5 }) => {
  // Menghitung range titik yang akan ditampilkan
  let startDot = Math.max(0, Math.min(currentPage - Math.floor(maxDots / 2), totalPages - maxDots));
  let endDot = Math.min(totalPages, startDot + maxDots);

  return (
    <div className="flex justify-center items-center space-x-2">
      {/* Tombol Prev */}
      <button
        className={`px-4 py-2 text-white rounded-md ${
          currentPage === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      >
        &larr;
      </button>

      {/* Titik Pagination */}
      {Array.from({ length: endDot - startDot }, (_, index) => (
        <button
          key={startDot + index}
          className={`w-3 h-3 rounded-full ${
            currentPage === startDot + index ? "bg-red-500" : "bg-gray-400"
          }`}
          onClick={() => onPageChange(startDot + index)}
        />
      ))}

      {/* Tombol Next */}
      <button
        className={`px-4 py-2 text-white rounded-md ${
          currentPage === totalPages - 1 ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
