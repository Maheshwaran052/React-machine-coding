import CartSummary from "./CartSummary";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import Modal from "../../reusableComponents/Modal";
import { useCallback, useState, useMemo } from "react";
import ShoppingContext from "./ShoppingContext";

const products = [
  { id: 1, name: "Asus ROG", price: 150000 },
  { id: 2, name: "Asus Tuf Gaming", price: 80000 },
  { id: 3, name: "Acer", price: 60000 },
];

function ShoppingPage() {
  const [cart, setCart] = useState([]);
  const [loadingProductId, setLoadingProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = useCallback((product) => {
    setLoadingProductId(product.id);

    setCart((previousCart) => [...previousCart, product]);

    setTimeout(() => {
      setLoadingProductId(null);
    }, 500);
  }, []);
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

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [products, searchTerm]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => a.price - b.price);
  }, [filteredProducts]);
  return (
    <div>
      <ShoppingContext.Provider value={{ searchTerm, setSearchTerm }}>
        <SearchBar />
      </ShoppingContext.Provider>
      <ProductList
        products={sortedProducts}
        onAddToCart={handleAddToCart}
        loadingProductId={loadingProductId}
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
