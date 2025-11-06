"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ForgotImage from "@/public/adminLogin.png";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full">

        {/* Left Side Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src={ForgotImage}
            alt="Forgot Password"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 text-[#333333]">
          <Image src={logo} alt="logo" className="mb-4" />
          <h2 className="text-3xl flex gap-3 font-bold mb-3"><Link href={'/auth/login'}><MdOutlineArrowBackIosNew/></Link>Forgot Password?</h2>
          <p className="text-[15px] text-gray-600 mb-6">Enter the email address associated with your account. We'll send you an OTP to your email. </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-3 py-2 px-3 rounded  bg-[#f4f4f4] border-none outline-none"
                  placeholder="Enter your email"
                  required
                />
              
            </div>

            <button
              type="submit"
              className="w-full bg-[#318130] text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}