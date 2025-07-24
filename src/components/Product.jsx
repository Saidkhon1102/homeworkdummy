import React from "react";
function Product({ product }) {
  const { title, description, price,thumbnail } = product;
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm w-full m-4 cursor-pointer">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2 ">{title}</h2>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="flex items-center justify-between text-gray-700 ">
        <span className="text-lg font-bold">${price}</span>
        
      </div>
    </div>     
  );
}

export default Product;
