"use client";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";


interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "preschool-progress-report",
    title: "A Complete Guide to Preschool Progress Reports",
    category: "Child development",
    date: "Apr 9, 2025",
    excerpt: "Full blog content goes here...",
    image: "/banner-img.jpg",
  },
  {
    slug: "daycare-interior-design",
    title: "Daycare Ideas: Interior Design Inspiration for Your Childcare Center",
    category: "Running a business",
    date: "Apr 9, 2025",
    excerpt: "Full blog content goes here...",
    image: "/children.jpg",
  },
  {
    slug: "how-to-start-daycare",
    title: "The Ultimate Guide on How to Start a Daycare Center",
    category: "Running a business",
    date: "Apr 9, 2025",
    excerpt: "Full blog content goes here...",
    image: "/images/common/person2.jpg",
  },
];

interface BlogDetailProps {
  post:BlogPost;
}

export default function BlogDetailPage() {

 

  return (
    // <main className="max-w-4xl mx-auto px-4 py-10">
    //   <Image
    //     src={post?.image}
    //     alt={post?.title}
    //     className="w-full h-64 object-cover rounded-lg mb-6"
    //   />
    //   <p className="text-black text-sm">{post?.date}</p>
    //   <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
    //   <p className="text-[#3949ab] text-sm mb-6">{post?.category}</p>
    //   <p className="text-gray-800 leading-relaxed">{post?.excerpt}</p>
    // </main>
    <>
    
    
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for dynamic paths
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const post = blogPosts.find((p) => p.slug === slug) || null;

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};