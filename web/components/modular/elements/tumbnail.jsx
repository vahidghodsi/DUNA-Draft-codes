/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import styles from "./tumbnail-style";
// import GraphicSet from "@components/graphics/graphic-set";

const Tumbnail = props => {
  //   console.log('[Tumbnail:]', props);
//   const [active, setActive] = useState(false);

  let mainCls = "_tumbnail";
  mainCls += props.className? " " + props.className : "";
//   mainCls += active? " active" : "";

  return (
    <div className={mainCls} css={[styles, {...props.style}]}>

    </div>
  );
};

export default Tumbnail;
