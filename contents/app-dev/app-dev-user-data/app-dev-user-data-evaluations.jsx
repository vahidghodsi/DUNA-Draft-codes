/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useDispatch } from "react-redux";
import { updateAppUserEvaluationsStatus } from "@redux/actions/appUserData";
import dayjs from "dayjs";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import LoaderContainer from "@components/graphics/loader-container";
import Loader from "@components/graphics/loader";
import List from "@components/modular/containers/list";
// import styles from "./app-dev-style";
// import List from "@components/modular/list";

const AppDevUserDataEvaluations = ({ evaluations, evaluationsStatus }) => {
  // console.log("[in AppDevUserDataEvaluations]");
  const dispatch = useDispatch();

  const toggletStatus = () => {
    dispatch(updateAppUserEvaluationsStatus(evaluationsStatus === "LOADING" ? "LOADED" : "LOADING"));
  };

  let evaluationsEls = null;
  if (evaluations) {
    // console.log(appUserData.evaluations);
    evaluationsEls = evaluations.map((evaluation, index) => {
      // return <div key={index}>nothing</div>;
      return (
        <Title key={evaluation.id + index} icon={"project-design"} bold>
          {evaluation.title || "Project's Title"}
          <div className="top-content">
            {"overall Score : " + evaluation.overallScore} | {"rank : " + evaluation.rank}
          </div>
          <div className="sub-content">
            {evaluation.created_at && <div> {dayjs(evaluation.created_at).format("DD MMM")}</div>}
            {evaluation.aspectsScore && (
              <div>
                <div> Aspect Score: {evaluation.aspectsScore}</div>
              </div>
            )}
          </div>
        </Title>
      );
    });
  }

  return (
    <div className="_section-container _grid-3row-fix-top-bottom">
      <div className="_head _grid-3col-fix-middle-right">
        <Title bold> {"User Evaluations"}</Title>
        <Title bold> {"status : " + evaluationsStatus}</Title>
        <Button xs clickFn={() => toggletStatus()} disabled={!evaluations} style={{ width: "80px" }}>
          {evaluationsStatus === "LOADING" ? "LOADED" : "LOADING"}
        </Button>
      </div>
      <div className="_body ">
        <LoaderContainer active={evaluationsStatus === "LOADING"}>
          <Loader sm />
        </LoaderContainer>
        <List overflow={"auto"}>{evaluationsEls}</List>
      </div>
      <div className="_actions _buttons-row">
        <Button xs clickFn={() => {}} disabled={!evaluations}>
          clear
        </Button>
        <Button xs clickFn={() => {}} disabled={evaluations?.length === 1}>
          Load One
        </Button>
        <Button xs clickFn={() => {}} disabled={evaluations?.length > 1}>
          Load All
        </Button>
      </div>
    </div>
  );

};

export default AppDevUserDataEvaluations;
