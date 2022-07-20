/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import styles from "./project-panel-overview-style";

const ProjectPanelOverview = props => {
  // console.log('[ProjectPanelOverview:]', props);
  // const [active, setActive] = useState(false);
  const project = props.project;

  let mainCls = ["_project-panel-overview"];
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
      {/* Overview */}
      <div>
        {project ? (
          <dl>
            <dt>status</dt>
            <dd>{project.status || "No Record"}</dd>

            {/* <dt>clients</dt>
            <dd>{project.clients || "No Record"}</dd>

            <dt>architect</dt>
            <dd>{project.architect || "No Record"}</dd> */}
          </dl>
        ) : null}
      </div>  
    </div>
  );
};

export default ProjectPanelOverview;
