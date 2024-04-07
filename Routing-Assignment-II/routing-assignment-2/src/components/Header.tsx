"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter();

    const handleOnClickInfo = () => {
        router.push("/info")
    }
    const handleOnClickContact = () => {
        router.push("/contact")
    }
  return (
    <div className='flex flex-row gap-2 w-full justify-around p-3 bg-black text-yellow-500'>
        <Link href={"/"}>Home</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/dashboard/settings"}>Settings</Link>
        <Link href={"/about"}>About</Link>
        <div className='cursor-pointer' onClick={handleOnClickInfo}>Info</div>
        <div className='cursor-pointer' onClick={handleOnClickContact}>Contact</div>
    </div>
  )
}

export default Header