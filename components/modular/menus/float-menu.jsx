import { useEffect, useRef, useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Title from "@components/modular/elements/title";
import styles from "./float-menu-style";

const FloatMenu = props => {
  // console.log("[FloatMenu:]", props.activeItemTitle);
  const floatMenuItemsElRef = useRef();
  const items = props.items || [{ title: "Float-tab 1" }, { title: "Float-tab 2" }, { title: "Float-tab 3" }];
  const [active, setActive] = useState(false);
  const [thisActiveItemTitle, setThisActiveItemTitle] = useState("");
  const activeItemTitle = props.activeItemTitle ? props.activeItemTitle : thisActiveItemTitle;
  const [clsMinWidth, setClsMinWidth] = useState(undefined);

  let mainCls = [
    [true, "_float-menu"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    // [props.secondary, "secondary"],
    [props.position, props.position],
    [active, "active"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const clickHandler = item => {
    if (props.clickFn) {
      props.clickFn(item);
    } else {
      setThisActiveItemTitle(item);
    }
  };

  useEffect(() => {
    if (floatMenuItemsElRef.current) {
      if (props.setWidth && !clsMinWidth) {
        setClsMinWidth(floatMenuItemsElRef.current.getBoundingClientRect().width + 5);
      } else if (!props.setWidth && (clsMinWidth || clsMinWidth === 0)) {
        setClsMinWidth(undefined);
      }
    }
  }, [props.setWidth, clsMinWidth]);

  useEffect(() => {
    if (clsMinWidth) {
      setClsMinWidth(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.items]);

  const menuItemEls = items.map((item, index) => (
    <div key={index}>
      <Title
        className={props.className}
        style={props.style}
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        xl={props.xl}
        link
        clickFn={() => clickHandler(item.title)}
        state={item.title === activeItemTitle ? "active" : null}
        {...item}
      >
        {item.title}
      </Title>
    </div>
  ));

  return (
    <aside className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      <div className="menu-grip">
        <Title
          className={props.className}
          style={props.style}
          xs={props.xs}
          sm={props.sm}
          lg={props.lg}
          xl={props.xl}
          state="active"
          clickFn={() => setActive(!active)}
        >
          ...
        </Title>
      </div>
      <div className="menu-holder" onClickCapture={() => setActive(false)}>
        <div
          ref={floatMenuItemsElRef}
          className="items"
          onMouseLeave={() => setActive(false)}
          style={{ width: clsMinWidth }}
        >
          {menuItemEls}
          {props.children}
        </div>
      </div>
    </aside>
  );
};

export default FloatMenu;
