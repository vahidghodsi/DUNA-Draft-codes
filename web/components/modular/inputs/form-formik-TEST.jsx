/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../elements/button";
import styles from "./form-style";
import Input from "./input";
import { app_message_info_types } from "@models/app-message-types";

const FormFormikTest = props => {
  //   console.log('[FormFormikTest:]', props);

  let mainCls = ["_FormFormik"];
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(4, "Must be 4 characters or more")
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      lastName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  console.log(formik);
  // console.log(formik.values);
  // console.log(formik.errors);
  // console.log(formik.touched);

  return (
    <form className={mainCls.join(" ")} css={[styles, { ...props.style }]} onSubmit={formik.handleSubmit}>
      <Input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name"
        // value={formik.values.firstName}
        changeFn={formik.handleChange}
        blurFn={formik.handleBlur}
        message={
          formik.touched.firstName && formik.errors.firstName
            ? [{ content: formik.errors.firstName, info_type: app_message_info_types.error }]
            : []
        }
      />
      <Input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        // value={formik.values.lastName}
        changeFn={formik.handleChange}
        blurFn={formik.handleBlur}
        message={
          formik.touched.lastName && formik.errors.lastName
            ? [{ content: formik.errors.lastName, info_type: app_message_info_types.error }]
            : []
        }
      />
      <Input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        // value={formik.values.email}
        changeFn={formik.handleChange}
        blurFn={formik.handleBlur}
        message={
          formik.touched.email && formik.errors.email
            ? [{ content: formik.errors.email, info_type: app_message_info_types.error }]
            : []
        }
      />
      <div className="actions">
        <Button
          type="submit"
          disabled={Object.keys(formik.touched).length === 0 || Object.keys(formik.errors).length > 0}
        >
          submit
        </Button>
      </div>
    </form>
  );
};

export default FormFormikTest;
