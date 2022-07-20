/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import styles, { alertMotionVariant } from "./app-alert-style";

const AppAlert = props => {
  // const message = props.message;
  const message = props.message;
  const duration = message.duration || 5000;
  const [active, setActive] = useState(true);

  let mainCls = "_app-alert";
  let holderCls = "_holder";
  holderCls += message.info_type ? " _" + message.info_type : "";

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
          sm
          secondary={btnType === "secondary"}
          key={index}
          className={btnCls}
          clickFn={() => {
            setActive(false);
            setTimeout(() => {
              props.actionFn(action.do, message);
            }, 300);
          }}
        >
          {action.label}
        </Button>
      );
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, duration);
  }, [duration]);

  return (
    <AnimatePresence>
      {active && (
        <motion.li
          className={mainCls}
          css={styles}
          variants={alertMotionVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className={holderCls}>
            {/* <div className="content">{message.content}</div> */}
            <Title className="content">{message.content}</Title>
            <div className="ui">{messageActions}</div>
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default AppAlert;
