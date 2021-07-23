import React from 'react';

import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as TiIcons from 'react-icons/ti'


export const NavBarData = [
    {
        title: 'Overview',
        path: '/Overview',
        icon: <GrIcons.GrOverview/>,
        cName: 'nav-text'
    },
    {
        title: 'Front Office',
        path: '/FrontOffice',
        icon: <GiIcons.GiDesk/>,
        cName: 'nav-text'
    },
    {
        title: 'Rooms',
        path: '/RoomMgt',
        icon: <BiIcons.BiDoorOpen/>,
        cName: 'nav-text'
    },
    {
        title: 'Guests',
        path: '/GuestMgt',
        icon: <BsIcons.BsFillPersonLinesFill/>,
        cName: 'nav-text'
    },
    {
        title: 'POS',
        path: '/POS',
        icon: <TiIcons.TiPrinter/>,
        cName: 'nav-text'
    },
    {
        title: 'Back Office',
        path: '/BackOffice',
        icon: <GrIcons.GrSettingsOption/>,
        cName: 'nav-text'
    },
   
]