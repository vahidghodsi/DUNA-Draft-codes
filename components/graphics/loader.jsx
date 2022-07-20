/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styles, * as variants from "./loader-style";

const Loader = props => {
  // console.log("[in Loader]");

  let mainCls = [
    [true, "_loader"],
    [props.className, props.className],
    [props.disabled, "disabled"],
    [props.secondary, "secondary"],
    [props.xs, "_xs"],
    [props.sm, "_sm"],
    [props.lg, "_lg"],
    [props.xl, "_xl"],
  ]
    .map(classCondition => (classCondition[0] ? classCondition[1] : null))
    .filter(cls => cls);

  useEffect(() => {}, []);

  let loaderMotionVariant = props.xs
    ? variants.loaderMotionVariant_xs
    : props.sm
    ? variants.loaderMotionVariant_sm
    : props.lg
    ? variants.loaderMotionVariant_lg
    : props.xl
    ? variants.loaderMotionVariant_xl
    : variants.loaderMotionVariant;

  return (
    <motion.div
      className={mainCls.join(" ")}
      css={[styles, { ...props.style }]}
      variants={loaderMotionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    ></motion.div>
  );
};

export default Loader;
