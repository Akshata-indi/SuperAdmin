import React, { useState } from 'react';
import Modal from 'react-modal';
import TwdButtonsConfig from './TwdButtonsConfig';
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    top: '50%',
    left: '80%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '90%', // Adjusted width for responsiveness
    maxWidth: '600px',
    height: '100%', // Set the maximum width of the modal
  },
};

Modal.setAppElement('#root');

const Adduser = ({ isOpen, onRequestClose, onSave }) => {
  const [name, setName] = useState(''); // State for Name
  const [email, setEmail] = useState(''); // State for Email

  const handleSave = () => {
    // Pass the name and email to the onSave callback
    onSave({ name, email });

    // Log the name and email to the console
    console.log('Name:', name);
    console.log('Email:', email);

    setName(''); // Clear the Name input
    setEmail(''); // Clear the Email input
  };

  return (
    <div className=''>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
        <div className='my-6 '>
          <div className='ml-4 text-2xl font-bold mb-6'>Add Users</div>
          <div className="mx-4">
            <form className="bg-white border border-gray-200 shadow-sm h-96 rounded p-4">
              <div className="mb-4">
                <label htmlFor="name" className="block my-2 font-medium text-gray-700  ">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input border border-gray-300 w-full"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block my-2 font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input border border-gray-300 w-full"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block my-2 font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-input border border-gray-300 w-full"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-20">
                <button
                  className={`bg-blue-500 hover-bg-blue-700 text-black font-bold py-2 px-4 rounded ${TwdButtonsConfig.hover}`}
                  type="button"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Adduser;
