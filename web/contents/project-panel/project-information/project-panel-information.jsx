/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import styles from "./project-panel-information-style";

const ProjectPanelInformation = props => {
  // console.log('[ProjectPanelInformation:]', props);
  // const [active, setActive] = useState(false);

  let mainCls = ["_project-panel-information"];
  const classListConditions = [
    [props.className, " " + props.className],
    // [props.disabled, "disabled"],
    // [active, "_active"]
  ];
  classListConditions.forEach(classCondition => {
    if (classCondition[0]) {
      mainCls.push(classCondition[1]);
    }
  });

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
        INFORMATION
    </div>
  );
};

export default ProjectPanelInformation;
