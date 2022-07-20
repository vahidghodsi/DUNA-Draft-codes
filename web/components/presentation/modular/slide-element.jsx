/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePitchSlideTotalStages } from "@redux/actions/pitch";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./slide-element-style";
import * as animationPresets from "@models/animation-presets";
import { positions } from "@models/presentation-presets";

const SlideElement = props => {
  // console.log('[SlideElement:]', props);
  const dispatch = useDispatch();
  const { dev_mode, slide } = useSelector(state => state.pitch);
  const currentStage = slide.currentStage;

  const position = props.position;
  const enter = props.stage ? (Array.isArray(props.stage) ? props.stage[0] : props.stage) : 0;
  const exit = props.stage && Array.isArray(props.stage) ? props.stage[1] : undefined;
  const enterDelay = props.delay ? (Array.isArray(props.delay) ? props.delay[0] : props.delay) : 0;
  const exitDelay = props.delay && Array.isArray(props.delay) ? props.delay[1] : 0;
  const animation = props.animation;
  // console.log(enter, "--", exit);
  // console.log(enterDelay, "----", exitDelay);

  let mainCls = [
    [true, "_slide-element"],
    [dev_mode, "_dev-mode"],
    [props.className, props.className],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  let motionVariant = {
    initial: { x: 0, y: 0 },
    animate: { x: 0, y: 0, transition: {} },
    exit: { x: 0, y: 0, transition: {} },
  };

  // ===== FUNCTIONS ==========

  //   console.log(animation);
  // ===== ANIMATION ==========
  let elAnimation = motionVariant;
  if (typeof animation === "string") {
    elAnimation = animationPresets[animation];
  } else if (typeof animation === "object") {
    elAnimation = animation;
  }

  if (elAnimation) {
    // ** or original preset must be protected by deep cloning
    elAnimation = JSON.parse(JSON.stringify(elAnimation));
    motionVariant = {
      initial: { ...motionVariant.initial, ...elAnimation.initial },
      animate: { ...motionVariant.animate, ...elAnimation.animate },
      exit: { ...motionVariant.exit, ...elAnimation.exit },
    };
  }
  //   console.log(motionVariant);

  // ===== POSITION ==========
  let elPosition = { x: 0, y: 0 };
  if (typeof position === "string") {
    elPosition = positions[position];
  } else if (typeof position === "object") {
    elPosition = position;
  }

  if (elPosition.x) {
    motionVariant.initial.x += elPosition.x;
    motionVariant.animate.x += elPosition.x;
    motionVariant.exit.x += elPosition.x;
  }
  if (elPosition.y) {
    motionVariant.initial.y += elPosition.y;
    motionVariant.animate.y += elPosition.y;
    motionVariant.exit.y += elPosition.y;
  }

  // ===== DELAY ==========

  motionVariant.animate.transition = {
    ...motionVariant.animate.transition,
    delay: motionVariant.animate.transition.delay + enterDelay,
    when: "beforeChildren",
  };
  motionVariant.exit.transition = {
    ...motionVariant.exit.transition,
    delay: motionVariant.exit.transition.delay + exitDelay,
  };

  // ===== EFFECTS ==========
  useEffect(() => {
    // ** every element registers its presencee stages to the redux, to have the total stages
    dispatch(updatePitchSlideTotalStages(exit ? exit : enter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(motionVariant);

  const element = (
    <motion.div
      className={props.className ? `_element-container ${props.className}` : `_element-container ${props.className}`}
      variants={motionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );

  return (
    <div className={mainCls.join(" ")} css={styles}>
      {exit ? (
        <AnimatePresence>{currentStage >= enter && currentStage < exit && element}</AnimatePresence>
      ) : (
        currentStage >= enter && element
      )}
    </div>
  );
};

export default SlideElement;
