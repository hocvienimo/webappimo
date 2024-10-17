"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ThankYouPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 bg-cover bg-center"
      style={{ backgroundImage: "url('/background-thankyou.jpg')" }}
    >
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 max-w-2xl md:mx-0 mx-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="md:text-4xl text-2xl font-secondary font-bold text-center text-primary mb-8">
          Cảm ơn bạn đã liên hệ!
        </h1>
        <p className="text-gray-700 text-center md:text-lg text-base mb-12">
          Chúng tôi sẽ liên lạc với bạn sớm nhất có thể. Nếu bạn có bất kỳ câu
          hỏi nào, hãy đừng ngần ngại liên hệ lại với chúng tôi.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" passHref>
            <motion.button
              className="bg-primary text-white py-2 md:px-6 px-5 rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Về Trang Chủ
            </motion.button>
          </Link>
          <Link href="/lien-he" passHref>
            <motion.button
              className="bg-secondary text-white py-2 md:px-6 px-5 rounded-lg shadow-md hover:bg-secondary-dark transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Liên Hệ Lại
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
