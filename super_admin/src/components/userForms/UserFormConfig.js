import {
    BiHome,
    BiGridAlt,
    BiGroup,
    BiCog,
    BiBell,
    BiLogOut

} from 'react-icons/bi'


export const DASHBOARD_SIDEBAR_LINKS ={ 
    links: [
    {
        key: 'home',
        icon: <BiHome className="w-7 h-7 my-8 text-gray-500 " />
    },
    {
        key: 'apps',
        icon: <BiGridAlt className="w-7 h-7 text-gray-500  " />
    },
    {
        key: 'users',
        icon: <BiGroup className="w-7 h-7 my-8 text-gray-500 " />
    },
    {
        key: 'settings',
        icon: <BiCog className="w-7 h-7 my-8 text-gray-500 " />
        
    },
    {
        key: 'notifications',
        icon: <BiBell className="w-7 h-8  fixed bottom-16  text-gray-400  " />
    },
    {
        key: 'notifications',
        icon: <BiLogOut className="w-7 h-8  fixed bottom-4 text-gray-400  " />
    },
],
    
default: {
    submenus: [
      {
        label: 'Users',
        classes: ' text-black hover:text-blue-500 font-normal mx-4  ',
        
      },
      {
        label: 'Groups',
        classes: 'block text-black hover:text-blue-500 font-normal my-2 mx-4',
       
      },
      {
        label: 'Roles',
        classes: 'block text-black hover:text-blue-500 font-normal my-2 mx-4',
      },
      {
        label: 'Policies',
        classes: 'block text-black hover:text-blue-500 font-normal my-2 mx-4',
      },
      {
        label: 'Settings',
        classes: 'block text-black hover:text-blue-500 font-normal my-2 mx-4',
      },
      {
        label: 'Apps',
        classes: 'block text-black hover:text-blue-500 font-normal my-2 mx-4',
      },
      
    ],
  
     
    
  },
}
    

