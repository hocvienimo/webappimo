import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <p className="mt-4 text-4xl font-secondary text-thirdary">Oops! Không Tìm Thấy.</p>
      <p className="mt-2 text-lg text-gray-500">
        Trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link href="/" className="mt-6 text-base font-bold uppercase inline-block px-6 py-2 text-white bg-primary rounded-lg hover:bg-secondary">
          Về Trang Chủ iMovn
      </Link>
    </div>
  );
}