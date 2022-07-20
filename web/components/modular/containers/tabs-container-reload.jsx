/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import TabsMenu from "../menus/tabs-menu";
import styles, { sectionMotionVariants } from "./tabs-container-style";

const TabsContainerReload = props => {
  //   console.log("[in TabsContainerReload :] " + props);
  const tabsContainerEl = useRef(null);
  const items = props.items;
  const sectionEl = useRef(null);
  const [activeTabTitle, setActiveTabTitle] = useState(props.defualtTabTitle || items[0].title);
  const activeTab = items.find(item => item.title === activeTabTitle);
  // const activeTabIndex = items.map(item => item.title).indexOf(activeTabTitle);
  const fallBack = (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <div>NOT FOUND</div>
    </div>
  );

  let mainCls = [
    [true, "_tabs-container"],
    [true, "_grid-2row-fix-top"],
    [true, "_gap-20"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.overflow === "visible", "content-visible"],
    [props.overflow === "auto", "content-auto"],
    [props.overflow === "scroll", "content-scroll"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  const tabChangeHandler = tabTitle => {
    if (tabTitle !== activeTabTitle) {
      if (props.tabChangeFn) props.tabChangeFn(tabTitle);
      setActiveTabTitle(tabTitle);
    }
  };

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]} ref={tabsContainerEl}>
      <TabsMenu
        id={props.id}
        xs={props.xs}
        sm={props.sm}
        lg={props.lg}
        xl={props.xl}
        items={items}
        activeItemTitle={activeTabTitle}
        clickFn={activeItemTitle => tabChangeHandler(activeItemTitle)}
        trigger={props.trigger}
      />
      <div className="_body">
        <motion.section
          key={activeTab.title}
          ref={sectionEl}
          variants={sectionMotionVariants}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
        >
          {activeTab.content || fallBack}
        </motion.section>
      </div>
    </div>
  );
};

export default TabsContainerReload;
