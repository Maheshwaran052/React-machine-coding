import Button from "../../reusableComponents/Button";
import { memo } from "react";

function ProductList({ products, onAddToCart, loadingProductId }) {
  return (
    <div>
      {console.log("ProductList rendered")}

      {products.map((product) => {
        const isLoading = loadingProductId === product.id;

        return (
          <div key={product.id}>
            <p>
              {product.name}
              <span>{product.price}</span>
            </p>

            <Button
              label={isLoading ? "Adding..." : "Add to Cart"}
              variant="primary"
              disabled={isLoading}
              onClick={() => onAddToCart(product)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default memo(ProductList);
