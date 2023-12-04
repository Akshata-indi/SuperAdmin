import React from 'react';
import EDropComponent from './EDropComponent';
import dropConfig from './DropConfig.json'; // Assuming the JSON file is correctly imported

const EDropdown = () => {
    return (
        <div>
            <EDropComponent configs={dropConfig.config} />
        </div>
    );
};

export default EDropdown;
