import React from 'react';
import formModalStyles from './formModalStyle'
import FormComponent from '../../configurations/form/FormComponent'

const FormModal = ({ isOpen, onClose, config, children, backdropClass, handleSubmit  }) => {
  const { overlay, overlayBackground, container, title, content, createbutton, closeButton } = formModalStyles[config.modalcss];

  const handleCreate = () => {
    // Call handleSubmit function when the "Create" button is clicked
    handleSubmit();
    onClose(); // Close the modal after handling submit action (assuming onClose closes the modal)
  };

  return (
    <div>
      {isOpen && (
        <div className={overlay}>
          {/* Semi-transparent overlay for background */}
          <div className={`${overlayBackground} ${backdropClass}`}></div>

          {/* Modal container with scrolling */}
          <div className={container}>
            <h2 className={title}>{config.title}</h2>
            <hr class="h-px my-4 w-full bg-gray-100 border-2 dark:bg-gray-400"></hr>
            <div className='px-6 py-2'>
            <p className={content}>{config.content}</p>

            {/* Render children passed to the modal */}
            <div className="mt-4">
              {children}
            </div>

            <div className="mt-4 flex justify-end">

            <button
                className={closeButton}
                onClick={onClose}
              >
                {config.buttons.cancel}
              </button>
              <button
                className={createbutton}
                onClick={handleCreate}
               >
                {config.buttons.create}
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
