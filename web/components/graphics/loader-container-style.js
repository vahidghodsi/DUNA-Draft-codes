import { css } from "@emotion/react";

const styles = css({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  // ===== Sizes ==========
  // "&._xs": {},
  // // ===== sm
  // "&._sm ": {},
  // // ===== lg
  // "&._lg ": {},
  // // ===== xl
  // "&._xl": {},
});

export default styles;

export const loaderContainerMotionVariant = {
  initial: {
    zIndex: 300,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};
