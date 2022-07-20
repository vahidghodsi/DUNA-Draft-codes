/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import List from "@components/modular/containers/list";
// import Title from "@components/modular/elements/title";
import ProjectMeetingCard from "./project-meeting-card";
import ProjectMeetingDisplay from "./project-meeting-display";
import ProjectMeetingAdd from "./project-meeting-add";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
import styles from "./project-panel-meetings-style";
// import AppLevelDisplay from "@components/context/app-level-display";

const ProjectPanelMeetings = props => {
  // console.log('[ProjectPanelMeetings:]', props.project);
  const [meetings, setMeetings] = useState([]);
  // const meetings = project.meetings || [];
  const [activeMeetingDate, setActiveMeetingDate] = useState(false);
  const activeMeeting = meetings.find(meeting => meeting.date === activeMeetingDate);

  let mainCls = [
    [true, "_project-panel-meetings"],
    [true, "_grid-2col-fix-left"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // useEffect(() => {
  //   meetings.length > 0 && setActiveMeetingDate(meetings[0].date);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.project]);

  useEffect(() => {
    let tempMeetings = props.project ? [...props.project.meetings] : [];
    tempMeetings.forEach(
      meeting =>
        (meeting.avatars = {
          clients: meeting.profiles.clients.map((i, index) => <ProfileTumbnail key={index} xs profile={"random"} />),
          contributors: meeting.profiles.contributors.map((i, index) => (
            <ProfileTumbnail key={index} xs profile={"random"} />
          )),
        })
    );
    setMeetings(tempMeetings);
    tempMeetings.length > 0 && setActiveMeetingDate(tempMeetings[0].date);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.project]);

  const projectMeetingCardsEls = meetings.map(meeting => (
    <ProjectMeetingCard
      key={meeting.date}
      meeting={meeting}
      active={meeting.date === activeMeetingDate}
      clickFn={() => setActiveMeetingDate(meeting.date)}
    />
  ));

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      <div className="_grid-2row-fix-bottom">
        <List filters={true} counter overflow={"auto"}>
          {projectMeetingCardsEls}
        </List>
        <div className="_project-new-meeting-placeholder"></div>
      </div>
      <ProjectMeetingDisplay meeting={activeMeeting} />
      <ProjectMeetingAdd />
    </div>
  );
};

export default ProjectPanelMeetings;
