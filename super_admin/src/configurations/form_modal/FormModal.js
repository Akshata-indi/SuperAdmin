import React from 'react';

const FormModal = ({ isOpen, onClose, config, children, backdropClass }) => {
  return (
    <div>
      {isOpen && (
        <div className=" inset-0 flex items-center justify-center z-50">
          {/* Semi-transparent overlay for background */}
          <div className={`modal-overlay fixed inset-0 ${backdropClass}`}></div>

          {/* Modal container with scrolling */}
          <div className="modal-container bg-white p-10 rounded-lg shadow-md relative z-10 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-2">{config.title}</h2>
            <p className="text-gray-600">{config.content}</p>

            {/* Render children passed to the modal */}
            <div className="mt-4">
              {children}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                className="px-3 py-1 text-white bg-blue-700 rounded-md hover:bg-blue-800"
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
