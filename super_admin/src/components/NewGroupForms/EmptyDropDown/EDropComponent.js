import React from 'react'; // Assuming React is being used
import EDropStyles from './EDropStyles';

const EDropComponent = ({ configs }) => {
    const handleChange = (e) => {
        // Handle dropdown change event if needed
    };

    return (
        <select className={EDropStyles[configs[0].drop_down_css]} onChange={handleChange} defaultValue="">
            {/* Render placeholder if drop_placeholder is available */}
            {configs[0].drop_placeholder && (
                <option value="" disabled hidden>
                    {configs[0].drop_placeholder}
                </option>
            )}

            {/* Render first drop_item */}
            {configs[0].drop_item && (
                <option value={configs[0].drop_item}>
                    {configs[0].drop_item}
                </option>
            )}

            {/* Map through configs directly to create remaining dropdown options */}
            {configs.slice(1).map((config, index) => {
                if (config.drop_item !== undefined) {
                    return (
                        <option key={index} value={config.drop_item}>
                            {config.drop_item}
                        </option>
                    );
                }
                return null; // Or handle a default case here
            })}
        </select>
    );
};

export default EDropComponent;
