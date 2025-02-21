"use client"
import Link from "next/link";
import React from "react";

const SignupPage = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password }
        console.log(user);

    };


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
                    Login
                </h2>
                <form onSubmit={handleSubmit}>


                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-coral text-white py-2 px-4 rounded-lg hover:bg-coral-hover transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-2 text-center">Don't have an account? <Link className="underline hover:text-coral-hover" href='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;