/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import styles from "./project-panel-documents-style";

const ProjectPanelDocuments = props => {
  // console.log('[ProjectPanelDocuments:]', props);
  // const [active, setActive] = useState(false);

  let mainCls = ["_project-panel-documents"];
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
        Documents
    </div>
  );
};

export default ProjectPanelDocuments;
