// Component file
import React from 'react';
import permissionsConfig from './PermissionsConfig.json';
import permissionsStyle from './PermissionsStyles';

const PermissionItem = ({ permissionKey, permissionValue }) => (

    <td>
        <td><input type="checkbox" /></td>
        <td>{permissionKey}</td>
        <td>{permissionValue}</td>
    </td>
);


//  Another type of horizontal checkbox

// <input type="checkbox" />
// <label htmlFor={permissionKey}>{permissionKey}</label> */}

//Vertical Checkbox which are column like structure
// <tr>
//     <td><input type="checkbox" /></td>
//     <td>{permissionKey}</td>
//     <td>{permissionValue}</td>
// </tr>

const PermissionsComponent = () => {
    const { permissions } = permissionsConfig;

    return (
        <div className={permissionsStyle.permissionsContainer}>
            <table className={permissionsStyle.permissionsTable}>
                <thead>
                    <tr>
                        {/* Resource Type column */}
                        <th className={`${permissionsStyle.permissionsHeader} ${permissionsStyle.resourceTypeHeader}`}>
                        </th>
                        {/* Permissions columns */}
                        <th className={`${permissionsStyle.permissionsHeader}`}>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {permissions.map((resource, index) => (
                        <tr key={index}>
                            {/* Render Resource Type */}
                            <td className={`${permissionsStyle.resourceTypeHeader}`}>
                                {resource.resourceType}
                            </td>
                            {/* Render Permissions */}
                            <td>
                                {renderPermissions(resource.permissions)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const renderPermissions = (permissionObj) => {
    return (
        Object.entries(permissionObj).map(([permission, status]) => (
            <PermissionItem
                key={permission}
                permissionKey={permission}
                permissionValue={status}
            />
        ))
    );
};

export default PermissionsComponent;
