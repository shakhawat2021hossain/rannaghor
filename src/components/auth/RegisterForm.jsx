"use client"
import { userReg } from '@/actions/auth/userReg';
import { imgUpload } from '@/lib/imgUpload';
import React from 'react';

const RegisterForm = () => {
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.files[0];
        
        const imageURL = await imgUpload(image)

        const user = { name, email, password, imageURL };
        const data = await userReg(user)
        console.log(data);
    };
    return (
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
    );
};

export default RegisterForm;