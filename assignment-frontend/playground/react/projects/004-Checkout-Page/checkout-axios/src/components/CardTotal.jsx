import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({ products }) => {
  const subTotal = products.reduce(
    (acc, product) =>
      product.price * product.dampingRate * product.amount + acc,
    0
  );
  
  return (
    <>
    {products.length> 0 ? (<table className="table">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal * taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(subTotal + subTotal * taxRate + shipping).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>): null}
    </>
  );
};

export default CardTotal;
