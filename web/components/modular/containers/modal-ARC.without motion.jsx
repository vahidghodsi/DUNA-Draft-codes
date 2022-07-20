/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
// import GraphicSet from "@components/graphics/graphic-set";
import styles from "./modal-style";
import Title from "@components/modular/elements/title";
import Button from "../elements/button";

const Modal = props => {
  //   console.log("[in Modal :] " + props);
  const modalEl = useRef(null);
  const [thisState, setThisState] = useState("closed");
  const state = props.state || thisState;
  // open (normal state),closed, expanded, minimized, expanded-vertical, expanded-horizontal, minmized-horizontal, minimized-vertical

  let mainCls = [
    [true, "_modal"],
    [true, "_slide-in-down"],
    [state, "_" + state],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
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
    // console.log(state);
    switch (state) {
      case "closed":
        modalEl.current.classList.add("_slide-out-up");
        modalEl.current.addEventListener(
          "animationend",
          () => {
            modalEl.current.classList.remove("_slide-out-up");
            updateState("closed");
          },
          { once: true }
        );
        break;

      // case "expanded":
      //   break;

      // case "minimized":
      //   break;

      default:
        updateState(state);
        break;
    }
  };

  // console.log("___: ", state);
  let mainStyle = state === "closed" ? { display: "none" } : {};
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
          <Button
            key={action}
            white
            xs
            clickFn={() => (state === "expanded" ? stateChangeHandler("open") : stateChangeHandler("expanded"))}
          >
            ex
          </Button>
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
    <aside
      id={props.id || undefined}
      className={mainCls.join(" ")}
      css={[styles, { ...props.style }, { ...mainStyle }]}
      ref={modalEl}
    >
      <div className="_modal-container _grid-2row-fix-top">
        <div className={title ? "_head _grid-2col-fix-right" : "_head"}>
          {title}
          <div className="_buttons-row-right">{actionsEls}</div>
        </div>
        <div className="_body">{props.children}</div>
      </div>
    </aside>
  );
};

export default Modal;
