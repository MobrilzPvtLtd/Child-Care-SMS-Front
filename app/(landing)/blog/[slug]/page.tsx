import BlogDetailPage from '@/components/Blog/BlogDetail'
import React from 'react'

interface BlogPost {
    slug: string;   
    title: string;
    category: string;
    date: string;
    excerpt: string;
    image: string;
// Assuming 'post' is an array of BlogPost objects
    // Or a more specific type if you know the structure of 'posts'
  }
  interface PageProps {
    post: BlogPost;
  }
function page({ post }: PageProps) {
  return (
    <>
     <BlogDetailPage post={post} /> 
     {/* <h2>blog deatils</h2> */}
    </>
  )
}

export default page
