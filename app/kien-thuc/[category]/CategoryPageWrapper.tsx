// app/kien-thuc/[category]/CategoryPageWrapper.tsx
"use client"

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NavHeader from '@/app/components/NavHeader';
import { allArticles } from '../../data/ArticlesData';
import { notFound } from 'next/navigation';

const CategoryPageWrapper = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = decodeURIComponent(pathname.split('/').pop() || '');
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    // Kiểm tra danh mục
    const articles = allArticles.filter(article => article.categoryLink === pathname);

    if (articles.length === 0) {
      setIsNotFound(true);
      notFound(); // Chuyển hướng đến trang 404 nếu danh mục không tồn tại
    }
  }, [pathname]);

  if (isNotFound) {
    return null; // Không hiển thị nội dung khi danh mục không tồn tại
  }

  const heading = {
    h1: {
      title: 'Danh Mục'
    }
  };

  const crumbs = [
    { href: '/', label: 'Trang chủ' },
    { href: '/kien-thuc', label: 'Kiến thức' },
    { href: pathname, label: 'Danh Mục' }
  ];

  return (
    <>
      <NavHeader heading={heading} crumbs={crumbs} />
      {children}
    </>
  );
};

export default CategoryPageWrapper;
