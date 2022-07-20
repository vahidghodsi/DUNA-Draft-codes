/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import dayjs from "dayjs";
import styles from "./round-panel-overview-style";
import RoundPanelOverviewStage from "./round-panel-overview-stage";
// import Date from "@components/modular/elements/date";

// import { ROUND_STATE_TYPES } from "../../../../dev-material/datamodel-definitions";

const RoundPanelOverview = props => {
  // console.log('[RoundPanelOverview:]', props);
  // const [active, setActive] = useState(false);
  const round = props.round || {};
  // console.log(round);

  const milestone_1 = dayjs(round.milestone_1);
  const milestone_2 = dayjs(round.milestone_2);
  const milestone_3 = dayjs(round.milestone_3);
  const milestone_4 = dayjs(round.milestone_4);
  const milestone_5 = dayjs(round.milestone_5);
  const milestone_6 = dayjs(round.milestone_6);
  const stage_1_span = milestone_2.diff(milestone_1);
  const stage_2_span = milestone_3.diff(milestone_2);
  const stage_3_span = milestone_4.diff(milestone_3);
  const stage_4_span = milestone_5.diff(milestone_4);
  const stage_5_span = milestone_6.diff(milestone_5);
  // const roundTimelineSpan = milestone_6.diff(milestone_1);
  // const dateNowOffset = dayjs().diff(milestone_1);
  // const dateNowOffsetPercentage = dateNowOffset / roundTimelineSpan;

  let mainCls = [
    [true, "_round-panel-overview"],
    //   [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const stage1 = {
    title: "registration",
    start: milestone_1,
    end: milestone_2,
    // actualStart: round.milestone_1,
    // actualEnd: round.milestone_2,
    dateSpan: stage_1_span,
    dateSpanDays: milestone_2.diff(milestone_1, "d"),
    projects: round.projects || []
  };
  const stage2 = {
    title: "confirmation",
    start: milestone_2,
    end: milestone_3,
    // actualStart: round.milestone_1,
    // actualEnd: round.milestone_2,
    dateSpan: stage_1_span,
    dateSpanDays: milestone_3.diff(milestone_2, "d"),
  };
  const stage3 = {
    title: "submission",
    start: milestone_3,
    end: milestone_4,
    // actualStart: round.milestone_1,
    // actualEnd: round.milestone_2,
    dateSpan: stage_1_span,
    dateSpanDays: milestone_4.diff(milestone_3, "d"),
  };
  const stage4 = {
    title: "evaluation",
    start: milestone_4,
    end: milestone_5,
    // actualStart: round.milestone_1,
    // actualEnd: round.milestone_2,
    dateSpan: stage_1_span,
    dateSpanDays: milestone_5.diff(milestone_2, "d"),
  };
  const stage5 = {
    title: "decision",
    start: milestone_5,
    end: milestone_6,
    // actualStart: round.milestone_1,
    // actualEnd: round.milestone_2,
    dateSpan: stage_1_span,
    dateSpanDays: milestone_6.diff(milestone_4, "d"),
  };

  let stagesStyles = round.id
    ? (stagesStyles = {
        gridTemplateColumns: `${stage_1_span}fr ${stage_2_span}fr ${stage_3_span}fr ${stage_4_span}fr ${stage_5_span}fr`,
        // gridTemplateColumns: `${(stage_1_span / roundTimelineSpan) * 100}% minmax(100px, ${
        //   (stage_2_span / roundTimelineSpan) * 100
        // }%) ${(stage_3_span / roundTimelineSpan) * 100}% ${(stage_4_span / roundTimelineSpan) * 100}% ${
        //   (stage_5_span / roundTimelineSpan) * 100
        // }%`,
      })
    : {};

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="round-stages-context">
        <div className="timline-line"></div>
        <div className="data-lines">
          <div data-number="3"></div>
          <div data-number="4"></div>
          <div data-number="5"></div>
          <div data-number="6"></div>
          <div data-number="7"></div>
          <div data-number="8"></div>
        </div>
      </div>
      <div className="round-stages _grid-col" style={stagesStyles}>
        <RoundPanelOverviewStage stage={stage1} />
        <RoundPanelOverviewStage stage={stage2} />
        <RoundPanelOverviewStage stage={stage3} />
        <RoundPanelOverviewStage stage={stage4} />
        <RoundPanelOverviewStage stage={stage5} />
      </div>
    </div>
  );
};

export default RoundPanelOverview;

/* {round ? ( */

/* // ) : null */
