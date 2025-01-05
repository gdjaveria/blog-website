import React from 'react'
import Image from 'next/image';

const testimonails =[
    {
        name: "John Doe",
        photo:"/blog/p1.jpg",
        description:"John is an avid traveler who loves exploring new cultures and cuisines",
    },
    {
        name: "Jane Smith",
        photo:"/blog/p2.png",
        description:"Jane is a travel blogger who shares her adventures around the world",
    },
    {
        name: "Alice Johnson",
        photo:"/blog/p3.jpg",
        description:"Alice is a photographer capturing the beauty of nature in her travels",
    },
];



const TeamTestimonails = () => {
  return (
  <div className='max-w-6xl mx-auto px-4 py-8 mt-8'>
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        What Our Travelers Say</h2>
        
  <div className='grid grid-cols-1 md:grid-col-3 gap-6'>
    {testimonails.map((testimonail , index)=> (
    <div key={index} className='bg-white rounded-lg shadow-lg p-6 text-center'>

      <Image src={testimonail.photo} alt='travelers' width={350} height={350}
       className='w-32 h-32 rounded-full mx-auto mb-5 mt-6'/>
       <h3 className="text-xl font-semibold">{testimonail.name}</h3>
        <p className="text-gray-800">{testimonail.description}</p>

     </div>
     ))}

     </div>
    </div>
  )
}

export default TeamTestimonails;