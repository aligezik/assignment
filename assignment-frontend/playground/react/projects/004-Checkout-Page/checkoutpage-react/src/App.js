import { useState } from "react";
import data from "./helper/data";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  const [products, setProducts] = useState(data);

  const handlePlus = (id) => {
    const newProducts = products.map((item) => {
      return item.id === id ? { ...item, amount: Number(item.amount) + 1 } : item;
    });
    setProducts(newProducts);
  };

  const handleMinus = (id) => {
    const newProducts = products.map((item, i) => {
      if (item.id === id) {
        if (item.amount - 1 !== 0) return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    // .filter(item => item.amount !=0);

    setProducts(newProducts);
  };
  const handleRemove = (id) => {
    console.log(id);
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="bg-light">
      <Header />

      <Main
        products={products}
        setProducts={setProducts}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        handleRemove={handleRemove}
      />
    </div>
  );
}

export default App;
