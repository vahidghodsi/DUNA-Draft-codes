/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Modal from "@components/modular/containers/modal";
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import styles from "./project-issue-display-style";
import Date from "@components/modular/elements/date";
import ProjectIssueMessage from "./project-issue-message";
import ProjectIssueMessageAdd from "./project-issue-message-add";

const ProjectIssueDisplay = props => {
  // console.log('[IssueDisplay:]', props);
  // const [active, setActive] = useState(false);
  const [displayModalState, setDisplayModalState] = useState("open");
  const issue = props.issue || undefined;
  // const clients = issue && issue.profiles ? issue.profiles.clients : [];
  // const contributors = issue && issue.profiles ? issue.profiles.contributors : [];

  let mainCls = [
    [true, "_project-issue-display"],
    [props.className, props.className],
    // [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const modalStateChangeHandler = modalState => {
    // console.log("___: ", modalState);
    setDisplayModalState(modalState);
  };

  return (
    <Modal
      className={mainCls.join(" ")}
      css={styles}
      state={displayModalState}
      actions={["expand"]}
      stateChangeFn={state => modalStateChangeHandler(state)}
    >
      <div className="_grid-3row-fix-top-bottom" style={{ height: "100%" }}>
        <div className="header _grid-2col-fix-left">
          <div className="tumbnail">
            <div></div>
          </div>
          <Title lg bold>
            {issue?.title || "NOT FOUND"}
            <div className="top-content">
              <Date date={issue?.created_at} />
            </div>
            <div className="sub-content">{issue?.description}</div>
          </Title>
        </div>
        <List overflow={"auto"}>
          {issue && issue.messages ? (
            issue.messages.map(message => <ProjectIssueMessage key={message.id} message={message} />)
          ) : (
            <div>NO MESSAGE</div>
          )}
        </List>

        <div className="_info-tray _grid-row">
          <ProjectIssueMessageAdd />
        </div>
      </div>
    </Modal>
  );
};

export default ProjectIssueDisplay;

// {issue && issue.profiles ? (
//   <Fragment>
//     {clients.length > 0 ? (
//       <div className="_grid-2col-fix-left">
//         <Title icon={"client"}>{clients.length}</Title>
//         <div className="_flex">{issue.avatars.clients}</div>
//       </div>
//     ) : null}

//     {contributors.length > 0 ? (
//       <div className="_grid-2col-fix-left">
//         <Title icon={"architect"}>{contributors.length}</Title>
//         <div className="_flex">{issue.avatars.contributors}</div>
//       </div>
//     ) : null}

//     {issue.assets ? (
//       <div className="_grid-2col-fix-left">
//         <Title icon={"project-brief"}>{issue.assets.length || "-"}</Title>
//         <div className="_buttons-row">
//           {issue.assets.map((i, index) => (
//             <div key={index} className="_tag">
//               {index + 1}.jpg
//             </div>
//           ))}
//         </div>
//       </div>
//     ) : null}
//   </Fragment>
// ) : null}
