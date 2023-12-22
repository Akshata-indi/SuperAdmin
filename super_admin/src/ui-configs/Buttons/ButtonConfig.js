import React from 'react';
import { FaCheck, FaUndo, FaAmilia, FaAtom } from 'react-icons/fa'; // Import necessary icons

const iconComponents = {
    FaCheck: () => <FaCheck />,
    // FaUndo: () => <FaUndo />,
    // FaAmilia: () => <FaAmilia />,
    // FaAtom: () => <FaAtom />, // Added a new icon component for the 'FaAtom' icon
    // Add more icons if needed
};

const ButtonConfig = [
    {
        name: 'submitButton',
        label: 'Submit',
        type: 'button',
        buttoncss: 'Primary',
        icon: {
            component: <FaCheck/>,
            position: 'right',
            render: () => {
                const IconComponent = iconComponents['FaCheck'];
                return <IconComponent />;
            },
        },
    },
    
];

export { ButtonConfig, iconComponents };
