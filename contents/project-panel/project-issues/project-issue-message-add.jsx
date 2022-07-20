/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import ProfileTumbnail from "@components/modular/elements/profile-tumbnail";
import Title from "@components/modular/elements/title";
import FloatMenu from "@components/modular/menus/float-menu";
import Form from "@components/modular/inputs/form";
import DropdownContainer from "@components/modular/containers/dropdown-container";
// import Date from "@components/modular/elements/date";
import styles from "./project-issue-message-add-style";

const formConfig = {
  // title: "new issue message",
  elements: [
    {
      type: "textarea",
      name: "add-issue-messaage",
      // label: "First Name",
      placeholder: "Reply to the issue",
      validationSchema: Yup.string()
        .min(4, "Must be 4 characters or more")
        .max(500, "Must be 500 characters or less")
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

const ProjectIssueMessageAdd = props => {
  // console.log('[ProjectIssueMessageAdd:]', props);
  const [active, setActive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const appUser = useSelector(state => state.appUser);

  let mainCls = [
    [true, "_project-issue-message-add"],
    [true, "_grid-3col-fix-left-right"],
    [props.className, props.className],
    [active, "_active"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const submitHandler = values => {
    console.log("values received :", values);
    setActive(false);
  };

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <ProfileTumbnail profile={"random"} />
      <DropdownContainer toggled={active} className="_message-content">
        {active ? (
          <div className="_grid-2col-fix-right">
            <Title>{appUser.name + " - "}</Title>
            <FloatMenu setWidth position={"bottom-left"} items={[{ title: "reply", link: true }]} />
          </div>
        ) : (
          <Title content={"Add a Reply"} clickFn={() => setActive(true)} />
        )}
        <Form
          config={formConfig}
          onCancel={() => setActive(false)}
          onSubmit={submitHandler}
          changeFn={() => setTrigger(!trigger)}
        />
      </DropdownContainer>
      <div>
        <div className="_add-new-item"></div>
      </div>  
    </div>
  );
};

export default ProjectIssueMessageAdd;
