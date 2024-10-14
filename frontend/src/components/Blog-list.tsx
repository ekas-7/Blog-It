import BlogCard from "@/components/Blogcard";

const Bloglist = () => {
  const blogPosts = [
    {
      title: "Understanding TypeScript Generics",
      excerpt: "Generics in TypeScript allow for creating reusable components...",
      author: {
        name: "Ekaspreet Singh Atwal",
      },
      blogId: "typescript-generics",
      date: "October 10, 2024", // Added date
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Hooks simplify state management and side-effects in functional components...",
      author: {
        name: "John Doe",
      },
      blogId: "react-hooks",
      date: "October 12, 2024", // Added date
    },
  ];

  return (
    <div className="space-y-4">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          title={post.title}
          content={post.excerpt}
          author={post.author}
          blogId={post.blogId}
          date={post.date} // Passing date to BlogCard
        />
      ))}
    </div>
  );
};

export default Bloglist;
