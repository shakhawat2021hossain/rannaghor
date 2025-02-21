"use client";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;
        const user = { name, email, password, image };
        console.log(user);
    };

    return (
        <div className="min-h-screen bg-gray-light flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-orange mb-6 text-center">
                    Sign Up
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-dark text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-dark text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-dark text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Image Upload Field */}
                    <div className="mb-6">
                        <label className="block text-gray-dark text-sm font-bold mb-2">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange hover:file:bg-orange-100"
                            accept="image/*"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-coral text-white py-2 px-4 rounded-lg hover:bg-coral-hover transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-2 text-center">Already have an account? <Link className="underline hover:text-coral-hover" href='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;
