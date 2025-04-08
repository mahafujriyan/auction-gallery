import React from 'react';

const Banner = () => {
    return (
        <div  style={{
            backgroundImage: "url('/src/assets/Banner-min.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'400px'
          }}
          className="w-full flex flex-col justify-center items-start ">
           
        <div className='p-2 m-5'>
        <h1 className='text-[#FFFFFF] font-bold  text-2xl '>Bid on Unique Items from <br /> Around  the World</h1>
          
          <p className='text-[#FFFFFF] py-2'>Discover rare collectibles, luxury goods, and vintage treasures <br /> in our curated auctions</p>
          <button className='btn rounded-4xl'>Explore Auctions</button>
        
        </div>
           
        </div>
    );
};

export default Banner;