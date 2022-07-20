/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import Title from "@components/modular/elements/title";
import Date from "@components/modular/elements/date";
// import Avatar from "@components/graphics/avatar";
import styles from "./project-issue-card-style";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";

const ProjectIssueCard = props => {
  //   console.log('[ProjectIssueCard:]', props);
  // const [active, setActive] = useState(false);

  let mainCls = [
    [true, "_project-issue-card"],
    [props.className, props.className],
    [props.active, "_active"],
    [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const issue = props.issue || { title: "unknown", description: "", prfoiles: { clients: [], contributors: [] } };

  return (
    <div className={mainCls.join(" ")} css={styles} onClick={props.clickFn}>
      <div className="_grid-2col-fix-left">
        <div className="tumbnail">
          <div></div>
        </div>
        <div className="_grid-2row-fix-bottom _gap-8">
          <Title bold state={null} className="issue-title">
            {issue.title}
            {/* <div className="sub-content test">{issue.description}</div> */}
            <div className="top-content _flex _align-center">
              <ProfileTumbnail xs profile={"random"} />
              <div style={{ height: "100%", margin: "0 5px", borderRight: "var(--border-secondary)" }}></div>
              <Date date={issue.created_at} />
            </div>
          </Title>
          <div className="_grid-3col-fix-left-middle">
            <Title sm icon={"architect"} content="-"/>
            <Title sm icon={"client"} content="-"/>
            <Title xs icon={"project-brief"} content="-"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectIssueCard;

{
  /* <div className="tumbnail">
            <div></div>
          </div>
          <Title bold state={null}>
            {issue.title}
            <div className="sub-content">{issue.description}</div>
            <div className="top-content">
              <Date />
            </div>
          </Title>
        </div>

        <div className="_grid-2col-fix-left _info">
          <Title sm icon={"architect"}>
            {issue.profiles?.clients.length + issue.profiles?.contributors.length}
          </Title>
          <div className="_flex _align-center">
            {issue.avatars ? (
              <Fragment>
                {issue.avatars.clients}
                {issue.avatars.clients.length > 0 ? (
                  <div style={{ height: "100%", margin: "0 4px", borderRight: "var(--border-secondary)" }}></div>
                ) : null}
                {issue.avatars.contributors}
              </Fragment>
            ) : null}
          </div>
        </div> */
}

// <div className="_grid-2col-fix-left info">
//   <Title sm icon={"project-brief"}>
//     {/* {issue.assets.length} */}4
//   </Title>
//   <div className="_buttons-row">
//     {[...Array(5)].map((i, index) => (
//       <div key={index} className="_tag">
//         {index}.jpg
//       </div>
//     ))}
//   </div>
