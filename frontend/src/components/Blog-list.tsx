import BlogCard from "@/components/Blogcard";
import { useBlogs } from "@/hooks";
import { useEffect } from "react";
import { BlogSkeleton } from "@/components/Blogskeleton";

const BlogList = () => {
  const {loading, blogs} = useBlogs();

    if (loading){
      return <div>
        
        <div className="flex justify-center">
          <div>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
          </div>
          
        </div>
      </div>
    }
  useEffect
  const blogPosts = blogs;
  

  return (
    <main className="w-full xl:max-w-7xl mx-auto">
      
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
    
          <BlogCard
            key={post.id} // Use post.id or another unique identifier for the key
            title={post.title}
            content={post.content}
            author={post.author}
            blogId={String(post.id)}
            date={post.date}
          />
        ))
      ) : (
        <div className="text-center text-gray-600 mt-10">
          <p>No blog posts available at the moment.</p>
        </div>
      )}
    </main>
  );
};

export default BlogList;
