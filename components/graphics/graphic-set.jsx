/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import GraphicSetContent from "./graphic-set-content/graphic-set-content";
import GraphicSetExpand from "./graphic-set-content/graphic-set-expand";
import styles from "./graphic-set-style";

const GraphicSet = props => {
  // console.log("[ThemeGraphicSet:]", props);
  let mainCls = [
    [true, "_theme-graphic"],
    [props.className, props.className],
    // [props.disabled, "disabled"],
    // [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.md, "_md"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let content = <GraphicSetContent content={props.item} />;
  if (props.item === "arrows-expand-restore") content = <GraphicSetExpand toggled={props.toggled}/>;

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]} onClick={props.clickFn ? props.clickFn : null}>
      {content}
    </div>
  );
};

export default GraphicSet;
