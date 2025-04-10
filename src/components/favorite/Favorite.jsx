 import React from 'react';
 import { RxCross2 } from "react-icons/rx";
const Favorite = ({item,onRemove}) => {
   
     return (
       
        <div>

           
            <div className='grid grid-cols-3 gap-3 border-2 rounded-2xl m-2'>
                <div>
                    <img className='object-cover p-2 ' src={item.image} alt="" />

                </div>
                <div>
                     <h1>
                    {item.title}

                     </h1>
                    <ul className='flex gap-5'>
                         <li>${item.currentBidPrice}</li>
                         <li>Bids:{item.bidsCount}</li>
                     </ul>

                </div>
                <div>
                    <button   onClick={() => onRemove(item.id, item.currentBidPrice)}
                    
          className='hover:text-red-700'> <RxCross2 /></button>
        

               </div>
            </div>
            
        </div>
    );
 };

 export default Favorite;