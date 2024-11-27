import React from 'react';

const Card = ({ products }) => {
   const { name, photo, price, details,category } = products
   return (
      <div>
         <div className="card card-side bg-base-100 border transition hover:scale-95 p-6 shadow-xl">
            <figure className='transition hover:scale-105'>
               <img
                  src={photo}
                  alt="Movie"
                  className='w-[250px] h-[250px] rounded-3xl'
                  />
            </figure>
            <div className="card-body">
               <h1 className="card-title font-bold">Name: {name}</h1>
               <p className='font-medium'><span className=' font-bold'>Price:</span> ${price}</p>
               <p className='font-medium'><span className='font-bold'>Detalis:</span> {details}</p>
               <p className='font-medium'><span className='font-bold'>Category:</span> {category}</p>
               <div className="card-actions justify-end">
                  <button className="btn btn-primary">By Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;