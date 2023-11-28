//Modal.js
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';


const Modal = ({Configs}) => {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="App">
      {Configs.map((modal) => (
        <button
          key={modal.id}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setOpenModal(modal)}
        >
          {modal.openButton}
        </button>
      ))}

      {Configs.map((modal) => (
        <ModalComponent
          key={modal.id}
          isOpen={openModal === modal}
          onClose={closeModal}
          onCreate={() => {
            // Define your create logic here for the modal
          }}
          config={modal}
        />
      ))}
    </div>
  );
};

export default Modal;
