// ModalComponent.js
import React from 'react';
import { modalStyles } from './ModalStyle';

const ModalComponent = ({ isOpen, onClose, config, onCreate }) => {
  const { overlay, overlayBackground, container, title, content, button, cancelButton } = modalStyles;

  // Check if buttons are defined in config, otherwise use default names
  const createButtonName = config.buttons && config.buttons.create ? config.buttons.create : 'Create';
  const cancelButtonName = config.buttons && config.buttons.cancel ? config.buttons.cancel : 'Cancel';

  return (
    <div>
      {isOpen && (
        <div className={overlay}>
          {/* Semi-transparent overlay for background */}
          <div className={overlayBackground}></div>

          {/* ModalComponent container */}
          <div className={container}>
            <h2 className={title}>{config.title}</h2>
            <p className={content}>{config.content}</p>
            <div className="mt-4 flex justify-between">
              <button className={cancelButton} onClick={onClose}>
                {cancelButtonName}
              </button>
              <button className={button} onClick={onCreate}>
                {createButtonName}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
