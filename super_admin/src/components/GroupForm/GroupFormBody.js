import React, { useState } from 'react';
import { Formik, Form } from 'formik';

const GroupFormBody = ({ groupName, users }) => {
  console.log('users:', users); // Added console.log here
  const initialValues = {
    groupName: groupName,
  };

  const [isAppsSectionVisible, setAppsSectionVisible] = useState(false);
  const [addedApps] = useState([]);
  const [isUsersSectionVisible, setUsersSectionVisible] = useState(false);
  const [isPermissionsSectionVisible, setPermissionsSectionVisible] = useState(false); // State for Permissions section
  const [isDatasourcesSectionVisible, setDatasourcesSectionVisible] = useState(false); // State for Datasources section
  const toggleAppsSection = () => {
    setAppsSectionVisible(!isAppsSectionVisible);
  };

  const toggleUsersSection = () => {
    setUsersSectionVisible(!isUsersSectionVisible);
  };
  const togglePermissionsSection = () => {
    setPermissionsSectionVisible(!isPermissionsSectionVisible); // Toggle Permissions section visibility
  };
  const toggleDatasourcesSection = () => {
    setDatasourcesSectionVisible(!isDatasourcesSectionVisible); // Toggle Datasources section visibility
  };
  console.log('isUsersSectionVisible:', isUsersSectionVisible); // Debugging output
  return (
    <Formik initialValues={initialValues}>
      {({ isSubmitting }) => (
        <Form className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <label htmlFor="groupName" className="block text-lg font-semibold">
              {initialValues.groupName}
            </label>
          </div>

          <div className="border-t border-gray-300 mb-4"></div>

          <div className="flex items-center mb-4">
            <h2
              className="text-lg font-semibold cursor-pointer mt-4"
              onClick={toggleAppsSection}
            >
              Apps
            </h2>
            <div className="flex-grow"></div>
            <h2
              className="text-lg font-semibold cursor-pointer mt-4"
              onClick={toggleUsersSection}
            >
              Users
            </h2>
            <div className="flex-grow"></div>
            <h2
              className="text-lg font-semibold cursor-pointer mt-4"
              onClick={togglePermissionsSection} // Add an onClick handler to toggle the Permissions section
            >
              Permissions
            </h2>
            <div className="flex-grow"></div>
            <div className="flex-grow"></div>
            <h2
              className="text-lg font-semibold cursor-pointer mt-4 mr-10"
              onClick={toggleDatasourcesSection} // Add an onClick handler to toggle the Datasources section
            >
              Datasources
            </h2>
            <div className="flex-grow"></div>
          </div>

          {isAppsSectionVisible && (
            <div className="mb-4">
              <div className="flex items-center">
                <div className="relative flex-grow mr-4">
                  <select
                    name="selectedApp"
                    id="selectedApp"
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    <option value="" disabled defaultValue>
                      Select apps to add to the group
                    </option>
                    {/* Add your dropdown options here */}
                  </select>
                  
                </div>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white p-2 rounded-md hover-bg-indigo-600"
                  disabled
                >
                  Add App
                </button>
              </div>

              <div className="text-sm font-semibold mt-4">
                <div className="flex">
                  <div className="flex-grow">App Name</div>
                  <div className="flex-grow">Permissions</div>
                </div>
              </div>

              {addedApps.length > 0 ? (
                addedApps.map((app, index) => (
                  <div key={index} className="flex mt-1 border-t border-gray-300 pt-1">
                    <div className="flex-grow text-sm">{app.appName}</div>
                    <div className="flex-grow text-sm">{app.permissions}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-center text-gray-500 mt-4 mb-4">
                  <div>
                    <div>No apps are added to the group</div>
                    <div>Add an app to the group to control permissions for users in this group</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {isPermissionsSectionVisible && (
    <div className="mb-4 p-4 rounded-md shadow-md">
    <div className="text-sm font-semibold">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="flex">
            <div className="flex-grow">Resource</div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex">
            <div className="flex-grow">Permissions</div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-1 border-t border-gray-300 pt-1">
      <div className="flex-grow text-sm">Apps</div>
      <div className="flex-grow">
        <input type="checkbox" id="createApp" name="createApp" />
        <label htmlFor="createApp" className="ml-2">Create</label>
      </div>
    </div>
    <div className="flex mt-1  border-gray-300 pt-1">
      <div className="flex-grow"></div>
      <div className="flex-grow ml-8"> {/* Move Delete Checkbox to the right */}
        <input type="checkbox" id="deleteApp" name="deleteApp" />
        <label htmlFor="deleteApp" className="ml-2">Delete</label>
      </div>
    </div>

    <div className="flex mt-1 border-t border-gray-300 pt-1">
    <div className="flex-grow text-sm">Folder</div>
    <div className="flex-grow ml-10">
    <div className="ml-16">
      <input type="checkbox" id="folderActions" name="folderActions" />
      <label htmlFor="folderActions" className="ml-2">Create/Update/Delete</label>
    </div>
    </div>
    </div>
    <div className="flex mt-1 border-t border-gray-300 pt-1">
    <div className="flex-grow text-sm">Workspace Variables</div>
    <div className="flex-grow mr-8">
    <div className="ml-12">
      <input type="checkbox" id="workspaceVarActions" name="workspaceVarActions" />
      <label htmlFor="workspaceVarActions" className="ml-2">Create/Update/Delete</label>
    </div>
    </div>
    </div>

    <div className="flex mt-1 border-t border-gray-300 pt-1">
    <div className="flex-grow text-sm">Datasources</div>
    <div className="flex-grow mr-20">
    <div className="ml-8">
      <input type="checkbox" id="createDatasources" name="createDatasources" />
      <label htmlFor="createDatasources" className="ml-2">Create</label>
    </div>
    <div className="ml-8"> {/* Move Delete Checkbox to the right */}
      <input type="checkbox" id="deleteDatasources" name="deleteDatasources" />
      <label htmlFor="deleteDatasources" className="ml-2">Delete</label>
    </div>
    </div>
    </div>

    </div>
)}


{isDatasourcesSectionVisible && (
  <>
    <div className="flex mt-1 border-t border-gray-300 pt-1">
      <div className="w-2/3 pr-2">
        <select
          name="selectedDatasources"
          id="selectedDatasources"
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="" disabled defaultValue>
            Select Data Sources to add to the group
          </option>
          {/* Add your dropdown options here */}
        </select>
      </div>
      <div className="w-1/3">
        <button className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600">
          Add
        </button>
      </div>
    </div>
    <div className="flex mt-4 border-t border-gray-300 pt-4"> {/* Added 'mt-4' for spacing */}
      <div className="w-2/3 pr-2">
        <div className="text-sm">Datasources Name</div>
      </div>
      <div className="w-1/3">
        <div className="text-sm">Permissions</div>
      </div>
    </div>
  </>
)}




        </Form>
      )}
    </Formik>
  );
};

export default GroupFormBody;
