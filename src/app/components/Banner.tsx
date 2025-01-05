
 import React from 'react';
 import Image from 'next/image';

 const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center">
      <Image src="/blog/hero-img.jpg" alt="Nature"
        width={1000} height={1000}
        className="absolute inset-0 object-cover w-full h-full" />

      <div className="absolute inset-0 bg-black opacity-80">
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            WELCOME TO MY TRAVEL BLOGS</h1>
          <p className='text-lg text-center mt-3 border md:text-xl max-w-2xl'>
            Dive into the heart of each location, uncovering its history, charm, and unforgettable adventures.

          </p>




        </div>
      </div>



    </div>




  );
};

export default Banner;
