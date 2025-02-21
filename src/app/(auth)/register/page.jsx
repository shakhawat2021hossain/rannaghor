import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import React from "react";

const SignupPage = () => {
    

    return (
        <div className="min-h-screen bg-gray-light flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-orange mb-6 text-center">
                    Sign Up
                </h2>
                <RegisterForm/>
                <p className="mt-2 text-center">Already have an account? <Link className="underline hover:text-coral-hover" href='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;
