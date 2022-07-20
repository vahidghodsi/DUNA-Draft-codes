/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
// import { useSelector } from "react-redux";
import styles from "./dropdown-container-style";

const DropdownContainer = props => {
  // console.log("[in DropdownContainer :] " + props);
  const bodyDimHolderEl = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(undefined);
  // const [toggled, setToggled] = useState(props.toggled || false);
  const toggled = props.toggled;

  let mainCls = [
    [true, "_height-toggle"],
    [true, "_grid-2row-fix-top"],
    [props.className, props.className],
    [props.toggled, "_toggled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========

  useEffect(() => {
    if (bodyDimHolderEl.current) {
      setBodyHeight(bodyDimHolderEl.current.getBoundingClientRect().height);
      bodyDimHolderEl.current.addEventListener(
        "animationend",
        () => {
          setBodyHeight(bodyDimHolderEl.current.getBoundingClientRect().height);
        },
        { once: true }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children, props.toggled, bodyDimHolderEl]);

  // ===== ELEMENTS ==========
  let headContent = props.children;
  let bodyContent = null;

  if (Array.isArray(props.children)) {
    headContent = props.children[0];
    bodyContent = props.children[1];
  }

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      <div className="head">{headContent}</div>
      <div className="body" style={toggled ? { height: bodyHeight } : {}}>
        <div className="_dim-holder" ref={bodyDimHolderEl}>
          {bodyContent}
        </div>
      </div>
    </div>
  );
};

export default DropdownContainer;
