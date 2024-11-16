export interface Article {
  name: string;
  slug: string;
  image?: string;
  description?: string | null;
  created_at: string;
  category: {
    name: string;
    slug: string;
  };
}

export interface CategoryData {
  id: number;
  name: string;
  slug: string;
  content: string;
  title_seo?: string | null;
  description_seo?: string | null;
  canonical_seo?: string | null;
  created_at: string;
  posts: {
    current_page: number;
    last_page: number;
    data: Article[];
  };
}

export interface CategoryWithChildren {
  id: number;
  name: string;
  slug: string;
  children?: CategoryWithChildren[];
}

// Định nghĩa interface cho cấu trúc phản hồi từ API danh mục
export interface ApiCategoryResponse {
  success: boolean;
  message: string;
  data: CategoryWithChildren[];
}

// Sidebar Interface
// Định nghĩa kiểu cho Category
export interface Category {
  id: number;
  name: string;
  slug: string;
  children?: Category[]; // Danh sách danh mục con (nếu có)
}
// Định nghĩa kiểu cho User
export interface ApiUserResponse {
  name: string;
  image: string; // URL của avatar user
}
// Định nghĩa kiểu cho props
export interface CateSidebarProps {
  categories: CategoryWithChildren[]; // Danh sách các danh mục
  currentSlug: string; // Slug của danh mục hiện tại
  user?: ApiUserResponse; // Thông tin user, chỉ hiển thị nếu có
}
