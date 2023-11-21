import React from 'react';
import { TiHome } from 'react-icons/ti';
import { PiUsersThreeFill } from 'react-icons/pi';
import { RiApps2Fill, RiSettings4Fill, RiLogoutBoxFill } from 'react-icons/ri';
import { GoBellFill } from "react-icons/go";
import IconbarStyle from './IconbarStyle';

export const DASHBOARD_SIDEBAR_LINKS ={ 
    links: [
    {
        key: 'home',
        icon: <TiHome className = {IconbarStyle.Style1} />,
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
        icon: <RiSettings4Fill className = {IconbarStyle.Style1} />,
        path: '/settings'
        
    },
    {
        key: 'notifications',
        icon: <GoBellFill className = {IconbarStyle.Style2}/>,
        path: '/notifications'
    },
    {
        key: 'logout',
        icon: <RiLogoutBoxFill className = {IconbarStyle.Style3} />,
        path: '/logout'
    },
],
}
