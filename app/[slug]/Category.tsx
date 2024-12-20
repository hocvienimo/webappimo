import Image from "next/image";
import Link from "next/link";
import NavHeader from "@/components/moduls/NavHeader";
import CateSidebar from "./components/CateSidebar";
import PaginationComponent from "@/components/moduls/PaginationComponent";
import { notFound } from "next/navigation"; // Để sử dụng tính năng chuyển hướng về trang 404
import { Metadata } from "next";
import {
  Article,
  CategoryData,
  CategoryWithChildren,
} from "@/types/Categories";

// Hàm generateMetadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const slug = params.slug;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}category/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    return {}; // Trả về metadata rỗng nếu bài viết không tồn tại
  }

  const responseData = await res.json();
  const categories: CategoryData = responseData.data;
  return {
    title: categories.title_seo || categories.name,
    description: categories.description_seo || categories.name,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`,
    },
    category: categories.name,
    openGraph: {
      title: categories.title_seo || categories.name,
      description: categories.description_seo || categories.name,
      type: "article",
      locale: "vi-VN",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`,
      siteName: "iMovn - Giải Pháp Marketing Online Toàn Diện",
      images: [
        {
          url: "/placeholder.jpg", // Must be an absolute URL
          width: 1200,
          height: 630,
          alt: categories.name,
        },
      ],
    },
  };
}

// Hàm gọi API lấy bài viết theo slug
export async function fetchArticlesBySlug(
  slug: string,
  page: number = 1,
  limit: number = 12
): Promise<CategoryData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}category/${slug}?sort_name=created_at&sort_by=desc&page=${page}&limit=${limit}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const jsonResponse = await res.json();

  // Kiểm tra xem danh mục có tồn tại không
  if (!jsonResponse.success || !jsonResponse.data || !jsonResponse.data.posts) {
    console.log("Danh mục không tồn tại, chuyển hướng về 404");
    notFound(); // Chuyển hướng về trang 404
  }

  return jsonResponse.data;
}

// Hàm gọi API lấy danh sách danh mục
export async function fetchCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}category`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const response = await res.json();

  // Tìm category "kien-thuc" và lấy children của nó
  const kienThucCategory = response.data.find(
    (cat: CategoryWithChildren) => cat.slug === "kien-thuc"
  );

  // Trả về children của category "kien-thuc" hoặc mảng rỗng
  return {
    success: response.success,
    message: response.message,
    data: kienThucCategory?.children || [],
  };
}

const domain = process.env.NEXT_PUBLIC_DOMAIN;

// Định nghĩa kiểu cho props
interface CategoryProps {
  slug: string;
  searchParams?: { page?: string };
}

const Category = async ({ slug, searchParams }: CategoryProps) => {
  const currentPage = parseInt(searchParams?.page || "1", 10); //cơ số 10

  try {
    const [articlesResponse, categoriesResponse] = await Promise.all([
      fetchArticlesBySlug(slug, currentPage, 12),
      fetchCategories(),
    ]);

    const { name, posts } = articlesResponse;
    const { data: sidebarCategories } = categoriesResponse;

    // Kiểm tra xem có bài viết nào không
    if (!posts || posts.data.length === 0) {
      console.log("Không có bài viết trong danh mục, chuyển hướng về 404"); // Thông báo không có bài viết
      notFound(); // Chuyển hướng về trang 404
    }

    const crumbs = [
      { href: "/", label: "Trang chủ" },
      ...(slug !== "kien-thuc"
        ? [{ href: "/kien-thuc", label: "Kiến thức" }]
        : []),
      { href: `/${slug}`, label: name },
    ];

    return (
      <>
        <div className="mt-20">
          <NavHeader crumbs={crumbs} heading={{ h1: { title: name } }} />
        </div>
        <main className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6">
            <CateSidebar categories={sidebarCategories} currentSlug={slug} />
            <div className="col-span-3">
              <div className="container mx-auto md:py-0 pt-6 px-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {posts.data.map((article: Article) => (
                    <article
                      key={`${article.slug}-${article.created_at}`}
                      className="relative flex flex-col transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg hover:shadow-xl rounded-lg"
                    >
                      <Link href={`/${article.slug}.html`} className="block">
                        <div className="w-full h-48 relative">
                          <Image
                            src={article.image || "/placeholder.jpg"}
                            alt={article.name || "No title"}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      </Link>
                      <div className="flex justify-between items-center px-6 mt-4 text-sm text-gray-600">
                        {slug === "kien-thuc" && (
                          <span className="text-primary bg-[#FCBB7C] hover:bg-[#64D3D8] rounded-xl font-bold px-3 py-1">
                            <Link href={article.category.slug}>
                              {article.category.name}
                            </Link>
                          </span>
                        )}
                        <span>
                          {new Date(article.created_at).toLocaleDateString(
                            "vi-VN"
                          )}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mt-2 px-6 line-clamp-2 leading-6">
                        <Link
                          href={`/${article.slug}.html`}
                          className="text-primary"
                        >
                          {article.name}
                        </Link>
                      </h2>
                      <p className="mt-2 px-6 line-clamp-3 mb-5 overflow-hidden leading-6">
                        {article.description || "No description available"}
                      </p>
                    </article>
                  ))}
                </div>
                {/* Component phân trang */}
                {posts.last_page > 1 && (
                  <PaginationComponent
                    currentPage={posts.current_page}
                    totalPages={posts.last_page}
                    buildPageLink={(page: number) =>
                      `${domain}/${slug}?page=${page}`
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
    console.error(error);
    return <div>Error fetching category data</div>;
  }
};

export default Category;
