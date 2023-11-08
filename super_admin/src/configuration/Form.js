import React, { useState, useEffect } from 'react';
// import Search from './Search';
// import LandingConfig from '../../config-components/landing/LandingConfig';
import TwdButtonsConfig from './TwdButtonsConfig';
import Adduser from './Adduser';
// import Search from './Search';


const Form = () => {
    //   const buttonConfig = LandingConfig.default.Header1;
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Load user data from localStorage on page load
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        if (storedUsers) {
            setUsers(storedUsers);
        }
    }, []);

    const openAddUserModal = () => {
        setIsAddUserModalOpen(true);
    };

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
        setIsAddUserModalOpen(false); // Close the modal after saving
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
        <div >

            <div className="flex justify-end">
                <button
                    className={` ${TwdButtonsConfig.hover} mx-40 my-5`}
                    onClick={openAddUserModal}
                >
                    Add user
                </button>
            </div>
            <div className="flex items-center justify-center">
                <form className="bg-white basis-[73%] border border-gray-200 shadow-md rounded">
                    <div className=' bg-gray-100 shadow-sm h-[8vh]   '>
                        <div className="inline-block relative mx-12 my-3  w-56">
                            <select className="block appearance-none w-full bg-white   px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>All</option>
                                <option>Admin</option>
                                <option>All user</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        {/* <Search /> */}
                    </div>
                    {/* <div className="flex ml-96 items-end self-end my-4">
                <Search users={users} setFilteredUsers={setUsers} />
              </div> */}
                    {/* </div> */}
                    <div className="mt-4 p-4 bg-white rounded">
                        <div className="flex items-center">
                            <div className="flex-1">Name</div>
                            <div className="flex-1">Email</div>
                            <div className="flex-1">Actions</div>
                        </div>
                        {/* Table for displaying users */}
                        <table className="table-auto w-full mt-2">
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}>
                                        <td className="border px-4 py-2">{user.name}</td>
                                        <td className="border px-4 py-2">{user.email}</td>
                                        <td className="border px-4 py-2">
                                            <button
                                                onClick={() => deleteUser(index)}
                                                className="text-red-600 hover:text-red-800 cursor-pointer"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </form>
                {/* </div> */}
                <Adduser isOpen={isAddUserModalOpen} onRequestClose={closeAddUserModal} onSave={saveUser} />
            </div>
        </div>
    );
};

export default Form;
