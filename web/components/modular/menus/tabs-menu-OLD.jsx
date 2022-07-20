/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
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
  const [tabMenuBound, setTabMenuBound] = useState(undefined);
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

  let tabIndicatorStyle = {
    width: 0,
    transform: "translateX(0)",
    marginLeft: 0,
  };

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
      setTabMenuBound(menuElBound);
      setSidetabs(tempSideTabs);
      // set the tabsSetWidth to false to trigger recalculation
      setTabsSetWidth(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appWinodw, props.setWidth, props.trigger]);

  useEffect(() => {
    if (!tabsSettWidth) {
      setTabsSetWidth(true);
    }
  }, [tabsSettWidth]);

  const tabEls = items.map((item, index) => (
    <div key={index} id={`tab_${item.title}`} data-tab-index={index}>
      <Title
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        xl={props.xl}
        className={props.className}
        style={props.style}
        setWidth={tabsSettWidth}
        link
        clickFn={() => clickHandler(item.title)}
        state={item.title === activeItemTitle ? "active" : null}
        {...item}
      >
        {item.title}
      </Title>
    </div>
  ));

  const sideMenu =
    sidetabs.length > 0 ? (
      <FloatMenu
        className={props.className}
        style={props.style}
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        xl={props.xl}
        setWidth={tabsSettWidth}
        items={sidetabs}
        activeItemTitle={activeItemTitle}
        clickFn={item => props.clickFn(item)}
        position="bottom-left"
      />
    ) : null;

  if (tabMenuBound) {
    let activeTab = document.getElementById(`tab_${activeItemTitle}`);
    if (activeTab) {
      let activeTabBound = activeTab.getBoundingClientRect();
      if (activeTab.classList.contains("offside")) {
        tabIndicatorStyle = {
          ...tabIndicatorStyle,
          width: 0,
          transform: `translateX(${tabMenuBound.right}px)`,
          opacity: 0,
        };
      } else {
        tabIndicatorStyle = {
          ...tabIndicatorStyle,
          width: activeTabBound.width,
          transform: `translateX(${activeTabBound.left - tabMenuBound.left}px)`,
          opacity: 1,
        };
      }
    }
  }

  return (
    <nav className={mainCls.join(" ")} css={[styles, { ...props.style }]} ref={tabMenuElRef}>
      <div className="menu-bar _grid-2col-fix-right">
        <div className="tabs">{tabEls}</div>
        <div className="side-tabs">{sideMenu}</div>
      </div>
      <div className="tab-indicator" style={tabIndicatorStyle}></div>
    </nav>
  );
};

export default TabsMenu;
