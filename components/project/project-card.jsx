/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import Title from "@components/modular/elements/title";
import styles from "./project-card-style";

const ProjectCard = props => {
  // console.log('[ProjectCard:]', props);
  // const [active, setActive] = useState(false);
  const project = props.project || {};

  let mainCls = [
    [true, "_card"],
    [true, "_project-card"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let statuses = project.dates.filter(date => date.type === "status");

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {/* <div className=""></div> */}
      <Title key={project.id} icon={"project-design"} bold>
        {project.title}
        <div className="top-content">
          {project.id} | {project.brief.type}
        </div>
        <div className="sub-content">
          <div>{project.brief.location}</div>
          <div>status : {statuses && statuses.length > 0 ? statuses.slice(-1)[0].title : null}</div>
        </div>
      </Title>
      {project.avatars ? (
        <div className="_profile-tumbnails">
          {project.avatars.clients}
          {project.avatars.clients.length > 0 ? (
            <div style={{ height: "100%", margin: "0 4px", borderRight: "var(--border-secondary)" }}></div>
          ) : null}
          {project.avatars.contributors}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;
