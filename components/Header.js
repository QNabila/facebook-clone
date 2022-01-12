import Image from "next/image";
import React from "react";
import { signOut, useSession } from 'next-auth/react';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlatIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  const { data: session, status } = useSession()


  return (
    <div className="sticky  z-50 bg-white flex items-center p-2 lg-px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt=""
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600"></SearchIcon>
          <input
            className="hidden md:inline-flex flex flex-shrink ml-2 items-center outline-none placeholder-gray-500 bg-transparent"
            type="text"
            placeholder="Search facebook"
          />
        </div>
      </div>
      {/* center */}
          <div className="flex justify-center flex-grow">
              <div className="flex space-x-6 md:space-x-2">
              <HeaderIcon active Icon={HomeIcon}/>
              <HeaderIcon Icon={FlagIcon}/>
              <HeaderIcon Icon={PlayIcon}/>
              <HeaderIcon Icon={ShoppingCartIcon}/>
              <HeaderIcon Icon={UserGroupIcon}/>
              </div>
        </div>
      {/* right */}
      <div className="flex items-center justify-end sm:space-x-2">
        {/* profile pic */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          alt="" />

        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon"/>
        <ChatIcon className="icon"/>
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon"/>
      </div>
    </div>
  );
};

export default Header;
