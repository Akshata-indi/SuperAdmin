import React, { useState, useEffect } from 'react';
import LogoConfig from '../../configuration/LogoConfig';
import Form from '../../configuration/Form';
import Sidebar from '../../configuration/Sidebar';
import { DASHBOARD_SIDEBAR_LINKS } from './UserFormConfig';
import { Link } from 'react-router-dom';

const UserFormBody = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        // Check local storage for the visibility state and set it if available
        const storedVisibility = localStorage.getItem('isFormVisible');
        if (storedVisibility === 'true') {
            setIsFormVisible(true);
        }
    }, []);   

    const toggleForm = () => {
        const newVisibility = !isFormVisible;
        setIsFormVisible(newVisibility);

        // Store the visibility state in local storage
        localStorage.setItem('isFormVisible', newVisibility.toString());
    };

    return (
        <div>
            <div className='flex flex-row'>
                <div className='basis-[4%] h-[100vh] '>
                    <LogoConfig />
                    <Sidebar />
                </div>
                <div className='basis-[18%] border '>
                    <h1 className='font-semibold mx-4 my-4 text-[20px]'> Workplace Settings</h1>
                    <div className='my-9'>
                        <nav>
                            {DASHBOARD_SIDEBAR_LINKS.default.submenus.map((submenus) => (
                                <Link
                                    className={submenus.classes}
                                    onClick={() => submenus.label === 'Users' && toggleForm(true)}
                                >
                                    {submenus.label}
                                </Link>
                            ))}
                        </nav>
                 </div>
                </div>
                <div className='basis-[78%]  shadow-sm h-[10vh] border  '>
                    <h1 className='mx-8 my-5'> Applications/Users</h1>
                    {isFormVisible && <Form />}
                </div>
            </div>
        </div>
    );
}

export default UserFormBody;
