/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import styles from "./info-option-style";
// import GraphicSet from "@components/graphics/graphic-set";

const InfoOption = props => {
  //   console.log('[Info-option:]', props);
  const [active, setActive] = useState(false);

  let mainCls = "_info-option";
  mainCls += props.className? " " + props.className : "";
  mainCls += active? " active" : "";
  let content = props.children ? props.children : props.content ? props.content : null;

  return (
    <div className={mainCls} css={[styles, {...props.style}]}>
      <div className="icon" onClick={() => setActive(!active)}>!</div>
      {/* <GraphicSet /> */}
      <span className="desc" onMouseLeave={() => setActive(false)}>{content}</span>
    </div>
  );
};

export default InfoOption;
