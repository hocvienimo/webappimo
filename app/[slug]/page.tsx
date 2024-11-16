import Post, { generateMetadata as generatePostMetadata } from "./Post";
import Category, {
  generateMetadata as generateCategoryMetadata,
} from "./Category";
import UserPostsPage, {
  generateMetadata as generateAuthMetadata,
} from "@/app/author/@user/page"; // Nhập component UserPostsPage
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const pathname = decodeURIComponent(params.slug);

  // Post page metadata
  if (pathname.endsWith(".html")) {
    return generatePostMetadata({ params });
  }

  // User page metadata
  if (pathname.startsWith("@")) {
    const username = pathname.slice(1);
    const userExists = await checkUser(username);
    if (userExists) {
      return generateAuthMetadata({ params: { username } });
    }
    return {
      title: "User Not Found",
      description: "The requested user does not exist.",
    };
  }

  // Category metadata
  return generateCategoryMetadata({ params });
}

interface PageProps {
  params: { slug: string };
  searchParams: { page?: string };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const pathname = decodeURIComponent(params.slug);

  // Check for user page
  if (pathname.startsWith("@")) {
    const username = pathname.slice(1);
    if (await checkUser(username)) {
      return <UserPostsPage username={username} searchParams={searchParams} />;
    }
    return notFound();
  }

  // Check for post page
  const isPostPage = pathname.endsWith(".html");
  if (!isPostPage) {
    const categoryExists = await checkCategory(pathname);
    if (!categoryExists) {
      return notFound();
    }
  }

  return isPostPage ? (
    <Post slug={pathname.replace(".html", "")} />
  ) : (
    <Category slug={pathname} searchParams={searchParams} />
  );
};

// Utility functions
const checkCategory = async (slug: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}category/${slug}`
    );
    return response.ok;
  } catch (error) {
    console.error(`Failed to fetch category [${slug}]:`, error);
    return false;
  }
};

const checkUser = async (username: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}user/@${username}`
    );
    return response.ok;
  } catch (error) {
    console.error(`Failed to fetch user [${username}]:`, error);
    return false;
  }
};

export default Page;
