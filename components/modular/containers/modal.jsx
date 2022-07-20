/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import GraphicSet from "@components/graphics/graphic-set";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import styles, { modalDefaultMotionVariant } from "./modal-style";
import GraphicSet from "@components/graphics/graphic-set";

const Modal = props => {
  //   console.log("[in Modal :] " + props);
  const modalEl = useRef(null);
  const [thisState, setThisState] = useState("closed");
  const state = props.state || thisState;
  // open (normal state),closed, expanded, minimized, expanded-vertical, expanded-horizontal, minmized-horizontal, minimized-vertical

  let mainCls = [
    [true, "_modal"],
    [state, "_" + state],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.actionsAbsolutePosition, "actions-absolute-position"],
    [props.actionsAbsolutePosition === "left", "left"],
    // [props.xs, "_xs"],
    // [props.sm, "_sm"],
    // [props.lg, "_lg"],
    // [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let title = props.title ? (
    <Title lg bold>
      {props.title}
    </Title>
  ) : null;

  useEffect(() => {
    // this prevents unwanted change in state during rerendering cycles, e.g. because of closing animation delay in state change
    if (props.state && props.state !== state) {
      stateChangeHandler(props.state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.state, state]);

  const updateState = state => {
    props.stateChangeFn && props.stateChangeFn(state);
    setThisState(state);
  };

  const stateChangeHandler = state => {
    updateState(state);
  };

  // console.log("___: ", state);
  let actions = props.actions ? (!Array.isArray(props.actions) ? [props.actions] : props.actions) : [];

  let actionsEls = [];
  // ===== because order of buttons are important, they are assigned specifically in the array
  actions.forEach(action => {
    switch (action) {
      case "close":
        actionsEls[2] = (
          <Button key={action} white xs clickFn={() => stateChangeHandler("closed")}>
            cl
          </Button>
        );
        break;

      case "expand":
        actionsEls[1] = (
          // <Button
          //   key={action}
          //   white
          //   xs
          //   clickFn={() => (state === "expanded" ? stateChangeHandler("open") : stateChangeHandler("expanded"))}
          // >
          //   ex
          // </Button>
          <GraphicSet
            xs={props.xs}
            sm={props.sm}
            lg={props.lg}
            xl={props.xl}
            md={props.md || (!props.xs && !props.sm && !props.lg && !props.xl)}
            key={action}
            item="arrows-expand-restore"
            clickFn={() => (state === "expanded" ? stateChangeHandler("open") : stateChangeHandler("expanded"))}
          />
        );
        break;

      case "minimize":
        actionsEls[0] = (
          <Button
            key={action}
            white
            xs
            clickFn={() => (state === "minimized" ? stateChangeHandler("open") : stateChangeHandler("minimized"))}
          >
            mi
          </Button>
        );
        break;

      // case "open":
      //   actionsEls[3] =
      //     state === "expanded" ? (
      //       <Button key={action} white xs clickFn={() => stateChangeHandler("minimized")}>
      //         mi
      //       </Button>
      //     ) : (
      //       <Button key={action} white xs clickFn={() => stateChangeHandler("minimized")}>
      //         mi
      //       </Button>
      //     );
      //   break;

      default:
        break;
    }
  });

  return (
    <AnimatePresence>
      {state !== "closed" && (
        <motion.aside
          id={props.id || undefined}
          className={mainCls.join(" ")}
          css={[styles, { ...props.style }]}
          ref={modalEl}
          variants={props.variants || modalDefaultMotionVariant}
          initial={props.initial || "initial"}
          animate={props.animate || "animate"}
          exit={props.exit || "exit"}
          whileDrag={props.whileDrag || "drag"}
          drag={props.drag}
          dragConstraints={props.dragConstraints}
          // dragElastic={props.dragElastic}
        >
          <div className="_modal-container _grid-2row-fix-top">
            <div className={title ? "_head _grid-2col-fix-right" : "_head"}>
              {title}
              <div className={props.actionsAbsolutePosition === "left" ? "_buttons-row" : "_buttons-row-right"}>
                {actionsEls}
              </div>
            </div>
            <div className="_body">{props.children}</div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Modal;
