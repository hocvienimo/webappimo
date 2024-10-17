// components/CateSidebar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerSb from "@/public/images/dich-vu-marketing-online-sb.jpg";

// Định nghĩa kiểu cho Category
interface Category {
  id: number;
  name: string;
  slug: string;
  children?: Category[]; // Danh sách danh mục con (nếu có)
}

// Định nghĩa kiểu cho User
interface ApiUserResponse {
  name: string;
  image: string; // URL của avatar user
}

// Định nghĩa kiểu cho props
interface CateSidebarProps {
  categories: Category[]; // Danh sách các danh mục
  currentSlug: string; // Slug của danh mục hiện tại
  user?: ApiUserResponse; // Thông tin user, chỉ hiển thị nếu có
}

const CateSidebar: React.FC<CateSidebarProps> = ({
  categories,
  currentSlug,
  user,
}) => {
  return (
    <aside className="md:sticky top-28 self-start mt-6 md:mt-0">
      {user && (
        <div className="mb-6 flex flex-col items-center">
          <Image
            src={user.image || "/placeholder-avatar.png"}
            alt={user.name}
            width={100}
            height={100}
            className="rounded-full"
          />
          <h3 className="mt-4 text-xl font-bold">{user.name}</h3>
        </div>
      )}

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-2xl font-secondary font-semibold text-secondary mb-4">
          Chuyên Đề
        </h3>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {/* Truyền danh mục cha (Kiến Thức) */}
              {/* <Link href={`/${category.slug}`}>
              <span
                className={`block p-2 rounded ${
                  currentSlug === category.slug
                    ? "bg-red-500 text-white"
                    : "text-black"
                }`}
              >
                {category.name}
              </span>
            </Link> */}
              {category.children && category.children.length > 0 && (
                <ul className="ml-2">
                  {category.children.map((child) => (
                    <li key={child.id}>
                      <Link href={`/${child.slug}`}>
                        <span
                          className={`block font-bold py-1 hover:text-thirdary ${
                            currentSlug === child.slug
                              ? "text-thirdary"
                              : "text-black"
                          }`}
                        >
                          {child.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="banner-sb mt-4 md:block hidden">
        <Link
          href="/dich-vu-marketing-online"
          passHref
          className="block h-full"
        >
          <div className="w-full h-full relative">
            <Image
              src={BannerSb}
              alt="dich-vu-marketing-online-sb"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </Link>
      </div> */}
    </aside>
  );
};

export default CateSidebar;
