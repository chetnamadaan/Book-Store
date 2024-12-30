import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Power of Reading: Why Books Are Essential',
      author: 'John Doe',
      date: 'November 5, 2024',
      excerpt: 'Books have the power to change the world. In this blog post, we explore the importance of reading and how it enriches our lives.',
      category: 'Fiction',
      authorBio: 'John Doe is an avid reader and a passionate writer with a focus on literary themes and their societal impact.',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
      fullContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris volutpat tortor vel ligula feugiat, non scelerisque nulla convallis. Proin eu nisi neque. Cras gravida nisl sit amet erat convallis, et cursus tortor tincidunt.',
    },
    {
      id: 2,
      title: 'Top 5 Books to Read in 2024',
      author: 'Jane Smith',
      date: 'November 10, 2024',
      excerpt: 'Looking for your next great read? Here are the top 5 books to read this year, ranging from fiction to non-fiction.',
      category: 'Non-fiction',
      authorBio: 'Jane Smith is a book reviewer and literary critic with a keen eye for identifying the best upcoming books to read.',
      socialLinks: {
        twitter: '#',
        facebook: '#',
        linkedin: '#',
      },
      fullContent: 'Curabitur a urna ut velit vehicula tempor. Sed sit amet urna nulla. Vestibulum nec urna non libero faucibus euismod ac id odio. Nulla tincidunt, arcu in vulputate fermentum, metus eros fermentum augue, vel condimentum libero libero eget magna.',
    }
  ];

  return (
    <div className="container mx-auto p-6" style={{ backgroundColor: '#f7f7f7', marginTop: '30px' }}>
      <h2 className="text-3xl font-bold text-center mb-6">Our Blog</h2>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500">{post.author} | {post.date}</p>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            
            {/* Category */}
            <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mt-2">
              {post.category}
            </span>

            {/* Author Bio */}
            <div className="mt-4 text-sm text-gray-500">
              <strong>Author Bio:</strong> {post.authorBio}
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a href={post.socialLinks.twitter} className="text-red-600 hover:text-red-900">Twitter</a>
              <a href={post.socialLinks.facebook} className="text-red-600 hover:text-red-900">Facebook</a>
              <a href={post.socialLinks.linkedin} className="text-red-600 hover:text-red-900">LinkedIn</a>
            </div>

            {/* Read More Link */}
            <a href="#" className="text-red-800 hover:underline mt-4 block">Read More</a>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="bg-red-800 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Load More
        </button>
      </div>

      {/* Popular Posts */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Popular Posts</h3>
        <ul className="list-disc pl-5">
          <li><a href="#" className="text-red-700 hover:underline">The Art of Writing: How to Craft Compelling Stories</a></li>
          <li><a href="#" className="text-red-700 hover:underline">Must-Read Historical Fiction Novels</a></li>
          <li><a href="#" className="text-red-700 hover:underline">Self-Help Books to Improve Your Life</a></li>
        </ul>
      </div>

      {/* Newsletter Signup */}
     

      {/* Comments Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Leave a Comment</h3>
        <form>
          <textarea 
            placeholder="Write your comment here..." 
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            rows="4"
          ></textarea>
          <button type="submit" className="bg-red-900 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
