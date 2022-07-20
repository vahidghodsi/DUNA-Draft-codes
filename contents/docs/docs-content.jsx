/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";
import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";
import styles from "./docs-content-style";
import { motion } from "framer-motion";

const listMotionVariation = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.15,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const topics = {
  context: ["app-dev", "app-message", "app-propmt", "app-alert"],
  graphics: ["graphic-set", "avatar"],
  layout: ["layouts", "header", "footer"],
  //modular
  containers: ["list", "modal", "info-table"],
  elements: ["title", "button", "bar", "date", "info-option", "profile-tumbnail"],
  inputs: ["input", "form", "form-multi-step"],
  menues: ["nav-menu", "tabs-menu", "side-menu", "float-menu"],
  project: ["project-card", "project-display", "project-meeting", "project-panel"],
};

const DocsContent = props => {
  // console.log('[DocsContent:]', props);
  // const project = props.project || nul;
  const topicTitles = Object.keys(topics);
  const [activeTopicTitle, setActiveTopicTitle] = useState(topics[topicTitles[0]][0]);

  let mainCls = [
    [true, "_docs-content"],
    [true, "_grid-2col-fix-left"],
    [props.className, " " + props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let topicsEls = topicTitles.map((category, catIndex) => (
    <motion.div key={catIndex} variants={listMotionVariation}>
      <List lg dropdown={"minimized"} key={catIndex} title={category} className={"category-list"}>
        {topics[category].map((topic, topicIndex) => (
          <Title
            key={topicIndex}
            sm={topic !== activeTopicTitle}
            link
            setWidth
            bold={topic === activeTopicTitle}
            content={`${catIndex + 1}.${topicIndex + 1}_ ${topic}`}
            clickFn={() => setActiveTopicTitle(topic)}
          />
        ))}
      </List>
    </motion.div>
  ));

  return (
    <div className={mainCls.join(" ")} css={[styles, { ...props.style }]}>
      <div className="table-of-contents">
        <List overflow={"auto"}>
          <motion.div variants={listMotionVariation} initial="initial" animate="animate">
            {topicsEls}
          </motion.div>
        </List>
      </div>
      <div className="_main-content">
        <div className="_container _grid-2row-fix-top"></div>
      </div>
    </div>
  );
};

export default DocsContent;
