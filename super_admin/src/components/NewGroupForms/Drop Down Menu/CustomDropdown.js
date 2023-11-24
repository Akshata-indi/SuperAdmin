import React from 'react';
import dropDownStyles from './DropDownStyle';
import dropDownData from './DropDown.json';

const CustomDropdown = () => {
    const options = dropDownData
        .filter(item => !item.isButton) // Exclude the "Add App" item
        .map(item => {
            return (
                <option
                    key={item.id}
                    value={item.name}
                    disabled={item.isDisabled}
                >
                    {item.name}
                </option>
            );
        });

    const addButtonLabel = dropDownData.find(item => item.isButton).name;

    return (
        <div className="flex items-center">
            <div className={`relative flex-initial w-96 mr-4 ${dropDownStyles.select.border}`}>
                <select
                    name="selectedApp"
                    id="selectedApp"
                    className={`${dropDownStyles.select.base} ${dropDownStyles.select.placeholder}`}
                >
                    {options}
                </select>
            </div>
            <button type="button" className={dropDownStyles.addButton.base}>
                {addButtonLabel}
            </button>
        </div>
    );
};

export default CustomDropdown;
