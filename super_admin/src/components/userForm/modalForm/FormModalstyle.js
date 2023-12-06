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
    style2: {
      overlay: 'fixed inset-0 flex items-center justify-end z-50 ',
      overlayBackground: 'fixed inset-0 bg-black opacity-60',
      container: 'bg-white rounded-sm text-sm w-[34%] h-full font-normal  shadow-sm relative  ',
      title: 'text-xl my-8 mx-10 font-normal',
      createbutton: 'px-8 py-2 text-white bg-blue-500 rounded-md border-2 hover:bg-blue-600 fixed bottom-0 right-0 mb-4 mr-6',
      cancel:'px-6 py-2 text-black  bg-white rounded-md border-2 hover:bg-gray-300 fixed bottom-0 right-4 mb-4 mr-40'
    },

    
  };
  
  export default modalStyles;