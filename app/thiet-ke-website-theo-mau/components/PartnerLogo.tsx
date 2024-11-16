"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const PartnerLogos = () => {
  const logos = [
    "/logodev/next-js-imovn.png",
    "/logodev/tailwind-css-imovn.png",
    "/logodev/react-js-imovn.png",
    "/logodev/elementor.png",
    "/logodev/jetengine.png",
    "/logodev/wordpress.png",
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Kiểm tra container tồn tại

    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-100%)" }],
      {
        duration: 10000, // Thời gian chạy animation (20 giây)
        iterations: Infinity, // Lặp lại vô hạn
        easing: "linear", // Chạy đều
      }
    );
    return () => animation.cancel(); // Hủy animation khi component unmount
  }, []);

  return (
    <section className="md:py-6 py-3 bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <div
          ref={containerRef}
          className="flex md:gap-8 items-center"
          style={{ whiteSpace: "nowrap" }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="w-40 md:w-48 lg:w-48 p-2 flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                width={200}
                height={100}
                loading="lazy" // Trì hoãn tải ảnh
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
