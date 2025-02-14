export default function SuggestedBlogs() {
    const blogs = [
      { title: "How Can Data Visualization Enhance Your Data Analytics Projects?", views: "190k", time: "10 min" },
      { title: "The Winning Formula: How Analysis Can Aid In IPL Game Insights", views: "108k", time: "10 min" },
      { title: "Enhance Decision-Making with Data Visualization", views: "111k", time: "10 min" },
    ];
  
    return (
      <aside className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Suggested Blogs</h3>
        {blogs.map((blog, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <h4 className="text-lg font-semibold">{blog.title}</h4>
            <p className="text-gray-600">{blog.views} views • {blog.time} Read</p>
          </div>
        ))}
      </aside>
    );
  }
  