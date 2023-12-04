// ModalComponent.js
import React from 'react';
import FormModalstyle from './FormModalstyle'
import { Input } from '../../../ui-configs/input/Input';
import Example from '../../../ui-configs/input/Example';
import Button from '../../../ui-configs/Buttons/Button'
import ButtonContent from '../../../components/userForm/jsonFiles/ButtonContent.json'
// import ButtonConfig from '../../../ui-configs/Buttons/ButtonConfig.json'

const FormModalComponent = ({ isOpen, onClose, config, onCreate }) => {
    const { overlay, overlayBackground, container, title, content, createbutton, cancel } = FormModalstyle[config.modalcss];

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

                        
                          
                            <Button configs={ButtonContent} />
                                {/* hhgyh */}
                            
                      
                        <div className='mt-32 '>
                        <Input inputConfigs={Example} />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button className={cancel} onClick={onClose}>
                                {cancelButtonName}
                            </button>

                            {/* <button className={createbutton} onClick={onCreate}>
                                {createButtonName}
                            </button> */}


                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormModalComponent;
