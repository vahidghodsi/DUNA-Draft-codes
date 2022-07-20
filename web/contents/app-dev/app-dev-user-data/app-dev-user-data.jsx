/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useSelector } from "react-redux";
import TabsContainer from "@components/modular/containers/tabs-container";
import AppDevUserDataProjects from "./app-dev-user-data-projects";
import AppDevUserDataEvaluations from "./app-dev-user-data-evaluations";
import AppDevUserDataRounds from "./app-dev-user-data-rounds";
// import styles from "./app-dev-style";

const AppDevUserData = props => {
  // console.log("[in AppDevUserData]");
  const appUserData = useSelector(state => state.appUserData);

  const dataItems = [
    {
      title: "Projects",
      content: <AppDevUserDataProjects projects={appUserData.projects} projectsStatus={appUserData.projectsStatus} />,
    },
    {
      title: "Rounds",
      content: <AppDevUserDataRounds rounds={appUserData.rounds} roundsStatus={appUserData.roundsStatus} />,
    },
    {
      title: "Evaluations",
      content: (
        <AppDevUserDataEvaluations
          evaluations={appUserData.evaluations}
          evaluationsStatus={appUserData.evaluationsStatus}
        />
      ),
    },
  ];

  return <TabsContainer sm id={"app-dev-data"} items={dataItems} overflow={"auto"} trigger={props.isActiveTab} />;
};

export default AppDevUserData;
