import { allArticles } from '../../../data/ArticlesData';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return allArticles.map((post) => ({
      slug: post.slug,
    }));
  }

const ArticlePage = ({ params }) => {
    const { slug } = params;
    const post = allArticles.find((p) => p.slug === slug);

    if (!post) {
        // Nếu không tìm thấy bài viết, trả về trang 404
        notFound();
    }

  return (
    <article className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-600"><span>{post.publishDate}</span> - <span>{post.author}</span></p>
      <figure className="mt-4">
        <Image 
        src={post.image} 
        alt={post.title} 
        width={800} 
        height={400} 
        style={{ objectFit: 'cover' }} 
        className="rounded-lg" />
      </figure>
      <section dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default ArticlePage