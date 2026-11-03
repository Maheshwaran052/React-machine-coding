import Button from "../../reusableComponents/Button";

function ProductList({ products, onAddToCart, loading }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}
            <span>{product.price}</span>
          </p>

          <Button
            label={loading ? "Adding" : "Add to Cart"}
            variant="primary"
            disabled={loading}
            onClick={() => onAddToCart(product)}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
