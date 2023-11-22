import React from 'react';
import dropDownStyles from './DropDownStyle'; // Import the new dropDownStyles

const CustomDropdown = () => {
    return (
        <div className="flex items-center">
            <div className={`relative flex-initial w-96 mr-4 ${dropDownStyles.select.border}`}>
                <select
                    name="selectedApp"
                    id="selectedApp"
                    className={`${dropDownStyles.select.base} ${dropDownStyles.select.placeholder}`}
                >
                    <option value="" disabled defaultValue>
                        Select apps to add to the group
                    </option>
                </select>
            </div>
            <button type="button" className={dropDownStyles.addButton.base}>
                Add App
            </button>
        </div>
    );
};

export default CustomDropdown;
