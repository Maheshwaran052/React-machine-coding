import Button from "../../reusableComponents/Button";
import { memo } from "react";
function CartSummary({ cart, onDelete }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      {console.log("CartSummary rendered")}
      <p>You have added {cart.length} items</p>
      <p>Total Price: ₹{totalPrice.toLocaleString("en-IN")}</p>
      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <Button
            label="Delete"
            variant="delete"
            onClick={() => onDelete(product)}
          ></Button>
        </div>
      ))}
      ;
    </div>
  );
}

export default memo(CartSummary);
