import React, { useState, useEffect } from 'react';
import Adduser from './AddUser';
import CustomDropdown from '../../components/NewGroupForms/Drop Down Menu/CustomDropdown'
import dropDownData from '../NewGroupForms/Drop Down Menu/DropDown.json'
import SearchInputConfig from '../../configurations/search/SearchInputConfig.json'
import SearchableComp from '../../configurations/search/SearchableComp'
import TableComponent from '../../configurations/tables/TableComponent'
import { tableContent} from '../../configurations/tables/Tabledata'
// import TwdButtonsConfig from './TwdButtonsConfig';
// import DropDownContent from '../../configurations/dropDown/DropDownContent';
// import Modal from '../../ui-configs/Modal/Modal';
import modalContent from './jsonFiles/modalContent'
import FormModal from './modalForm/FormModal';

const Form = () => {

    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Load user data from localStorage on page load
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        if (storedUsers) {
            setUsers(storedUsers);
        }
    }, []);


    // const openAddUserModal = () => {
    //     setIsAddUserModalOpen(true);

    // };

    const closeAddUserModal = () => {
        setIsAddUserModalOpen(false);
    };

    // Function to save a new user
    const saveUser = (user) => {
        // Save the new user and update the state
        const updatedUsers = [...users, user];
        setUsers(updatedUsers);
        // Save the updated user data to localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setIsAddUserModalOpen(false); // Close the modal    after saving
    };

    // Function to delete a user
    const deleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1); // Remove the user at the specified index
        setUsers(updatedUsers);
        // Update the user data in localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };


    return (
        <div>
            {/* <div className="flex justify-end p-20 mr-20">
            <button>
            <Button configs = { ButtonContent} 
             />
            
            
            </button>
        </div> */}
            {/* <div className="flex justify-end p-4 mr-64 px-14  ">
                <button
                    className={` ${TwdButtonsConfig.primary}  `}
                    onClick={openAddUserModal}
                >
                    Add user
                </button>

            </div> */}
            <div className='btn-container mb-2 flex justify-end px-66 ml-96 my-8'>
                {/* <h3 className="text-xl mr-98 px-6 font-sans text-gray-600">3 Users</h3> */}
                {/* <Modal Config={roleModal}/> */}
              
            <FormModal Configs={modalContent} 
            
            
            />
            </div>

            <div className="flex items-center justify-center  ">
                <form className="bg-white border border-gray-200  shadow-md rounded">
                    <div className=' bg-gray-100 shadow-md h-[8vh]   '>
                      
                        <div className='flex justify-start '>
                            {/* <div className='flex justify-start'> */}
                            <CustomDropdown items={dropDownData} />
                           
                            <div className='flex justify-end ml-52'>
                            {/* <DropDownContent /> */}
                            <SearchableComp SearchConfig= {SearchInputConfig} />
                        </div>
                        </div>
                        
                    </div>
                    <div className="mt-4 ">
                        <TableComponent tableConfig={tableContent} />
                        {/* <tbody > */}
                            {users.map((user, index) => (
                                <tr key={index} className={`${index % 2 === 0}  `}>
                                    <td className=" px-16 py-2 border-t-2">{user.name}</td>
                                    <td className=" border-t-2">{user.email}</td>

                                    <td className=" px-28 border-t-2">
                                        <button
                                            onClick={() => deleteUser(index)}
                                            className="text-red-600 ml-40 px-4 border hover:bg-gray-300 rounded hover:text-red-800 cursor-pointer"
                                        >
                                            Archive
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        {/* </tbody> */}


                        {/* </table> */}
                    </div>
                </form >
            </div>

            <Adduser isOpen={isAddUserModalOpen} onRequestClose={closeAddUserModal} onSave={saveUser} />
        </div>
    )
}

export default Form