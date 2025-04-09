import React from 'react';
import { CiHeart } from "react-icons/ci";
const Blog = ({blog}) => {
//    console.log(blog.image)
    return (
       
         
          
   
    <tbody className='border-b-2'>
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
        {blog.currentBidPrice}
          
          
        </td>
        <td>{blog.timeLeft}</td>
        <th>
          <button className="btn text-2xl btn-ghost btn-xs">
          <CiHeart />
          </button>
        </th>
      </tr>
     
      
     
     
    </tbody>
  


       
    );
};

export default Blog;