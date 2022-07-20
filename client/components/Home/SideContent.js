import React from "react";
import { User } from "@nextui-org/react";
const SideContent = () => {
  return (
    <div>
      <div className=" hidden ml-5 lg:block  ">
        <div>
          <User src="https://i.pravatar.cc/150" name="Ariana Wattson" size="lg">
            <User.Link href="https://nextui.org/">@watsonari</User.Link>
          </User>
        </div>
        <div className=" mt-16 ml-2 text-sm text-gray-300 font-medium   ">
          Suggestions for you
        </div>
        <div className=" mt-5 space-y-3">
          <div className=" flex justify-between">
            <User
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              name="Ariana Wattson"
              description="UI/UX Designer @Github"
            />
            <button className=" text-sm text-indigo-400 font-medium">
              Follow
            </button>
          </div>
          <div className=" flex justify-between">
            <User
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              name="Ariana Wattson"
              description="UI/UX Designer @Github"
            />
            <button className=" text-sm text-indigo-400 font-medium">
              Follow
            </button>
          </div>
          <div className=" flex justify-between">
            <User
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              name="Ariana Wattson"
              description="UI/UX Designer @Github"
            />
            <button className=" text-sm text-indigo-400 font-medium">
              Follow
            </button>
          </div>
        </div>
        <div className=" text-xs max-w-[300px] text-gray-400 mt-5 ml-2 ">
          2022 NeoShare is a platform for sharing and discussing ideas and
          projects.
        </div>
        <div className=" text-xs max-w-[300px] text-gray-400 mt-3 ml-2 ">
          Made by{" "}
          <span className=" font-bold text-gray-300 cursor-pointer">
            @pawan67
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
