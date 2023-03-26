import React, { useEffect, useState } from "react";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import Button from "../components/Button";
import axios from "axios";

const url = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

const Main = ({ products, setProducts, getData }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
   setShow(products.length === 0)
  }, [products])
  

  const handlePlus = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, {
        ...item,
        amount: Number(item.amount) + 1,
      });
      getData();
    } catch (error) {}
  };

  const handleMinus = async (item) => {
    if (item.amount - 1 !== 0) {
      try {
        await axios.put(`${url}/${item.id}`, {
          ...item,
          amount: Number(item.amount) - 1,
        });
        getData();
      } catch (error) {
        console.log(error);
      }
    } else {
      handleRemove(item.id);
    }
  };
  const handleRemove = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button show={show} setShow={setShow} />
      <main className="container d-flex justify-content-center w-75">
        <section
          className={
            show && products.length > 0
              ? "bg-light d-sm-block d-md-flex"
              : "bg-light"
          }>
          <section
            className={
              show && products.length > 0
                ? "col-md-5"
                : "d-flex justify-content-center"
            }>
            {show && <AddProduct getData={getData} />}
          </section>
          <section
            className={
              show
                ? "col-md-7"
                : "d-flex col-md-7 mx-auto mt-2 justify-content-center flex-column"
            }>
            {products.length > 0 ? (
              <article id="product-panel" className="">
                {products.map((item) => (
                  <ProductCard
                    key={item.id}
                    item={item}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                    handleRemove={handleRemove}
                  />
                ))}
              </article>
            ) : (
              <p className="text-center text-danger w-100">
                No products data...
              </p>
            )}
            <article id="card-prices">
              <CardTotal products={products} />
            </article>
          </section>
        </section>
      </main>
    </>
  );
};

export default Main;
