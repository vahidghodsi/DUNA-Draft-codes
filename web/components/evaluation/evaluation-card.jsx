/** @jsxRuntime classic */
/** @jsx jsx */
import Title from "@components/modular/elements/title";
import { jsx } from "@emotion/react";
import dayjs from "dayjs";
//import { useState } from 'react';
import styles from "./evaluation-card-style";

const EvaluationCard = props => {
  // console.log('[EvaluationCard:]', props);
  // const [active, setActive] = useState(false);
  const evaluation = props.evaluation || {};

  let mainCls = [
    [true, "_card"],
    [true, "_evaluation-card"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // let statuses = evaluation.dates.filter(date => date.type === "status");

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {/* <div className=""></div> */}
      <Title key={evaluation.id} icon={"project-design"} bold>
        {evaluation.title || "Project's Title"}
        <div className="top-content">
          {"overall Score : " + evaluation.overallScore} | {"rank : " + evaluation.rank}
        </div>
        <div className="sub-content">
          {/* <div>{evaluation.brief.location}</div> */}
          {evaluation.created_at && <div> {dayjs(evaluation.created_at).format("DD MMM")}</div>}
          {evaluation.aspectsScore && (
            <div>
              <div> Aspect Score: {evaluation.aspectsScore}</div>
              <div className="_more"></div>
            </div>
          )}
        </div>
      </Title>
    </div>
  );
};

export default EvaluationCard;

// aspect_concept: 8.3
// aspect_development: 8.5
// aspect_feasibility: 6.5
// aspect_problemStatement: 8.8
// aspect_program: 8
// aspect_technical: 6.6
// aspectsScore: 7.8
// created_at: "2022-01-15T07:00:00+01:00"
// evaluator: {id: 1336, type: 'architect', firstName: 'Patricia', lastName: 'Stone', prefix: '', …}
// id: "0115229"
// overallScore: 7
// project_id: "unset"
// rank: 2
// status: "refused"
// text: []
