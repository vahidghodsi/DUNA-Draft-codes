/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAppMessage } from "@redux/actions/app";
import { app_message_types } from "@models/app-message-types";
import FormFormik from "./form-formik";
import styles from "./form-multi-section-style";

const FormMultipage = props => {
  //   console.log('[FormMultipage:]', props);
  const dispatch = useDispatch();

  let mainCls = ["_FormMultipage"];
  const classListConditions = [
    [props.className, " " + props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ];
  classListConditions.forEach(classCondition => {
    if (classCondition[0]) {
      mainCls.push(classCondition[1]);
    }
  });

  const formConfigs = props.configs || [];
  // const [formsValues, setFormsValues] = useState(fromsConfigs.map(config => config.elements.map(el => el.name)));
  const [activeformIndex, setActiveFormIndex] = useState(0);
  const [formsValues, setFormsValues] = useState([]);

  const submitHandler = (values, index) => {
    let tempFormValues = [...formsValues];
    tempFormValues[index] = values;
    setFormsValues(tempFormValues);
    if (index < formConfigs.length - 1) {
      setActiveFormIndex(index + 1);
    } else if (index === formConfigs.length - 1) {
      // console.log("Form completed");
      let t = tempFormValues.map((value, index) => {
        for (const key in value) {
          return (
            <div key={index}>
              {key} : {value[key]}
            </div>
          );
        }
      });
      console.log(t);
      dispatch(
        updateAppMessage({
          duration: 10000, //ms
          time: "",
          type: app_message_types.alert,
          content: [<div key="1" className="content">Final Values:</div>, <div key="2" className="sub-content">{t}</div>],
          actions: [
            {
              type: "confirm",
              label: "ok",
              do: () => {
                console.log("Good to know");
              },
            },
          ],
        })
      );
    }
  };

  // console.log(fromsConfigs);
  // console.log(formsValues);
  let forms = null;
  if (formConfigs && formConfigs.length > 0) {
    forms = formConfigs.map((formConfig, index) => (
      <div key={index} className={index === activeformIndex ? "_active" : null}>
        <FormFormik
          xs={props.xs}
          sm={props.sm}
          lg={props.lg}
          xl={props.xl}
          config={formConfig}
          onSubmit={values => submitHandler(values, index)}
        />
      </div>
    ));
  }

  console.log(formsValues);
  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {forms}
    </div>
  );
};

export default FormMultipage;
