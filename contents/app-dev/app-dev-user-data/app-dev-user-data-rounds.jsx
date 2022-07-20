/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useDispatch } from "react-redux";
import { updateAppUserRoundsStatus } from "@redux/actions/appUserData";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import LoaderContainer from "@components/graphics/loader-container";
import List from "@components/modular/containers/list";
import Loader from "@components/graphics/loader";
// import styles from "./app-dev-style";

const AppDevUserDataRounds = ({ rounds, roundsStatus }) => {
  // console.log("[in AppDevUserDataRounds]");
  const dispatch = useDispatch();

  const toggleStatus = () => {
    dispatch(updateAppUserRoundsStatus(roundsStatus === "LOADING" ? "LOADED" : "LOADING"));
  };

  let roundsEls = null;
  if (rounds) {
    // console.log(appUserData.rounds);
    roundsEls = rounds.map((round, index) => {
      return (
        <Title key={round.id + index} icon={"project-brief"} bold>
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
      );
    });
  }

  return (
    <div className="_section-container _grid-2row-fix-top">
      <div className="_head _grid-3col-fix-middle-right">
        <Title bold> {"User Rounds"}</Title>
        <Title bold> {"status : " + roundsStatus}</Title>
        <Button xs clickFn={() => toggleStatus()} disabled={!rounds} style={{ width: "80px" }}>
          {roundsStatus === "LOADING" ? "LOADED" : "LOADING"}
        </Button>
      </div>
      <div className="_body ">
        <LoaderContainer active={roundsStatus === "LOADING"}>
          <Loader sm />
        </LoaderContainer>
        <List overflow={"auto"}>{roundsEls}</List>
      </div>
      <div className="_actions _buttons-row">
        <Button xs clickFn={() => {}} disabled={!rounds}>
          clear
        </Button>
        <Button xs clickFn={() => {}} disabled={rounds?.length === 1}>
          Load One
        </Button>
        <Button xs clickFn={() => {}} disabled={rounds?.length > 1}>
          Load All
        </Button>
      </div>
    </div>
  );
};

export default AppDevUserDataRounds;
