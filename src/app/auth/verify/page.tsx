'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
import verifyOtp from '@/public/adminVeryfiOtp.png'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import logo from '@/public/logo.png'
import Link from 'next/link'
export default function VerifyOTPPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''))
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const val = e.target.value
    if (!/^\d*$/.test(val)) return

    const newOtp = [...otp]
    newOtp[idx] = val
    setOtp(newOtp)

    if (val && idx < 5) inputsRef.current[idx + 1]?.focus()
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOtp(Array(6).fill(''))
  }

  return (
    <div className="min-h-screen px-5 flex items-center justify-center gap-20 text-[#333333] bg-white">
      {/* lelf side  */}

      <div>
        <Image src={verifyOtp} alt="verify otp image"></Image>
      </div>
      {/* right side  */}
      <div className="w-[494px] flex flex-col">
        <Image src={logo} alt="logo"></Image>
        <div className="flex gap-3 items-center mt-5">
          <Link href={'/auth/forgate'}><MdOutlineArrowBackIosNew className="text-2xl" /></Link>
          <h3>verify OTP</h3>
        </div>
        <p className="text-[16px] font-medium mt-5">
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white py-3 rounded-xl  flex flex-col items-center space-y-6"
        >
          <div className="flex gap-3">
            {otp.map((val, idx) => (
              <input
                key={idx}
                ref={(el) => (inputsRef.current[idx] = el)}
                type="text"
                maxLength={1}
                value={val}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-[70.18px] h-[61px] text-center border rounded-lg outline-none text-lg"
              />
            ))}
          </div>
          <div className="flex w-full items-center justify-between">
            <h4>Didn't receive code?</h4>
            <button className="text-[#318130] cursor-pointer">Resend</button>
          </div>
          <button
            type="submit"
            className="bg-[#318130] w-full text-white px-6 py-2 rounded-lg hover:bg-green-700 mt-5 cursor-pointer"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  )
}
