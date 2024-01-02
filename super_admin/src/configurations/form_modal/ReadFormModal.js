import React, { useState } from 'react';
import FormModal from './FormModal'

import FormComponent from '../form/FormComponent';
// import formData from '../form/formData.json'
import Input from '../../ui-configs/input/Input';
import inputData from '../../ui-configs/input/inputData.json'

const ReadFormModal = ({config, inputconfig, handleSubmit}) => {
  const [openModal, setOpenModal] = useState(null);

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="App">
      {config.map((modal) => (
        <button
          key={modal.id}
          className="px-6 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setOpenModal(modal)}
        >
          {modal.openButton}
        </button>
      ))}

      {config.map((modal) => (
        <FormModal
          key={modal.id}
          isOpen={openModal === modal}
          onClose={closeModal}
          config={modal}
          // backdropClass="bg-black opacity-50" // Add your custom classes for the backdrop here
        >
          {/* Render FormComponent within the modal when open */}
          {openModal === modal && <FormComponent config={inputconfig} handleSubmit={handleSubmit}/>} 
        </FormModal>
      ))}
    </div>
  );
};

export default ReadFormModal;