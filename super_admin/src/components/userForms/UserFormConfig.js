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
        path: '/',
        icon: <BiHome className="w-7 h-8 my-8  " />
    },
    {
        key: 'apps',
        
        path: '/apps',
        icon: <BiGridAlt className="w-7 h-8   " />
    },
    {
        key: 'users',
        
        path: '/users',
        icon: <BiGroup className="w-7 h-8 my-8  " />
    },
    {
        key: 'settings',
       
        path: '/settings',
        icon: <BiCog className="w-7 h-8 my-8  " />
        
    },
    {
        key: 'notifications',
       
        path: '/notifications',
        icon: <BiBell className="w-7 h-8  fixed bottom-20  text-black  " />
    },
    {
    key: 'notifications',
       
        path: '/notifications',
        icon: <BiLogOut className="w-7 h-8  fixed bottom-0  h-20  text-black  " />
    },
],
    
default: {
    submenus: [
      {
        label: 'Dashboard',
        url: '/directions/dashboard',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
        
      },
      {
        label: 'User',
        url: '/directions/user',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
      },
      {
        label: 'Chart',
        url: '/directions/chart',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
      },
      {
        label: 'Employee',
        url: '/directions/employee',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
      },
      {
        label: 'Activities',
        url: '/directions/activities',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
      },
      {
        label: 'Leads',
        url: '/directions/leads',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
      },
      {
        label: 'Lead Details',
        url: '/directions/leads details',
        classes: 'block text-black hover:text-blue-500 font-semibold px-6 mx-4',
      },
    ],
  
     
    
  },
}
    

