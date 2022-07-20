/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styles from "./passage-style";

const Passage = props => {
  // console.log("[in Passage :] " + props);

  let mainCls = [
    [true, "_passage"],
    [true, "_grid-row"],
    [true, "_gap-8"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.bold, "bold"],
    [props.link, "_link"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const clickHandler = () => {
    // if (props.link && typeof props.link !== "boolean") {
    //   router.push(props.link);
    // } else if (props.clickFn) {
    //   props.clickFn();
    // } else {
    //   console.log("no fuction");
    // }
  };

  return (
    <div className={mainCls.join(" ")} onClick={() => clickHandler()} css={[styles, { ...props.style }]}>
      {props.children}
    </div>
  );
};

export default Passage;
