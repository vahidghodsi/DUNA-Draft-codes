/** @jsxRuntime classic */
/** @jsx jsx */
import TabsContainer from "@components/modular/containers/tabs-container";
import { jsx } from "@emotion/react";
import ProjectPanelOverview from "./project-overview/project-panel-overview";
import ProjectPanelInformation from "./project-information/project-panel-information";
import ProjectPanelTimeline from "./project-timeline/project-panel-timeline";
import ProjectPanelMeetings from "./project-meetings/project-panel-meetings";
import ProjectPanelEvaluations from "./project-evaluations/project-panel-evaluations";
import ProjectPanelDocuments from "./project-documents/project-panel-documents";
import ProjectPanelIssues from "./project-issues/project-panel-issues";
import Title from "@components/modular/elements/title";
import styles from "./project-panel-style";

const ProjectPanel = ({ project }) => {
  // console.log('[ProjectPanel:]', project);
  // const project = props.project || undefined;
  //** Projects are passed from the parent (main page component), as it later will be determined dynamically
  // const { projects } = useSelector(state => state.appUserData);
  // const project = projects && projects.length > 0 ? projects[0] : undefined;

  let mainCls = [
    [true, "_project-panel"],
    [true, "_main-content"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const tabItems = [
    {
      title: "Information",
      icon: "architect",
      // link: "/projects/information"
      content: <ProjectPanelInformation project={project} />,
    },
    {
      title: "Overview",
      icon: "architect",
      content: <ProjectPanelOverview project={project} />,
    },
    {
      title: "Timeline",
      icon: "architect",
      content: <ProjectPanelTimeline project={project} />,
    },
    {
      title: "Meetings",
      icon: "architect",
      content: <ProjectPanelMeetings project={project} />,
    },
    {
      title: "Evaluations",
      icon: "architect",
      content: <ProjectPanelEvaluations project={project} />,
    },
    {
      title: "Documents",
      icon: "architect",
      content: <ProjectPanelDocuments project={project} />,
    },
    {
      title: "Issues",
      icon: "architect",
      content: <ProjectPanelIssues project={project} />,
    },
  ];

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-2row-fix-top">
        <div className="_heading">
          {project ? (
            <div className="_grid-2col-fix-left">
              <Title lg icon={"project-design"}>
                <h2>{project.title || "_UNTITLED"}</h2>
              </Title>
              <div className="_flex">
                <Title lg bold icon={""}>
                  {`${project.averageScore || "-"} (${project.weightedAverageScore || "-"})`}
                  <div className="info">
                    the average evaluation scroe the project received in evaluations, from the scale of 1 - 10. (and the
                    adjusted average based on the credit of the evaluators)
                  </div>
                </Title>
                <Title lg icon={""}>
                  Average Rank: {project.averageRank || "-"}
                  <div className="info"> the average rank the project received in evaluation, from 1 - 5</div>
                </Title>
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

export default ProjectPanel;
