import React, { useState } from "react";
import AddProduct from "../components/AddProduct";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import Button from "../components/Button";

const Main = ({ products, setProducts,handleMinus, handlePlus, handleRemove }) => {
  const [show, setShow] = useState(false);
  return (
    <main className="container d-flex justify-content-center w-75">
      <section
        className={
          show
            ? "bg-light d-sm-block d-md-flex"
            : "bg-light"
        }>
        <section
          className={show ? "col-md-5" : "d-flex justify-content-center"}>
          <Button show={show} setShow={setShow} />
          {show && <AddProduct products={products} setProducts={setProducts} />}
        </section>
        <section
          className={show ? "col-md-7" : "d-flex col-md-7 mx-auto mt-2 justify-content-center flex-column"}>
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
          <article id="card-prices">
            <CardTotal products={products} />
          </article>
        </section>
      </section>
    </main>
  );
};

export default Main;
