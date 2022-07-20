/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { updateAppMessage, updateAppStatus } from "@redux/actions/app";
import { app_message_info_types, app_message_types, app_message_samples } from "@models/app-message-types";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import TabsContainer from "@components/modular/containers/tabs-container";
import List from "@components/modular/containers/list";
// import styles from "./app-dev-style";
// import List from "@components/modular/list";

const AppDevApp = () => {
  // console.log("[in AppDevApp]");
  const { app, appWindow } = useSelector(state => state);
  const dispatch = useDispatch();

  const updateAppMessageHnadler = msg => {
    let tempMsg = { ...msg };
    if (msg.type === app_message_types.alert) {
      const info_types = Object.keys(app_message_info_types);
      tempMsg.info_type = info_types[Math.floor(Math.random() * 4)];
      tempMsg.content = Math.floor(Math.random() * 10) + "_" + msg.content;
    }
    dispatch(updateAppMessage(tempMsg));
  };

  const toggletStatus = () => {
    dispatch(updateAppStatus(app.status === "LOADING" ? "LOADED" : "LOADING"));
  };

  /* ===== App WINDOW ========== */
  const appDevAppStatus = (
    <div className="_section-container _grid-3row-fix-top-middle">
      <Title bold> {"APP STATUS"}</Title>
      <div className="_body _grid-2row-fix-bottom">
        <Title bold> {"AppStatus : " + app.status}</Title>
        <Button sm clickFn={() => toggletStatus()} style={{ width: "120px" }}>
          {app.status === "LOADING" ? "LOADED" : "LOADING"}
        </Button>
      </div>
    </div>
  );

  /* ===== App WINDOW ========== */
  const appDevWindow = (
    <div className="_section-container _grid-3row-fix-top-middle">
      <Title bold>App Window</Title>
      <div className="_body _grid-2row-fix-bottom">
        <Title>
          window properties:
          <div className="sub-content">
            <div>width: {appWindow.width}</div>
            <div>height: {appWindow.height}</div>
            <div>readyState: {appWindow.readyState}</div>
            <div>visibility: {appWindow.visibility}</div>
            <div>focused: {appWindow.focused}</div>
          </div>
        </Title>
      </div>
    </div>
  );

  /* ===== App Messages ========== */
  const appDevMessages = (
    <div className="_section-container _grid-3row-fix-top-bottom">
      <div className="_head _grid-3col-fix-middle-right">
        <Title bold> App Messages</Title>
        {/* <Title bold> {"status : " + projectsStatus}</Title>
        <Button xs clickFn={() => toggletStatus()} disabled={!projects} style={{width: "80px"}}>
          {projectsStatus === "LOADING" ? "LOADED" : "LOADING"}
        </Button> */}
      </div>
      <div className="_body ">
        {/* <LoaderContainer active={projectsStatus === "LOADING"}>
          <Loader sm/>
        </LoaderContainer> */}
        <List overflow={"auto"}>
          {app.messages && app.messages.length > 0 ? (
            app.messages.map((msg, ind) => (
              <Title key={ind} icon={msg.type} bold>
                {msg.type}
                <div className="top-content">duration: {msg.duration || "NOT SET"}</div>
                <div className="sub-content">{msg.content || "EMPTY"}</div>
              </Title>
            ))
          ) : (
            <Title>No Messages</Title>
          )}
        </List>
      </div>
      <div className="_actions _buttons-row">
        <Button xs clickFn={() => updateAppMessageHnadler(app_message_samples.alert_1)}>
          Alert
        </Button>
        <Button xs clickFn={() => updateAppMessageHnadler(app_message_samples.alert_with_action_1)}>
          {"Alert & action"}
        </Button>
        <Button xs clickFn={() => updateAppMessageHnadler(app_message_samples.prompt_1)}>
          Prompt
        </Button>
      </div>
    </div>
  );

  const dataItems = [
    {
      title: "App Status",
      content: appDevAppStatus,
    },
    {
      title: "Window",
      content: appDevWindow,
    },
    {
      title: "Messages",
      content: appDevMessages,
    },
  ];

  return <TabsContainer sm id={"app-dev-app"} items={dataItems} overflow={"auto"} />;
};

export default AppDevApp;

// (
//   <div className="_sub-section _grid-2row-fix-top">
//     <Title bold>App Messages</Title>
//     <div className="_body _grid-2row-fix-bottom">
//       {app.messages && app.messages.length > 0 ? (
//         app.messages.map((msg, ind) => (
//           <Title key={ind} icon={msg.type} bold>
//             {msg.type}
//             <div className="top-content">duration: {msg.duration || "NOT SET"}</div>
//             <div className="sub-content">{msg.content || "EMPTY"}</div>
//           </Title>
//         ))
//       ) : (
//         <Title>No Messages</Title>
//       )}
//       <div className="_actions _buttons-row">
//         <Button xs clickFn={() => updateAppMessageHnadler(app_message_samples.alert_1)}>
//           Alert
//         </Button>
//         <Button xs clickFn={() => updateAppMessageHnadler(app_message_samples.alert_with_action_1)}>
//           {"Alert & action"}
//         </Button>
//         <Button xs clickFn={() => updateAppMessageHnadler(app_message_samples.prompt_1)}>
//           Prompt
//         </Button>
//       </div>
//     </div>
//   </div>
// )
