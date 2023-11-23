import React from 'react';
// import { TiHome } from 'react-icons/ti';
import { PiUsersThreeFill } from 'react-icons/pi';
import { RiApps2Fill, RiSettings3Fill , RiLogoutBoxFill } from 'react-icons/ri';
import { TbBellFilled  } from "react-icons/tb";
import IconbarStyle from './IconbarStyle';
import { MdHome } from "react-icons/md";
import logo from './logo.png'

export const DASHBOARD_SIDEBAR_LINKS ={ 
    links: [
    {
      key: 'logo',
      icon: <img src={logo} alt="Logo" className={` ${IconbarStyle.LogoStyle}`} />, 
      path: '/',
    },
    {
        key: 'home',
        icon: <MdHome   className = {IconbarStyle.Style1} />,
        path: '/home'
        
    },
    {
        key: 'users',
        icon: <PiUsersThreeFill className = {IconbarStyle.Style1}/>, 
        path: '/users'
    },
    {
        key: 'apps',
        icon: <RiApps2Fill className = {IconbarStyle.Style1}/>,
        path: '/apps'
    },
    {
        key: 'settings',
        icon: <RiSettings3Fill  className = {IconbarStyle.Style1} />,
        path: '/settings'
        
    },
    {
        key: 'notifications',
        icon: <TbBellFilled  className = {IconbarStyle.Style2}/>,
        path: '/notifications'
    },
    {
        key: 'logout',
        icon: <RiLogoutBoxFill className = {IconbarStyle.Style3} />,
        path: '/logout'
    },
],
}
