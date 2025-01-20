import Image from "next/image";
import { useSelector } from "react-redux";

const CartRight = () => {
  const cartProduct = useSelector((state) => state.cart);

  const allProPrice = cartProduct.cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const subTotalPrice = cartProduct.cartItems
    .reduce((total, item) => (total + item.price) * item.cartQuantity, 0)
    .toFixed(2);

  return (
    <div className="col-span-1 h-full bg-white shadow-lg p-4 rounded-lg">
      {cartProduct.cartItems.length > 0 &&
        cartProduct.cartItems.map((product) => {
          return (
            <div key={product.id} className="flex items-center mb-2">
              <Image
                width={100}
                height={60}
                src={product.thumbnail}
                alt={product.thumbnail}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <span className="font-medium">{product.title}</span>
            </div>
          );
        })}

      {/* Price */}
      <div className="flex justify-between mb-2">
        <span>Price:</span>
        <span>$ {allProPrice}</span>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>$ {subTotalPrice}</span>
      </div>

      {/* Discount */}
      <div className="flex justify-between mb-2">
        <span>Discount:</span>
        <span>$ 0.00</span>
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold text-lg mb-4">
        <span>Total:</span>
        <span>$ {subTotalPrice}</span>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Checkout
      </button>
    </div>
  );
};

export default CartRight;
