import React from 'react';

const WhyChooseUs = () => {
    // Features data
    const features = [
        {
            id: 1,
            icon: (
                <svg
                    className="w-12 h-12 text-[#FF6F61]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            ),
            title: 'Thousands of Recipes',
            description:
                'Explore a vast collection of recipes from around the world, curated by home cooks and professional chefs.',
        },
        {
            id: 2,
            icon: (
                <svg
                    className="w-12 h-12 text-[#4CAF50]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
            title: 'Easy to Use',
            description:
                'Our platform is designed to be intuitive and user-friendly, making it easy for anyone to find and share recipes.',
        },
        {
            id: 3,
            icon: (
                <svg
                    className="w-12 h-12 text-[#FFA726]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
            title: 'Join a Community',
            description:
                'Connect with food lovers, share your creations, and get inspired by others in our vibrant community.',
        },
        {
            id: 4,
            icon: (
                <svg
                    className="w-12 h-12 text-[#FF6F61]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: 'Trusted Recipes',
            description:
                'Every recipe is tested and reviewed to ensure quality and accuracy, so you can cook with confidence.',
        },
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-[#333333] text-center mb-8 font-poppins">
                    Why Choose Us?
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="text-center p-6 bg-[#F5F5F5] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-4">{feature.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-[#333333] mb-4 font-poppins">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#555555] font-open-sans">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;