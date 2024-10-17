import Post from "./Post";
import Category from "./Category";
import UserPostsPage from "./@user/page"; // Nhập component UserPostsPage
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string; // slug là một chuỗi
  };
  searchParams: {
    page?: string; // Tham số tìm kiếm trang
  };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const pathname = decodeURIComponent(params.slug);

  // Start Xác định loại trang dựa trên slug
  const isPostPage = pathname.endsWith(".html");
  // end

  // Start Kiểm tra nếu slug bắt đầu bằng "@"
  if (pathname.startsWith("@")) {
    const username = pathname.slice(1); // Lấy phần username không có "@"
    if (username) {
      // Kiểm tra xem người dùng có tồn tại không
      const userExists = await checkUser(username);
      if (!userExists) {
        notFound(); // Chuyển hướng về trang 404 nếu người dùng không tồn tại
      }
      return <UserPostsPage username={username} searchParams={searchParams} />; // Gọi component để hiển thị bài viết của người dùng
    } else {
      notFound(); // Chuyển hướng về trang 404 nếu username trống
    }
  }
  // end

  // Start Kiểm tra xem có phải là trang category không, gọi API để xác minh
  if (!isPostPage) {
    try {
      const categoryExists = await checkCategory(pathname);
      if (!categoryExists) {
        notFound(); // Nếu không tìm thấy danh mục, chuyển hướng về trang 404
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      notFound(); // Nếu có lỗi trong quá trình gọi API, chuyển hướng về trang 404
    }
  }
  // end

  return (
    <>
      {isPostPage ? (
        // Nếu là trang post, loại bỏ .html và truyền vào component Post
        <Post slug={pathname.replace(".html", "")} />
      ) : (
        // Nếu là trang category, truyền slug và searchParams vào component Category
        <Category slug={pathname} searchParams={searchParams} />
      )}
    </>
  );
};

// Hàm kiểm tra danh mục
const checkCategory = async (slug: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}category/${slug}`
    );
    return response.ok; // Trả về true nếu danh mục hợp lệ, false nếu không
  } catch (error) {
    console.error("Failed to fetch category:", error);
    return false; // Trả về false nếu có lỗi
  }
};

// Hàm kiểm tra người dùng
const checkUser = async (username: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}user/@${username}`
    );
    return response.ok; // Trả về true nếu người dùng hợp lệ, false nếu không
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return false; // Trả về false nếu có lỗi
  }
};

export default Page;