/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import Loader from "@components/graphics/loader";
import { useDispatch } from "react-redux";
import { updateAppUserProjectsStatus } from "@redux/actions/appUserData";
import LoaderContainer from "@components/graphics/loader-container";
import List from "@components/modular/containers/list";
// import styles from "./app-dev-style";
// import List from "@components/modular/list";

const AppDevUserDataProjects = ({ projects, projectsStatus }) => {
  // console.log("[in AppDevUserDataProjects]");
  const dispatch = useDispatch();

  const toggletStatus = () => {
    dispatch(updateAppUserProjectsStatus(projectsStatus === "LOADING" ? "LOADED" : "LOADING"));
  };

  const getProjectHandler = action => {
    console.log(action);
  };

  let projectsEls = null;
  if (projects) {
    // console.log(appUserData.projects);
    if (projects.length > 1) {
      projectsEls = projects.map(project => {
        let statuses = project.dates.filter(date => date.type === "status");
        return (
          <Title key={project.id} icon={"project-design"} bold>
            {project.title}
            <div className="top-content">
              {project.id} | {project.brief.type}
            </div>
            <div className="sub-content">
              <div>{project.brief.location}</div>
              <div>status : {statuses && statuses.length > 0 ? statuses.slice(-1)[0].title : null}</div>
            </div>
          </Title>
        );
      });
    } else {
      projectsEls = <Title>NO Data Found</Title>;
    }
  }

  return (
    <div className="_section-container _grid-3row-fix-top-bottom">
      <div className="_head _grid-3col-fix-middle-right">
        <Title bold> {"User Projects"}</Title>
        <Title bold> {"status : " + projectsStatus}</Title>
        <Button xs clickFn={() => toggletStatus()} disabled={!projects} style={{width: "80px"}}>
          {projectsStatus === "LOADING" ? "LOADED" : "LOADING"}
        </Button>
      </div>
      <div className="_body ">
        <LoaderContainer active={projectsStatus === "LOADING"}>
          <Loader sm/>
        </LoaderContainer>
        <List overflow={"auto"}>{projectsEls}</List>
      </div>
      <div className="_actions _buttons-row">
        <Button xs clickFn={() => getProjectHandler("clear")} disabled={!projects}>
          clear
        </Button>
        <Button xs clickFn={() => getProjectHandler("Load One")} disabled={projects?.length === 1}>
          Load One
        </Button>
        <Button xs clickFn={() => getProjectHandler("Load All")} disabled={projects?.length > 1}>
          Load All
        </Button>
      </div>
    </div>
  );
};

export default AppDevUserDataProjects;
