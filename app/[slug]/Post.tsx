import Image from "next/image";
import { notFound } from "next/navigation";
import MyBreadcrumb from "../components/MyBreadcrumb";
import MySwiper from "../components/MySwiper";
import MyToc from "./components/MyToc";
import {
  FiPhoneCall,
  FiMail,
  FiFacebook,
  FiMapPin,
  FiMessageSquare,
} from "react-icons/fi";
import Link from "next/link";
import { Metadata } from "next";

// Định nghĩa kiểu dữ liệu cho bài viết
interface User {
  name: string;
  email: string;
}

interface Category {
  slug: string;
  name: string;
}

interface RelatedPost {
  id: number;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  created_at: string;
}

interface Post {
  name: string;
  description?: string;
  content: string;
  created_at: string;
  user: User;
  category: Category;
  related_posts: RelatedPost[];
  title_seo?: string;
  description_seo?: string;
  image?: string;
  toc?: string;
}

interface Company {
  name: string;
  email: string;
  hotline: string;
  address: string;
  description: string;
  zalo: string;
  messenger: string;
}

// Hàm generateMetadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const slug = params.slug.replace(".html", ""); // Xóa đuôi .html nếu có
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}post/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return {}; // Trả về metadata rỗng nếu bài viết không tồn tại
  }

  const responseData = await res.json();
  const post: Post = responseData.data;
  const authorUrl = post.user.email.replace("@gmail.com", "");

  return {
    title: post.title_seo || post.name,
    description: post.description_seo || post.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}.html`,
    },
    publisher: post.user.name,
    authors: [
      {
        name: post.user.name,
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/@${authorUrl}`,
      },
    ],
    openGraph: {
      title: post.title_seo || post.name,
      description: post.description_seo || post.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}.html`,
      images: [
        {
          url: post.image || "/placeholder.jpg", // Must be an absolute URL
          width: 1200,
          height: 630,
          alt: post.name,
        },
      ],
    },
  };
}

// Hàm xử lý bài viết
const Post = async ({ slug }: { slug: string }) => {
  // Lấy dữ liệu bài viết từ API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}post/${slug}?limit=12`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound(); // Nếu không tìm thấy bài viết, trả về trang 404
  }

  const responseData = await res.json();
  const post: Post = responseData.data; // Truy cập vào trường `data`

  // Kiểm tra nếu bài viết không tồn tại
  if (!post || !post.content) {
    notFound();
  }

  // Lấy dữ liệu Setting/ Company từ API
  const companyRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}setting?keys[]=company`,
    {
      cache: "no-store",
    }
  );

  if (!companyRes.ok) {
    console.error("Error fetching company data:", companyRes.statusText);
  }

  const companyData = await companyRes.json();
  const company: Company = companyData.data.company; //Do api: data/company vì còn seo, sendmail, schema.

  // Tạo breadcrumbs
  const crumbs = [
    { href: "/", label: "Trang chủ" },
    {
      href: `/${post.category?.slug}`,
      label: post.category?.name || "Kiến thức",
    },
    { href: `/${slug}`, label: post.name },
  ];

  // Lọc bài viết liên quan
  const relatedArticles = post.related_posts || [];

  // Tạo username từ email
  const username = post.user.email.replace("@gmail.com", ""); // Cắt bỏ phần đuôi @gmail.com

  return (
    <main className="single-post bg-[#F7F8FC] pb-6">
      <section className="container mx-auto md:px-4 py-8 mt-20">
        <MyBreadcrumb crumbs={crumbs} />
      </section>
      <article className="container">
        <section className="grid md:grid-cols-[60%_40%] justify-between items-center bg-white md:px-8 px-2 md:py-4 py-2 rounded-xl shadow-md mb-8">
          <div className="mr-10 pb-3 order-2 md:order-1">
            <h1 className="md:text-3xl text-2xl font-extrabold text-primary my-4 capitalize">
              {post.name}
            </h1>
            <blockquote className="text-[#313131] md:text-lg text-base font-semibold italic">
              {post.description || "No description available."}
            </blockquote>
            <p className="text-sm text-gray-600 flex justify-between mt-6">
              <Link
                href={`/@${username}`}
                className="bg-[#F7F8FC] text-primary px-3 py-2 rounded-full shadow-md font-semibold"
              >
                {post.user.name || "Unknown Author"}
              </Link>
              <span className="bg-[#F7F8FC] text-primary px-3 py-2 rounded-full shadow-md font-semibold">
                {new Date(post.created_at).toLocaleDateString("vi-VN")}
              </span>
            </p>
          </div>

          <figure className="w-full h-48 relative order-1 md:order-2">
            <Image
              src={post.image || "/placeholder.jpg"} // Đặt ảnh mặc định nếu không có
              alt={post.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority
              className="rounded-lg"
            />
          </figure>
        </section>
        <div className="grid md:grid-cols-[28%_70%] gap-6">
          <aside className="md:sticky md:top-28 self-start">
            {post.toc ? (
              <MyToc tocHtml={post.toc} />
            ) : (
              <p className="text-gray-500">
                Mục lục không có sẵn cho bài viết này.
              </p>
            )}
          </aside>
          <section className="content-single bg-white text-lg text-justify rounded-xl shadow-md md:px-8 px-3 py-4">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Hiển thị thông tin công ty */}
            <div className="bio-company grid md:grid-cols-[30%_70%] grid-cols-1 items-end pb-8 pt-4 mt-8 border-t-[3px] border-[#e4e8f5]">
              <ul className="bio-connect md:!ml-7 !ml-0">
                <div className="flex gap-2">
                  <li className="flex items-center gap-1">
                    <Link
                      href={company.hotline ? `tel:${company.hotline}` : ""}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="bg-primary p-3 rounded-full shadow-lg border-2 border-primary-light hover:bg-secondary transition-colors duration-300"
                    >
                      <FiPhoneCall color="#fff" />
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    <Link
                      href={`mailto:${company.email}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="bg-primary p-3 rounded-full shadow-lg border-2 border-primary-light hover:bg-secondary transition-colors duration-300"
                    >
                      <FiMail color="#fff" />
                    </Link>
                  </li>
                  <li className="flex items-center gap-1">
                    <Link
                      href={company.messenger}
                      className="bg-primary p-3 rounded-full shadow-lg border-2 border-primary-light hover:bg-secondary transition-colors duration-300"
                    >
                      <FiFacebook color="#fff" />
                    </Link>
                  </li>
                </div>
              </ul>

              <ul className="bio-info !ml-0">
                <li className="flex text-primary font-secondary font-extrabold text-2xl mb-2 mt-3">
                  {company.name}
                </li>
                <li className="flex text-base mb-1">{company.description}</li>
                <li className="flex items-center text-thirdary gap-1 text-sm">
                  <FiMapPin color="#104379" />
                  {company.address}
                </li>
                <li className="flex">
                  <Link
                    href={company.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-thirdary hover:text-primary flex items-center gap-1 text-sm"
                  >
                    <FiMessageSquare color="#104379" /> Zalo Official Chat
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* Bài viết liên quan */}
        {relatedArticles.length > 0 && (
          <section className="related-articles mt-9">
            <h6 className="text-2xl font-bold mb-4 text-primary font-secondary">
              Cùng Chuyên Đề
            </h6>
            <MySwiper relatedArticles={relatedArticles} />
          </section>
        )}
      </article>
    </main>
  );
};

export default Post;
