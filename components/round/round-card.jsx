/** @jsxRuntime classic */
/** @jsx jsx */
import Title from "@components/modular/elements/title";
import { jsx } from "@emotion/react";
import { Fragment } from "react";
// import { useState } from 'react';
import styles from "./round-card-style";

const RoundCard = props => {
  // console.log('[RoundCard:]', props);
  // const [active, setActive] = useState(false);
  const round = props.round || {};

  let mainCls = [
    [true, "_card"],
    [true, "_round-card"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // let statuses = project.dates.filter(date => date.type === "status");

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {/* <div className=""></div> */}
      {round && (
        <Fragment>
          <Title key={round.id} icon={"project-brief"} bold>
            {round.title || `Round ${round.id}`}
            <div className="top-content">
              {/* {round.brief.type} | {round.brief.scope} - {round.brief.floorArea} m2 */}
            </div>
            <div className="sub-content">
              <div>Round State : {round.state}</div>
              {round.projects?.lenght > 1 && <div> number of projects : {round.projects.lenght}</div>}
              {round.evaluations?.lenght > 1 && <div> number of evaluations : {round.evaluations.lenght}</div>}
            </div>
          </Title>
        </Fragment>
      )}
    </div>
  );
};

export default RoundCard;

// {
//   id: round_id || "R" + parseInt(Math.random() * 2000),
//   title: "",
//   round_type: "standard",
//   brief: {
//     type: PROJECT_PROGRAM_TYPES.residential,
//     scope: PROJECT_SCOPE_TYPES.new_construction,
//     location: "location",
//     locationCord: "",
//     siteArea: 2700,
//     BuildingFootprint: 1300,
//     floorArea: 6000,
//     stories: 3,
//     description: loremIpsum({ p: parseInt(Math.random() * 4) + 1, random: true, startWithLoremIpsum: false }),
//     created_at: baseDate.format(),
//     //navigation properties
//     attributes: [],
//   },
//   clients: [{ profile: "", is_admin: true }],

//   milestone1: milestone1.format(),
//   milestone2: milestone2.format(),
//   milestone3: milestone3.format(),
//   milestone4: milestone4.format(),
//   milestone5: milestone5.format(),
//   milestone6: milestone6.format(),

//   state: roundState,
//   created_at: baseDate?.format(),
//   submitted_at: submittedDate?.format(),
//   validated_at: validatedDate?.format(),
//   projects_submission_ended_at: projectsSubmissionEndedDate?.format(),
//   registration_confirmed_at: registrationConfirmedDate?.format(),
//   evaluated_at: evaluatedDate?.format(),
//   completed_at: completedDate?.format(),

//   projects: projects,
//   evaluations: evaluations,
//   round_all_average_score: roundAllAverageScore,
//   round_all_weighted_average_score: roundAllWeightedAverageScore,
//   qa: [...QAItems],
// }
