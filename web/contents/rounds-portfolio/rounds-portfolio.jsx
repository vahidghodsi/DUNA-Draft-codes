/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import RoundCard from "@components/round/round-card";
import Loader from "@components/graphics/loader";
import LoaderContainer from "@components/graphics/loader-container";
import styles from "./rounds-portfolio-style";

// const DashboardArchitect = props => {
const RoundsPortfolio = props => {
  console.log("[DashboardArchitect:]", props);
  // const [active, setActive] = useState(false);
  const rounds = props.appUserData.rounds || [];
  const roundsStatus = props.appUserData.roundsStatus;

  let mainCls = [
    [true, "_rounds-portfolio"],
    [true, "_main-content"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========


  // ===== ELEMENTS ==========
  let roundEls = rounds ? rounds.map(round => <RoundCard key={round.id} round={round}></RoundCard>) : null;


  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-3col">
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
      </div>
    </div>
  );
};

export default RoundsPortfolio;
