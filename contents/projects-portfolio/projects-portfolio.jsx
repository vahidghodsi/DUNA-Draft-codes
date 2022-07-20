/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import ProjectCard from "@components/project/project-card";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
import Loader from "@components/graphics/loader";
import LoaderContainer from "@components/graphics/loader-container";
import styles from "./projects-portfolio-style";

// const DashboardArchitect = props => {
const ProjectsPortfolio = props => {
  console.log("[DashboardArchitect:]", props);
  // const [active, setActive] = useState(false);
  const projects = props.appUserData.projects || [];
  const projectsStatus = props.appUserData.projectsStatus;

  let mainCls = [
    [true, "_projects-portfolio"],
    [true, "_main-content"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========

  projects &&
    projects.forEach(project => {
      project.avatars = {
        clients: project.clients.map((client, index) => <ProfileTumbnail key={index} xs profile={"random"} />),
        contributors: project.contributors.map((contributor, index) => (
          <ProfileTumbnail key={index} xs profile={"random"} />
        )),
      };
    });

  // ===== ELEMENTS ==========
  let projectsEls = projects
    ? projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
    : null;

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-3col">
        {/* ===== PROJECTS ===== */}
        {/* <div className="_ver-partition"> */}
        <div className="_ver-partition _grid-3row-fix-top-bottom">
          <div>
            <Title bold>{`${projects.length} Projects`}</Title>
          </div>
          <div className="_body">
            <LoaderContainer active={projectsStatus === "LOADING"}>
              <Loader sm />
            </LoaderContainer>
            <List overflow={"auto"}>{projectsEls}</List>
          </div>
          <div className="_add-new-item_card _grid-2col-fix-left _minimized">
            <div className="_add-new-item"></div>
            <Title lg bold>
              Add a project
            </Title>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProjectsPortfolio;
