"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const pathname = usePathname()
    const auth = pathname.includes('/register') || pathname.includes('/login');
    if(auth) return <></>
    return (
        <footer className="bg-gray-dark text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Quick Links Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-orange-DEFAULT mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-coral-DEFAULT transition duration-300">Home</a></li>
                            <li><a href="#" className="hover:text-coral-DEFAULT transition duration-300">About Us</a></li>
                            <li><a href="#" className="hover:text-coral-DEFAULT transition duration-300">Services</a></li>
                            <li><a href="#" className="hover:text-coral-DEFAULT transition duration-300">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-orange-DEFAULT mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>Email: <a href="mailto:info@example.com" className="hover:text-coral-DEFAULT transition duration-300">info@example.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-coral-DEFAULT transition duration-300">+1 (234) 567-890</a></li>
                            <li>Address: 123 Main St, City, Country</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-orange-DEFAULT mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-white hover:text-coral-DEFAULT transition duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-coral-DEFAULT transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-coral-DEFAULT transition duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-coral-DEFAULT transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-light">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;