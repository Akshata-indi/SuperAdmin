import React, {useState} from 'react'

const CsvForm = () => {
    const [csvFile, setCsvFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setCsvFile(file);
      }
    };
  
    const handleUpload = () => {
      // Perform actions with the CSV file (e.g., send it to a server)
      if (csvFile) {
        // Add your logic here (e.g., send the file to the server)
        console.log('Uploading CSV file:', csvFile);
      }
    };
  
    const handleDownload = () => {
      // Dummy data for demonstration purposes
      const csvData = 'Name,Age,Location\nJohn,25,New York\nJane,30,San Francisco';
  
      // Create a Blob from the CSV data
      const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  
      // Create a temporary link element and trigger a click to download the file
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'sample.csv';
      link.click();
    };
  
    return (
      <form className="bg-white border h-[74vh] w-full  my-12 border-gray-200  rounded">
      <div className='mx-8 my-4 bg-red-100 text-center border-red-200 border-2 w-[88%] h-40  rounded-md'>
        <p> Download the template to add user details or format your file in the same way as the template. Files in any other format may not be recognized </p>
        </div>
      <div className=" mx-8 my-8 text-center border-blue-400 border-dashed border-2 w-[88%] h-72">
        <input
          type="file"
          accept=".csv"
          onClick={handleUpload}
          className=" px-4 py-2  text-black border-none rounded cursor-pointer"
        />
        <br />
        
       
  
        <button
          onClick={handleDownload}
          className="px-8 py-2 my-44 bg-gray-400  text-black  rounded cursor-pointer"
        >
          Download  CSV
        </button>
        
        
      </div> 
      </form>
      
    );
  };
  
  export default CsvForm;