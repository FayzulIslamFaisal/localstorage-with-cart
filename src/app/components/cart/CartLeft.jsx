"use client";
import {
  decrementCart,
  incrementCart,
  removeFromCart,
  clearAllCart,
} from "@/app/redux/features/cart/CartSlise";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";

const CartLeft = ({ cartProduct }) => {
  const dispatch = useDispatch();

  const handleFromRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrementCart = (product) => {
    dispatch(decrementCart(product));
  };

  const handleIncrementCart = (product) => {
    dispatch(incrementCart(product));
  };

  const handleClearAllCart = () => {
    dispatch(clearAllCart());
  };

  return (
    <div className="col-span-3">
      {cartProduct?.cartItems.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col justify-center">
            <h1 className=" text-2xl mb-4">No Cart Data Found</h1>
            <Link
              href="/"
              className="text-center capitalize bg-blue-500 inline-block text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
      {cartProduct?.cartItems.length > 0 && (
        <>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-2 px-4 text-left">SL</th>
                <th className="py-2 px-4 text-left">Image</th>
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Cart Item */}
              {cartProduct?.cartItems.map((product, index) => {
                return (
                  <tr key={product.id} className="border-b">
                    <td className="py-2 px-4"> {index + 1}</td>
                    <td className="py-2 px-4">
                      <Image
                        src={product.thumbnail}
                        width={120}
                        height={80}
                        alt={product.id}
                        className=" h-12 object-cover rounded w-full"
                      />
                    </td>
                    <td className="py-2 px-4">{product.title}</td>
                    <td className="py-2 px-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrementCart(product)}
                          className="bg-gray-200 px-3 py-1 rounded-l text-xl hover:bg-gray-300 transition inline-block"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={product.cartQuantity}
                          className="w-12 text-center border border-gray-300 py-1 outline-none"
                          readOnly
                        />
                        <button
                          onClick={() => handleIncrementCart(product)}
                          className="bg-gray-200 px-3 py-1 rounded-r text-xl hover:bg-gray-300 transition inline-block"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-2 px-4">${product.price}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleFromRemove(product)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <MdDeleteForever style={{ color: "red" }} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="pt-4">
            <button
              onClick={() => handleClearAllCart()}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartLeft;
