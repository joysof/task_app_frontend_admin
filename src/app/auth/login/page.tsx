"use client";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";



import LoginImage from '@/public/adminLogin.png'
import logo from '@/public/logo.png'
import Link from "next/link";
export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center bg-gray-100 p-4">
      <div className="flex py-20 justify-center mx-auto max-w-[1296px] shadow-lg bg-white  rounded-2xl overflow-hidden w-full">
        {/* Left Side Image */}
        <div className="w-[488px] relative">
          <Image
            src={LoginImage}
            alt="Login Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side Form */}
        <div className="w-[494px] h-[] p-10 text-[#333333]">
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

           <div className="flex justify-between items-center">
             <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="h-4 w-4 cursor-pointer accent-[#318130]" />
              <label htmlFor="remember" className="text-sm cursor-pointer">Remember Me</label>
            </div>
            <div>
               <Link href={'/auth/forgate'} className="text-[#318130]"> Forgot Password?</Link>
            </div>
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
