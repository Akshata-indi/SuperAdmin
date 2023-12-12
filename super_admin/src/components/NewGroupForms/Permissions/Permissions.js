import React from "react";
import PermissionsComponent from "./PermissionsComponent";
import permissionsData from './PermissionsConfig.json'

const Permissions = () => {
    return (
        <div>
            <PermissionsComponent items={permissionsData} />
        </div>
    )
}

export default Permissions;