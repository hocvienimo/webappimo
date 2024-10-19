/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN || 'https:imovn.com', // URL của website
  generateRobotsTxt: true, // Tạo file robots.txt
  generateIndexSitemap: false,
  sitemapSize: 5000, // Số lượng URL tối đa trong một sitemap
  changefreq: 'daily', // Tần suất cập nhật trang (có thể thay đổi theo nhu cầu)
  priority: 0.8, // Mức độ ưu tiên của các trang
  autoLastmod: true, // Tự động cập nhật thời gian thay đổi cuối cùng của mỗi trang
  exclude: ['/thankyou'], // Các trang hoặc đường dẫn không muốn đưa vào sitemap

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ]
  },

  // Tùy chỉnh URL
  transform: async (config, path) => {
    return {
      loc: path, // URL của trang
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
    
  // Tự động thêm các URL động
  additionalPaths: async (config) => {
    const paths = [];
    
    // Fetch dữ liệu danh mục và bài viết
    const categories = await fetchCategories();
    const posts = await fetchPosts();

    // Thêm các URL danh mục vào paths
    categories.forEach((category) => {
      paths.push({
        loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${category.slug}`, // URL của danh mục
        changefreq: 'daily',
        priority: 0.8,
      });

      // Kiểm tra nếu có danh sách con (children) và thêm chúng vào paths
      if (category.children && category.children.length > 0) {
        category.children.forEach((child) => {
          paths.push({
            loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${child.slug}`, // URL của danh mục con
            changefreq: 'daily',
            priority: 0.7,
          });
        });
      }
    });

    // Thêm các URL bài viết vào paths
    posts.forEach((post) => {
      paths.push({
        loc: `${process.env.NEXT_PUBLIC_DOMAIN}/${post.slug}.html`, // URL của bài viết
        changefreq: 'daily',
        priority: 0.6,
      });
    });

    return paths;
  },
};

// Hàm để fetch dữ liệu từ API
async function fetchCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}category`, {
      cache: 'no-store',
    });
    const resDataListCate = await res.json();
    return resDataListCate.data || []; // Truy cập mảng data
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

async function fetchPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}category/kien-thuc`, {
      cache: 'no-store',
    });
    const resDataAllPosts = await res.json();
    if (!resDataAllPosts.success) {
      console.error('Error fetching posts:', resDataAllPosts.message);
      return [];
    }
    return resDataAllPosts.data.posts.data || []; // Truy cập vào trường posts.data
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
