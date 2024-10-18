import Post, { generateMetadata as generatePostMetadata } from "./Post";
import Category, {
  generateMetadata as generateCategoryMetadata,
} from "./Category";
import UserPostsPage from "@/app/author/@user/page"; // Nhập component UserPostsPage
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const pathname = decodeURIComponent(params.slug);

  // Nếu là trang bài viết (kết thúc bằng .html), sử dụng generateMetadata của Post
  if (pathname.endsWith(".html")) {
    return generatePostMetadata({ params });
  }

  // Nếu là trang user (bắt đầu bằng @), không cần metadata tùy chỉnh, có thể trả về mặc định hoặc null
  if (pathname.startsWith("@")) {
    return {
      title: "User Page",
      description: "User posts page",
    };
  }

  // Nếu là trang category, sử dụng generateMetadataCate của Category
  return generateCategoryMetadata({ params });
}

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
        return notFound(); // Chuyển hướng về trang 404 nếu người dùng không tồn tại
      }
      return <UserPostsPage username={username} searchParams={searchParams} />; // Gọi component để hiển thị bài viết của người dùng
    } else {
      return notFound(); // Chuyển hướng về trang 404 nếu username trống
    }
  }
  // end

  // Start Kiểm tra xem có phải là trang category không, gọi API để xác minh
  if (!isPostPage) {
    try {
      const categoryExists = await checkCategory(pathname);
      if (!categoryExists) {
        return notFound(); // Nếu không tìm thấy danh mục, chuyển hướng về trang 404
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      return notFound(); // Nếu có lỗi trong quá trình gọi API, chuyển hướng về trang 404
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

// import Post, { generateMetadata as generatePostMetadata } from "./Post";
// import Category, {
//   generateMetadata as generateCategoryMetadata,
// } from "./Category";
// import { notFound } from "next/navigation";
// import UserPostsPage from "@/app/author/@user/page";

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const pathname = decodeURIComponent(params.slug);

//   // Nếu là trang bài viết (kết thúc bằng .html), sử dụng generateMetadata của Post
//   if (pathname.endsWith(".html")) {
//     return generatePostMetadata({ params });
//   }

//   // Nếu là trang category, sử dụng generateMetadataCate của Category
//   return generateCategoryMetadata({ params });
// }

// interface PageProps {
//   params: {
//     slug: string; // slug là một chuỗi
//   };
//   searchParams: {
//     page?: string; // Tham số tìm kiếm trang
//   };
// }

// const Page = async ({ params, searchParams }: PageProps) => {
//   const pathname = decodeURIComponent(params.slug);

//   // Start Xác định loại trang dựa trên slug
//   const isPostPage = pathname.endsWith(".html");

//   // Kiểm tra nếu slug bắt đầu bằng "@"
//   if (pathname.startsWith("@")) {
//     const username = pathname.slice(1);
//     return <UserPostsPage username={username} searchParams={searchParams} />; // Truyền username và searchParams vào UserPostsPage
//   }

//   // Start Kiểm tra xem có phải là trang category không
//   if (!isPostPage) {
//     // Kiểm tra danh mục ở đây
//   }
//   // end

//   return (
//     <>
//       {isPostPage ? (
//         <Post slug={pathname.replace(".html", "")} />
//       ) : (
//         <Category slug={pathname} searchParams={searchParams} />
//       )}
//     </>
//   );
// };

// // Các hàm và logic khác ở đây

// export default Page;
