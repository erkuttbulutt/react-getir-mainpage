import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Product({ product }) {
  return (
    <div className="bg-white relative flex flex-col items-center text-center gap-y-1 text-sm p-3 font-semibold">
      <button className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg transition-colors text-brand-color shadow-md hover:text-brand-yellow hover:border-brand-color">
        <AiOutlinePlus size={16}/>
      </button>
      <img src={product.image} alt="" />
      <div className=" text-brand-color">{product.price}</div>
      <div className=" text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}

export default Product;
