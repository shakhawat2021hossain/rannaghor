"use client";
import React from "react";

const cookingTips = [
    {
        id: 1,
        title: "Proper Knife Technique",
        image: "https://example.com/knife-technique.jpg",
        tip: "Learn the correct way to hold and use a chef's knife for safe and efficient chopping.",
    },
    {
        id: 2,
        title: "Perfect Boiled Eggs",
        image: "https://example.com/boiled-eggs.jpg",
        tip: "Follow these steps to achieve perfectly boiled eggs every time, with a creamy yolk and easy-to-peel shell.",
    },
    {
        id: 3,
        title: "Making Fluffy Pancakes",
        image: "https://example.com/fluffy-pancakes.jpg",
        tip: "Use buttermilk and separate the egg whites to create light and fluffy pancakes.",
    },
];

const CookingTips = () => {
    return (
        <section className="py-12 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold text-gray-dark mb-4 font-poppins">
                        Cooking Tips
                    </h2>

                    {/* Cooking Tip Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cookingTips.map((tip) => (
                            <div
                                key={tip.id}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <img
                                    src={tip.image}
                                    alt={tip.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-bold text-coral mb-2">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-dark mb-4">{tip.tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CookingTips;
