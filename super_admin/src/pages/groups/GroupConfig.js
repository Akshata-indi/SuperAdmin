export const GROUP_API = 'groups';

export const tableContent = [
    {
        name: "groupId",
        label: "Group Id",
        dataType: "number",
        cssClass: "datastyle",
        clmncss: "style1"
    },
    {
        name: "groupName",
        label: "Group Name",
        dataType: "string",
        cssClass: "datastyle",
        clmncss: "style1"
    },
    {
        name: "groupDescription",
        label: "Description",
        dataType: "string",
        cssClass: "datastyle",
        clmncss: "style1"
    },


];

export const groupModal =
    [
        {
            "id": "modal",
            "title": "Add new Group",
            "content": "",

            "openButton": " + Create new Group",

            "buttons": {
                "create": " + Create",
                "cancel": "Cancel"
            },

            "modalcss": "style2"
        }
    ];

export const groupmodalData =
    [
        {
            "label": "groupName",
            "name": "groupName",
            "type": "text",
            "placeholder": "Enter Group Name",
            "textcss": "boxInput2"
        },
        {
            "label": "groupDescription",
            "name": "groupDescription",
            "type": "textarea",
            "placeholder": "Enter Description",
            "textcss": "boxInput2"
        }
    ]

export const dropDownData =
    [
        {
            "id": 1,
            "name": "Select apps to add to the group",
            "isDisabled": true
        },

        {
            "id": 2,
            "name": " Add",
            "isButton": true
        }
    ];


export const SearchInputConfig =
    [
        {

            "placeholder": "Search users by name ...",
            "style": "search1"
        }
    ];











