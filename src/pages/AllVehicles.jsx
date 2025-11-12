import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

const AllVehicles = () => {
    const { products } = useProducts();
  
   
    


    
    
    
    return (
      <div>
            <div className="py-5 flex justify-between">
                <h1 className="text-2xl  font-bold ">All Vehicles</h1>
               
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-0 lg:p-0 mb-5">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllVehicles;




