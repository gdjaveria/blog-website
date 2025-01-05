import React from 'react'
import Image from 'next/image';


const Section = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-gray-50 mt-8'>
        <h1 className='text-5xl font-bold mb-6 lg:text-md'>TRAVEL BLOGS</h1>
        <p className='text-gray-500 text-center mb-8 font-medium' >
          Explore the beauty of nature, where every leaf tells a story and every breeze whispers peace<br />
          Reconnect with the Earth,s wonders and find inspiration in the simplicity of the wild<br />
        </p>
        <div className='flex flex-col md:flex-row md:space-x-2'>
          <div className='relative group'>
            <Image src="/blog/nature1.jpg" alt='nature1' width={350} height={300}
              className='w-full h-auto rounded-lg transition-transform duration-200 ease-in-out transform group-hover:scale-105' />
          </div>
          <div className='relative group'>
            <Image src="/blog/nature2.jpg" alt='nature2' width={300} height={300}
              className='w-full h-auto rounded-lg transition-transform duration-200 ease-in-out transform group-hover:scale-110' />
          </div>

          <div className='relative group'>
            <Image src="/blog/nature3.jpg" alt='nature3' width={300} height={300}
              className='w-full h-auto rounded-lg transition-transform duration-200 ease-in-out transform group-hover:scale-105' />

          </div>
        </div>
      </div>

      <br />
      <br />
      <br />




    </>



  )
}

export default Section;