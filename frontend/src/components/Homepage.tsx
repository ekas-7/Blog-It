"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import BlurIn from "@/components/ui/blur-in";
import { Edit, ChevronDown } from "lucide-react";  // Import the down arrow icon
import ShinyButton from "@/components/ui/shiny-button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-3xl">
      <div className="flex items-center z-10 whitespace-pre-wrap text-center 2xl:text-8xl xl:text-7xl sm:text-6xl text-5xl font-medium tracking-tighter text-black dark:text-white">
        <BlurIn word="Welcome to Blog It" />
        <BlurIn // Wrap the icon in BlurIn for the blur effect
          word={
            <Edit
              className="ml-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-black dark:text-white" // Adjust sizes for responsiveness
              strokeWidth={2.8} // Adjust this value for bolder appearance
            />
          }
        />
      </div>
      <BlurIn
        word="Share your ideas and explore diverse perspectives!"
        className="z-10 mt-2 text-center font-semibold text-gray-800 dark:text-gray-200 2xl:text-3xl xl:text-2xl sm:text-xl text-xl mb-2" // Responsive font sizes for subheading
        delay={1} // Delay for the subheading
      />
      <div className="flex flex-col items-center mt-2 space-y-0.5"> {/* Reduced vertical spacing */}
        <BlurIn word={<ChevronDown className="w-16 h-16 text-gray-800 dark:text-gray-200 animate-bounce" strokeWidth={1.5} />} delay={5} />
      </div>
      <ShinyButton onClick={() => navigate("/signup")}>Signup / Signin</ShinyButton>

      <DotPattern
        className={cn(
          "mask-image:radial-gradient(circle at center, white, transparent)"
        )}
        style={{
          maskImage: `radial-gradient(60vh circle at center, white, transparent)`, // Default for mobile
          WebkitMaskImage: `radial-gradient(60vh circle at center, white, transparent)`,
        }}
      />
      <style>{`
        @media (min-width: 640px) {
          .dot-pattern {
            mask-image: radial-gradient(60vw circle at center, white, transparent); /* For PC */
            -webkit-mask-image: radial-gradient(60vw circle at center, white, transparent); /* For PC */
          }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
