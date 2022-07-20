/* eslint-disable no-unused-vars */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAppMessage } from "@redux/actions/app";
import { app_message_info_types, app_message_types } from "@models/app-message-types";
import FormMultiStepSection from "./form-multi-step-section";
import Title from "../elements/title";
import Input from "./input";
import Button from "../elements/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./form-multi-section-style";

const FormMultiStep = props => {
  //   console.log('[FormMultiStep:]', props);
  const dispatch = useDispatch();
  const formConfig = props.config || [];
  const formElements = formConfig.elements || [];
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isFormComplete, setIsFormComplete] = useState(false);

  let mainCls = [
    [true, "_FormMultiStep"],
    [true, "_grid-3row-fix-top-bottom"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let allElements = [];
  let tempInitialVal = {};
  let tempValidationSchema = {};
  formElements.forEach(section => {
    section.forEach(element => {
      allElements.push(element);
      tempInitialVal[element.name] = "";
      tempValidationSchema[element.name] = element.validationSchema;
    });
  });

  const backHandler = () => {
    if (activeSectionIndex > 0) {
      setActiveSectionIndex(activeSectionIndex - 1);
    }
  };

  const clickHandler = () => {
    // console.log("is last Section: ", isLastSection);
    if (activeSectionIndex < formElements.length - 1) {
      setActiveSectionIndex(activeSectionIndex + 1);
      setIsFormComplete(false);
    } else if (activeSectionIndex === formElements.length - 1) {
      setIsFormComplete(true);
    }
  };

  let submitFn = formConfig.actions.find(action => action.name === "submit").do;
  const submitHandler = values => {
    if (isFormComplete) {
      if (submitFn) {
        submitFn(values);
      }
      if (props.onSubmit) {
        props.onSubmit(values);
      }
      // let t = [];
      // for (const key in values) {
      //   t.push(
      //     <div key={key}>
      //       {key} : {values[key]}
      //     </div>
      //   );
      // }
      // dispatch(
      //   updateAppMessage({
      //     duration: 10000, //ms
      //     time: "",
      //     type: app_message_types.alert,
      //     content: [
      //       <div key="1" className="content">
      //         Final Values:
      //       </div>,
      //       <div key="2" className="sub-content">
      //         {t}
      //       </div>,
      //     ],
      //     actions: [
      //       {
      //         type: "confirm",
      //         label: "ok",
      //         do: () => {
      //           console.log("Good to know");
      //         },
      //       },
      //     ],
      //   })
      // );
      // dispatch(
      //   updateAppMessage({
      //     duration: 2000, //ms
      //     type: app_message_types.alert,
      //     info_type: app_message_info_types.success,
      //     content: "Data submitted",
      //   })
      // );
    }
  };

  let formikConfig = {
    initialValues: tempInitialVal,
    validationSchema: Yup.object({ ...tempValidationSchema }),
    onSubmit: submitHandler,
  };
  const formik = useFormik(formikConfig);

  // ===== structure errors and touched base on sections =====
  const errors = formik.errors;
  let formErrors = [];
  let formTouched = [];
  formElements.forEach(section => {
    let thisSectionErrors = {};
    let thisSectionTouched = {};
    section.forEach(element => {
      if (errors[element.name]) {
        thisSectionErrors[element.name] = errors[element.name];
      }
      if (formik.touched[element.name]) {
        thisSectionTouched[element.name] = formik.touched[element.name];
      }
    });
    formErrors.push(thisSectionErrors);
    formTouched.push(thisSectionTouched);
  });
  // console.log(formTouched);

  // ===== construct form elements ==========
  let fieldsEls = null;
  if (formElements && formElements.length > 0) {
    fieldsEls = formElements.map((section, index) => (
      <FormMultiStepSection key={index} sectionIndex={index} activeSectionIndex={activeSectionIndex}>
        {section.map(element => {
          if (index < activeSectionIndex && formik.values[element.name]) {
            return (
              <div key={element.name} className="value-display">
                <Title lg bold>
                  <div className="top-content"> {element.label} </div>
                  {formik.values[element.name]}
                </Title>
              </div>
            );
          } else if (index === activeSectionIndex) {
            return (
              <Input
                xs={props.xs}
                sm={props.sm}
                lg={props.lg}
                xl={props.xl}
                key={element.name}
                id={element.name}
                name={element.name}
                label={element.label}
                type={element.type || "text"}
                value={formik.values[element.name] ? formik.values[element.name] : ""}
                placeholder={element.placeholder || element.name}
                // className={index < activeSectionIndex ? "complete" : "active"}
                changeFn={formik.handleChange}
                blurFn={formik.handleBlur}
                validation={element.validationSchema}
                message={
                  formik.touched[element.name] && errors[element.name]
                    ? [{ content: errors[element.name], info_type: app_message_info_types.error }]
                    : []
                }
              />
            );
          }
        })}
      </FormMultiStepSection>
    ));
  }

  const isLastSection = activeSectionIndex === formElements.length - 1 ? true : false;

  return (
    <form className={mainCls.join(" ")} css={[styles, { ...props.style }]} onSubmit={formik.handleSubmit}>
      <div className="_form_head">{formConfig && formConfig.title}</div>
      <div className="_form_body">{fieldsEls}</div>
      <div className="_actions">
        <div className="proceed">
          <Button
            type={isLastSection ? "submit" : "button"}
            disabled={
              Object.keys(formTouched[activeSectionIndex]).length == 0 ||
              Object.keys(formErrors[activeSectionIndex]).length > 0
            }
            clickFn={clickHandler}
          >
            {isLastSection ? "Finish" : "Continue"}
          </Button>
        </div>
        {/* <div className="cancel">
          <Button secondary>cancel</Button>
        </div> */}
        <div className={activeSectionIndex === 0 ? "back _condensed" : "back"}>
          <Button secondary clickFn={backHandler} disabled={activeSectionIndex === 0}>
            back
          </Button>
        </div>
        <div className="_counter">Step {activeSectionIndex + 1 + " / " + formElements.length}</div>
      </div>
    </form>
  );
};

export default FormMultiStep;
