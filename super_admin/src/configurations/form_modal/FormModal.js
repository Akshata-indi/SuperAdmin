import React from 'react';
import formModalStyles from './formModalStyle'

const FormModal = ({ isOpen, onClose, config, children, backdropClass }) => {
  const { overlay, overlayBackground, container, title, content, closeButton } = formModalStyles[config.modalcss];

  return (
    <div>
      {isOpen && (
        <div className={overlay}>
          {/* Semi-transparent overlay for background */}
          <div className={`${overlayBackground} ${backdropClass}`}></div>

          {/* Modal container with scrolling */}
          <div className={container}>
            <h2 className={title}>{config.title}</h2>
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
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
