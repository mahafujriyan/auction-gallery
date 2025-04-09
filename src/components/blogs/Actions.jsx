import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Actions = () => {
    const[blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch("/public/blogs/blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    console.log(blogs)
    return (
        <div >
        
        <div className="all-blogs">
           
                      
        <div className="overflow-x-auto m-3 bg-white rounded-2xl ">
         <table className="table">
         <thead>
      <tr>
        
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th> Bid Now</th>
      </tr>
    </thead>
            { 
            blogs.map((blog)=><Blog key={blog.id} blog={blog}></Blog>)
            }

            </table>
            </div>

            
             
        </div>


            
        </div>
    );
};

export default Actions;