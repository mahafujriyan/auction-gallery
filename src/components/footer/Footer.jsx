import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center   p-10">
  <aside>
  <div className="">
   <span className='text-[#4f8df0] font-bold'>Auction</span> <span className='text-amber-400 font-bold'>Gallery</span>
  </div>
    <div className='flex font-bold gap-1.5'>
        <h3>Bid.</h3>
        <h3>Win.</h3>
        <h3>Own.</h3>
    </div>

  <div className='flex gap-2'>
    <button>Home</button>
    <button>Auctions</button>
    <button> Categories</button>
    <button>How to works</button>
  </div>
  <p>©2025 AuctionHub. All rights reserved.</p>
  </aside>
  
</footer>
        </div>
    );
};

export default Footer;