import { Fragment, useEffect, useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styles from "./input-style";
import { app_message_info_types } from "@models/app-message-types";

const Input = props => {
  //   console.log('[Input:]', props);
  const [value, setValue] = useState(props.value || "");
  const [touched, setTouched] = useState(false);
  const name = props.name;

  let mainCls = [
    [true, "_input"],
    [true, "_grid-3row"],
    [true, "_gap-0"],
    [props.type, "_" + props.type],
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

  const changeHandler = e => {
    if (props.changeFn) {
      props.changeFn(e);
    }
    setValue(e.target.value);
    setTouched(true);
  };

  const focusHandler = e => {
    if (props.focusFn) {
      props.focusFn(e);
    } else {
      // console.log(e.target);
    }
  };

  const blurHandler = e => {
    if (props.blurFn) {
      props.blurFn(e);
    } else {
      // console.log(e.target);
    }
    setTouched(true);
  };

  useEffect(() => {
    if (props.value !== value) {
      setValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

  let labelEl = props.label ? (
    <label htmlFor={name} className="_label">
      {props.label}
    </label>
  ) : null;

  let message = null;
  // console.log(props.message);
  if (props.validation) {
    if (props.message && props.message.length > 0) {
      let tempMessage = Array.isArray(props.message)
        ? props.message
        : [{ content: props.message, info_type: app_message_info_types.info }];

      message = (
        <div className="_message">
          {tempMessage.map((msg, index) => (
            <div key={index} className={msg.info_type ? "_text-" + msg.info_type : null}>
              {"- " + msg.content}
            </div>
          ))}
        </div>
      );

      let tempCls = tempMessage.find(msg => msg.info_type !== "info");
      if (tempCls) {
        mainCls.push("_" + tempCls.info_type);
      }
    } else if (touched) {
      mainCls.push("_success");
    }
  }

  let inputEl = null;
  switch (props.type) {
    case "checkbox":
      inputEl = (
        <input
          id={props.id || name}
          name={name}
          form={props.form || undefined}
          type={props.type}
          value={value}
          disabled={props.disabled}
          onChange={e => changeHandler(e)}
          onFocus={e => focusHandler(e)}
          onBlur={e => blurHandler(e)}
        />
      );
      break;

    case "textarea":
      inputEl = (
        <textarea
          id={props.id || name}
          name={name}
          form={props.form || undefined}
          type={props.type}
          value={value}
          disabled={props.disabled}
          placeholder={props.placeholder || "text area"}
          onChange={e => changeHandler(e)}
          onFocus={e => focusHandler(e)}
          onBlur={e => blurHandler(e)}
        />
      );
      break;

    default:
      inputEl = (
        <input
          id={props.id || name}
          name={name}
          type={props.type || "text"}
          value={value}
          disabled={props.disabled}
          placeholder={props.placeholder || "Write something"}
          onChange={e => changeHandler(e)}
          onFocus={e => focusHandler(e)}
          onBlur={e => blurHandler(e)}
        />
      );
      break;
  }

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {props.type === "checkbox" ? (
        <Fragment>
          <div className="_grid-2col-fix-left _align-center">
            {inputEl}
            {labelEl}
          </div>
          {message}
        </Fragment>
      ) : (
        <Fragment>
          {labelEl}
          {inputEl}
          {message}
        </Fragment>
      )}
    </div>
  );
};

export default Input;
