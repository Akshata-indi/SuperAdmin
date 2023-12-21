import React, { useState } from 'react';
import StyleSearch from './StyleSearch';

const DynamicSearch = ({ data, searchKey, config }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    String(item[searchKey]).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className={StyleSearch[config.style]}
        placeholder={config.placeholder}
      />

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item[searchKey]}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicSearch;
