/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./logo-style";

const Logo = props => {
  // console.log("[ThemeLogo:]", props);
  let mainCls = [
    [true, "_theme-graphic"],
    [true, "_logo"],
    [props.className, props.className],
    // [props.disabled, "disabled"],
    // [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let content = "";

  if (props.sm) {
    content = (
      <>
        <div className="_logo_name">DUNA</div>
        {/* <div className="_logo_text">Decentral Union of Architects</div> */}
        <div className="_logo_ring-shadow"></div>
        <div className="_logo_ring">
          <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g id="_logo_ring" className="_H-fit" data-name="Layer 2">
              <circle className="ring-inner" cx="50" cy="50" r="45" />
              <circle className="ring-outter" cx="50" cy="50" r="49" />
              <circle className="ring-fill" cx="50" cy="50" r="47" />
            </g>
          </svg>
        </div>
      </>
    );
    mainCls.push("_logo-small");
  }

  if (props.lg) {
    content = (
      <>
        <div className="_logo_text">
          <div>DUNA</div>
          <div>Decentral Union of Architects</div>
        </div>
        <div className="_logo_ring-shadow"></div>
        <div className="_logo_ring">
          <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <g id="_logo_ring" className="_H-fit" data-name="Layer 2">
              <circle className="ring-inner" cx="50" cy="50" r="45" />
              <circle className="ring-outter" cx="50" cy="50" r="49" />
              <circle className="ring-fill" cx="50" cy="50" r="47" />
            </g>
          </svg>
        </div>
      </>
    );
    mainCls.push("_logo-big");
  }

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]} onClick={props.click ? props.clickFn : null}>
      {/* <img src={itemSrc} /> */}
      {content}
    </div>
  );
};

export default Logo;
