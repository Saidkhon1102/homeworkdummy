import React from "react";
import Product from "./Product";

function ProductList({ date }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:gap-5 md:gap-10 bg-white  p-10">
      {date.products.map((prod) => {
        return <Product key={prod.id} product={prod} />;
      })}
    </div>
  );
}

export default ProductList;
