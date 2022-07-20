/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import { useState } from "react";
import Title from "@components/modular/elements/title";
import styles from "./nav-menu-style";

const NavMenu = props => {
  // console.log('[Nav-Menu:]', props);
  let mainCls = ["_nav-menu"];
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

  let items = props.items || [
    {
      content: `Nav 1`,
      link: "/",
    },
    {
      content: "Nav 2",
      link: "/",
    },
    {
      content: "Nav 3",
      link: "/",
    },
  ];
  if (props.items && !Array.isArray(props.items)) {
    items = [props.items];
  }

  const navItems = items.map((item, index) => (
    <Title
      key={index}
      className={props.className}
      style={props.style}
      xs={props.xs}
      sm={props.sm}
      lg={props.lg}
      xl={props.xl}
      //   link={item.link}
      {...item}
    />
  ));

  return (
    <nav
      className={mainCls.join(" ")}
      css={[styles, { ...props.style }]}
      //   onClick={() => setActive(!active)}
    >
      {/* <div className="items"> */}
      {navItems}
      {/* </div> */}
    </nav>
  );
};

export default NavMenu;
