import { Circle } from "./Blogcard"

export const BlogSkeleton = () => {
  return (
<div role="status" className="animate-pulse">        
    <div className="p-4 border-b border-slate-300 pb-4  max-w-full xl:max-w-7xl w-screen cursor-pointer">
        <div className="flex">
        <div className="h-10 w-10 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-8 bg-gray-200 rounded-full mb-4"></div>
        <div className="h-8 bg-gray-200 rounded-full mb-4"></div>

            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                <Circle />
            </div>

           <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                <div className="xl:h-4 h-3 bg-gray-200 rounded-full mb-4"></div>
           </div>
        </div>

        <div className="text-xl font-semibold pt-2">
            <div className="xl:h-4 h-3 bg-gray-200 rounded-full mb-4"></div>
        </div>

        <div className="text-ms font-thin">
            <div className="xl:h-4 h-3 bg-gray-200 rounded-full mb-4"></div>
        </div>

        <div className="text-slate-500 text-sm pt-4">
            <div className="xl:h-4 h-3 bg-gray-200 rounded-full mb-4"></div>
        </div>
    
        <span className="sr-only">Loading...</span>
      </div>
    </div>

  )
}