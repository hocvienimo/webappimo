"use client"

import { useState, useEffect  } from 'react'
import { usePathname, useSearchParams  } from 'next/navigation'
import { allArticles } from '../data/ArticlesData'
import Link from 'next/link'
import Image from 'next/image'
import PaginationComponent from '../components/PaginationComponent'
import BannerSb from '@/public/images/dich-vu-marketing-online-sb.jpg'

const MainCategory = () => {
  const itemsPerPage = 9;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = decodeURIComponent(pathname.split('/').pop() || '');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Lấy danh sách danh mục từ allArticles
    const uniqueCategories = Array.from(new Set(allArticles.map(article => article.categoryLink)))
      .map(link => {
        const category = allArticles.find(article => article.categoryLink === link);
        return {
          name: category?.category || 'Unknown',
          link
        };
      });

    setCategories(uniqueCategories);
  }, [category]);

  useEffect(() => {
    // Chỉ đọc searchParams trong useEffect để đảm bảo không có sự khác biệt giữa server và client
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  useEffect(() => {
    const categoryArticles = allArticles.filter(
      (article) => article.category === category
    );
    setFilteredArticles(categoryArticles);
  }, [category]);

  // Tính tổng số trang
  const totalPages = Math.ceil(allArticles.length / itemsPerPage);

  // Lấy bài viết dựa trên trang hiện tại
  const paginatedArticles = allArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Tạo liên kết phân trang
  const buildPageLink = (pageNumber) => {
    return `${pathname}?page=${pageNumber}`;
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6">
        {/* Cột chính chứa các bài viết */}
        <div className="col-span-3">
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

          {/* Pagination */}
          {totalPages > 1 && (
          <PaginationComponent 
            currentPage={currentPage} 
            totalPages={totalPages} 
            buildPageLink={buildPageLink} 
          />
          )}
        </div>

        {/* Sidebar bên phải - Sticky */}
        <aside className="sticky top-28 self-start mt-6 md:mt-0">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-2xl font-secondary font-semibold text-secondary mb-4">Chuyên Đề</h3>
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link href={category.link} passHref className="block py-1 text-black hover:text-thirdary">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="banner-sb mt-4">
            <Link href="/dich-vu-marketing-online" passHref className='block h-full'>
              <div className="w-full h-full relative">
                <Image
                  src={BannerSb}
                  alt= 'dich-vu-marketing-online-sb'
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>
        </aside>
      </div>
  </section>
  )
}

export default MainCategory