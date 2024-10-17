'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PartnerLogos = () => {
  const logos = [
    '/logodev/next-js-imovn.png',
    '/logodev/tailwind-css-imovn.png',
    '/logodev/node-js-imovn.png',
    '/logodev/react-js-imovn.png',
    '/logodev/express-imovn.png',
    '/logodev/mongodb-imovn.png',
    '/logodev/firebase-imovn.png',
    '/logodev/docker-imovn.png',
    '/logodev/git-imovn.png',
    '/logodev/github-imovn.png',
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const animation = container.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }],
      {
        duration: 10000, // Thời gian chạy animation (20 giây)
        iterations: Infinity, // Lặp lại vô hạn
        easing: 'linear', // Chạy đều
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
          style={{ whiteSpace: 'nowrap' }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="w-40 md:w-48 lg:w-48 p-2 flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
                width={200}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
