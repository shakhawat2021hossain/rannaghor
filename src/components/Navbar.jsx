"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    const auth = pathname.includes('/register') || pathname.includes('/login');

    const navLinks = [
        {
            path: '/',
            title: "Home"
        },
        {
            path: '/recipes',
            title: "Recipies"
        },
        {
            path: '/contact',
            title: "Contact"
        },
        {
            path: '/about',
            title: "About"
        },
    ]

    if(auth) return <></>
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-[#333333] font-poppins">
                            RecipeShare
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        {
                            navLinks?.map(links => <Link key={links?.path} href={links.path} className="text-gray-dark hover:text-coral-hover transition duration-300">
                                {links.title}
                            </Link>)
                        }
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/register"
                            className="bg-coral text-gray-light px-4 py-2 rounded-lg hover:bg-coral-hover transition duration-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;