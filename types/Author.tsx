// Định nghĩa interface cho cấu trúc dữ liệu bài viết
export interface Post {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  description: string | null;
  created_at: string;
  category: {
    name: string;
    slug: string;
  };
}

// Định nghĩa interface cho cấu trúc phản hồi từ API
export interface ApiUserResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    image: string | null;
    posts: {
      current_page: number;
      data: Post[];
      last_page: number;
    };
  };
}
export interface CategoryWithChildren {
  id: number;
  name: string;
  slug: string;
  children: CategoryWithChildren[];
}

// Định nghĩa interface cho cấu trúc phản hồi từ API danh mục
export interface ApiCategoryResponse {
  success: boolean;
  message: string;
  data: CategoryWithChildren[];
}

export interface UserPostsPageProps {
  username: string; // username từ slug
  searchParams?: { page?: string; limit?: string }; // Tham số tìm kiếm
}
