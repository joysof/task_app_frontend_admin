"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";



import LoginImage from '@/public/adminLogin.png'
import logo from '@/public/logo.png'
export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full">
        {/* Left Side Image */}
        <div className="hidden md:block w-1/2 relative">
          <Image
            src={LoginImage}
            alt="Login Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 text-[#333333]">
        <Image src={logo} alt="logo"/>
          <h2 className="text-3xl font-bold mb-6">Hello,Welcome!</h2>
          <h5 className=" capitalize text-[16px]">Please enter your detaills below to continue</h5>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <div className="flex p-3 mt-3 bg-[#f7f7f7] items-center rounded-lg ">
                <MdOutlineMail className="text-2xl"/>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-2 outline-none border-none"
                placeholder="Enter your email"
                required
              />
              </div>
            </div>

            <div>
              <label className="font-medium">Password</label>
             <div className="flex gap-2 p-3 mt-3 bg-[#f7f7f7] items-center rounded-lg ">
                 <RiLockPasswordLine className="text-2xl"/>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-none outline-none "
                placeholder="Enter your password"
                required
              />
             </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="h-4 w-4 accent-[#318130]" />
              <label htmlFor="remember" className="text-sm">Remember Me</label>
            </div>

            <button
              type="submit"
              className="w-full capitalize bg-[#318130] text-white py-3 rounded-lg cursor-pointer transition"
            >
                sing in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
