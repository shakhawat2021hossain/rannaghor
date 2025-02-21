"use client";
import React from "react";

const NewsletterSubscription = () => {
    return (
        <section className="py-12 bg-coral">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
                        Subscribe to Our Newsletter
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-100 mb-8 font-open-sans">
                        Get the latest recipes, cooking tips, and exclusive updates delivered straight to your inbox!
                    </p>

                    {/* Subscription Form */}
                    <form className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                            />
                            <button
                                type="submit"
                                className="bg-green text-white px-6 py-3 rounded-lg hover:bg-green-hover transition duration-300"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSubscription;
