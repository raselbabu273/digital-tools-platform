import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartData, setCartData }) => {
  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCartData([]);
    toast.success("Payment Successful.")
  };

  const handleDelete = (item) => {
    const filteredItem = cartData.filter((data) => data.id !== item.id);
    setCartData(filteredItem);
    toast.error("Product removed from the cart.")
  };

  return (
    <div className="container mx-auto p-15 mt-10 grid gap-5">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {cartData.length === 0 ? (
        <div className="text-center py-18">
          <div className="flex justify-center">
            <img
              className="w-20 h-20 text-red-500"
              src="/public/cart.png"
              alt=""
            />
          </div>

          <p className="font-medium text-lg text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          {cartData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center shadow-sm px-8 py-5 rounded-xl bg-sky-50"
            >
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
                <button
                  onClick={() => handleDelete(item)}
                  className="btn text-red-600 bg-transparent border-none shadow-none p-5"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-between p-5 mt-5 bg-black rounded-lg text-white text-3xl font-bold">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <button
        onClick={handlePayment}
        className="btn w-full py-6 rounded-full text-white text-lg font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
