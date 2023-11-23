import React from 'react';
import ButtonConfig from './ButtonConfig.json';
import Button from './Button';

function CallingButton() {
    return (
        <div>
            <Button configs={ButtonConfig} />
        </div>
    );
}

export default CallingButton;



// import React from "react";
// import Button from "./ui-configs/Buttons/Button"
// import ButtonConfig from "./ButtonConfig";

// function CallingButton() {
//     return (
//         <div>
//             <Button configs={ButtonConfig} />
//         </div>
//     );
// }

// export default CallingButton;
