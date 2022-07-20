import React from "react";
import { User } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { BsHeartFill } from "react-icons/bs";
import { HeartIcon } from "./HeartIcon";
import { FaComment } from "react-icons/fa";
const HomepagePosts = ({ img }) => {
  return (
    <div>
      <div className=" my-3">
        <User
          src="https://i.pravatar.cc/300"
          name="Ariana Wattson"
          description="UI/UX Designer @Github"
        />
      </div>
      <img className=" rounded-xl w-full sm:max-w-lg" src={img} alt="" />
      <div className=" flex space-x-2 mt-3">
        <div className="z-0  flex space-x-1 items-center">
          <Button
            auto
            color=""
            icon={<HeartIcon className=" text-xl" fill="currentColor" filled />}
          />
          <div className=" text-sm">21 Likes</div>
        </div>
        <div className=" z-0">
          <Button
            auto
            color=""
            icon={<FaComment className=" text-xl" fill="currentColor" filled />}
          />
        </div>
      </div>
    </div>
  );
};

export default HomepagePosts;
