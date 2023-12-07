import React from 'react';
import { ButtonConfig } from './ButtonConfig'; // Import named export 'ButtonConfig' (not default export)

import ButtonComponent from './ButtonComponent';

function Button() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ButtonComponent configs={ButtonConfig} />
        </div>
    );
}

export default Button;
