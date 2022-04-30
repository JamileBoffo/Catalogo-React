import { Children } from "react";
import "./Modal.css";

export function Modal({ children, closeModal }) {
  const handleClick = (e, canClose) => {
    // impedir a propagação do evento para seus ouvintes
    e.stopPropagation();
    if (canClose) closeModal();
  };

  return (
    <Overlay>
      <div className="Modal" onClick={handleClick}>
        <span className="Modal__close" onClick={(e) => handleClick(e, true)}>
          +
        </span>
        <div className="Modal__body">{children}</div>
      </div>
    </Overlay>
  );
}
