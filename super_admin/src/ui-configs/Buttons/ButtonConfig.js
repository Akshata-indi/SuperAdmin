import React from 'react';
import { FaCheck, FaUndo, FaAmilia, FaAtom } from 'react-icons/fa'; // Import necessary icons

const iconComponents = {
    FaCheck: () => <FaCheck />,
    FaUndo: () => <FaUndo />,
    FaAmilia: () => <FaAmilia />,
    FaAtom: () => <FaAtom />, // Added a new icon component for the 'FaAtom' icon
    // Add more icons if needed
};

const ButtonConfig = [
    {
        name: 'submitButton',
        label: 'Submit',
        type: 'button',
        buttoncss: 'Primary',
        icon: {
            component: 'FaCheck',
            position: 'left',
            render: () => {
                const IconComponent = iconComponents['FaCheck'];
                return <IconComponent />;
            },
        },
    },
    {
        name: 'helloButton', // Changed the button name to 'helloButton'
        label: 'Hello',
        type: 'button',
        buttoncss: 'Secondary',
        icon: {
            component: 'FaAmilia', // Corrected the icon name to 'FaAmilia'
            position: 'left', // Positioned to the right
            render: () => {
                const IconComponent = iconComponents['FaAmilia'];
                return <IconComponent />;
            },
        },
    },
    {
        name: 'sourabhButton', // Changed the button name to 'helloButton'
        label: 'Hello Sourabh',
        type: 'button',
        buttoncss: 'Primary',
        icon: {
            component: 'FaAtom', // Corrected the icon name to 'FaAmilia'
            // position: 'left', // Positioned to the right
            render: () => {
                const IconComponent = iconComponents['FaAtom'];
                return <IconComponent />;
            },
        },
    },
    {
        name: 'resetButton',
        label: 'Reset',
        type: 'button',
        buttoncss: 'Secondary',
        icon: {
            component: 'FaUndo',
            position: 'left',
            render: () => {
                const IconComponent = iconComponents['FaUndo'];
                return <IconComponent />;
            },
        },
    },
];

export { ButtonConfig, iconComponents };
