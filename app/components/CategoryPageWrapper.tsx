"use client";

import { useEffect, useState } from "react";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import { allArticles } from "@/app/data/ArticlesData";
import NavHeader from "@/app/components/NavHeader";
import Link from "next/link";
import Image from "next/image";
import BannerSb from "@/public/images/dich-vu-marketing-online-sb.jpg";
import CategorySidebar from "../kien-thucs/components/CategorySidebar";

const CategoryPageWrapper = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = decodeURIComponent(pathname.split("/").pop() || "");
  const [categories, setCategories] = useState([]);
  const [currentCategoryName, setCurrentCategoryName] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    // Lọc bài viết theo categoryLink
    const articles = allArticles.filter(
      (article) => article.categoryLink === pathname
    );
    if (articles.length === 0) {
      notFound(); // Chuyển hướng đến trang 404 nếu danh mục không tồn tại
      return; // Ngăn không chạy các đoạn mã còn lại
    }
    setFilteredArticles(articles);

    // Lấy danh sách danh mục từ allArticles
    const uniqueCategories = Array.from(
      new Set(allArticles.map((article) => article.categoryLink))
    ).map((link) => {
      const category = allArticles.find(
        (article) => article.categoryLink === link
      );
      return {
        name: category?.category || "Unknown",
        link,
      };
    });
    setCategories(uniqueCategories);

    // Tìm tên danh mục hiện tại
    const currentCategory = uniqueCategories.find(
      (category) => category.link === pathname
    );
    setCurrentCategoryName(currentCategory?.name || "Danh mục không xác định");
  }, [pathname]);

  const heading = currentCategoryName
    ? {
        h1: {
          title: currentCategoryName,
        },
      }
    : null;

  const crumbs = [
    { href: "/", label: "Trang chủ" },
    { href: "/kien-thuc", label: "Kiến thức" },
    { href: pathname, label: currentCategoryName },
  ];

  return (
    <>
      {heading && (
        <div className="mt-20">
          <NavHeader crumbs={crumbs} heading={heading} />
        </div>
      )}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6">
          <div className="col-span-3">{children}</div>
          {/* Sidebar bên phải - Sticky */}
          {/* Sidebar bên phải - Sticky */}
          <CategorySidebar />
        </div>
      </main>
    </>
  );
};

export default CategoryPageWrapper;
