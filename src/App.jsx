
import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Actions from './components/blogs/Actions'

import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { CiHeart } from "react-icons/ci";
import Favorite from './components/favorite/Favorite'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
function App() {
 
  const[favorite,setFavorite] =useState([])
  const[enable,setEnable]=useState([])
  const handleFavorite=(blog)=>{
    if (!favorite.some(item => item.id === blog.id)) {
      setFavorite([...favorite, blog]);
      setEnable(prev=>[...prev,blog.id])
      toast.success('Items has been added to favorite! ')
    }
    
      }
 ;
  
   
 const handleRemove = (id, price) => {
  setFavorite(prev => prev.filter(item => item.id !== id));
  setEnable(prev=>prev.filter(enable=>enable!==id))
  toast.error('Items has been remove from favorites!')
}
 
  console.log(favorite)

  return (
    <>
     <Toaster position="top-right" reverseOrder={false} />
   
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
     
        <div className="main-container  bg-gray-200  ">
        <div className=' px-6 pt-6 ' >
          <h1 className='font-semibold text-2xl text-blue-500 '>Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>
          
          </div>
          <div className=' flex'>
          <div className="left-container w-[75%] p-5"> 

          <Actions handleFavorite={handleFavorite} enable={enable}>

          </Actions>
         
        </div>
        <div className="  right-container w-[25%]">
          
          <div className='bg-white overflow-auto m-4 rounded-4xl'>
            <div className='flex gap-1 p-2  items-center justify-center border-b-2'>
                <CiHeart size={28} />
                <h1 className='font-bold text-xl text-[#0E2954]'>Favorite Items</h1>
            </div>
          {
            favorite.length===0?(
              <div className='text-center border-y-1 p-4'>
                <h1 className='text-xl font-bold py-2'>
            No favorites yet
                 </h1>
                 <p>
                Click the heart icon on any item to add it to your favorites
                </p>
            </div>
            ):(
              
            
             
                favorite.map((item)=><Favorite key={item.id} item={item} onRemove={handleRemove} ></Favorite>)
                
          )

}
        
<div>
                <h1 className=' border-t-2 text-center font-bold text-lg'>Total bids Amount: $ <span>{favorite.reduce((sum,item)=>sum + item.currentBidPrice, 0).toFixed(2) } </span> </h1>
            </div>

        </div>
          
        </div>
          </div>
        
       
        </div>
       


        <Footer></Footer>

      </div>
      
    </>
  )
}

export default App
