/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import dayjs from "dayjs";
import styles from "./date-style";

// ** about the Date name: Date is an internal javascript object, 
// and can not be used when this Date component is imported (as the name Date).
// this name should be changed probably to avoid any complexity in the future

const Date = props => {
  // console.log("[in Date :] " + props);
  const date = props.date ? dayjs(props.date) : dayjs();

  let mainCls = [
    [true, "_date"],
    [props.className, props.className],
    // [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let dateDisplay = date.format("DD MMM");
  if (props.format) {
    dateDisplay = date.format(props.format);
  }

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      {dateDisplay}
    </div>
  );
};

export default Date;
