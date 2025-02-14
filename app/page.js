"use client";
import BootcampList from "@/components/BootcampList";
import Hero from "../components/HeroSection";
import SuggestedBlogs from "../components/SuggestedBlogs";
import BlogSlider from "@/utils/BlogSlider";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}

      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row gap-10">
        {/* Left Side - Hero Content */}
        <div className="w-full md:w-3/4">
          <Hero />
        </div>

        {/* Right Side - BootcampList & SuggestedBlogs */}
        <div className="w-full md:w-1/4 md:ml-6 space-y-6">
          <BootcampList />
          <SuggestedBlogs />
        </div>
      </div>

      <BlogSlider />

      {/* <Footer /> */}
    </main>
  );
}
