import React from 'react';

const LatestFromBlog = () => {
    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: '10 Tips for Perfecting Your Pasta Dishes',
            excerpt:
                'Learn how to cook pasta like a pro with these simple tips and tricks.',
            date: 'October 5, 2023',
            author: 'Chef Maria',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'The Rise of Plant-Based Cooking',
            excerpt:
                'Discover the latest trends in plant-based cooking and how to incorporate them into your meals.',
            date: 'September 28, 2023',
            author: 'Foodie Jane',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Mastering the Art of Baking Bread',
            excerpt:
                'From sourdough to focaccia, here’s everything you need to know about baking bread at home.',
            date: 'September 20, 2023',
            author: 'Baker Tom',
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-[#333333] text-center mb-8 font-poppins">
                    Latest from the Blog
                </h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Blog Post Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Blog Post Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl font-semibold text-[#333333] mb-2 font-poppins">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-[#555555] mb-4 font-open-sans">
                                    {post.excerpt}
                                </p>

                                {/* Date and Author */}
                                <div className="text-sm text-[#777777] font-open-sans">
                                    <span>{post.date}</span> • <span>{post.author}</span>
                                </div>

                                {/* Read More Button */}
                                <a
                                    href={`/blog/${post.id}`}
                                    className="block mt-4 text-[#FF6F61] hover:text-[#E65A50] transition duration-300"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestFromBlog;