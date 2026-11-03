function Button({ label, variant, disabled, onClick }) {
  return (
    <button className={variant} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
