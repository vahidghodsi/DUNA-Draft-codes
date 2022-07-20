/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@components/modular/elements/button";
import styles, { promptMotionVariant } from "./app-prompt-style";

const AppPrompt = props => {
  const message = props.message;
  // console.log(message.actions);
  const [active, setActive] = useState(true);

  let mainCls = "_app-prompt";
  mainCls += message.info_type ? " _" + message.info_type : "";

  let messageActions = null;
  if (message.actions) {
    messageActions = message.actions.map((action, index) => {
      let btnType = "primary";
      let btnCls = "";
      switch (action.type) {
        case "confirm":
          btnCls = "_btn-confirm";
          break;

        case "decline":
          btnType = "secondary";
          btnCls = "_btn-decline";
          break;

        default:
          break;
      }
      return (
        <Button
          lg
          secondary={btnType === "secondary"}
          key={index}
          className={btnCls}
          clickFn={() => {
            setActive(false);
            setTimeout(() => {
              props.actionFn(action.do, message);
            }, 250);
          }}
        >
          {action.label}
        </Button>
      );
    });
  }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className={mainCls}
          css={styles}
          variants={promptMotionVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="content">{message.content}</div>
          <div className="_buttons-row-middle">{messageActions}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppPrompt;
