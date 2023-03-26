import { useState } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import { useEffect } from "react";
import axios from "axios";
import "./App.css"

function App() {
  const [products, setProducts] = useState([]);

  const getData = async()=>{
    const { data } = await axios.get(
      "https://63f4e5583f99f5855db9e941.mockapi.io/products"
    );
    setProducts(data)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="bg-light app">
      <Header />

      <Main products={products} setProducts={setProducts} getData={getData} />
    </div>
  );
}

export default App;
