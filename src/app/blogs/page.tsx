import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogData } from '@/app/data/blogData';
import CommentSection from '../components/CommentSection';

interface BlogPostProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return notFound()
  }

  return (
    <>
      <div className="container mx-auto p-4 w-[90%] md:w-[80%] xl:w-[70%]">

        {/* Blog Image */}

        <div className="relative w-full h-64 lg:h-96">
          <Image src={blog.imageUrl} alt={blog.title} layout="fill" objectFit="cover"
            className="rounded-lg" />

        </div>

        {/* Blog Content */}
        <div className="mt-6">
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#2a98b9] mb-4">{blog.title}</h1>
          <p className="text-[17px] text-gray-600 mb-8 text-center">{blog.description}</p>

          {/* Render Full Blog Content */}
          <div className="text-[25px] font-medium leading-normal mt-4"
            dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        {/* Comment Section */}
        <CommentSection blogId={id} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}