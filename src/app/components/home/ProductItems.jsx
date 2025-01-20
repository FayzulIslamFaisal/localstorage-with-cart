"use client";
import { addToCart } from "@/app/redux/features/cart/CartSlise";
import Image from "next/image";
import { useDispatch } from "react-redux";

const ProductItems = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg transition">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={350}
        height={220}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="font-bold text-blue-600 mb-4">${product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItems;
