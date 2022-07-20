/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { Fragment } from "react";
import Modal from "@components/modular/containers/modal";
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import Passage from "@components/modular/elements/passage";
import styles from "./project-meeting-display-style";

const ProjectMeetingDisplay = props => {
  // console.log("[ProjectMeetingDisplay:]", props.meeting);
  // const [active, setActive] = useState(false);
  const [displayModalState, setDisplayModalState] = useState("open");
  const meeting = props.meeting || undefined;
  const clients = meeting && meeting.profiles ? meeting.profiles.clients : [];
  const contributors = meeting && meeting.profiles ? meeting.profiles.contributors : [];
  // const assets = meeting.assets;

  let mainCls = [
    [true, "_project-meeting-display"],
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
      actionsAbsolutePosition
      stateChangeFn={state => modalStateChangeHandler(state)}
    >
      <div className="_grid-3row-fix-top-bottom" style={{ height: "100%" }}>
        <div className="header _grid-2col-fix-left">
          <div className="tumbnail">
            <div></div>
          </div>
          <Title lg bold>
            {meeting?.title || "NOT FOUND"}
            <div className="top-content">
              <div className="_date">23 Apr</div>
            </div>
            <div className="sub-content">{meeting?.description}</div>
          </Title>
        </div>
        <List overflow={"auto"}>
          <Passage>{meeting?.text.map((txt, ind) => <p key={ind}>{txt}</p>) || "NO TEXT"}</Passage>
        </List>

        <div className="_info-tray _grid-row">
          {meeting && meeting.profiles ? (
            <Fragment>
              {clients.length > 0 ? (
                <div className="_grid-2col-fix-left">
                  <Title icon={"client"}>
                    {clients.length}
                  </Title>
                  <div className="_flex">{meeting.avatars.clients}</div>
                </div>
              ) : null}

              {contributors.length > 0 ? (
                <div className="_grid-2col-fix-left">
                  <Title icon={"architect"}>
                    {contributors.length}
                  </Title>
                  <div className="_flex">{meeting.avatars.contributors}</div>
                </div>
              ) : null}

              {meeting.assets ? (
                <div className="_grid-2col-fix-left">
                  <Title icon={"project-brief"}>
                    {meeting.assets.length || "-"}
                  </Title>
                  <div className="_buttons-row">
                    {meeting.assets.map((i, index) => (
                      <div key={index} className="_tag">
                        {index + 1}.jpg
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </Fragment>
          ) : null}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectMeetingDisplay;
