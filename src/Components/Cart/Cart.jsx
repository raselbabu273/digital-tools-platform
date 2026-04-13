import React from "react";

const Cart = ({ cartData }) => {

    const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="container mx-auto p-15 mt-10 grid gap-5">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {cartData.map((item) => (
        <div className="flex justify-between items-center shadow-sm px-8 py-5 rounded-xl bg-sky-50">
          <div className="flex justify-between gap-6">
            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4">
              <img src={item.iconImg} alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-3">{item.name}</h1>
              <p className="text-gray-800 font-semibold">$ {item.price}</p>
            </div>
          </div>

          <div>
            <button className="btn text-red-600 bg-transparent border-none shadow-none p-5">Remove</button>
          </div>
        </div>
      ))}
      <div className="flex justify-between p-5 mt-5 bg-black rounded-lg text-white text-3xl font-bold">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
