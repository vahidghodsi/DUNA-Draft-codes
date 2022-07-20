/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { roundGenerator } from "@data/simulators/round-generator";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";

const AppDevDataSimulationRounds = () => {
  // console.log("[in AppDevDataSimulationRounds]");

  return (
    <div className="_section-container _grid-3row-fix-top-middle">
      <Title bold>Round Simulations</Title>
      <div className="_body _grid-2row-fix-bottom">
        <Title> Funtions to generate Rounds</Title>
        <div className="_actions _buttons-row">
          <Button xs clickFn={() => console.log(roundGenerator())}>
            One Round
          </Button>
          <Button xs clickFn={() => console.log(roundGenerator())}>
            -
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppDevDataSimulationRounds;
