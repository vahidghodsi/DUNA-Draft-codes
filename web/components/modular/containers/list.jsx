/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useEffect, useState, useRef } from "react";
import {} from "react";
import Title from "@components/modular/elements/title";
import styles from "./list-style";
import { useSelector } from "react-redux";
import Button from "../elements/button";

const List = props => {
  //   console.log("[in List :] " + props);
  // const [toggle, setToggle] = useState(props.toggled || false);
  const app = useSelector(state => state.app);
  const bodyDimHolderEl = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(undefined);
  const [dropownState, setDropdownState] = useState(props.dropdown === "minimized" ? "minimized" : "open");

  let mainCls = [
    [true, "_list"],
    [true, "_grid-2row-fix-top"],
    [true, "_gap-0"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.overflow === "visible", "content-visible"],
    [props.overflow === "auto", "content-auto"],
    [props.overflow === "scroll", "content-scroll"],
    [props.dropdown, "_dropdown"],
    [dropownState === "open", "_open"],
    [dropownState === "minimized", "_minimized"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== EFFECTS ==========
  useEffect(() => {
    if (props.dropdown) setDropdownState(props.dropdown === "minimized" ? "minimized" : "open");
  }, [props.dropdown]);

  useEffect(() => {
    if (bodyDimHolderEl.current) {
      setBodyHeight(bodyDimHolderEl.current.getBoundingClientRect().height);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children, bodyDimHolderEl, app]);

  // ===== ELEMENTS ==========
  let titleEl = props.title ? (
    <Title xs={props.xs} sm={props.sm} xl={props.xl} lg={props.lg} bold>
      {props.title}
    </Title>
  ) : null;

  let filtersEls = props.filters ? (
    <Fragment>
      <div className="_filters_item">
        <span>me included</span>
        <div>X</div>
      </div>
      <div className="_filters_item">
        <span>urgent</span>
        <div>X</div>
      </div>
      <div className="_filters_item">
        <span>urgent</span>
        <div>X</div>
      </div>
      <div className="_filters_item">
        <span>urgent</span>
        <div>X</div>
      </div>
      <div className="_filters_item new-item">
        <div>+</div>
      </div>
    </Fragment>
  ) : null;

  let counterEl = props.counter ? (
    Array.isArray(props.children) ? (
      <Title bold className="_counter" style={!filtersEls ? { position: "absolute", top: "4px", right: "0px" } : {}}>
        {Array.isArray(props.children) ? props.children.length + " items" : ""}
      </Title>
    ) : (
      <div></div>
    )
  ) : null;
  //  <div className="_counter">20/{props.children.length}</div>

  if (titleEl || filtersEls || counterEl) mainCls.push("_gap-8");

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      <div className="_list_head _grid-row _gap-8">
        <div className="_grid-2col-fix-right _align-center">
          {titleEl}
          {props.dropdown ? (
            <div>
              <Button
                white
                xs
                clickFn={() => (dropownState === "open" ? setDropdownState("minimized") : setDropdownState("open"))}
              >
                {">"}
              </Button>
            </div>
          ) : null}
        </div>
        {filtersEls || counterEl ? (
          <div className="_grid-2col-fix-right">
            <div className="_filters">{filtersEls}</div>
            {counterEl}
          </div>
        ) : null}
      </div>
      <div className="_list_body" style={props.dropdown && dropownState === "open" ? { height: bodyHeight } : {}}>
        {props.dropdown ? (
          <div className="_dim-holder" ref={bodyDimHolderEl}>
            {props.dropdown ? <div className="_list_body_container _grid-row _gap-8">{props.children}</div> : props.children}
          </div>
        ) : (
          <div className="_list_body_container _grid-row _gap-8">
            {props.children}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
