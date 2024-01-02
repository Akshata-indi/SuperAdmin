import { GoHomeFill } from "react-icons/go";
import { MdGroups } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import IconStyle from './IconbarStyle';


export const DASHBOARD_ICONBAR_LINKS ={ 
    links: [
    {
        key: 'home',
        path:"home",
        icon: <GoHomeFill className={IconStyle.style1}/>
    },
    {
        key: 'team',
        path:"team",
        icon: <MdGroups className={IconStyle.style1} />
    },
    {
        key: 'apps',
        path:"apps",
        icon: <RiApps2Fill className={IconStyle.style1} />
    },
    {
        key: 'settings',
        path:"settings",
        icon: <RiSettings3Fill className={IconStyle.style1} />
        
    },

    ],
    footerIcon : [
    {
        key: 'notifications',
        path:"/",
        icon: <IoNotifications className={IconStyle.style1} />
    },
    {
        key: 'logout',
        path:"/logout",
        icon: <RiLogoutBoxFill className={IconStyle.style1} />
    },
],
    

}
    

