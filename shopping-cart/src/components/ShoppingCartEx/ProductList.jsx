function ProductList({ products, onAddToCart }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name}
            <span>{product.price}</span>
          </p>

          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
