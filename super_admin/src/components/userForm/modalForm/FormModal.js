//Modal.js
import React, { useState } from 'react';
import FormModalComponent from './FormModalComponent'


const FormModal = ({Configs}) => {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="App">
      {Configs.map((modal) => (
        <button
          key={modal.id}
          className="px-8 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
          onClick={() => setOpenModal(modal)}
        >
          {modal.openButton}
        </button>
      ))}

      {Configs.map((modal) => (
        <FormModalComponent
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

export default FormModal;
