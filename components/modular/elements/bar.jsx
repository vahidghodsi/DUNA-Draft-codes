// import { useEffect, useRef, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import styles from "./bar-style";

const Bar = props => {
  //   console.log('[Bar:]', props);
  // const [toggled, setToggled] = useState(props.toggled || false);
  const [toggled, setToggled] = useState(false);

  let mainCls = ["_bar"];
  const classListConditions = [
    [props.className, " " + props.className],
    [props.toggle, "toggle"],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
    [toggled, "toggled"],
  ];
  classListConditions.forEach(classCondition => {
    if (classCondition[0]) {
      mainCls.push(classCondition[1]);
    }
  });

  useEffect(() => {
    if (props.toggled != undefined) setToggled(props.toggled);
  }, [props.toggled]);

  let fillWdith = props.fillLevel ? props.fillLevel + "%" : 0;

  const clickHandler = () => {
    if (!props.disabled && props.toggle) {
      setToggled(!toggled);
    }
  };

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]} onClick={() => clickHandler()}>
      <div className="border">
        <div className="fill" style={{ width: fillWdith }}></div>
      </div>
    </div>
  );
};

export default Bar;
