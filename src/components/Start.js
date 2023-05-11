import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h1 className="game">Tic Tac Toe</h1>

            <button className="start" onClick={closeModal}>
              Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
