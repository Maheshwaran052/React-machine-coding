function CartSummary({ cart }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <p>You have added {cart.length} items</p>
      <p>Total Price: ₹{totalPrice.toLocaleString("en-IN")}</p>
    </div>
  );
}

export default CartSummary;
