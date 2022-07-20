/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import GraphicSet from "@components/graphics/graphic-set";
import styles from "./title-style";
import InfoOption from "@components/modular/elements/info-option";

const Title = props => {
  // console.log("[in Title :] " + props);
  const titleElRef = useRef(null);
  const router = useRouter();
  const [clsMinWidth, setClsMinWidth] = useState(undefined);
  const [clsMinHeight, setClsMinHeight] = useState(undefined);

  let mainCls = [
    [true, "_title"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.link, "_link"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
    [props.bold, "bold"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const clickHandler = () => {
    if (props.link && typeof props.link !== "boolean") {
      router.push(props.link);
    } else if (props.clickFn) {
      props.clickFn();
    } else {
      console.log("no fuction");
    }
  };

  // ===== EFFECTS ==========
  useEffect(() => {
    if (props.setWidth && !clsMinWidth) {
      setClsMinWidth(titleElRef.current.getBoundingClientRect().width * 1.02);
    } else if (!props.setWidth && (clsMinWidth || clsMinWidth === 0)) {
      setClsMinWidth(undefined);
    }
  }, [props.setWidth, clsMinWidth]);

  useEffect(() => {
    if (clsMinHeight) {
      setClsMinHeight(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children, props.setHeight, props.state]);

  useEffect(() => {
    if (props.setHeight && !clsMinHeight) {
      setClsMinHeight(titleElRef.current.getBoundingClientRect().height);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clsMinHeight]);

  // ===== ELEMENTS ==========
  let stateIndicator = null;
  let mainContent = props.content ? props.content : "untitled";
  let icon = props.icon ? <GraphicSet item={props.icon} /> : null;
  let info = props.info ? <InfoOption>{props.info}</InfoOption> : null;
  let topContent = props.topContent ? <div className="top-content">{props.topContent}</div> : null;
  let subContent = props.subContent ? <div className="sub-content">{props.subContent}</div> : null;

  if (typeof props.children === "string" || typeof props.children === "number") {
    mainContent = props.children;
  } else if (typeof props.children === "object") {
    let items = props.children;
    if (!Array.isArray(props.children)) {
      items = [props.children];
    }
    items.forEach(item => {
      if (item && item.props?.className) {
        let elClasses = item.props.className.split(" ");
        if (elClasses.includes("top-content")) {
          topContent = item;
        } else if (elClasses.includes("sub-content")) {
          subContent = item;
        } else if (elClasses.includes("info")) {
          info = <InfoOption>{item}</InfoOption>;
        } else {
          mainContent = item;
        }
      } else {
        mainContent = item;
      }
    });
  }

  if (!props.setWidth || (props.setWidth && clsMinWidth)) {
    switch (props.state) {
      case "active":
        mainCls.push("active");
        break;

      case "checked":
        stateIndicator = <div className="state-indicator checked">1</div>;
        break;

      case "selected":
        stateIndicator = <div className="state-indicator selected">0</div>;
        break;

      default:
        break;
    }
  }

  return (
    <div
      ref={titleElRef}
      className={mainCls.join(" ")}
      onClick={() => clickHandler()}
      // ** 0 is not applied to the styling
      css={[styles, { ...props.style, height: clsMinHeight || undefined, width: clsMinWidth || undefined }]}
    >
      {topContent}
      {stateIndicator}
      {icon}
      <div className="content">{mainContent}</div>
      {info}
      {subContent}
    </div>
  );
};

export default Title;
