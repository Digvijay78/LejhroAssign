import dynamic from "next/dynamic";
import BlogCard from "./BlogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const blogData = [
    {
      id: 1,
      title: "Navigating the Digital Landscape: Unveiling the Vitality of Digital...",
      date: "21th July, 2024",
      views: "190k",
      readTime: "10 min Read",
      image: "/images/customer.jpg",
    },
    {
      id: 2,
      title: "Beyond Limits: Empowering Visionaries with Low-Code Platforms",
      date: "21th July, 2024",
      views: "190k",
      readTime: "10 min Read",
      image: "/images/2.jpg",
    },
    {
      id: 3,
      title: "Mastering Data Mesh: Implementing Architecture in Azure",
      date: "21th July, 2024",
      views: "190k",
      readTime: "10 min Read",
      image: "/images/3.jpg",
    },
  ];
  

// Dynamically import react-slick to fix SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function SuggestedBlogs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">More Blogs</h2>
      <Slider {...settings}>
        {blogData.map((blog) => (
          <div key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
