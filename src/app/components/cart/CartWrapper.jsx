"use client";
import { useSelector } from "react-redux";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";

const CartWrapper = () => {
  const cartProduct = useSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 min-h-screen">
      {/* 75% Column for Cart Items */}
      <CartLeft cartProduct={cartProduct} />
      {/* 25% Column for Order Summary */}
      <CartRight cartProduct={cartProduct} />
    </div>
  );
};

export default CartWrapper;
