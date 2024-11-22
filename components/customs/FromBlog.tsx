"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Post {
  name: string;
  slug: string;
  image: string | null;
  created_at: string;
  category: Category;
}

interface LaststPostByCategoryResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    slug: string;
    posts: {
      current_page: number;
      data: Post[];
    };
  };
}

const BlogSection = () => {
  const [recentBlog, setRecentBlog] = useState<Post[]>([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}category/kien-thuc?sort_name=created_at&sort_by=desc&page=1&limit=8`,
        { cache: "no-store" }
      );

      if (!response.ok) {
        throw new Error("Lỗi khi lấy dữ liệu bài viết.");
      }

      const dataResult: LaststPostByCategoryResponse = await response.json();

      if (dataResult.success) {
        setRecentBlog(dataResult.data.posts.data);
      }
    };

    fetchRecentBlogs();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h4 className="md:text-4xl text-3xl font-semibold font-secondary text-center text-primary mb-12">
          Digital Blog & Kiến Thức
        </h4>

        {/* Giao diện Mobile - Danh sách đọc */}
        <div className="block md:hidden">
          <ul className="space-y-4">
            {recentBlog.map((post) => (
              <li key={post.slug} className="border-b pb-4">
                <Link href={`/${post.slug}.html`} className="flex items-start">
                  <Image
                    src={post.image || "/placeholder.jpg"}
                    alt={post.name}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {post.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {new Date(post.created_at).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Giao diện md - Card Mini */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentBlog.map((post) => (
            <div
              key={post.slug}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
            >
              <Link href={`/${post.slug}.html`}>
                <Image
                  src={post.image || "/placeholder.jpg"}
                  alt={post.name}
                  width={400}
                  height={250}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {post.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {new Date(post.created_at).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
