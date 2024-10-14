import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  content: string;
  author: {
    name: string;
  };
  blogId: string;
  date: string;
}

export default function BlogCard({
  title = "Default Title",
  content = "This is a default excerpt for the blog post. It should be short and enticing.",
  author = {
    name: "John Doe",
  },
  blogId = "default-blogId",
  date = "January 1, 2024",
}: BlogCardProps) {
  return (
    <Link to={`/blog/${blogId}`} className="block group">
      <div className="w-full py-6 px-4 border-b border-gray-200 transition-colors hover:bg-gray-50">
        <div className="flex items-center text-sm mb-3">
          <Avatar className="h-10 w-10 mr-3 border-2 border-gray-300 rounded-full">
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-800 mr-2">{author.name}</span>
          <span className="text-gray-500">{date}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2 group-hover:underline md:text-3xl">{title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3 sm:text-base md:text-lg">{content}</p>
        <div className="flex items-center text-sm">
          <span className="text-gray-500">{Math.ceil(content.length / 100)} min read</span>
        </div>
      </div>
    </Link>
  );
}

export function Circle(){
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}