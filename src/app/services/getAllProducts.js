export const getAllProducts = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=10&skip=10"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
