import Navbar from "@/components/Navbar";
import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks";
import { DetailedBlog } from "@/components/DetailedBlog";
import RetroGrid from "@/components/ui/retro-grid";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog ,error} = useBlog({
    id: id || "",
  });

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-black via-slate-500 to-slate-400 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          LOADING
        </span>
   
        <RetroGrid />
      </div>
      ) : error ? (
        <div>Error loading blog data: {error.message}</div>
      ) : blog ? (
        <DetailedBlog blog={blog} loading={loading} />
      ) : (
        <div>No blog data available</div>
      )}
    </>
  );
};

export default Blog;
