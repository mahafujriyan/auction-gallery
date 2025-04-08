import React from 'react';

const Banner = () => {
    return (
        <div  style={{
            backgroundImage: "url('/src/assets/Banner-min.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'400px'
          }}
          className="w-full ">
            <h1 className=''>Bid on Unique Items from Around the World</h1>
            <p>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
            <button>Explore Auctions</button>
           
        </div>
    );
};

export default Banner;