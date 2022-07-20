/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import { Fragment } from "react";
import Title from "@components/modular/elements/title";
import Date from "@components/modular/elements/date";
import styles from "./project-meeting-card-style";

const ProjectMeetingCard = props => {
  //   console.log('[ProjectMeetingCard:]', props);
  // const [active, setActive] = useState(false);

  let mainCls = [
    [true, "_project-meeting-card"],
    [props.className, props.className],
    [props.active, "_active"],
    [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const meeting = props.meeting;

  return (
    <div className={mainCls.join(" ")} css={styles} onClick={props.clickFn}>
      <div className="_grid-3row-fix-middle-bottom">
        <div className="_grid-2col-fix-left">
          <div className="tumbnail">
            <div></div>
          </div>
          <Title bold state={null}>
            {meeting.title}
            <div className="sub-content">{meeting.description}</div>
            <div className="top-content">
              <Date />
            </div>
          </Title>
        </div>

        <div className="_grid-2col-fix-left _info">
          <Title sm icon={"architect"}>
            {meeting.profiles.clients.length + meeting.profiles.contributors.length}
          </Title>
          <div className="_flex _align-center">
            {meeting.avatars ? (
              <Fragment>
                {meeting.avatars.clients}
                {meeting.avatars.clients.length > 0 ? (
                  <div style={{ height: "100%", margin: "0 4px", borderRight: "var(--border-secondary)" }}></div>
                ) : null}
                {meeting.avatars.contributors}
              </Fragment>
            ) : null}
          </div>
        </div>

        <div className="_grid-2col-fix-left info">
          <Title sm icon={"project-brief"}>
            {/* {meeting.assets.length} */}4
          </Title>
          <div className="_buttons-row">
            {[...Array(5)].map((i, index) => (
              <div key={index} className="_tag">
                {index}.jpg
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeetingCard;

// title(pin):""
// description(pin):""
// date(pin):""
// is_internal(pin):false
// is_important(pin):false
