
  
  import React from 'react'
  
  const BlogCard = ({blog}) => {
    return (
        <div className="p-4 ">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Updated on {blog.date}
              </p>
              <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                <span>👁️ {blog.views} views</span>
                <span>⏳ {blog.readTime}</span>
              </div>
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      );
  }
  
  export default BlogCard