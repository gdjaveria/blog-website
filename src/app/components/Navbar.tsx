 "use client"


 import React from 'react'
 import Link from 'next/link';
import { useState } from 'react';
 import { HiOutlineMenuAlt2 } from "react-icons/hi";
 import Image from 'next/image';



 import {
  Sheet,
  SheetContent,
  SheetTrigger,
 } from "@/components/ui/sheet"


 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold pl-2">BLOG
          <Image src="/blog/log-1.png" alt='logo' width={65} height={65} />
         </div>
         <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white text-xl hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white text-xl hover:text-gray-300">About</Link>
          <Link href="/contact" className="text-white text-xl hover:text-gray-300">Contact</Link>

         </div>
         <Sheet>
          <SheetTrigger onClick={toggleMenu} className='md:hidden'>
            <HiOutlineMenuAlt2 size={36} className="text-white"/>
          </SheetTrigger>
          {isOpen && (
            <SheetContent>
              <div className='flex flex-col space-y-8 items-center mt-6 font-medium text-2xl'>
                <Link href="/" className='block text-black hover:text-gray-300'>Home</Link>
                <Link href="/about" className='block text-black hover:text-gray-300'>About</Link>
                <Link href="/contact" className='block text-black hover:text-gray-300'>Contact</Link>
              </div>
            </SheetContent>
          )}
         </Sheet>
      </div>
    </nav>




  );
};

export default Navbar;

