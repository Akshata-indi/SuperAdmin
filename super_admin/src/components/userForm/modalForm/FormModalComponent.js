// ModalComponent.js
import React, { useState } from 'react';
import FormModalstyle from './FormModalstyle'
import { Input } from '../../../ui-configs/input/Input';

import Button from '../../../ui-configs/Buttons/Button'
import { ButtonContent } from '../../../pages/userContent/UserConfig';

import { Button1 } from '../../../pages/userContent/UserConfig';
import EmailForm from './EmailForm';
import CsvForm from './CsvForm';
// import ButtonConfig from '../../../ui-configs/Buttons/ButtonConfig.json'

const FormModalComponent = ({ isOpen, onClose, config, onCreate }) => {
    const { overlay, overlayBackground, container, title, content, createbutton, cancel } = FormModalstyle[config.modalcss];
   

    const [activeForm, setActiveForm] = useState('form1')

    const handleToggleForm = (formName) => {
        setActiveForm(formName);
    };

    // const createButtonName = config.buttons && config.buttons.create ? config.buttons.create : 'Create';
    const cancelButtonName = config.buttons && config.buttons.cancel ? config.buttons.cancel : 'Cancel';

    return (
        <div>
            {isOpen && (
                <div className={overlay}>
                    {/* Semi-transparent overlay for background */}
                    <div className={overlayBackground}></div>

                    {/* ModalComponent container */}
                    <div className={container}>
                        <h2 className={title}>{config.title}</h2>
                        <p className={content}>{config.content}</p>
                    <div className='border-gray-200 border-2 mx-5 bg-gray-200 h-9.5 w-[94.5%] rounded-md'>
                        
                        <button 
          className={`hover:bg-white w-64 text-black px-16 py-2 rounded focus:outline-none focus:bg-white active:bg-white ${activeForm === 'form1' ? 'opacity-75' : ''}`}
          onClick={() => handleToggleForm('form1')}
        >
          {activeForm === 'form1' ? 'Invite with Email' : 'Invite with Email'}
        </button>    
                    
        <button
          className={`hover:bg-white w-64 text-black px-16 py-2 rounded focus:outline-none focus:bg-white active:bg-white ${activeForm === 'form1' ? 'opacity-75' : ''}`}
          onClick={() => handleToggleForm('form2')}
        >
          {activeForm === 'form2' ? 'Upload CSV file' : 'Upload CSV file'}
        </button>         
               </div>     


               {activeForm === 'form1' && (
        <EmailForm />
      )}
             {activeForm === 'form2' && (
      < CsvForm />
      )}       
                    
                       <button className={cancel} onClick={onClose}>
                                {cancelButtonName}
                            </button>

                        </div>
                    </div>
                
            )}
        </div>
    );
};

export default FormModalComponent;
