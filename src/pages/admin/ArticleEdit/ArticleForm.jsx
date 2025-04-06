import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArticleForm = () => {
  // State form
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState("");

  // Handling action
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile));
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };
  const handleBack = useNavigate();

  // Script format
  const [line, setLine] = useState("");
  const editorRef = useRef(null);

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };
  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="px-32 pb-12">
      <div className="grid grid-cols-2 gap-6">
        {/* Detail Form : Left Side */}
        <div>
          <label className="block font-semibold">Judul Artikel</label>
          <input
            type="text"
            placeholder="Judul Artikel"
            className="w-full p-2 border rounded mt-2"
          />

          <label className="block font-semibold mt-4">Ringkasan</label>
          <textarea
            placeholder="Ringkasan"
            className="w-full p-2 border rounded mt-2 h-24"
          ></textarea>

          <label className="block font-semibold mt-4">Penulis (Opsional)</label>
          <input
            type="text"
            placeholder="Penulis"
            className="w-full p-2 border rounded mt-2"
          />
        </div>

        {/* Detail Form : Right Side */}
        <div>
          <label className="block font-semibold">File Attachment</label>
          <div
            className="w-full h-full border-2 border-dashed flex flex-col items-center justify-center rounded mt-2 p-4"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="h-24 object-cover" />
            ) : (
              <div className="text-gray-500 text-sm text-center justify-items-center">
                <img src={ noPicture } alt="No Picture" className='w-24 h-24'/>
                <p>No File chosen yet</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileUpload"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
            >
              Choose File
            </label>
          </div>
        </div>
      </div>
      
      {/* Detail Form : Content */}
      <div className='mt-10'>
          <label className="block font-semibold">Konten Artikel</label>

          {/* Toolbar */}
          <div className="border flex space-x-2 mt-2">
            <button
              onClick={() => handleFormat("bold")}
              className="px-3 py-1 rounded hover:bg-gray-300"
            >
              <b>B</b>
            </button>
            <button
              onClick={() => handleFormat("italic")}
              className="px-3 py-1 rounded hover:bg-gray-300"
            >
              <i>I</i>
            </button>
            <button
              onClick={() => handleFormat("underline")}
              className="px-3 py-1 rounded hover:bg-gray-300 underline"
            >
              U
            </button>
            <button
              onClick={() => handleFormat("uppercase")}
              className="px-3 py-1 rounded hover:bg-gray-300"
            >
              Aa
            </button>
          </div>

          {/* Editor Input */}
          <textarea
            className="w-full p-3 border rounded h-60"
            placeholder="Tulis konten artikel di sini..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          {/* Tombol Save & Cancel */}
          <div className="flex justify-start space-x-3 mt-4">
            <button 
              className="px-4 py-2 border rounded-xl bg-[#5AAA14] text-white hover:bg-green-600"
              onClick={() => handleBack("/berita")}
            >
              Save & Upload
            </button>
            <button
              className="px-4 py-2 border-2 border-[#D55164] rounded-xl bg-transparent text-[#BA2145] hover:bg-[#D55164]"
              onClick={() => handleBack("/berita")}
            >
              Cancel
            </button>
          </div>
        </div>
    </div>
  );
}

export default ArticleForm