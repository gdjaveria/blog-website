

import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const ContactPage = () => {
  return (
     <div className="relative w-full h-64 md:h-96">
      <Image src="/blog/banner-about.jpg" alt="Nature" 
      width={1000} height={1000}
        className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute inset-0 bg-transparent opacity-55"></div>
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-5xl md:text-6xl font-bold border-b-4 border-white p-4 uppercase">
          Contact Us
        </h1>
       </div>

       <div className='flex flex-col md:flex-row p-6 mt-6'>

        {/* FAQ Section */}

        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-extrabold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className='font-semibold text-lg'>Q: How do i subscribe to your newsletter?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className='font-semibold text-lg'>Q: What are the best travel destination now?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className='font-semibold text-lg'>Q: How do i find budget travel deals?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className='font-semibold text-lg'>Q: What safety tips for solo travelers exist?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="md:w-1/2 p-5">
          <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
          <p className='mb-5 font-medium'>
            If you have any questions,feel free to reach out to us!</p>
          <form className="flex flex-col">
            <label className='mb-2 font-medium text-lg' htmlFor="name">Name:</label>
            <input className="border border-gray-500 p-2 mb-4 rounded" type="text" id="name" required />

            <label className='mb-2 font-medium text-lg' htmlFor="email">Email:</label>
            <input className="border border-gray-500 p-2 mb-4 rounded" type="email" id="email" required />

            <label className='mb-2 font-medium text-lg' htmlFor="message">Message:</label>
            <textarea className="border border-gray-500 p-2 mb-4 rounded" id="message" required></textarea>

            <button className='bg-black text-white p-2 rounded hover:bg-blue-500 
             transition duration-200' type="submit"> Submit </button>
          </form>
          <div className='mt-8'>
            <h3 className='font-semibold md:text-3xl sm:text-2xl'>Contact Us:</h3>
            <p className='text-lg text-gray-800'>Email: support@example.com</p>
            <p className='text-lg text-gray-800'>Phone: +1 (234) 567-890</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
};

export default ContactPage;
