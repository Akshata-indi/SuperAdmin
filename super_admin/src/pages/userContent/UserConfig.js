export const USERS_API = 'users';

export const ButtonContent = [
  {
    name: "",
    label: "Invite with email",
    type: "button",
    buttoncss: "hover1",
  },
  {
    name: "",
    label: "Upload CSV file",
    type: "button",
    buttoncss: "hover2",
  },

]

export const Button1 = [

  {
    name: "",
    label: "Cancel",
    type: "button",
    buttoncss: "hover4",
  }
];

export const inputs = [

  {

    label: "name",
    type: "text",
    placeholder: "Enter Full Name",
    textcss: "boxInput1"

  },
  {

    label: "email",
    type: "email",
    placeholder: "Enter Email Id",
    textcss: "boxInput1"

  },

  {

    label: "status",
    type: "text",
    placeholder: "Enter status",
    textcss: "boxInput1"

  },
];

export const tabledata = [
{
  name: "name",
  label: "name",
  dataType: "string",
  cssClass: "datastyle",
  clmncss : "headerdata"
},
{
  name: "email",
  label: "email",
  dataType: "string",
  cssClass: "datastyle",
  clmncss : "headerdata"
},
{
  name: "status",
  label: "Status",
  dataType: "string",
  cssClass: "datastyle",
  clmncss : "headerdata",
  
},
]  


export const drpdwncontent = [
  {
     drop_placeholder: "",
      drop_down_css: "style4"
      },
      {
        drop_item: "All",
        
      },
      {
        drop_item: "Active"
      },
      {
        drop_item: "Invited"
      },

    {
        drop_item: "Archived"
      },
  
]


export const modalContent = [

  {
    id: "modal",
    title: "Add Users",

    openButton: "Add Users",

    buttons: {
      create: "Invite Users",
      cancel: "Cancel"
    },
    modalcss: "style2"
  }
];

export default modalContent;



