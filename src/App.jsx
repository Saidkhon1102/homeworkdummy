import React, { Fragment, useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((date) => date.json())
      .then((date) => setDate(date))
      .catch((err) => console.log(err));
  }, []);

 
  return <>{date && <ProductList date={date} />}</>;
}

export default App;
