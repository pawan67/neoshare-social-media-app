import React from "react";
import { Avatar, Grid } from "@nextui-org/react";
const TopStoryUsers = () => {
  return (
    <div className=" z-[10] bg-white/10 p-3 max-w-lg rounded-xl  flex space-x-3 mb-5 ">
      <Avatar
        style={{ zIndex: 0 }}
        size="lg"
        src="https://i.pravatar.cc/300"
        color="gradient"
        bordered
      />
      <Avatar
        style={{ zIndex: 0 }}
        size="lg"
        src="https://i.pravatar.cc/300"
        color="gradient"
        bordered
      />
      <Avatar
        style={{ zIndex: 0 }}
        size="lg"
        src="https://i.pravatar.cc/300"
        color="gradient"
        bordered
      />
      <Avatar
        style={{ zIndex: 0 }}
        size="lg"
        src="https://i.pravatar.cc/300"
        color="gradient"
        bordered
      />
    </div>
  );
};

export default TopStoryUsers;
