import React from 'react';

 import { IoIosHeart } from "react-icons/io";
const Blog = ({blog,handleFavorite,enable }) => {

    return (
      <tr className='border-2 p-2'  >
       
        <td >
          <div className="flex items-center gap-3">
            
             
            <div >
                <img className='object-cover w-[96px] h-[96px] ' src={blog.image} alt={blog.title} />
            </div>
            
              <div className="font-semibold m-2">{blog.title}</div>
              
           
          </div>
        </td>
        <td>
        $ {blog.currentBidPrice}
          
          
        </td>
        <td>{blog.timeLeft}</td>
        <th>
          <button onClick={()=>handleFavorite(blog)}
          disabled={enable.includes(blog.id)}
          className={`text-2xl ${
    enable.includes(blog.id)
      ? 'cursor-not-allowed text-red-500'
      : 'btn-ghost hover:text-yellow-500'
  }`} 
          >
           
      <IoIosHeart />
       
          </button>
        </th>
      </tr>
     
      
     
     
 
  


       
    );
};

export default Blog;