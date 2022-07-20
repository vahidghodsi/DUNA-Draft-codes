/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import AppDevDataSimulationProjects from "./app-dev-data-simulation-projects";
import AppDevDataSimulationEvaluations from "./app-dev-data-simulation-evaluations";
import AppDevDataSimulationRounds from "./app-dev-data-simulation-rounds";
import { briefGenerator } from "@data/simulators/brief-generator";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import TabsContainer from "@components/modular/containers/tabs-container";
// import styles from "./app-dev-style";
// import List from "@components/modular/list";


const AppDevDataSimulation = () => {
  // console.log("[in AppDevDataSimulation]");

  const profilesSimulations = (
    <div className="_section-container _grid-3row-fix-top-middle">
      <Title bold>Profile Simulations</Title>
      <div className="_body _grid-2row-fix-bottom">
        <Title> Funtions to generate profile</Title>
        <div className="_actions _buttons-row">
          {/* <Button xs clickFn={() => console.log(roundGenerator())}>
            One Round
          </Button>
          <Button xs clickFn={() => console.log(roundGenerator())}>
            -
          </Button> */}
        </div>
      </div>
    </div>
  );

  const briefSimulations = (
    <div className="_section-container _grid-3row-fix-top-middle">
      <Title bold>Brief Simulations</Title>
      <div className="_body _grid-2row-fix-bottom">
        <Title> Funtions to generate Briefs</Title>
        <div className="_actions _buttons-row">
          <Button xs clickFn={() => console.log(briefGenerator())}>
            One Brief
          </Button>
        </div>
      </div>
    </div>
  );

  const dataItems = [
    {
      title: "profiles",
      content: profilesSimulations,
    },
    {
      title: "Projects",
      content: <AppDevDataSimulationProjects />,
    },
    {
      title: "Rounds",
      content: <AppDevDataSimulationRounds />,
    },
    {
      title: "Evaluations",
      content: <AppDevDataSimulationEvaluations />,
    },
    {
      title: "Brief",
      content: briefSimulations,
    },
  ];

  return <TabsContainer sm id={"app-dev-data-simulation"} items={dataItems} overflow={"auto"} />;
};

export default AppDevDataSimulation;
