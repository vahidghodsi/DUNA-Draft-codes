/** @jsxRuntime classic */
/** @jsx jsx */
import TabsContainer from "@components/modular/containers/tabs-container";
import { jsx } from "@emotion/react";
import Title from "@components/modular/elements/title";
import styles from "./round-panel-style";
import RoundPanelOverview from "./round-overview/round-panel-overview";

const RoundPanel = ({ round }) => {
  // console.log("[RoundPanel:]", round);
  // const round = props.rounds || undefined;
  //** rounds are passed from the parent (main page component), as it later will be determined dynamically
  // const { rounds } = useSelector(state => state.appUserData);
  // const round = rounds && rounds.lenght > 0 ? rounds[0] : undefined;

  let mainCls = [
    [true, "_round-panel"],
    [true, "_main-content"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const tabItems = [
    {
      title: "Information",
      icon: "architect",
      // link: "/projects/information"
      // content: <ProjectPanelInformation project={project} />,
    },
    {
      title: "Overview",
      icon: "architect",
      content: <RoundPanelOverview round={round} />,
    },
    // {
    //   title: "Timeline",
    //   icon: "architect",
    //   // content: <ProjectPanelTimeline project={project} />,
    // },
    {
      title: "Evaluations",
      icon: "architect",
      // content: <ProjectPanelEvaluations project={project} />,
    },
    {
      title: "Brief",
      icon: "architect",
      // content: <ProjectPanelDocuments project={project} />,
    },
    {
      // ** just client sees this
      title: "Architects",
      icon: "architect",
      // content: <ProjectPanelIssues project={project} />,
    },
    {
      // ** just client sees this
      title: "Projects",
      icon: "architect",
      // content: <ProjectPanelIssues project={project} />,
    },
    {
      title: "Q & A",
      icon: "architect",
      // content: <ProjectPanelIssues project={project} />,
    },
  ];

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-2row-fix-top">
        <div className="_heading">
          {round ? (
            <div className="_grid-2col-fix-left">
              <Title lg icon={"project-design"}>
                <h2>{round.title || "_UNTITLED"}</h2>
              </Title>
              <div className="_flex">
                <Title lg icon={""}>
                  State: {round.state || "-"}
                  <div className="info"> the current stage of development. each round has 5 development stages. </div>
                </Title>
                {/* <Title lg bold icon={""}>
                  {`${project.averageScore || "-"} (${project.weightedAverageScore || "-"})`}
                  <div className="info">
                    the average evaluation scroe the project received in evaluations, from the scale of 1 - 10. (and the
                    adjusted average based on the credit of the evaluators)
                  </div>
                </Title>
                <Title lg icon={""}>
                  Average Rank: {project.averageRank || "-"}
                  <div className="info"> the average rank the project received in evaluation, from 1 - 5</div>
                </Title> */}
              </div>
            </div>
          ) : (
            <Title lg icon={"project-design"}>
              NOT FOUND
            </Title>
          )}
        </div>
        <TabsContainer items={tabItems} defualtTabTitle={tabItems[1].title} overflow={"visible"} />
      </div>
    </div>
  );
};

export default RoundPanel;

// ===== REFERENCES ==========

// const ROUND = {
//   id: "",
//   title: "",
//   round_type: "standard", // limited entry, free competition, 2-stage
//   budget: "",
//   category: "", // what platform assgins, from its pre-defined categories

//   milestone1: "", // Round Start date
//   milestone2: "", // Registration end date
//   milestone3: "", // Confirmation end date
//   milestone4: "", // Submission end date
//   milestone5: "", // Evaluation end date
//   milestone6: "", // Decision end date

//   state: "initiated", // initiated, submitted, validated, started, registrationEnded, registrationConfirmed, projectSubmissionEnded, Evaluated, Completed | suspended, failed
//   created_at: "",
//   submitted_at: "",
//   validated_at: "",
//   registration_confirmed_at: "",
//   projects_submission_ended_at: "",
//   evaluated_at: "",
//   completed_at: "",

//   //update on timeline events
//   round_all_average_score: 7.2, // average of all single averageScore in one round. for informative purposes
//   round_all_weighted_average_score: 7.5, // average of all single wightedAverageScore in one round. for informative purposes

//   //navigation properties
//   projects_id: ["", ""],
//   clients_id: ["", ""],
//   brief_ids: ["", ""],
// };