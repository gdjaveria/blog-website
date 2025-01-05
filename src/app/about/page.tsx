 import React from 'react'
 import Image from 'next/image';
 import TeamTestimonails from '../components/Testimonail';
 import Footer from '../components/Footer';


 const AboutSection = () => {
  return (
    <>
      <div className="relative w-full h-64 md:h-96">
        <Image src="/blog/banner-about.jpg"
          alt="Nature" width={1000} height={1000}
          className='absolute inset-0 object-cover w-full h-full' />
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-5xl md:text-6xl font-bold border-b-4 border-white p-4 uppercase">
            About us
          </h1>
        </div>
      </div>


      <div className='flex flex-col md:flex-row items-center p-6 mt-12'>
        <div className='flex justify-center space-x-4'>
          <Image src="/blog/about-pic.jpg" alt='about image' width={400} height={400}
            className='w-1/4 h-60 object-cover rounded-lg' />
          <Image src="/blog/about-pic.jpg" alt='about image' width={300} height={300}
            className='w-1/6 h-80 object-cover rounded-lg' />
          <Image src="/blog/about-pic.jpg" alt='about image' width={400} height={400}
            className='w-1/4 h-60 object-cover rounded-lg' />
        </div>
        <div className='mt-6 md:w-1/2 md:mt-0 md:pl-4'>

          <p className='text-gray-800 text-center font-medium text-lg sm:text-md'>
            Welcome to our travel blog We are passionate travelers<br />
            who love to explore new places cultures and cuisines<br />
            Join us on our adventures as we share tips stories and beautiful<br />
            photographs from our journeys around the world.Whether you are<br />
            looking for travel inspiration practical advice, or just a glimpse<br />
            into our experiences we hope to inspire you to embark on your<br />own adventures
          </p>

        </div>
      </div>

      <TeamTestimonails />
      <Footer />

    </>
  )
}

export default AboutSection;



