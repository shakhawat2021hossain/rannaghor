import React from 'react';

const FeaturedRecipes = () => {
    // Example recipe data (replace with real data from your backend)
    const recipes = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Spicy Thai Basil Chicken',
            cuisine: 'Thai',
            rating: 4.5,
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Classic Italian Lasagna',
            cuisine: 'Italian',
            rating: 4.8,
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Creamy Mushroom',
            cuisine: 'Italian',
            rating: 4.7,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            title: 'Healthy Avocado Toast',
            cuisine: 'American',
            rating: 4.6,
        },
    ];

    return (
        <section className="py-12 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-[#333333] text-center mb-8 font-poppins">
                    Featured Recipes
                </h2>

                {/* Recipe Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Recipe Image */}
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Recipe Details */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-[#333333] mb-2 font-poppins">
                                    {recipe.title}
                                </h3>
                                <p className="text-[#555555] mb-4 font-open-sans">
                                    {recipe.cuisine} Cuisine
                                </p>

                                {/* Rating */}
                                <div className="flex items-center">
                                    <span className="text-[#FFA726] font-semibold">
                                        {recipe.rating}
                                    </span>
                                    <svg
                                        className="w-5 h-5 text-[#FFA726] ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href={`/recipes/${recipe.id}`}
                                    className="block mt-4 bg-[#4CAF50] text-white text-center py-2 rounded-lg hover:bg-[#43A047] transition duration-300"
                                >
                                    View Recipe
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRecipes;