import React from "react";
import PaginationComponent from "@/components/moduls/PaginationComponent";
import NavHeader from "@/components/moduls/NavHeader";
import Link from "next/link";
import Image from "next/image";
import CateSidebar from "@/app/[slug]/components/CateSidebar"; // Cập nhật đường dẫn import nếu cần
import { Metadata } from "next";
import {
  ApiCategoryResponse,
  ApiUserResponse,
  Post,
  UserPostsPageProps,
} from "@/types/Author";
import { CategoryWithChildren } from "@/types/Categories";

// Hàm generateMetadata
export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata | undefined> {
  const { username } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}user/@${username}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {}; // Trả về metadata rỗng nếu bài viết không tồn tại
  }

  const responseData = await res.json();
  const user = responseData.data;

  return {
    title: user.name,
    description:
      "Auth iMovn -  Chuyên gia marketing online đa kênh và web app design.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/@${username}`,
    },
    authors: null,
    publisher: user.name,
    openGraph: {
      title: user.name,
      description:
        "Auth iMovn -  Chuyên gia marketing online đa kênh và web app design.",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/@${username}`,
      images: [
        {
          url: user.image || "/placeholder.jpg", // Must be an absolute URL
          width: 1200,
          height: 630,
          alt: user.name,
        },
      ],
    },
  };
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

    // Handle API errors
    if (!userPostsRes.ok || !categoryRes.ok) {
      throw new Error(
        `API Error: User Posts (${userPostsRes.status}) or Categories (${categoryRes.status})`
      );
    }

    // Parse response data
    const resultUser: ApiUserResponse = await userPostsRes.json();
    const categoryResult: ApiCategoryResponse = await categoryRes.json();

    // Find kienThucCategory correctly
    const kienThucCategory = categoryResult.data.find(
      (cat) => cat.slug === "kien-thuc"
    ) as CategoryWithChildren | undefined;

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
              categories={kienThucCategory?.children || []}
              currentSlug={""}
              user={
                resultUser.data.image
                  ? {
                      name: resultUser.data.name,
                      image: resultUser.data.image,
                    }
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
