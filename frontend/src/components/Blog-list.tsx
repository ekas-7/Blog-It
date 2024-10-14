import BlogCard from "@/components/Blogcard";

const BlogList = () => {
  const blogPosts = [
    {
      title: "Understanding TypeScript Generics",
      excerpt: "Generics in TypeScript allow for creating reusable components...",
      author: {
        name: "Ekaspreet Singh Atwal",
      },
      blogId: "typescript-generics",
      date: "October 10, 2024",
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Hooks simplify state management and side-effects in functional components...",
      author: {
        name: "John Doe",
      },
      blogId: "react-hooks",
      date: "October 12, 2024",
    },
  ];

  return (
    <main className="w-full xl:w-3/4 mx-auto">
      <header className="text-center  border-b pb-4 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 mt-8 ">
          Discover Insightful Articles
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          Expand your knowledge with our curated collection of tech insights.
        </p>
      </header>
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <BlogCard
            key={post.blogId} // Use blogId for better uniqueness
            title={post.title}
            content={post.excerpt}
            author={post.author}
            blogId={post.blogId}
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
