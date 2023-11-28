const modalStyles = {
  style1: {
    overlay: 'fixed inset-0 flex items-center justify-center z-50',
    overlayBackground: 'ModalComponent-overlay fixed inset-0 bg-black opacity-40',
    container: 'ModalComponent-container bg-white p-10 rounded-lg shadow-md relative z-10',
    title: 'text-xl font-semibold mb-2',
    content: 'text-gray-600',
    createbutton: 'px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600',
    cancelButton:'px-4 py-2 text-black bg-white rounded-md border-2 hover:bg-gray-300'
  },
  // Add more styles as needed
};

export default modalStyles;