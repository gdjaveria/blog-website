import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";


const Footer = () => {
  return (
    <main className="max-w-screen-2xl mx-auto bg-black">
      <div className="sm:mt-[40px] mt-0 h-auto">

        <hr className="mt-8 border-gray-200" />
        <div className="flex flex-col lg:flex-row justify-between px-5 md:px-6 lg:px-7 py-5 sm:flex-col">
          <div className="grid mt-10 md:mt-30 lg:mt-3 grid-cols-3 gap-8 w-full lg:w-[60%]">
            <div>
              <Link href="/" className="font-bold dark:text-white text-white tracking-wide text-xl 
             uppercase flex justify-start items-center gap-1">
                <Image src="/blog/log-1.png" alt="logo" width={100} height={100}
                  className='px-5 mt-4' />
              </Link>
              <p className='text-white text-md mt-4 px-5'>My Travel Blog</p>
            </div>

            <div className='sm:mt-2 mt-[50px]'>
              <p className="text-white text-2xl font-extrabold">About Us</p>
              <p className="mt-2 text-white">Company Profile</p>
              <p className="mt-2 text-white">CSR Initiatives</p>
              <p className="mt-2 text-white">Read Articles</p>
              <p className="mt-2 text-white">Media Kit</p>
            </div>
            <div className='sm:mt-2 mt-[32px]'>
              <p className=" text-white text-2xl font-extrabold">Links</p>
              <p className="mt-2  text-white "><Link href='/'>Home</Link></p>
              <p className="mt-2   text-white"><Link href='/about'>About</Link></p>
              <p className="mt-2  text-white "><Link href='/blogs'>Blogs</Link></p>
            </div>
          </div>

          <div className='mt-8 lg:mt-2 lg:w-[40%] sm:w-[20%]'>
            <div className="flex gap-4 mt-4 text-3xl">
              <ImFacebook2 size={29} className='text-white' />
              <FaTwitterSquare size={32} className='text-white' />
              <FaInstagramSquare size={32} className='text-white' />
            </div>

            <p className='mt-5 text-white font-light'>Stay update with our latest</p>
            <div className="flex mt-4 gap-4">
              <div className="relative w-auto max-w-sm">
                <IoMailUnread className="absolute left-4 top-2/4 transform -translate-y-1/2 text-xl text-white" />
                <input type="text" placeholder="Enter your Email"
                  className="w-full pl-12 p-3 rounded-lg bg-gray-700 text-white focus:outline-none" />
              </div>

              <button className=" bg-slate-800 text-white rounded-md px-5 font-semibold">
                SUBSCRIBE</button>
            </div>
          </div>
        </div>

         <hr className="border-gray-700"/>
         <div className="flex flex-col px-5 py-5 justify-center text-1xl text-white 
          text-center text-sm md:flex-row ">
          <p> Copyright © 2024 Nature <span> This template is made with 🤍 by Nature</span>
          </p>

        </div>
      </div>
    </main>

  )
}



export default Footer;


