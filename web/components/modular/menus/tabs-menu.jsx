/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import Title from "@components/modular/elements/title";
import FloatMenu from "./float-menu";
import styles from "./tabs-menu-style";

const TabsMenu = props => {
  // console.log("[TabsMenu:]", props);
  const tabMenuElRef = useRef(null);
  // const app = useSelector(state => state.app);/
  const appWinodw = useSelector(state => state.appWindow);
  let items = props.items || ["tab 1", "tab 2", "tab 3"];

  const [thisActiveItemTitle, setThisActiveItemTitle] = useState("");
  const activeItemTitle = props.activeItemTitle ? props.activeItemTitle : thisActiveItemTitle;
  // const [tabMenuBound, setTabMenuBound] = useState(undefined);
  const [sidetabs, setSidetabs] = useState([]);
  const [tabsSettWidth, setTabsSetWidth] = useState(true);

  let mainCls = [
    [true, "_tabs-menu"],
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

  const clickHandler = item => {
    if (props.clickFn) {
      props.clickFn(item);
    } else {
      setThisActiveItemTitle(item);
    }
  };

  useEffect(() => {
    if (tabMenuElRef) {
      const menuElBound = tabMenuElRef.current.getBoundingClientRect();
      if (menuElBound.right !== 0) {
        let tempSideTabs = [];
        tabEls.forEach((tab, index) => {
          let tabEl = document.getElementById(tab.props.id);
          if (menuElBound.right < tabEl.getBoundingClientRect().right + 15) {
            tempSideTabs.push(items[index]);
            tabEl.classList.add("offside");
          } else {
            tabEl.classList.remove("offside");
          }
        });
        setSidetabs(tempSideTabs);
        // set the tabsSetWidth to false to trigger recalculation
        setTabsSetWidth(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appWinodw, props.setWidth, props.trigger]);

  useEffect(() => {
    if (!tabsSettWidth) {
      setTabsSetWidth(true);
    }
  }, [tabsSettWidth]);

  const tabEls = items.map((item, index) => (
    <div key={index} id={`${props.id || "_"}_tab_${item.title}`} data-tab-index={index} className="_grid-2row-fix-bottom _gap-0">
      <Title
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        xl={props.xl}
        className={props.className}
        style={props.style}
        // setWidth={tabsSettWidth}
        setWidth
        link
        clickFn={() => clickHandler(item.title)}
        state={item.title === activeItemTitle ? "active" : null}
        {...item}
      >
        {item.title}
      </Title>
      {item.title === activeItemTitle ? (
        <motion.div
          className="_tab-indicator"
          transition={{ duration: 0.4, type: "spring" }}
          layoutId="_tab-indicator"
        ></motion.div>
      ) : (
        <div className="_tab-indicator-placeholder"></div>
      )}
    </div>
  ));

  const sideMenu =
    sidetabs.length > 0 ? (
      <FloatMenu
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        xl={props.xl}
        className={props.className}
        style={props.style}
        setWidth={tabsSettWidth}
        items={sidetabs}
        activeItemTitle={activeItemTitle}
        clickFn={item => props.clickFn(item)}
        position="bottom-left"
      />
    ) : null;

  return (
    <nav className={mainCls.join(" ")} css={[styles, { ...props.style }]} ref={tabMenuElRef} id={props.id}>
      <LayoutGroup id={props.id || "tab-menu-" + parseInt(Math.random() * 1000)}>
        <div className="menu-bar _grid-2col-fix-right">
          <div className="tabs">{tabEls}</div>
          <div className="side-tabs">{sideMenu}</div>
        </div>
      </LayoutGroup>
    </nav>
  );
};

export default TabsMenu;

// ===== to avoid conflict between tabs in different tab-menus on the whole app, Id must be included =====
