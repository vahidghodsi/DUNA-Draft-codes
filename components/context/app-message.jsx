/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { deleteAppMessage, updateAppMessage } from "@redux/actions/app";
import AppAlert from "./app-alert";
import AppPrompt from "./app-prompt";
import styles from "./app-message-style";

const AppMessage = props => {
  // console.log("[in AppMessage]");
  const dispatch = useDispatch();
  const app = useSelector(state => state.app);
  const appMessages = app.messages;
  let mainCls = "_app-message";
  // mainCls += active ? " active" : "";

  let messagesAlerts = [];
  let messagesPrompts = [];
  // let promptMessagesBack = null;
  let promptMessagesCls = "message-prompt_items";

  const actionHandler = (act, msg) => {
    if (act) {
      act();
    }
    dispatch(deleteAppMessage(msg));
  };

  useEffect(() => {
    // dispatch(
    //   updateAppMessage({
    //     duration: 4000,
    //     time: undefined,
    //     type: "alert",
    //     content: "welcome to DUNA",
    //     // content: <div>{"welcome to DUNA"}</div>,
    //     // actions: [],
    //   })
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  appMessages.forEach(message => {
    if (message.type === "alert") {
      messagesAlerts.push(
        <AppAlert
          key={message.created_at}
          message={message}
          actionFn={(act, msg) => actionHandler(act, msg)}
          remove={msg => props.appMessage.delete(msg)}
        />
      );
    } else {
      messagesPrompts.push(
        <AppPrompt key={message.created_at} message={message} actionFn={(act, msg) => actionHandler(act, msg)} />
      );
      promptMessagesCls += " active";
    }
  });

  return (
    <aside className={mainCls} css={[styles, { ...props.style }]}>
      <div className="message-alert_items">{messagesAlerts}</div>
      <div className={promptMessagesCls}>{messagesPrompts}</div>
    </aside>
  );
};

export default AppMessage;
