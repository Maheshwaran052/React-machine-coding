import Button from "../../reusableComponents/Button";
function CartSummary({ cart, OnDelete }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <p>You have added {cart.length} items</p>
      <p>Total Price: ₹{totalPrice.toLocaleString("en-IN")}</p>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <Button
            label="Delete"
            variant="delete"
            onClick={() => OnDelete(product)}
          ></Button>
        </div>
      ))}
      ;
    </div>
  );
}

export default CartSummary;
