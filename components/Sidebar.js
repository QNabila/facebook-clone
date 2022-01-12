import React from 'react';
import { useSession } from 'next-auth/react';
import SidebarRow from './SidebarRow'
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
  } from "@heroicons/react/solid";
  import {
    ChevronDownICon,
    ShoppingBagIcon,
    UserGroupIcon,s
} from "@heroicons/react/outline";

const Sidebar = () => {
    const { data: session, status } = useSession();

    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src={session.user.image} title={session.user.name}/>
            <SidebarRow Icon={UsersIcon} title="Freinds"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownICon} title="See More"/>
            
        </div>
    );
};

export default Sidebar;