/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { motion } from "framer-motion";

import { SLIDE_DOWN_UP } from "@models/animation-presets";
import styles from "./bulletpoints-style";
import GraphicSet from "@components/graphics/graphic-set";
// import SlideElement from "./slide-element";

const Bulletpoints = props => {
  // console.log('[Bulletpoints:]', props);

  const items = props.items || [];

  let mainCls = [
    [true, "_bulletpoints"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  // ===== VARIANTS ==========
  // ** we need to deep clone the object, so that modifications are not passed to the reference
  const bulletpointsVariant = JSON.parse(JSON.stringify(SLIDE_DOWN_UP));

  bulletpointsVariant.visible = i => ({
    ...bulletpointsVariant.animate,
    transition: {
      ...bulletpointsVariant.animate.transition,
      delay: 0.5 + i * 0.5,
      when: "beforeChildren",
    },
  });
  // console.log(bulletpointsVariant);

  const contentMotionVariant = JSON.parse(JSON.stringify(SLIDE_DOWN_UP));
  contentMotionVariant.animate.transition = {
    ...contentMotionVariant.animate.transition,
    delay: 1.5,
  };

  // const iconMotionVariant = JSON.parse(JSON.stringify(SLIDE_DOWN_UP));
  // contentMotionVariant.animate.transition = {
  //   ...contentMotionVariant.animate.transition,
  //   delay: 1.5,
  // };

  // ===== ELEMENTS ==========


  const itemEls = items.map((item, index) => (
    <motion.div
      className="bulletpoint _grid-3col-fix-left-middle _gap-30"
      key={index}
      variants={bulletpointsVariant}
      initial="initial"
      // ** for some reason, using animate name for custom variants is not working
      // animate="animate"
      animate="visible"
      custom={index}
    >
      <motion.div className="bulletpoint_title" {...SLIDE_DOWN_UP}>
        {item.title}
      </motion.div>
      {/* <motion.div className="bulletpoint_content" {...contentMotionVariant}> */}
      <motion.div className="bulletpoint_content">
        <div>{item.content}</div>
      </motion.div>
      {item.icon && (
        <motion.div className="bulletpoint_icon" >
          <GraphicSet xl item={item.icon} />
        </motion.div>
      )}
    </motion.div>
  ));

  // ===== EFFECTS ==========

  // console.log(motionVariant);

  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="context">
        <motion.div
          // key={"line"}
          className="line"
          initial={{ height: 0 }}
          animate={{ height: "50%", transition: { delay: 0.5 } }}
          // transition={{ delay: 0.5 }}
        ></motion.div>
        {/* <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: .3 }}></motion.line> */}
      </div>
      {/* <motion.div className="_grid-row" {...bulletpointsVariant}> */}
      <div className="_grid-row">{itemEls}</div>
      {/* </motion.div> */}
    </div>
  );
};

export default Bulletpoints;
