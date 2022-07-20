// import { useEffect, useRef, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import styles from "./scroll-bar-style";

const ScrollBar = props => {
  //   console.log('[ScrollBar:]', props);
  const [toggled, setToggled] = useState(props.toggled || false);

  let mainCls = ["_scroll-bar"];
  const classListConditions = [
    [props.className, " " + props.className],
    [props.horizontal, "horizontal"],
    [props.toggle, "toggle"],
    [props.disabled, "disabled"],
    // [props.secondary, "secondary"],
    // [props.xs, "_xs"],
    // [props.sm, "_sm"],
    // [props.lg, "_lg"],
    // [props.xl, "_xl"],
    [toggled, "toggled"],
  ];
  classListConditions.forEach(classCondition => {
    if (classCondition[0]) {
      mainCls.push(classCondition[1]);
    }
  });

  let fillPer = props.fillLevel ? props.fillLevel + "%" : 0;
  let fillstyle = props.horizontal ? { width: fillPer } : { height: fillPer };

  const clickHandler = () => {
    if (!props.disabled && props.toggle) {
      setToggled(!toggled);
    }
  };
  const dragHandler = e => {
    console.log("drag:", e);
  };

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]} onClick={() => clickHandler()}>
      <div className="arrow-less"></div>
      <div className="border">
        <div className="fill" style={fillstyle} onDrag={e => dragHandler(e)}></div>
      </div>
      <div className="arrow-more"></div>
    </div>
  );
};

export default ScrollBar;
