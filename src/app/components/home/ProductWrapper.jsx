import { getAllProducts } from "@/app/services/getAllProducts";
import { Suspense } from "react";
import ProductItems from "./ProductItems";

const ProductWrapper = async () => {
  const response = await getAllProducts();
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 container mx-auto">
          {response.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </div>
      </Suspense>
    </>
  );
};

export default ProductWrapper;
