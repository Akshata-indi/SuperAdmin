import React from 'react';
import { BiHome, BiGridAlt, BiGroup, BiCog, BiBell } from 'react-icons/bi';

export const menudata = [
  {
    id: 1,
    name: "Profile",
    link: "Profile",
    icon: <BiHome />,
    navcss: "style6",
  },
  {
    id: 2,
    name: "Apps",
    link: "Apps",
    navcss: "style6",
    icon: <BiGridAlt />
  },
  {
    id: 3,
    name: "Policy",
    link: "Policy",
    navcss: "style6",
    icon: <BiGroup />
  },
  {
    id: 4,
    name: "Groups",
    link: "Groups",
    navcss: "style6",
    icon: <BiCog />
  },
  {
    id: 5,
    name: "Roles",
    link: "Roles",
    navcss: "style6",
    icon: <BiBell />
  }
];

  

  export const sidedata = [
    {
      label: "usha",
      url: "Role",
      cssClass: "style5"
    },
    {
      label: "jhon",
      url: "Role",
      cssClass: "style5"
    },
    {
        label: "shashank",
        url: "Role",
        cssClass: "style5"
      }
  ];
  
  export const searchdata = [
  
  
    {  
    placeholder : "Search users ",
    style : "search1"
    }
  
  ]

  export const userdata = [
    {
      name: "name",
      label: "Basic Details",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "userdata"
    },
    {
      name: "email",
      label: "",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "userdata"
    }
    
  ]

  export const appdata = [
    {
      name: "name",
      label: "App Id",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "email",
      label: "App Name",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "name",
      label: "App Description",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    }
    
  ]

  export const policydata = [
    {
      name: "name",
      label: "Policy Id",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "email",
      label: "Policy Name",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "name",
      label: "Policy Description",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "name",
      label: "Apps",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    }
    
  ]

  export const groupdata = [
    {
      name: "name",
      label: "Group Id",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "email",
      label: "Group Name",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
  ]

  export const roledata = [
    {
      name: "name",
      label: "Role Id",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "email",
      label: "Role Name",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    },
    {
      name: "name",
      label: "App",
      dataType: "string",
      cssClass: "datastyle",
      clmncss : "appdata"
    }
  ]

  export const Tdata = [
    {
      name: "name",
      label: "",
      dataType: "string",
      // cssClass: "style",
      // clmncss : "headerdata"
    }
  ]