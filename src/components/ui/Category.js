import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <a href="#/" className="flex flex-col items-center gap-y-2 p-4 text-center transition hover:bg-purple-50 group">
      <img
        src={image}
        alt=""
        className="w-12 h-12 rounded border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color whitespace-nowrap tracking-tight">{title}</span>
    </a>
  );
}

export default Category;
