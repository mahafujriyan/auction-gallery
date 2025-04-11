import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Actions = ({handleFavorite,enable}) => {
    const[blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch("/blogs/blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
 
    return (
        <div >
        
        <div className="all-blogs">
           
                      
        <div className=" m-3 bg-white rounded-2xl ">
         <table className="table">
         <thead>
      <tr className='border-2 p-2'>
        
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th> Bid Now</th>
      </tr>
    </thead>
    <tbody >
            { 
            blogs.map((blog)=><Blog key={blog.id} blog={blog} handleFavorite={handleFavorite} enable={enable}></Blog>)
            }
</tbody>
            </table>
            </div>

            
             
        </div>


            
        </div>
    );
};

export default Actions;