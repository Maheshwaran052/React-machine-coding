import Button from "./Button";

function Modal({ isOpen, title, message, onConfirm, onCancel }) {
  return (
    <div>
      {!isOpen ? null : (
        <>
          <h2>{title}</h2>
          <p>{message}</p>

          <Button
            label="Cancel"
            variant="cancel"
            disabled={false}
            onClick={onCancel}
          />

          <Button
            label="Delete"
            variant="delete"
            disabled={false}
            onClick={onConfirm}
          />
        </>
      )}
    </div>
  );
}

export default Modal;
