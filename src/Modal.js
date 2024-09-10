import { X } from "@phosphor-icons/react";

const xStyle = {
  position: "fixed",
  top: "5px",
  right: "5px",
  cursor: "pointer",
};

export default function Modal({ title, message, children, onClose }) {
  return (
    <>
      <div className="modal">
        <X size={32} style={xStyle} onClick={onClose} />
        <h1>{title}</h1>
        <p>{message}</p>
        {children}
      </div>
      <div className="overlay"></div>
    </>
  );
}
