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
      <article className="max-w-4xl py-6 border-b border-gray-200 transition-colors hover:bg-gray-50"> {/* Reduced padding */}
        <div className="flex items-center text-sm mb-3"> {/* Adjusted margin for spacing */}
          <Avatar className="h-10 w-10 mr-3"> {/* Adjusted avatar size */}
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-800 mr-2">{author.name}</span>
          <span className="text-gray-500">{date}</span> {/* Removed the period */}
        </div>
        <h2 className="text-2xl font-bold mb-2 group-hover:underline">{title}</h2> {/* Reduced title size */}
        <p className="text-gray-600 mb-4 line-clamp-3">{content}</p> {/* Adjusted line clamp */}
        <div className="flex items-center text-sm">
          <span className="text-gray-500">{Math.ceil(content.length / 100)} min read</span>
        </div>
      </article>
    </Link>
  );
}
