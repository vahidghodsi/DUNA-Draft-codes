/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
  generateEvaluations,
  generateRoundEvaluationSet,
  // generateProjectEvaluations,
  // generateArchitectEvaluations,
  // generateRoundEvaluations,
  // roundEvaluationsResultAnalysis,
} from "@data/simulators/evaluation-generator";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import Form from "@components/modular/inputs/form";
// import styles from "./app-dev-style";
// import List from "@components/modular/list";
import * as Yup from "yup";

// clickFn={() => console.log(generateEvaluations(10, 60, "2-1-2022", { rankBias: 2, onlyCompleted: true }))}
// 10_Evaluations_60d_date_rank2_completed
const evaluationsformConfig = {
  title: "evaluation",
  elements: [
    {
      type: "number",
      name: "count",
      label: "Count",
      placeholder: "Count",
      validationSchema: Yup.number(),
    },
    {
      type: "text",
      name: "period",
      label: "Period (days)",
      placeholder: "Period",
      validationSchema: Yup.number(),
    },
    {
      type: "text",
      name: "date",
      label: "Date",
      placeholder: "Date",
      validationSchema: Yup.date(),
    },
    {
      type: "number",
      name: "rankBias",
      label: "Rank Bias",
      placeholder: "Rank Bias",
      validationSchema: Yup.number(),
    },
    {
      type: "checkbox",
      name: "onlyCompleted",
      label: "Only Completed",
      placeholder: "Only Completed",
      validationSchema: Yup.boolean(),
    },
  ],
  actions: [
    {
      name: "cancel",
      type: "decline",
      label: "cancel",
      do: () => console.log("action Item : CANCEL"),
    },
    {
      name: "generate",
      type: "confirm",
      label: "Generate",
      // do: values => console.log("action Item : SUBMIT : ", values),
      do: values =>
        console.log(
          generateEvaluations(values.count, values.period, values.date, { rankBias: undefined, onlyCompleted: true })
        ),
    },
    {
      name: "submit",
      type: "confirm",
      label: "Add to Evaluations",
      // do: values => console.log("action Item : SUBMIT : ", values),
      do: values =>
        console.log(
          generateEvaluations(values.count, values.period, values.date, { rankBias: undefined, onlyCompleted: true })
        ),
    },
  ],
};

const AppDevDataSimulationEvaluations = () => {
  // console.log("[in AppDevDataSimulationEvaluations]");

  return (
    <div className="_section-container _grid-3row-fix-top-bottom">
      <Title bold>Evaluation Simulations</Title>
      {/* <div className="_body _grid-2row-fix-bottom"> */}
      <div style={{ padding: "8px", overflow: "auto" }}>
        <Form sm config={evaluationsformConfig} />
      </div>
      {/* </div> */}
      <div className="_actions _buttons-row _flex-wrap">
        <Button
          sm
          clickFn={() => console.log(generateEvaluations(10, 60, "2-1-2022", { rankBias: 2, onlyCompleted: true }))}
        >
          10_Evaluations_60d_date_rank2_completed
        </Button>
        <Button sm clickFn={() => console.log(generateEvaluations(10, 40, "1-5-2022"))}>
          10_Evaluations_40d_date
        </Button>
        <Button sm clickFn={() => console.log(generateEvaluations(30, 360, "1-1-2021"))}>
          30_Evaluations_360d
        </Button>
        <Button sm clickFn={() => console.log(generateRoundEvaluationSet(14, "10-1-2022"))}>
          14_EvaluationSet_date
        </Button>
        <Button
          sm
          clickFn={() =>
            console.log(
              generateRoundEvaluationSet(14, "10-1-2022", { projectIds: ["pr01", "pr02", "pr03", "pr04", "pr05"] })
            )
          }
        >
          14_EvaluationSet_date_projectIds
        </Button>
      </div>
    </div>
  );
};

export default AppDevDataSimulationEvaluations;
