import Navbar from "@/components/Navbar";
import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks";
import { DetailedBlog } from "@/components/DetailedBlog";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  
  return (
    <>
      <Navbar />
      {loading ? (
        <div>Loading...</div>
      ) : blog ? (
        <DetailedBlog blog={blog} />
      ) : (
        <div>No blog data available</div>
      )}
    </>
  );
};

export default Blog;
