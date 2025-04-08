import React from 'react';
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
    return (
        <div>
            <div className=" flex justify-around navbar bg-base-100 shadow-sm">
  <div className="">
   <span className='text-[#4f8df0] font-bold'>Auction</span> <span className='text-amber-400 font-bold'>Gallery</span>
  </div>
  <div className='flex gap-2'>
    <button>Home</button>
    <button>Auctions</button>
    <button> Categories</button>
    <button>How to works</button>
  </div>

  
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <CiBellOn size={24}/>
          <span className=" badge-sm indicator-item">8</span>
        </div>
      </div>
     
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;