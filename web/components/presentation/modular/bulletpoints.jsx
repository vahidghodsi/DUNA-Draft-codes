/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { motion } from "framer-motion";

import { SLIDE_DOWN_UP } from "@models/animation-presets";
import styles from "./bulletpoints-style";
import GraphicSet from "@components/graphics/graphic-set";
import SlideElement from "./slide-element";

const Bulletpoints = props => {
  // console.log('[Bulletpoints:]', props);

  const items = props.items || [];
  // const totalItems = items.length;

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
    delay: 0.3,
  };

  const iconMotionVariant = JSON.parse(JSON.stringify(SLIDE_DOWN_UP));
  contentMotionVariant.animate.transition = {
    ...contentMotionVariant.animate.transition,
    delay: 0.5,
  };

  // ===== ELEMENTS ==========
  const itemEls = items.map((item, index) => (
    <SlideElement
      key={index}
      stage={props.stage + index}
      position={{ x: props.position.x + 30, y: props.position.y + index * 100 }}
      className="bulletpoint _grid-col _gap-30"
      animation={bulletpointsVariant}
    >
      <motion.div className="bulletpoint_title" {...SLIDE_DOWN_UP}>
        {item.title}
      </motion.div>
      <motion.div className="bulletpoint_content" {...contentMotionVariant}>
        {/* <motion.div className="bulletpoint_content"> */}
        <div>{item.content}</div>
      </motion.div>
      {item.icon && (
        <motion.div className="bulletpoint_icon" {...iconMotionVariant}>
          <GraphicSet xl item={item.icon} />
        </motion.div>
      )}
    </SlideElement>
  ));

  // ===== EFFECTS ==========

  // console.log(motionVariant);
  let lineHeight = (props.stage - 1) * 100 + 20;
  return (
    <div className={mainCls.join(" ")} css={styles}>
      <div className="context">
        <SlideElement
          // key={"line"}
          className="line"
          stage={props.stage}
          position={props.position}
          animation={{
            initial: { height: 0 },
            animate: { height: lineHeight, transition: { delay: 0.1 } },
          }}
        ></SlideElement>
        {/* <motion.line initial={{ pathLength: 0 }} animate={{ pathLength: .3 }}></motion.line> */}
      </div>
      <div>{itemEls}</div>
    </div>
  );
};

export default Bulletpoints;
