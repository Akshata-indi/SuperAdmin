import React, { useState } from 'react';
import ModalComponent from './ModalComponent'; // Import your configuration

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      {isOpen && (
        <div className={ModalComponent.overlay}>
          <div className={ModalComponent.modal}>
            <div className={ModalComponent.title}>Modal Title</div>
            <div className={ModalComponent.content}>
              This is the content of the modal. You can add your content here.
            </div>
            <div onClick={closeModal} className={ModalComponent.closeButton}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
