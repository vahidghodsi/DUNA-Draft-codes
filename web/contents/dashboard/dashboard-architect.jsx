/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import ProjectCard from "@components/project/project-card";
import RoundCard from "@components/round/round-card";
import EvaluationCard from "@components/evaluation/evaluation-card";
import styles from "./dashboard-architect-style";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
import Loader from "@components/graphics/loader";
import LoaderContainer from "@components/graphics/loader-container";

// const DashboardArchitect = props => {
const DashboardArchitect = props => {
  console.log("[DashboardArchitect:]", props);
  // const [active, setActive] = useState(false);
  const projects = props.appUserData.projects || [];
  const projectsStatus = props.appUserData.projectsStatus;
  const rounds = props.appUserData.rounds || [];
  const roundsStatus = props.appUserData.roundsStatus;
  const evaluations = props.appUserData.evaluations || [];
  const evaluationsStatus = props.appUserData.evaluationsStatus;

  let mainCls = [
    [true, "_dashboard-architect"],
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

  let roundEls = rounds ? rounds.map(round => <RoundCard key={round.id} round={round}></RoundCard>) : null;

  let evaluationsEls = evaluations
    ? evaluations.map(evaluation => <EvaluationCard key={evaluation.id} evaluation={evaluation}></EvaluationCard>)
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

        {/* ===== ROUNDS ===== */}
        {/* <div className="_ver-partition"> */}
        <div className="_ver-partition _grid-3row-fix-top-bottom">
          <div>
            <Title bold>{`${rounds.length} Rounds`}</Title>
          </div>
          <div className="_body">
            <LoaderContainer active={roundsStatus === "LOADING"}>
              <Loader sm />
            </LoaderContainer>
            <List overflow={"auto"}>{roundEls}</List>
          </div>
          <div className="_add-new-item_card _grid-2col-fix-left _minimized">
            <div className="_add-new-item"></div>
            <Title lg bold>
              Participate in a round
            </Title>
          </div>
        </div>
        {/* </div> */}

        {/* ===== EVALUATIONS ===== */}
        {/* <div className="_ver-partition"> */}
        <div className="_ver-partition _grid-3row-fix-top-bottom">
          <div>
            <Title bold>{`${evaluations.length} Evaluations`}</Title>
          </div>
          <div className="_body">
            <LoaderContainer active={evaluationsStatus === "LOADING"}>
              <Loader sm />
            </LoaderContainer>
            <List overflow={"auto"}>{evaluationsEls}</List>
          </div>
          <div className="_add-new-item_card _grid-2col-fix-left _minimized">
            <div className="_add-new-item"></div>
            <Title lg bold>
              Evaluate projects
            </Title>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashboardArchitect;

/* <div className="_container _grid-2row-fix-top">
        <div className="_grid-2col-fix-left _align-center">
          <div>{user.name}</div>
          <Title lg bold icon={""}>
            {`${user.credit || "-"}`}
            <div className="info">the credit of the architect</div>
          </Title>
        </div>
        <List>{projectsEls}</List>
      </div> */
