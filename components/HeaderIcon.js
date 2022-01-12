import React from "react";

const HeaderIcon = ({ active,Icon }) => {
  return (
    <div className="flex group items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100  rounded-xl active:border-b-2 active:border-blue-500">
      <Icon
        className={`h-5 sm:h-7 mx-auto group-hover:text-blue-500 text-gray-500 ${active &&"text-blue-500"}`}
      />
    </div>
  );
};

export default HeaderIcon;
