/** @jsxRuntime classic */
/** @jsx jsx */
// import { useState } from "react";
import { jsx } from "@emotion/react";
import dayjs from "dayjs";
import Bar from "@components/modular/elements/bar";
import Date from "@components/modular/elements/date";
import Passage from "@components/modular/elements/passage";
import Title from "@components/modular/elements/title";
import styles from "./round-panel-overview-style-stage";

const RoundPanelOverviewStage = ({ stage }) => {
  // console.log("[RoundPanelOverviewStage:]", stage);
  // const [active, setActive] = useState(false);
  let isActive = false;
  const dateNow = dayjs();
  const startDate = stage.start;
  const endDate = stage.end;
  const dateSpan = endDate.diff(startDate, "d");

  let progress = (dateNow.diff(startDate) / endDate.diff(startDate)) * 100;
  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;

  let stageState = undefined;
  if (stage.start && stage.end) {
    if (startDate.diff(dateNow) > 0) {
      stageState = "future";
    } else if (endDate.diff(dateNow) < 0) {
      stageState = "past";
    } else {
      stageState = "active";
      isActive = true;
    }
    // console.log(stageState);
    // console.log(startDate.diff(dateNow));
    // console.log(endDate.diff(dateNow));
  }

  // console.log(isActive);
  let mainCls = [
    [true, "_round-panel-overview-stage"],
    [true, "_grid-row"],
    [true, "_gap-8"],
    [isActive, "_active"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let icon = undefined;
  let stageDataElements = null;

  switch (stage.title) {
    case "registration":
      // icon = "round-registration";
      icon = "project-brief";
      stageDataElements = stage.projects.map((project, index) => {
        let registrationDate = dayjs(project.round_registered_at);
        let leftPos = (registrationDate.diff(startDate) / endDate.diff(startDate)) * 100;
        // Temporary solution, this comes from architects credit
        let topPos = 20 + Math.random() * 120;
        return (
          <div key={index} className="projects-registered" style={{ left: `${leftPos}%`, top: `${topPos}px` }}></div>
        );
      });
      break;

    case "confirmation":
      // icon = "round-confirmation";
      icon = "architect";
      break;

    case "submission":
      // icon = "round-submission";
      icon = "project-design";
      break;

    case "evaluation":
      // icon = "round-evaluation";
      icon = "project-design";
      break;

    case "decision":
      // icon = "round-decision";
      icon = "client";
      break;

    default:
      break;
  }

  return (
    <div className={mainCls.join(" ")} css={styles}>
      {/* ===== CONTEXT ========== */}

      <div className="stage-context">
        {isActive && (
          <div className="date-indicator _grid-2row-fix-b" style={{ width: `${progress}%` }}>
            <div></div>
            <Date />
          </div>
        )}
      </div>

      {/* ===== TITLE ========== */}
      <div className="stage-title">
        <Title icon={icon} bold={isActive} state={isActive ? "active" : null} sm={!isActive}>
          {stage.title}
        </Title>
      </div>

      {/* ===== TIMELINE ========== */}
      <div className="stage-timeline">
        {/* <Bar xs fillLevel={progress} toggle toggled={isActive} className={isActive ? "active" : null}></Bar> */}
        <Bar
          xs
          fillLevel={progress}
          toggle
          toggled={stageState === "active"}
          className={stageState === "active" ? "active" : null}
        ></Bar>
      </div>

      {/* ===== DATES ========== */}
      <div className="stage-dates _flex _flex-end">
        <div className="_date date-span">
          {dateSpan == 1
            ? dateSpan + " day"
            : dateSpan < 14
            ? dateSpan + " days"
            : endDate.diff(startDate, "w") + " weeks"}
        </div>
        <Date date={endDate} format={"DD MMM"} />
      </div>

      {/* ===== STATUS ========== */}
      <div className="stage-status _flex _flex-end">
        <div></div>
        <Passage xs>{"some reports on the activities happend, if the stage is passed or ongoing"}</Passage>
      </div>

      {/* ===== DATA ========== */}
      <div className="stage-data">{stageDataElements}</div>

      {/* ===== FACTS ========== */}
      <div className="stage-facts">
        <Passage xs>{"some facts on what values are clients/architects gaining from this " + stage.title}</Passage>
      </div>
    </div>
  );
};

export default RoundPanelOverviewStage;
