import CartSummary from "./CartSummary";
import ProductList from "./ProductList";
import Modal from "../../reusableComponents/Modal";
import { useState } from "react";

function ShoppingPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setLoading(true);
    setCart((previousCart) => [...previousCart, product]);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handleDelete = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleConfirm = () => {
    setCart((previousCart) =>
      previousCart.filter((product) => product.id != selectedProduct.id),
    );
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const products = [
    { id: 1, name: "Asus ROG", price: 150000 },
    { id: 2, name: "Asus Tuf Gaming", price: 80000 },
    { id: 3, name: "Acer", price: 60000 },
  ];
  return (
    <div>
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        loading={loading}
      />
      <CartSummary cart={cart} onDelete={handleDelete} />
      <Modal
        isOpen={isModalOpen}
        title="Delete Product"
        message="Are you sure you want to delete this product?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}
export default ShoppingPage;
