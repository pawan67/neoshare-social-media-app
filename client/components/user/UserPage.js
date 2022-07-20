import { Avatar, Button, User } from "@nextui-org/react";
import React from "react";
import StandardImageList from "./ImageList";

const UserPage = () => {
  return (
    <div>
      <div>
        <User
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          name="Ariana Wattson"
          size="xl"
        >
          <User.Link href="https://nextui.org/">@watsonari</User.Link>
        </User>
        <div className=" flex space-x-3 mt-5">
          <Button flat color="primary" auto>
            Message
          </Button>
          <Button flat color="secondary" auto>
            Follow
          </Button>
        </div>
        <div className=" mt-3 text-sm ">
          Hii I'm Ariana Wattson. I'm a UI/UX Designer and a Front-End
          Developer.
        </div>
      </div>
      <div className=" mt-10">
        <StandardImageList />
      </div>
    </div>
  );
};

export default UserPage;
