import React from "react";
import PaginationComponent from "@/app/components/PaginationComponent";
import NavHeader from "@/app/components/NavHeader";
import Link from "next/link";
import Image from "next/image";
import CateSidebar from "@/app/[slug]/components/CateSidebar"; // Cập nhật đường dẫn import nếu cần

// Định nghĩa interface cho cấu trúc dữ liệu bài viết
interface Post {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  description: string | null;
  created_at: string;
  category: {
    name: string;
    slug: string;
  };
}

// Định nghĩa interface cho cấu trúc phản hồi từ API
interface ApiUserResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    image: string | null;
    posts: {
      current_page: number;
      data: Post[];
      last_page: number;
    };
  };
}

// Định nghĩa interface cho cấu trúc phản hồi từ API danh mục
interface ApiCategoryResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    slug: string;
  }[];
}

interface UserPostsPageProps {
  username: string; // username từ slug
  searchParams?: { page?: string; limit?: string }; // Tham số tìm kiếm
}

const UserPostsPage = async ({
  username,
  searchParams,
}: UserPostsPageProps) => {
  const currentPage = parseInt(searchParams?.page || "1", 10);
  const limit = parseInt(searchParams?.limit || "12", 10);

  try {
    const userPostsUrl = `${process.env.NEXT_PUBLIC_API_URL}user/@${username}?page=${currentPage}&limit=${limit}&sort_by=desc&sort_name=created_at`;
    const categoryUrl = `${process.env.NEXT_PUBLIC_API_URL}category`;

    const [userPostsRes, categoryRes] = await Promise.all([
      fetch(userPostsUrl, { cache: "no-store" }),
      fetch(categoryUrl, { cache: "no-store" }),
    ]);

    if (!userPostsRes.ok) {
      const errorText = await userPostsRes.text();
      throw new Error(`Lỗi ${userPostsRes.status}: ${errorText}`);
    }

    if (!categoryRes.ok) {
      const errorText = await categoryRes.text();
      throw new Error(`Lỗi ${categoryRes.status}: ${errorText}`);
    }

    const resultUser: ApiUserResponse = await userPostsRes.json();
    const categoryResult: ApiCategoryResponse = await categoryRes.json();

    const crumbs = [
      { href: "/", label: "Trang chủ" },
      {
        href: `/@${username}`,
        label: username || "Bài viết của tác giả",
      },
    ];

    return (
      <>
        <div className="mt-20">
          <NavHeader
            crumbs={crumbs}
            heading={{ h1: { title: `Đăng bởi: ${resultUser.data.name}` } }}
          />
        </div>
        <main className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6">
            <CateSidebar
              categories={categoryResult.data || []}
              currentSlug={""}
              user={
                resultUser.data.image
                  ? { name: resultUser.data.name, image: resultUser.data.image }
                  : undefined
              }
            />
            <div className="col-span-3">
              <div className="container mx-auto md:py-0 pt-6 px-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {resultUser.data.posts.data.map((itemPost: Post) => (
                    <article
                      key={`${itemPost.slug}-${itemPost.created_at}`}
                      className="relative flex flex-col transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-xl rounded-lg"
                    >
                      <Link href={`/${itemPost.slug}.html`} className="block">
                        <div className="w-full h-48 relative">
                          <Image
                            src={itemPost.image || "/placeholder.jpg"}
                            alt={itemPost.name || "No title available"}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </Link>
                      <div className="flex justify-between items-center px-6 mt-4 text-sm text-gray-600">
                        <span className="text-primary bg-[#FCBB7C] hover:bg-[#64D3D8] rounded-xl font-bold px-3 py-1">
                          <Link href={itemPost.category.slug}>
                            {itemPost.category.name}
                          </Link>
                        </span>
                        <span>
                          {new Date(itemPost.created_at).toLocaleDateString(
                            "vi-VN"
                          )}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mt-2 px-6 line-clamp-2 leading-6">
                        <Link
                          href={`/${itemPost.slug}.html`}
                          className="text-primary"
                        >
                          {itemPost.name}
                        </Link>
                      </h2>
                      <p className="mt-2 px-6 line-clamp-3 mb-5 overflow-hidden leading-6">
                        {itemPost.description || "No description available"}
                      </p>
                    </article>
                  ))}
                </div>
                {/* Component phân trang */}
                {resultUser.data.posts.last_page > 1 && (
                  <PaginationComponent
                    currentPage={resultUser.data.posts.current_page}
                    totalPages={resultUser.data.posts.last_page}
                    buildPageLink={(page: number) =>
                      `/@${username}?page=${page}`
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    return <div>Có lỗi xảy ra khi gọi API.</div>;
  }
};

export default UserPostsPage;
