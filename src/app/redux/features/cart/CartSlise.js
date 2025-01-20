import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Helper function to save cart items to localStorage
const saveToLocalStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        // Increment quantity if the product already exists
        existingProduct.cartQuantity += 1;
        toast.info(`Increased quantity to ${existingProduct.cartQuantity}`);
      } else {
        // Add new product to the cart
        state.cartItems.push({ ...product, cartQuantity: 1 });
        toast.success("Added to Cart Successfully!");
      }

      // Update the total quantity
      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartQuantity,
        0
      );

      // Save updated cart to localStorage
      saveToLocalStorage(state.cartItems);
    },

    removeFromCart(state, action) {
      const proId = action.payload.id;
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== proId
      );
      state.cartItems = nextCartItems;

      state.cartTotalQuantity = nextCartItems.reduce(
        (total, item) => total + item.cartQuantity,
        0
      );
      saveToLocalStorage(nextCartItems);
      toast.error("Removed from Cart");
    },

    decrementCart(state, action) {
      const proID = action.payload.id;
      const existingProduct = state.cartItems.find(
        (cartItem) => cartItem.id === proID
      );

      if (existingProduct) {
        if (existingProduct.cartQuantity > 1) {
          existingProduct.cartQuantity -= 1;
          toast.info(
            `Decreased quantity of ${existingProduct.title} to ${existingProduct.cartQuantity}`
          );
        } else {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== proID
          );
          toast.error(`${existingProduct.name} removed from Cart`);
        }

        state.cartTotalQuantity = state.cartItems.reduce(
          (total, item) => total + item.cartQuantity,
          0
        );

        // Save updated cart to localStorage
        saveToLocalStorage(state.cartItems);
      }
    },

    incrementCart(state, action) {
      const proID = action.payload.id;
      const existingProduct = state.cartItems.find(
        (cartItem) => cartItem.id === proID
      );

      if (existingProduct) {
        existingProduct.cartQuantity += 1;
        toast.info(
          `Increased quantity of ${existingProduct.title} to ${existingProduct.cartQuantity}`
        );
        state.cartTotalQuantity = state.cartItems.reduce(
          (total, item) => total + item.cartQuantity,
          0
        );
        saveToLocalStorage(state.cartItems);
      } else {
        console.error(`Product with ID ${proID} does not exist in the cart.`);
      }
    },

    clearAllCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      saveToLocalStorage(state.cartItems);
      toast.warn("All items have been cleared from the cart.");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementCart,
  incrementCart,
  clearAllCart,
} = cartProductSlice.actions;
export default cartProductSlice.reducer;
