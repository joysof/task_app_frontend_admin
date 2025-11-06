"use client";
import Image from 'next/image';
import { useState } from 'react';
import { RiLockPasswordLine } from 'react-icons/ri';
import updatePasswordImage from '@/public/adminResetPassword.png';
import logo from '@/public/logo.png';

export default function UpdatePasswordPage() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(newPassword !== confirmPassword){
      alert('Passwords do not match');
      return;
    }
    console.log('New Password:', newPassword);
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen w-full flex items-center gap-10 justify-center bg-gray-100 px-5">
      {/* Left Side Image */}
      <div>
        <Image src={updatePasswordImage} alt="Update Password" />
      </div>

      {/* Right Side Form */}
      <div className="w-[494px] p-10 bg-white rounded-2xl shadow-lg flex flex-col items-center">
        <Image src={logo} alt="logo" />
        <h2 className="text-3xl font-bold mt-5 mb-6">Update Password</h2>
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          {/* New Password */}
          <div className="flex items-center border rounded-lg p-3">
            <RiLockPasswordLine className="text-gray-500 text-xl mr-2" />
            <input
              type="password"
              placeholder="New Password"
              className="w-full outline-none bg-transparent"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-lg p-3">
            <RiLockPasswordLine className="text-gray-500 text-xl mr-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full outline-none bg-transparent"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}