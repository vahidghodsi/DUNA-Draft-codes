/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import styles from "./info-option-style";
// import GraphicSet from "@components/graphics/graphic-set";

const InfoTable = props => {
  //   console.log('[Info-Table:]', props);
//   const [active, setActive] = useState(false);

  let mainCls = "_info-table";
  mainCls += props.className? " " + props.className : "";
//   mainCls += active? " active" : "";

  return (
    <div className={mainCls} css={[styles, {...props.style}]}>

    </div>
  );
};

export default InfoTable;
