import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import { IoLogoFlickr } from "react-icons/io";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdAddPhotoAlternate } from "react-icons/md";

const Header = () => {
  return (
    <div className=" fixed bg-black/10 backdrop-blur-lg z-50 top-0 left-0 right-0 ">
      <div className=" max-w-screen-md px-5 flex items-center py-4  sm:py-4 justify-between   mx-auto z-[1000]">
        <div className=" flex items-center ">
          <Button
            auto
            color=""
            icon={
              <IoLogoFlickr className=" text-4xl" fill="currentColor" filled />
            }
          />
          <div className=" sm:text-xl font-semibold">NeoShare</div>
        </div>
        <div className=" flex items-center ">
          <Button
            auto
            color=""
            icon={
              <RiHomeSmile2Fill
                className=" text-2xl"
                fill="currentColor"
                filled
              />
            }
          />
          <Button
            auto
            color=""
            icon={
              <MdAddPhotoAlternate
                className=" text-2xl"
                fill="currentColor"
                filled
              />
            }
          />
          <Avatar
            className=" ml-1"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="sm"
            color="gradient"
            bordered
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
