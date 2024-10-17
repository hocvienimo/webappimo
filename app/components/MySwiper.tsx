// components/MySwiper.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface RelatedPost {
  id: number;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  created_at: string;
}

interface MySwiperProps {
  relatedArticles: RelatedPost[];
}

const MySwiper: React.FC<MySwiperProps> = ({ relatedArticles }) => {
  if (!relatedArticles.length) {
    return <p>Không có bài viết liên quan nào.</p>;
  }

  return (
    <div className="relative">
      {/* Nút điều hướng bên ngoài slide */}
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 bg-white md:p-6 rounded-full shadow-md hover:bg-gray-200 md:text-2xl">
        &#10094; {/* Hoặc icon khác */}
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 bg-white md:p-6 rounded-full shadow-md hover:bg-gray-200 md:text-2xl">
        &#10095; {/* Hoặc icon khác */}
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          // Breakpoints for mobile
          1024: {
            // For screens larger than 1024px (desktop)
            slidesPerView: 4, // Show 3 slides on desktop
          },
          768: {
            // For screens between 768px and 1024px (tablet)
            slidesPerView: 2, // Show 2 slides on tablet
          },
          640: {
            // For screens smaller than 640px (mobile)
            slidesPerView: 1, // Show 1 slide on mobile
          },
        }}
        loop={true}
        //navigation={true}
        navigation={{
          prevEl: ".swiper-button-prev", // Sử dụng các nút bên ngoài
          nextEl: ".swiper-button-next", // Sử dụng các nút bên ngoài
        }}
        modules={[Navigation]}
      >
        {relatedArticles.map((relatedPost) => (
          <SwiperSlide key={relatedPost.id || relatedPost.slug}>
            <div className="related-post bg-white rounded-lg shadow-md mb-3 pb-3 min-h-[364px] hover:shadow-lg transition-shadow duration-300">
              <Link href={`/${relatedPost.slug}.html`}>
                <div className="w-full h-48 relative">
                  <Image
                    src={relatedPost.image || "/placeholder.jpg"}
                    alt={relatedPost.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority
                    className="rounded-lg mb-6"
                  />
                </div>
              </Link>
              <div className="flex justify-between items-center px-6 mt-4 text-sm text-gray-600">
                <span>
                  {new Date(relatedPost.created_at).toLocaleDateString("vi-VN")}
                </span>
              </div>

              <h3 className="text-xl hover:text-thirdary font-bold mt-3 px-4 line-clamp-2 leading-6">
                <Link href={`/${relatedPost.slug}.html`}>
                  {relatedPost.name}
                </Link>
              </h3>
              <p className="mt-2 px-4 line-clamp-3 mb-5 overflow-hidden leading-6">
                {relatedPost.description || "No description available."}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
