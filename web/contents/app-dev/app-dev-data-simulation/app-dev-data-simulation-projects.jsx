/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import { projectGenerator } from "@data/simulators/project-generator";
import Title from "@components/modular/elements/title";
import Button from "@components/modular/elements/button";
import Form from "@components/modular/inputs/form";
// import styles from "./app-dev-style";
// import List from "@components/modular/list";
import * as Yup from "yup";

// config: type | scope | location | locationCord | attributes
// (baseDate = "1-1-2022", project_id, round_id, config = {})
const projectsformConfig = {
  title: "project",
  elements: [
    {
      type: "text",
      name: "title",
      label: "Title",
      placeholder: "Title",
      validationSchema: Yup.string(),
    },
    {
      type: "date",
      name: "date",
      label: "Date",
      placeholder: "Date",
      validationSchema: Yup.date(),
    },
    {
      type: "text",
      name: "type",
      label: "Type",
      placeholder: "Type",
      validationSchema: Yup.string(),
    },
    {
      type: "text",
      name: "location",
      label: "location",
      placeholder: "location",
      validationSchema: Yup.string(),
    },
  ],
  actions: [
    {
      name: "cancel",
      type: "decline",
      label: "clear",
      do: () => console.log("action Item : CANCEL"),
    },
    {
      name: "generate",
      type: "confirm",
      label: "Generate",
      // do: values => console.log("action Item : SUBMIT : ", values),
      do: values =>
        console.log(
          projectGenerator(values.date, undefined, undefined, {
            title: values.title,
            type: values.type,
            location: values.location,
          })
        ),
    },
    {
      name: "submit",
      type: "confirm",
      label: "Add to Projects",
      // do: values => console.log("action Item : SUBMIT : ", values),
      do: values =>
        console.log(
          projectGenerator(values.date, undefined, undefined, {
            title: values.title,
            type: values.type,
            location: values.location,
          })
        ),
    },
  ],
};

const AppDevDataSimulationProjects = () => {
  // console.log("[in AppDevDataSimulationProjects]");

  return (
    <div className="_section-container _grid-3row-fix-top-bottom">
      <Title bold>Projects Simulations</Title>
      {/* <div className="_body _grid-2row-fix-bottom"> */}
      <div style={{ padding: "8px", overflow: "auto" }}>
        <Form sm config={projectsformConfig} />
      </div>
      {/* </div> */}
      <div className="_actions _buttons-row">
        <Button sm clickFn={() => console.log(projectGenerator())}>
          One Project
        </Button>
        {/* <Button xs clickFn={() => console.log(roundGenerator())}>
            -
          </Button> */}
      </div>
    </div>
  );
};

export default AppDevDataSimulationProjects;
