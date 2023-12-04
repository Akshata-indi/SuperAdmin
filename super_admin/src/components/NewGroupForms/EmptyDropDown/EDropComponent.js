import React, { useState, useEffect } from 'react';
import EDropStyles from '../EmptyDropDown/EDropStyles';

const EDropComponent = ({ configs }) => {
    const [options, setOptions] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState('');
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        const allItems = configs.map((config) => config.drop_item);
        setOptions(allItems);

        if (configs.length > 0) {
            if (configs[0].drop_down_css && !selectedStyle) {
                setSelectedStyle(configs[0].drop_down_css);
            }

            if (placeholder === '') {
                setPlaceholder(configs[0].drop_placeholder);
            }
        }
    }, [configs, selectedStyle, placeholder]);

    const handleChange = (e) => {
        // Handle dropdown change event if needed
    };

    return (
        <select className={EDropStyles[selectedStyle]} onChange={handleChange} defaultValue="">
            <option value="" disabled hidden>{placeholder}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default EDropComponent;
