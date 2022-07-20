/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import ProjectIssueAdd from "./project-issue-add";
import ProjectIssueCard from "./project-issue-card";
import ProjectIssueDisplay from "./project-issue-display";
import List from "@components/modular/containers/list";
// import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
import styles from "./project-panel-issues-style";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";

const ProjectPanelIssues = props => {
  // console.log('[ProjectPanelIssues:]', props);
  const [issues, setIssues] = useState([]);
  // const issues = project.issues || [];
  const [activeIssueId, setActiveIssueId] = useState(false);
  const activeIssue = issues.find(issue => issue.id === activeIssueId);
  // const [active, setActive] = useState(false);

  let mainCls = [
    [true, "_project-panel-issues"],
    [true, "_grid-2col-fix-left"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  useEffect(() => {
    let tempIssues = props.project ? [...props.project.issues] : [];
    tempIssues.length > 0 &&
      tempIssues.forEach(issue =>
        issue.messages.forEach(message => {
          message.avatars = {
            clients: message.profiles.clients.map((i, index) => <ProfileTumbnail key={index} xs profile={"random"} />),
            mentioned: message.profiles.mentioned.map((i, index) => (
              <ProfileTumbnail key={index} xs profile={"random"} />
            )),
          };
        })
      );
    setIssues(tempIssues);
    tempIssues.length > 0 && setActiveIssueId(tempIssues[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.project]);

  const projectIssueCardsEls = issues.map(issue => (
    <ProjectIssueCard
      key={issue.id}
      issue={issue}
      active={issue.id === activeIssueId}
      clickFn={() => setActiveIssueId(issue.id)}
    />
  ));

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      <div className="_grid-2row-fix-bottom">
        <List filters={true} counter overflow={"auto"}>
          {projectIssueCardsEls}
        </List>
        <div className="_project-new-issue-placeholder"></div>
      </div>
      <ProjectIssueDisplay issue={activeIssue} />
      <ProjectIssueAdd />
    </div>
  );
};

export default ProjectPanelIssues;
