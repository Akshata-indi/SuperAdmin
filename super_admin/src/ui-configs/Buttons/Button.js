import React from 'react';
import { ButtonConfig } from './ButtonConfig';

import ButtonComponent from './ButtonComponent';

function Button({ configs }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ButtonComponent configs={configs} />
        </div>
    );
}

export default Button;
