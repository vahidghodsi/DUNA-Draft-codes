/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import styles, { loaderContainerMotionVariant } from "./loader-container-style";

const LoaderContainer = props => {
  // console.log("[in LoaderContainer]");

  let mainCls = [
    [true, "_loader-container"],
    [true, "_background-blur-primary"],
    [props.className, props.className],
    [props.disabled, "disabled"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  return (
    <AnimatePresence>
      {props.active && (
        <motion.div className={mainCls.join(" ")} css={[styles, { ...props.style }]} {...loaderContainerMotionVariant}>
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderContainer;
