import Bloglist from "@/components/Blog-list";
import Navbar from "@/components/Navbar";

const Blogs = () => {
 

  return (
    <>
     <Navbar />
     <div className="flex justify-center">
        <Bloglist />
     </div>
     
    </>
   
  );
};

export default Blogs;
