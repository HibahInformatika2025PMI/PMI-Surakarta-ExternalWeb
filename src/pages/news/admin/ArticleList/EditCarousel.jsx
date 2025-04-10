import React, { useState } from 'react'
import articleImage from "../../../../assets/images/article_pmi.png"

const EditCarousel = () => {
    // State form
    const [totalSlide, setTotalSlide] = useState(3);
    const [halamanSlide, setHalamanSlide] = useState(1);
    const [articleTitle, setArticleTitle] = useState("");
    
    const exampleArticle = {
        date: "23 Januari 2025",
        title: "Article Title",
        description: "Example article. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        image: articleImage
    };

    const existingArticles = [
        { id: 1, title: "Artikel 1", description: "Article one. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur." },
        { id: 2, title: "Artikel 2" },
        { id: 3, title: "Artikel 3" },
        { id: 4, title: "Artikel 4" },
        { id: 5, title: "Artikel 5" },
    ];

    return (
        <div className='px-32 py-12'>
            {/* Edit Carousel */}
            <h1 className='text-2xl font-bold mb-6 border-b-4 border-red-500 w-fit'>Edit Carousel</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Left */}
                <div className='relative'>
                    <img src={ exampleArticle.image } alt="Carousel Article" className='w-full h-full rounded-lg object-cover' />
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-transparent bg-opacity-50 text-white px-6 py-8 rounded-b-lg'>
                        <h3 className='font-bold text-lg uppercase'>{ exampleArticle.title }</h3>
                        <p className='text-sm line-clamp-2'>{ exampleArticle.description }</p>
                    </div>
                </div>
                {/* Right */}
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700'>Total Slide</label>
                        <input
                            type="text"
                            value={ totalSlide }
                            onChange={ (e) => setTotalSlide(e.target.value) }
                            className='mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Halaman Slide</label>
                        <input
                            type="number"
                            value={ halamanSlide }
                            onChange={ (e) => setHalamanSlide(e.target.value) }
                            className='mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Judul Artikel</label>
                        <select
                            value={ articleTitle }
                            onChange={ (e) => setArticleTitle(e.target.value) }
                            className='mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-red-500 focus:border-red-500'
                        >
                            <option value="">Pilih Artikel</option>
                            {existingArticles.map((article) => (
                                <option key={ article.id } value={ article.id }>{ article.title }</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCarousel