import React from 'react';
import dropDownStyles from './DropDownStyle';

const DropDownComponent = ({ items = [], dropdownCss }) => {

    return (


        <div className={dropDownStyles.dropdownContainer}>
            <ul className={dropDownStyles.dropdownList} >
                {items.map(item => (
                    <li key={item.id} className={dropDownStyles[dropdownCss]}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownComponent;