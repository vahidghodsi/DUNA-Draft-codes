/** @jsxRuntime classic */
/** @jsx jsx */
import TabsContainer from "@components/modular/containers/tabs-container";
import { jsx } from "@emotion/react";
import Title from "@components/modular/elements/title";
import styles from "./evaluation-panel-style";

const EvaluationPanel = ({ evaluation }) => {
  console.log("[EvaluationPanel:]", evaluation);

  let mainCls = [
    [true, "_evaluation-panel"],
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
      // content: <ProjectPanelOverview project={project} />,
    },
    // {
    //   title: "Timeline",
    //   icon: "architect",
    //   // content: <ProjectPanelTimeline project={project} />,
    // },
    {
      title: "Project 1",
      icon: "project-brief",
      // content: <ProjectPanelEvaluations project={project} />,
    },
    {
      title: "Project 2",
      icon: "project-brief",
      // content: <ProjectPanelDocuments project={project} />,
    },
    {
      // ** just client sees this
      title: "Project 3",
      icon: "project-brief",
      // content: <ProjectPanelIssues project={project} />,
    },
    {
      // ** just client sees this
      title: "Project 4",
      icon: "project-brief",
      // content: <ProjectPanelIssues project={project} />,
    },
    {
      title: "Project 5",
      icon: "project-brief",
      // content: <ProjectPanelIssues project={project} />,
    },
  ];

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-2row-fix-top">
        <div className="_heading">
          {evaluation ? (
            <div className="_grid-2col-fix-left">
              <Title lg icon={"project-design"}>
                <h2>{evaluation.title || "_UNTITLED"}</h2>
              </Title>
              <div className="_flex">
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
              EVALUATION NOT FOUND
            </Title>
          )}
        </div>
        <TabsContainer items={tabItems} defualtTabTitle={tabItems[1].title} overflow={"visible"} />
      </div>
    </div>
  );
};

export default EvaluationPanel;
