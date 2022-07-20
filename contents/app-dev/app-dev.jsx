/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState, useEffect } from "react";
import Modal from "@components/modular/containers/modal";
import TabsContainer from "@components/modular/containers/tabs-container";
import AppDevApp from "./app-dev-app";
import AppDevUser from "./app-dev-user";
import AppDevDataSimulation from "./app-dev-data-simulation/app-dev-data-simulation";
import AppDevUserData from "./app-dev-user-data/app-dev-user-data";
import styles, { appDevMotionVariant } from "./app-dev-style";

const AppDev = props => {
  // console.log("[in AppDev]");
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [modalState, setModalState] = useState("closed");

  const modalStateChangeHandler = modalState => {
    setModalState(modalState);
  };

  const tabItems = [
    {
      title: "App",
      // icon: "state",
      content: <AppDevApp />,
    },
    {
      title: "App User",
      content: <AppDevUser />,
    },
    {
      title: "User Data",
      content: <AppDevUserData isActiveTab={activeTab === "User Data"} />,
    },
    {
      title: "Data Simulation",
      content: <AppDevDataSimulation />,
    },
  ];

  // ===== USE EFFECTS ==========
  useEffect(() => {
    if (props.keyDownAction && props.keyDownAction === "DEV_TOGGLE") {
      modalState === "closed" ? modalStateChangeHandler("open") : modalStateChangeHandler("closed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.keyDownAction]);

  useEffect(() => {
    setActive(modalState === "closed" ? false : true);
  }, [modalState]);

  return (
    <Modal
      className={"_app-dev"}
      css={[styles, { ...props.style }]}
      title={"Dev. Panel"}
      state={modalState}
      stateChangeFn={state => modalStateChangeHandler(state)}
      actions={["close", "expand", "minimize"]}
      variants={appDevMotionVariant}
      initial={"initial"}
      animate={modalState === "expanded" ? "animateExpanded" : "animate"}
      drag
      whileDrag={"drag"}
    >
      <TabsContainer
        sm
        id={"app-dev"}
        items={tabItems}
        overflow={"auto"}
        tabChangeFn={tabTitle => setActiveTab(tabTitle)}
        trigger={active + modalState + props.keyDownAction}
      />
    </Modal>
  );
};

export default AppDev;
