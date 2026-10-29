import { CartSummary } from "./CartSummary";
import { ProductList } from "./ProductList";
import { useState } from "react";

function ShoppingPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };
  const products = [
    { id: 1, name: "Asus ROG", price: 150000 },
    { id: 2, name: "Asus Tuf Gaming", price: 80000 },
    { id: 3, name: "Acer", price: 60000 },
  ];
  return (
    <div>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <CartSummary cart={cart} />
    </div>
  );
}
export default ShoppingPage;
