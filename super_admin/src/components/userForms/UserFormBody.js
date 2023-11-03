import React from 'react'
import LogoConfig from '../../configuration/LogoConfig';
import Form from '../../configuration/Form';
import Sidebar from '../../configuration/Sidebar';
import { DASHBOARD_SIDEBAR_LINKS } from './UserFormConfig';

const UserFormBody = () => {


    return (
        <div>
            <div className='flex flex-row'>
                <div className='basis-[4%] h-[100vh] '>
                    <div >
                        <LogoConfig />
                    </div>

                    <Sidebar />

                </div>
                <div className='basis-[18%] border '>
                    <h1 className='font-bold mx-4 my-2 text-[20px]'> Workplace Settings</h1>
                    {/* <div className='m'> */}
                        <nav>
                            {DASHBOARD_SIDEBAR_LINKS.default.submenus.map((submenus) => (
                                <a key={submenus.url} href={submenus.url} className={submenus.classes}>
                                    {submenus.label}
                                </a>
                            ))}
                        </nav>
                    {/* </div> */}
                </div>
                <div className='basis-[78%]  shadow-sm h-[10vh] border  '>
                    <h1 className='mx-8 my-5'> Applications/Users</h1>
                    <Form />
                </div>
                <div>

                </div>
            </div>

        </div>
    );
}

export default UserFormBody