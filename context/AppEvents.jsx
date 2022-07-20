import { updateAppEventsKeyboard } from "@redux/actions/appEvents";
import { updateAppWindow } from "@redux/actions/appWindow";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AppEvents = props => {
  // console.log("[in AppEvents]");
  const dispatch = useDispatch();

  const windowEventsHandler = () => {
    let WindowState = {
      focused: document.hasFocus(),
      visibility: document.visibilityState,
      readyState: document.readyState,
      height: window.innerHeight,
      width: window.innerWidth,
    };
    dispatch(updateAppWindow(WindowState));
  };

  const keyEventsHandler = e => {
    
    const keyboardEventObj = {
      key: e.key,
      keyCode: e.keyCode,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey,
      shiftKey: e.shiftKey,
    };
    dispatch(updateAppEventsKeyboard(keyboardEventObj));
    // console.log(e);
    // console.log(keyboardEvent);

    switch (e.key) {
      case "D":
        if (e.shiftKey) {
          props.keyDownActionFn("DEV_TOGGLE");
        }
        break;

      case "I":
        if (e.shiftKey) {
          props.keyDownActionFn("APP-LEVEL-INTERFACE_TOGGLE");
        }
        break;


      default:
        break;
    }
  };

  useEffect(() => {
    // document.addEventListener("visibilitychange", windowEventsHandler, false);
    // window.addEventListener("blur", windowEventsHandler, false);
    // window.addEventListener("focus", windowEventsHandler, false);
    // window.addEventListener("load", windowEventsHandler, false);
    window.addEventListener("resize", windowEventsHandler, false);
    windowEventsHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", e => keyEventsHandler(e), false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.children}</>;
};

export default AppEvents;
