// import { useEffect, useRef, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styles from "./button-style";

const Button = props => {
  //   console.log('[Button:]', props);
  let mainCls = [
    [true, "_button"],
    [props.className, props.className],
    // [props.toggle, "toggle"],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.white, "white"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const clickHandler = () => {
    if (props.clickFn) {
      props.clickFn();
    } else {
      console.log("no fuction");
    }
  };

  return (
    <button
      className={mainCls.join(" ")}
      css={[styles, { ...props.style }]}
      type={props.type || "button"}
      onClick={() => clickHandler()}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
