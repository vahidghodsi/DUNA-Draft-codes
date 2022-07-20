// import Form from "@components/modular/inputs/form";
import * as Yup from "yup";
import Form from "@components/modular/inputs/form";
import List from "@components/modular/containers/list";
// import FormMultipage from "@components/modular/inputs/form-multipage";
import FormMultiStep from "@components/modular/inputs/form-multi-step";

const UIForms = () => {
  // console.log('[UIForms:]', props);

  return (
    <div className={"_ui-forms _main-content"}>
      <div
        className={"_container"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "auto",
          maxWidth: "750px"
        }}
      >
        <div className="_spacer-50"></div>
        {/* <List title={formConfig.name}>
          <FormMultipage configs={[formConfig1, formConfig2, formConfig3]} />
        </List> */}
        {/* <List title={formConfig.name}>
          <Form lg config={formConfig} />
        </List>
        <List title={formConfig.name}>
          <FormMultiStep xl config={formConfigMultiple} />
        </List> */}
        <List lg title={"form types"}>
          <Form  config={formConfig} />
          <FormMultiStep xl config={formConfigMultiple} />
        </List>

        <div className="_spacer-50"></div>
      </div>
    </div>
  );
};

export default UIForms;

// ===== old structure - without formik =====
// eslint-disable-next-line no-unused-vars
const formConfigOld = {
  name: "Sign Up",
  elements: {
    firstName: {
      type: "input",
      config: {
        name: "first-name",
        type: "text",
        placeholder: "first Name",
      },
      validation: {
        required: true,
        minLength: 6,
      },
    },
    lastName: {
      type: "input",
      config: {
        name: "last-name",
        type: "text",
        placeholder: "last Name",
      },
      validation: {
        required: true,
        minLength: 6,
      },
    },
  },
  actions: {
    cancel: {
      do: () => console.log("CANCEL"),
      type: "decline",
    },
    submit: {
      do: () => console.log("SUBMIT"),
      type: "confirm",
    },
  },
};

// eslint-disable-next-line no-unused-vars
const formConfig = {
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
    {
      type: "checkbox",
      name: "registered",
      label: "Registered",
      placeholder: "Registered",
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

// eslint-disable-next-line no-unused-vars
const formConfig1 = {
  name: "Sign Up",
  elements: [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "First Name",
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
      label: "continue",
      do: values => console.log("action Item : SUBMIT : ", values),
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const formConfig2 = {
  name: "Sign Up",
  elements: [
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Last Name",
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
      name: "back",
      type: "decline",
      label: "back",
      do: () => console.log("action Item : CANCEL"),
    },
    {
      name: "submit",
      type: "confirm",
      label: "continue",
      do: values => console.log("action Item : SUBMIT : ", values),
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const formConfig3 = {
  name: "Sign Up",
  elements: [
    {
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "Email",
      validationSchema: Yup.string().email("Invalid email address").required("Required"),
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
      name: "back",
      type: "decline",
      label: "back",
      do: () => console.log("action Item : CANCEL"),
    },
    {
      name: "submit",
      type: "confirm",
      label: "complete",
      do: values => console.log("action Item : SUBMIT : ", values),
    },
  ],
};

const formConfigMultiple = {
  title: "Sign Up",
  elements: [
    [
      {
        type: "text",
        name: "firstName",
        label: "First Name",
        placeholder: "First Name",
        validationSchema: Yup.string()
          .min(4, "Must be 4 characters or more")
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      },
    ],
    [
      {
        type: "text",
        name: "lastName",
        label: "Last Name",
        placeholder: "Last Name",
        validationSchema: Yup.string()
          .min(4, "Must be 4 characters or more")
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      },
      {
        type: "text",
        name: "title",
        label: "Title",
        placeholder: "Title",
        validationSchema: Yup.string().min(2, "Must be 2 characters or more").required("Required"),
      },
    ],
    [
      {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "Email",
        validationSchema: Yup.string().email("Invalid email address").required("Required"),
      },
    ],
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
      label: "continue",
      do: values => console.log("action Item : SUBMIT : ", values),
    },
  ],
};

// eslint-disable-next-line no-unused-vars
const formConfigMultipleSectionBased = {
  title: "Sign Up",
  sections: [
    {
      elemenst: [
        {
          type: "text",
          name: "firstName",
          label: "First Name",
          placeholder: "First Name",
          validationSchema: Yup.string()
            .min(4, "Must be 4 characters or more")
            .max(10, "Must be 10 characters or less")
            .required("Required"),
        },
      ],
      endMessage: "Welcome",
    },
    {
      elements: [
        {
          type: "text",
          name: "lastName",
          label: "Last Name",
          placeholder: "Last Name",
          validationSchema: Yup.string()
            .min(4, "Must be 4 characters or more")
            .max(10, "Must be 10 characters or less")
            .required("Required"),
        },
        {
          type: "text",
          name: "title",
          label: "Title",
          placeholder: "Title",
          validationSchema: Yup.string().min(2, "Must be 2 characters or more").required("Required"),
        },
      ],
      endMessage: undefined,
    },
    {
      elements: [
        {
          type: "text",
          name: "email",
          label: "Email",
          placeholder: "Email",
          validationSchema: Yup.string().email("Invalid email address").required("Required"),
        },
      ],
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
      label: "continue",
      do: values => console.log("action Item : SUBMIT : ", values),
    },
  ],
};
