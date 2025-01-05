"use client";

import { useEffect,useState } from "react";

   type Comment={
    name:string;
    comment:string;
    date:string;
};
  type CommentSectionProps={
    blogId:string;
};
const  CommentSection = ({ blogId }: CommentSectionProps) =>{
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);
    
    useEffect(()=>{
       const storedComments=JSON.parse(localStorage.getItem(`comments-${blogId}`) || '[]');
       setComments(storedComments);
    }, [blogId]);

    useEffect(() => {
        localStorage.setItem(`comments-${blogId}`, JSON.stringify(comments));
      }, [comments, blogId]);

      const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(name.trim() && comment.trim()){
            setComments([...comments,{ name,comment,date:new Date().toISOString()}]);
            setName('');
            setComment('');
        }
      };
      return (
     <div className="mt-10">
    <h2 className="text-4xl font-bold mb-6  text- text-[#2a98b9]">Leave a Comment</h2>
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
   <label htmlFor="name" className="block text-xl font-medium mb-1">Name:</label>
 <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
    className="w-full text-black border rounded focus:outline-none focus:ring-2 
    focus:ring-slate-800 p-3"
    placeholder="Your name"required/>
</div>
    <div className="mb-4">
     <label htmlFor="comment" className="block text-xl font-medium mb-1">Your Comment:</label>
      <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}
      className="w-full text-black border rounded focus:outline-none focus:ring-1 focus:ring-slate-800 p-3"
      placeholder="Your comment" rows={4} required/>
  </div>

  <button type="submit" className="bg-black text-white text-xl font-bold shadow-lg px-5 py-2 rounded hover:bg-[#2a98b9]">
  Submit
  </button>
     
 </form>
  </div>
      );
    };
    
    export default CommentSection;