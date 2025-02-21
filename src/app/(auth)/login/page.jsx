import Link from "next/link";
import React from "react";

const SignupPage = () => {


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
                    Login
                </h2>
                
                <p className="mt-2 text-center">Don't have an account? <Link className="underline hover:text-coral-hover" href='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;