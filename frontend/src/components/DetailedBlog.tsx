import { Blog } from "../hooks";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Home } from "lucide-react"; // Importing Home icon from lucide-react
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

export const DetailedBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="flex justify-center">
        <div className="grid grid-cols-12 w-full px-5 md:px-10 lg:mt-4 max-w-screen-xl gap-6">
          
          {/* Home Button */}
          <div className="col-span-12 mb-6">
            <Link to="/blogs" className="flex items-center gap-2 text-slate-600 hover:text-slate-800">
              <Home className="h-5 w-5" /> {/* Home icon */}
              <span className="text-lg">Back to Blogs</span>
            </Link>
          </div>

          {/* Blog Content */}
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-4xl font-extrabold text-gray-800">{blog.title}</h1>
            <p className="text-slate-500 pt-3">{blog.date}</p>
            <article className="prose lg:prose-xl max-w-none text-gray-700 pt-6">
              {blog.content}
            </article>
          </div>

          {/* Author Section */}
          <div className="col-span-12 lg:col-span-4 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-slate-600 text-lg mb-4 p-4 text-center border-b-2">About the Author</h2>
            <div className="flex items-center">
              <div className="pr-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{blog.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {blog.author.name || "Anonymous"}
                </div>
                <p className="text-slate-500 pt-2">
                  Passionate writer, always keen to share insightful knowledge with readers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
