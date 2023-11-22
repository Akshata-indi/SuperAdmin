import React from 'react';
// import DropDownComponent from './DropDownComponent';
import CustomDropdown from './CustomDropdown'; // Ensure this import statement exists
import dropDownData from './DropDown.json';

const DropDown = () => {
    return (
        <div>
            {/* <DropDownComponent items={dropDownData} dropdownCss="newStyle4" /> */}
            <CustomDropdown items={dropDownData} />
        </div>
    );
};

export default DropDown;
