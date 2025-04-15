import React from 'react';
import { FaPencilAlt, FaTrash, FaCalendarAlt } from 'react-icons/fa';

const EditNewsCard = ({ article, onEdit, onDelete }) => {
  // Format the date from API's updated_at
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-fit bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image Section with Gradient Overlay */}
      <div className="relative w-[300px] h-full">
        <img
          src={article.cover_image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(80,19,86,0.25)] via-[rgba(158,18,57,0.75)] to-[#D60200] opacity-70" />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-center">
        {/* Date with Calendar Icon */}
        <div className="bg-[#E1E1E1] w-fit px-4 py-1 rounded-lg mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-black" size={12} />
          <span className="text-xs font-normal text-black">
            {formatDate(article.updated_at)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold pb-2 line-clamp-1">
          {article.title}

        </h3>

        {/* Summary */}
        <div className="text-sm text-gray-700 line-clamp-2">
          {article.summary}
        </div>
      </div>

      {/* Action Buttons Section */}
      <div className="flex flex-col justify-center items-center gap-4 p-6 w-[158px]">
        <button
          onClick={() => onEdit(article.id)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-[#F0BB62] text-white rounded-lg w-[87px] h-[31px]"
        >
          <FaPencilAlt size={12} />
          <span className="text-xs font-bold">Edit</span>
        </button>
        
        <button
          onClick={() => onDelete(article.id)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-[#D55164] text-white rounded-lg w-[87px] h-[31px]"
        >
          <FaTrash size={12} />
          <span className="text-xs font-bold">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default EditNewsCard;
