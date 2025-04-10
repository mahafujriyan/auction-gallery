import React, { } from 'react';

 import { IoIosHeart } from "react-icons/io";
const Blog = ({blog,handleFavorite,enable }) => {

    return (
       
         
          
   
    <tbody className='border-2 rounded-xl'>
      {/* row 1 */}
      <tr >
       
        <td>
          <div className="flex items-center gap-3">
            
             
            <div >
                <img className='object-cover w-[96px] h-[96px]' src={blog.image} alt="change" />
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
     
      
     
     
    </tbody>
  


       
    );
};

export default Blog;