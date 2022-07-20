/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Title from "../elements/title";
import Button from "../elements/button";
import Input from "./input";
import { app_message_info_types } from "@models/app-message-types";
import styles from "./form-style";

const sampleFormConfig = {
  title: "Sign Up",
  elements: [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "first Name",
      validationSchema: Yup.string()
        .min(4, "Must be 4 characters or more")
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "last Name",
      validationSchema: Yup.string()
        .min(4, "Must be 4 characters or more")
        .max(10, "Must be 10 characters or less")
        .required("Required"),
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
      name: "submit",
      type: "confirm",
      label: "submit",
      do: values => console.log("action Item : SUBMIT : ", values),
    },
  ],
};

const Form = props => {
  //   console.log('[Form:]', props);

  let mainCls = [
    [true, "_form"],
    [true, "_grid-2row-fix-top"],
    // [true, "_gap-20"],
    [props.className, " " + props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const formConfig = props.config || sampleFormConfig;
  
  // ===== formik CONFIG ==========
  let tempInitialVal = {};
  let tempValidationSchema = {};
  formConfig.elements.forEach(element => {
    tempInitialVal[element.name] = "";
    tempValidationSchema[element.name] = element.validationSchema;
  });

  let submitFn = formConfig.actions.find(action => action.name === "submit").do;
  const submitHandler = values => {
    // console.log(values);
    if (submitFn) {
      submitFn(values);
    }
    if (props.onSubmit) {
      props.onSubmit(values);
    }
  };

  let cancelFn = formConfig.actions.find(action => action.name === "cancel").do;
  const cancelHandler = () => {
    console.log(formik.values);
    if (cancelFn) {
      cancelFn(formik.values);
    }
    if (props.onCancel) {
      props.onCancel(formik.values);
    }
    formik.resetForm();
  };
  let formikConfig = {
    initialValues: tempInitialVal,
    validationSchema: Yup.object({ ...tempValidationSchema }),
    onSubmit: submitHandler,
  };
  const changeHandler = e => {
    props.changeFn && props.changeFn();
    formik.handleChange(e);
  };
  const formik = useFormik(formikConfig);

  // ===== ELEMENTS ==========
  let formElements = formConfig.elements.map(element => (
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
      value={formik.values[element.name]}
      placeholder={element.placeholder || element.name}
      // changeFn={formik.handleChange}
      changeFn={e => changeHandler(e)}
      blurFn={formik.handleBlur}
      validation={element.validationSchema}
      message={
        formik.touched[element.name] && formik.errors[element.name]
          ? [{ content: formik.errors[element.name], info_type: app_message_info_types.error }]
          : []
      }
    />
  ));

  let formActions = formConfig.actions.map(action => {
    let btnType = "primary";
    let btnCls = "";
    switch (action.type) {
      case "confirm":
        btnCls = "_btn-confirm";
        break;

      case "decline":
        btnType = "secondary";
        btnCls = "_btn-decline";
        break;

      default:
        break;
    }

    switch (action.name) {
      case "submit":
        return (
          <Button
            xs={props.xs}
            sm={props.sm}
            lg={props.lg}
            xl={props.xl}
            key={action.name}
            type="submit"
            secondary={btnType === "secondary"}
            className={btnCls}
            disabled={Object.keys(formik.touched).length === 0 || Object.keys(formik.errors).length > 0}
          >
            {action.label}
          </Button>
        );

      case "cancel":
        return (
          <Button
            xs={props.xs}
            sm={props.sm}
            lg={props.lg}
            xl={props.xl}
            key={action.name}
            secondary={btnType === "secondary"}
            className={btnCls}
            clickFn={cancelHandler}
          >
            {action.label}
          </Button>
        );

      default:
        return (
          <Button
            xs={props.xs}
            sm={props.sm}
            lg={props.lg}
            xl={props.xl}
            key={action.name}
            secondary={btnType === "secondary"}
            className={btnCls}
          >
            {action.label}
          </Button>
        );
    }
  });

  !formConfig.title && mainCls.push("_gap-0");

  return (
    <form className={mainCls.join(" ")} css={[styles, { ...props.style }]} onSubmit={formik.handleSubmit}>
      <div className="_form_head _grid-row">
        {formConfig.title ? <Title lg bold content={formConfig.title} /> : null}
      </div>
      <div className="_form_body _grid-2row-fix-bottom">
        <div className="_grid-row">{formElements}</div>
        <div className="_form_actions _buttons-row-right">{formActions}</div>
      </div>
    </form>
  );
};

export default Form;
