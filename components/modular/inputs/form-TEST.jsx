/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import Button from "../elements/button";
import styles from "./form-style";
import Input from "./input";
// import { app_message_info_types } from "@models/app-message-types";

const Form = props => {
  //   console.log('[Form:]', props);

  let mainCls = ["_Form"];
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

  let tempFormElements = props.config.elements ? { ...props.config.elements } : {};
  for (const key in tempFormElements) {
    tempFormElements[key].value = "";
    tempFormElements[key].edited = false;
    tempFormElements[key].isValid = true;
    tempFormElements[key].ValidityMes = undefined;
  }
  //   const [formFields, setFormFields] = useState(tempFormElements);
  // const [formElements, setFormElements] = useState(tempFormElements);
  const [formElements] = useState(tempFormElements);
  // const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValid] = useState(false);

  //   const submitHandler = () => {
  //     if (props.actions.submit) {
  //       // console.log("[IN SUBMIT-NEW USER] ", formFields);
  //       props.actions.submit.click(formFields);
  //     }
  //   };

  const changeHandler = value => {
    console.log("[Form:]", value);
  };

  const focusHandler = e => {
    console.log("[Form:]");
    console.log(e.target);
  };

  const blurHandler = e => {
    console.log("[Form:]");
    console.log(e.target);
  };

  let formItemsEl = [];
  for (const key in formElements) {
    formItemsEl.push({
      id: key,
      ...formElements[key],
    });
  }

  formItemsEl = formItemsEl.map(item => {
    switch (item.config.type) {
      case "text":
        return (
          <Input
            key={item.id}
            id={item.id}
            name={item.config.name}
            placeholder={item.config.placeholder}
            changeFn={value => changeHandler(value)}
            focusFn={e => focusHandler(e)}
            blurFn={e => blurHandler(e)}
            //   style={props.styles.elements ? props.styles.elements : "Form__item"}
          />
        );

      default:
        break;
    }
  });

  let formActionsEl = [];
  for (const key in props.config.actions) {
    formActionsEl.push({
      id: key,
      ...props.config.actions[key],
    });
  }
  formActionsEl = formActionsEl.map(action => {
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
    return (
      <Button
        key={action.id}
        lg={props.lg}
        secondary={btnType === "secondary"}
        disabled={action.id === "submit" && !isFormValid}
        className={btnCls}
        clickFn={() => action.do()}
      >
        {action.id}
      </Button>
    );
  });

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {formItemsEl}
      <div>{formActionsEl}</div>
    </div>
  );
};

export default Form;

/* 
{
    name : "Sign Up", 
    actions : {
        submit : {
            click : () => {}, 
            type: "confirm" or "decline"    
        }
    },  
    elements : {
        firstName : {
            type: "input",
            config: {
                name: "first-name",
                type: "text",
                placeholder: "first Name"
            },
            validation: {
                required: true,
                minLength: 6
            }
        },
        lastName : {
            type: "input",
            config: {
                name: "first-name",
                type: "text",
                placeholder: "first Name"
            },
            validation: {
                required: true,
                minLength: 6
            }  
        }
    }

}
    
*/
