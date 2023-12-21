const formModalStyles = {
    style1: {
    overlay: 'fixed inset-0 flex items-center justify-center z-20',
    overlayBackground: 'ModalComponent-overlay fixed inset-0 bg-black opacity-10',
    container: 'ModalComponent-container bg-white p-10 W-96 rounded-lg shadow-md relative z-10',
    title: 'text-xl font-semibold p-2 mb-1',
    content: 'text-gray-600',
    createbutton: 'px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600',
    closeButton:'px-4 py-2 text-black bg-white rounded-md border-2 hover:bg-gray-300'
  },

  style2: {
    overlay: 'fixed inset-0 flex items-center justify-center z-20',
    overlayBackground: 'ModalComponent-overlay fixed inset-0 bg-black opacity-10',
    container: 'ModalComponent-container w-80 bg-white p-4 shadow-md z-10', // Adjust width here
    title: 'text-xl font-semibold p-2 mb-1',
    content: 'text-gray-600',
    createbutton: 'px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600',
    closeButton: 'px-4 py-2 text-black bg-white rounded-md border-2 hover:bg-gray-300'
  },
  // Add more styles as needed
};
  
  export default formModalStyles;
  