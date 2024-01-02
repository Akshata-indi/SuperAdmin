export const ROLE_API = 'roles';

export const tableContent = [
    {
        name: "id",
        label: "Role Id",
        dataType: "number",
        cssClass: "datastyle",
        clmncss : "style1"
    },
    {
        name: "roleName",
        label: "Role Name",
        dataType: "string",
        cssClass: "datastyle",
        clmncss : "style1"
    },
    {
        name: "roleDescription",
        label: "Description",
        dataType: "string",
        cssClass: "datastyle",
        clmncss : "style1"
    },
    
    
  ];

  export const roleModal =
  [
    {
      "id": "modal",
      "title": "Add new Role",
      "content": "",
    
      "openButton": " + Create new Role",
  
      "buttons": {
        "create": " + Create",
        "cancel": "Cancel"
      },
  
      "modalcss": "style2" 
    }    
  ];


  export const rolemodalData = 
  [
    {
    "label": "roleName",

    "name": "roleName",

    "type": "text",
    
    "placeholder": "Enter Role Name",
    
    "textcss": "boxInput2"   
    },

    {
    "label": "roleDescription",

    "name": "roleDescription",
    
    "type": "textarea",
        
    "placeholder": "Enter Description",
        
    "textcss": "boxInput2"   
    }
    

];

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
   
    "placeholder" : "Search users by name ...",
    "style" : "search1"
  }
  ];
  





2