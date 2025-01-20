"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const cartQty = useSelector((state) => state.cart.cartItems);
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">E-shop</Link>
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-6">
        {/* Home Link */}
        <Link
          href="/"
          className="text-gray-700 text-lg font-medium hover:text-blue-600 transition"
        >
          Home
        </Link>
        {/* Cart Icon */}
        <Link
          href="/cart"
          className="relative text-gray-700 text-lg font-medium flex items-center hover:text-blue-600 transition"
        >
          <span className="text-2xl">🛒</span>
          {cartQty.length > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartQty.reduce((total, item) => total + item.cartQuantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
