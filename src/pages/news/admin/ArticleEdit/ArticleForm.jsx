import React, { useRef, useState, useEffect } from 'react'
import { FaFileImage } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const ArticleForm = () => {
  // State form
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState("");
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil ID dari query params
  const query = new URLSearchParams(location.search);
  const articleId = query.get('id');

  useEffect(() => {
    if (articleId) {
      // Ambil data artikel dari API
      fetch(`http://localhost:8080/news/${articleId}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === "success") {
            setArticle(data.data);
            setContent(data.data.content);
            setPreview(data.data.cover_image);
          } else {
            console.error(data.message);
          }
        })
        .catch(error => console.error('Error fetching article:', error));
    } else {
      // Jika tidak ada ID, inisialisasi state untuk artikel baru
      setArticle({
        title: "",
        summary: "",
        writer: "",
        content: "",
        cover_image: null,
      });
    }
  }, [articleId]);

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
  const handleBack = () => {
    navigate("/admin-news");
  };

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

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('title', article.title);
    formData.append('summary', article.summary);
    formData.append('writer', article.writer);
    formData.append('content', content);
    
    // Hanya tambahkan cover_image ke formData jika ada file baru yang diunggah
    if (file) {
        formData.append('cover_image', file);
    }

    formData.append('is_draft', false);

    try {
        let response;
        if (articleId) {
            // Jika ada ID, gunakan PUT untuk memperbarui artikel
            response = await fetch(`http://localhost:8080/news/${articleId}`, {
                method: 'PUT',
                body: formData,
            });
        } else {
            // Jika tidak ada ID, gunakan POST untuk membuat artikel baru
            response = await fetch(`http://localhost:8080/news`, {
                method: 'POST',
                body: formData,
            });
        }

        // Cek apakah respons berhasil
        if (!response.ok) {
            const errorText = await response.text(); // Ambil teks dari respons
            console.error("Error updating article:", errorText);
            throw new Error(errorText); // Buat kesalahan baru dengan pesan dari respons
        }

        const data = await response.json(); // Parsing JSON hanya jika respons berhasil
        if (data.status === "success") {
            navigate('/admin-news'); // Kembali ke halaman EditArticle setelah berhasil
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error('Error updating article:', error);
    }
  };

  return (
    <div className="px-32 pb-12">
      {article && (
        <div>
          <h1 className="text-2xl font-bold mb-6">Edit Artikel</h1>
          <div className="grid grid-cols-2 gap-6">
            {/* Detail Form : Left Side */}
            <div>
              <label className="block font-semibold">Judul Artikel</label>
              <input
                type="text"
                placeholder="Judul Artikel"
                className="w-full p-2 border rounded mt-2"
                defaultValue={article.title}
                onChange={(e) => setArticle({ ...article, title: e.target.value })}
              />

              <label className="block font-semibold mt-4">Ringkasan</label>
              <textarea
                placeholder="Ringkasan"
                className="w-full p-2 border rounded mt-2 h-24"
                defaultValue={article.summary}
                onChange={(e) => setArticle({ ...article, summary: e.target.value })}
              ></textarea>

              <label className="block font-semibold mt-4">Penulis (Opsional)</label>
              <input
                type="text"
                placeholder="Penulis"
                className="w-full p-2 border rounded mt-2"
                defaultValue={article.writer}
                onChange={(e) => setArticle({ ...article, writer: e.target.value })}
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
                    <img src={<FaFileImage />} alt="No Picture" className='w-24 h-24' />
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
                  onClick={handleSave}
                >
                  Save & Upload
                </button>
                <button
                  className="px-4 py-2 border-2 border-[#D55164] rounded-xl bg-transparent text-[#BA2145] hover:bg-[#D55164]"
                  onClick={handleBack}
                >
                  Cancel
                </button>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default ArticleForm