import Bloglist from "@/components/Blog-list";
import Navbar from "@/components/Navbar";


const Blogs = () => {
 

  return (
    <>
    
     <Navbar />
     <header className="text-center border-b pb-4 px-0 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800  p-2">
          Discover Insightful Articles
        </h2>
        <p className="text-xl text-gray-500 ">
          Expand your knowledge with our curated collection of tech insights.
        </p>
      </header>
     <div className="flex justify-center">
        <Bloglist />
     </div>
     
    </>
   
  );
};

export default Blogs;
