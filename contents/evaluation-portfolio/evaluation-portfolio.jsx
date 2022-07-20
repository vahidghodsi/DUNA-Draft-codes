/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
//import { useState } from 'react';
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import Loader from "@components/graphics/loader";
import LoaderContainer from "@components/graphics/loader-container";
import styles from "./evaluation-portfolio-style";
import EvaluationCard from "@components/evaluation/evaluation-card";

// const DashboardArchitect = props => {
const EvaluationPortfolio = props => {
  console.log("[DashboardArchitect:]", props);
  // const [active, setActive] = useState(false);
  const evaluations = props.appUserData.evaluations || [];
  const evaluationsStatus = props.appUserData.evaluationsStatus;

  let mainCls = [
    [true, "_rounds-portfolio"],
    [true, "_main-content"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========

  // ===== ELEMENTS ==========
  let evaluationsEls = evaluations
    ? evaluations.map(evaluation => <EvaluationCard key={evaluation.id} evaluation={evaluation}></EvaluationCard>)
    : null;

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="_container _grid-3col">
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

export default EvaluationPortfolio;
