import React from "react";

const DonationListCard = ({
  checked,
  onCheck,
  image,
  date,
  title,
  description,
  progress = 0,
  progressText = "",
  fundText = "",
  nominalText = "",
  onDetail,
  onShare,
  className = "",
}) => {
  return (
    <div className={`flex flex-row items-center gap-3 w-full max-w-[1180px] min-h-[244px] bg-white shadow-[0_4px_10px_rgba(135,36,39,0.3)] px-6 py-6 border-b border-[#D9D9D9] ${className}`}>
      {/* Checkbox */}
      <div className="flex items-center justify-center w-16 h-full">
        <input
          type="checkbox"
          checked={checked}
          onChange={onCheck}
          className="w-7 h-7 accent-[#D60100] border-2 border-black rounded"
        />
      </div>
      {/* Image */}
      <div className="flex-shrink-0 w-[323px] h-[187px] rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Main Content */}
      <div className="flex flex-col justify-between flex-1 h-full px-6 py-2">
        {/* Date */}
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-[#F7F3F5] rounded-md px-3 py-1 flex items-center gap-2">
            <span className="material-icons text-base text-black">calendar_today</span>
            <span className="text-xs text-black font-inter">{date}</span>
          </div>
        </div>
        {/* Title */}
        <div className="font-bold text-lg text-black mb-1">{title}</div>
        {/* Description */}
        <div className="text-sm text-black text-justify mb-2 line-clamp-3">{description}</div>
        {/* Progress Bar */}
        <div className="w-full mt-2 mb-1">
          <div className="relative w-full h-2 bg-white rounded-lg border border-[#D9D9D9]">
            <div
              className="absolute top-0 left-0 h-2 rounded-lg"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(180deg, #D60100 0%, #872427 100%)",
              }}
            />
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs font-bold text-[#D60100]">{progressText}</span>
            <span className="text-xs text-[#872427]">{fundText}</span>
          </div>
        </div>
        {/* Nominal */}
        <div className="italic text-base text-black mt-2">{nominalText}</div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col justify-center items-center gap-4 w-[180px]">
        <button
          onClick={onDetail}
          className="w-full bg-gradient-to-b from-[#D60100] to-[#872427] text-white font-bold rounded-lg py-2 mb-2"
        >
          Lihat Detail
        </button>
        <button
          onClick={onShare}
          className="w-full flex items-center justify-center gap-2 border border-[#BA2145] text-[#BA2145] font-bold rounded-lg py-2"
        >
          Bagikan
          <span className="material-icons text-[#BA2145]">share</span>
        </button>
      </div>
    </div>
  );
};

export default DonationListCard;
