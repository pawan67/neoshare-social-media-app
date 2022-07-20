import { User } from "@nextui-org/react";
import React from "react";
import HomepagePosts from "../posts/HomepagePosts";
import SideContent from "./SideContent";
import TopStoryUsers from "./TopStoryUsers";

const Homepage = () => {
  return (
    <div className=" flex justify-between ">
      <div>
        <TopStoryUsers />
        <HomepagePosts img="https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <HomepagePosts img="https://images.pexels.com/photos/12800833/pexels-photo-12800833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <HomepagePosts img="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <div>
        <SideContent />
      </div>
    </div>
  );
};

export default Homepage;
