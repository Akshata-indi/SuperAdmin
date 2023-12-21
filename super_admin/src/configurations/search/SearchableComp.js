import React from 'react';
import DynamicSearch from './DynamicSearch'; // Adjust the path based on your file structure


const SearchableComp = ({SearchConfig, data }) => {
//  const data = [
//     { name: 'John Doe', email: 'aa@gmail.com',  },
//     { name: 'Jane Smith', email: 'aa@gmail.com' },
//     {  name: 'Bob Johnson',  email: 'aa@gmail.com'},
//     { name: 'Bob Johnson',  email: 'aa@gmail.com'},
//     {  name: 'Bob Johnson hgghh', email: 'aa@gmail.com' },
//   ]; 

  return (
    <div>
     
      <DynamicSearch data={data} searchKey="name" config={SearchConfig}  />
    </div>
  );
};

export default SearchableComp;
