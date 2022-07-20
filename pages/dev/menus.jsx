// import React, { useState } from "react";

import Title from "@components/modular/elements/title";
// import TabsMenu from "@components/modular/menus/tabs-menu";
import NavMenu from "@components/modular/menus/nav-menu";
// import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
// import GraphicSet from "@components/Graphics/graphic-set";

const DevMenus = () => {
  // const tabItems = [
  //   {
  //     title: "Information",
  //     icon: "architect",
  //     // link: "/projects/information"
  //   },
  //   {
  //     title: "Overview",
  //     icon: "architect",
  //   },
  //   {
  //     title: "Timeline",
  //     icon: "architect",
  //   },
  //   {
  //     title: "Meetings",
  //     icon: "architect",
  //   },
  //   {
  //     title: "Evaluations",
  //     icon: "architect",
  //   },
  //   {
  //     title: "Documents",
  //     icon: "architect",
  //   },
  //   {
  //     title: "Issues",
  //     icon: "architect",
  //   },
  // ];
  // const [activeTab, setActiveTab] = useState(tabItems[1].title);

  return (
    <div className={"_container _h-100"} style={{}}>
      <div className="_spacer-50"></div>
      <Title lg state="active">
        Tab Menu
      </Title>
      {/* <TabsMenu items={tabItems} activeItem={activeTab} clickFn={activeItem => setActiveTab(activeItem)} />
      <div className="_spacer-50"></div> */}
      <Title lg state="active">
        Navigation Menu
      </Title>
      <div>
        <NavMenu xl />
      </div>
      <div className="_spacer-50"></div>
      <Title lg state="active">
        Profile Tumbnails
      </Title>
      {/* <div className="_flex">
        <ProfileTumbnail
          profile={{ name: "Vahid Ghodsi", type: "Architect", credit: 6.8, avatar: "/Vahid.ghodsi.jpg" }}
        />
        <ProfileTumbnail
          profile={{ name: "Vahid Ghodsi", type: "Architect", credit: 6.8, avatar: "/Vahid.ghodsi.jpg" }}
        />
        <ProfileTumbnail
          profile={{ name: "Vahid Ghodsi", type: "Architect", credit: 6.8, avatar: "/Vahid.ghodsi.jpg" }}
        />
        <ProfileTumbnail
          profile={{ name: "Vahid Ghodsi", type: "Architect", credit: 6.8, avatar: "/Vahid.ghodsi.jpg" }}
        />
      </div> */}
    </div>
  );
};

export default DevMenus;
