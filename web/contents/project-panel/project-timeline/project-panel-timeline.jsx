/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import styles from "./project-panel-timeline-style";

const ProjectPanelTimeline = props => {
  // console.log('[ProjectPanelTimeline:]', props);
  // const [active, setActive] = useState(false);

  let mainCls = ["_project-panel-timeline"];
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
        Timeline
    </div>
  );
};

export default ProjectPanelTimeline;
