"use client";

import { blogData } from "@/app/data/blogData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface BlogCardItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

function BlogCardItem({
  id,
  title,
  description,
  image,
}: BlogCardItemProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true); // Mark as clicked

    setTimeout(() => {
      window.location.href = `/blogs/${id}`;
    }, 150);
   };

   return (
     <motion.div
      key={id}
      className="p-4 border border-gray-300 shadow-md hover:shadow-lg transition-shadow 
      duration-300 cursor-pointer rounded-lg text-center flex flex-col h-full bg-white"

      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileTap={{ scale: 0.95 }}
     >
      {/* Image Component */}

      <div className="relative w-full h-52 overflow-hidden rounded-lg shadow-lg">
        <Image src={image} alt={title} layout="fill" objectFit="cover"
          className="rounded-lg" />
      </div>

      {/* Title */}

      <h2 className="font-bold text-2xl text-black py-2 mt-5">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-6 text-sm text-gray-600 flex-1">{description}</p>

      {/* Read More Button */}

       <div className="mt-6">
         <motion.button
          className={`className="mt-8 py-2 bg-black text-white rounded px-5 hover:bg-[#2a98b9] 
         transition duration-300
         ${isClicked ? "opacity-50 cursor-not-allowed" : ""
            }`}

          onClick={handleButtonClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          disabled={isClicked}>
          {isClicked ? "Opneing" : "Read More"}
        </motion.button>
      </div>
    </motion.div>

  );
}

export default function BlogCard() {
  return (
    <div className="container mx-auto p-10">
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogData && blogData.length > 0 ? (
          blogData.map((blog) => (
            <BlogCardItem
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.imageUrl} />
          ))
        ) : (
          <p>No blogs available.</p>
        )}

      </div>
    </div>
  );
}
