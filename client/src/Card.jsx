import React from "react";

function Card({ amount, img, checkoutHandler }) {
  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">₹{amount}</h2>
          </div>
          <button
            type="button"
            onClick={() => checkoutHandler(amount)}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
