import React from 'react';

const Testimonials = () => {
    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: 'Emily Johnson',
            role: 'Home Cook',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            comment:
                'RecipeShare has completely changed the way I cook! The recipes are easy to follow, and I love discovering new dishes from around the world.',
        },
        {
            id: 2,
            name: 'Michael Smith',
            role: 'Food Blogger',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            comment:
                'I’ve found so many unique recipes on RecipeShare. It’s my go-to platform for inspiration and sharing my own creations with the community.',
        },
        {
            id: 3,
            name: 'Sarah Lee',
            role: 'Professional Chef',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            comment:
                'As a chef, I appreciate the quality and variety of recipes on RecipeShare. It’s a fantastic resource for both home cooks and professionals.',
        },
    ];

    return (
        <section className="py-12 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-[#333333] text-center mb-8 font-poppins">
                    What Our Users Say
                </h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* User Image */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                            </div>

                            {/* User Name and Role */}
                            <h3 className="text-xl font-semibold text-[#333333] text-center mb-2 font-poppins">
                                {testimonial.name}
                            </h3>
                            <p className="text-[#555555] text-center mb-4 font-open-sans">
                                {testimonial.role}
                            </p>

                            {/* Testimonial Comment */}
                            <p className="text-[#555555] text-center italic font-open-sans">
                                "{testimonial.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;