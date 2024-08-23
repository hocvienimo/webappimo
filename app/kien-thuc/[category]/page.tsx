"use client"

import { useState, useEffect } from 'react'
import { notFound, usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { allArticles } from '../../data/ArticlesData'
import Image from 'next/image'
import PaginationComponent from '../../components/PaginationComponent'
import CategoryPageWrapper from './CategoryPageWrapper'

const CategoryPage = () => {
  const itemsPerPage = 6;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentCategoryName, setCurrentCategoryName] = useState('');

  useEffect(() => {
    const articles = allArticles.filter(article => article.categoryLink === pathname);
    setFilteredArticles(articles);
    
    setCurrentCategoryName(articles[0]?.category || ''); // Set the category name
  }, [pathname]);

  useEffect(() => {
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const buildPageLink = (pageNumber) => {
    return `${pathname}?page=${pageNumber}`;
  };


  return (
    
    <CategoryPageWrapper>
        {/* Cột chính chứa các bài viết */}

        {paginatedArticles.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
            {paginatedArticles.map((article) => (
                <article key={article.id} className="relative flex flex-col transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-xl rounded-lg">
                {/* Hình ảnh đại diện */}
                <Link href={`${article.categoryLink}/${article.slug}`} key={article.id} className='block'>
                    <div className="w-full h-48 relative">
                        <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                        />
                    </div>
                </Link>
                {/* Danh mục và ngày đăng */}
                <div className="flex justify-between items-center px-6 mt-4 text-sm text-gray-600">
                    <Link href={article.categoryLink} className="text-primary bg-[#FCBB7C] hover:bg-[#64D3D8] rounded-xl font-bold px-3 py-1">
                    {article.category}
                    </Link>
                    <span>{article.publishDate}</span>
                </div>
                {/* Tiêu đề */}
                <h2 className="text-xl font-bold mt-2 px-6 line-clamp-2 leading-6">
                    <Link href={`${article.categoryLink}/${article.slug}`} key={article.id} className='text-primary'>
                    {article.title}
                    </Link>
                </h2>
                {/* Mô tả ngắn */}
                <p className="mt-2 px-6 line-clamp-3 mb-5 overflow-hidden leading-6">{article.description}</p>
                </article>
            ))}
            </div>
            ) : (
                <p>Danh mục {pathname.split('/').pop()} hiện tại chưa có bài viết.</p>
              )}


            {/* Pagination */}
            {totalPages > 1 && (
                <PaginationComponent 
                currentPage={currentPage} 
                totalPages={totalPages} 
                buildPageLink={buildPageLink} 
                />
            )}    
    </CategoryPageWrapper>
  );
};

export default CategoryPage;
