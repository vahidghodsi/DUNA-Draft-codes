import { css } from "@emotion/react";

const styles = css({
  width: "60px",
  height: "60px",
  margin: "20px",
  borderRadius: "50%",
  border: "var(--border-primary)",
  borderWidth: "4px",
  opacity: 0,

  // ===== Sizes ==========
  "&._xs": {
    height: "20px",
    width: "20px",
    borderWidth: "2.5px",
  },
  // ===== sm
  "&._sm ": {
    height: "40px",
    width: "40px",
    borderWidth: "3.5px",
  },
  // ===== lg
  "&._lg ": {
    height: "80px",
    width: "80px",
    borderWidth: "4.5px",
  },
  // ===== xl
  "&._xl": {
    height: "100px",
    width: "100px",
    borderWidth: "5px",
  },
});

export default styles;

export const loaderMotionVariant = {
  initial: {
    boxShadow: "0px 0px 4px 0px var(--color-primary), inset 0px 0px 2px 0px var(--color-primary)",
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1.05,
    // width: "100px",
    // height: "100px",
    boxShadow: "0px 0px 35px 0px var(--color-primary), inset 0px 0px 15px 0px var(--color-primary)",
    transition: {
      opacity: { delay: 0.2, duration: .2, ease: "easeIn" },
      default: { delay: .4, duration: 1, repeat: "Infinity", repeatType: "reverse", ease: "easeInOut" },
    },
  },
  exit: {
    borderColor: "var(--color-secondary)",
    boxShadow: "0px 0px 5px 0px var(--color-primary), inset 0px 0px 2px 0px var(--color-primary)",
    transition: {
      delay: 0,
      duration: 1.4,
    },
  },
};

export const loaderMotionVariant_xs = {
  initial: {
    ...loaderMotionVariant.initial,
    boxShadow: "0px 0px 2px 0px var(--color-primary), inset 0px 0px 1px 0px var(--color-primary)",
  },
  animate: {
    ...loaderMotionVariant.animate,
    boxShadow: "0px 0px 15px 0px var(--color-primary), inset 0px 0px 7px 0px var(--color-primary)",
  },
  exit: {
    ...loaderMotionVariant.exit,
    boxShadow: "0px 0px 2px 0px var(--color-primary), inset 0px 0px 1px 0px var(--color-primary)",
  },
};

export const loaderMotionVariant_sm = {
  initial: {
    ...loaderMotionVariant.initial,
    boxShadow: "0px 0px 2px 0px var(--color-primary), inset 0px 0px 1px 0px var(--color-primary)",
  },
  animate: {
    ...loaderMotionVariant.animate,
    boxShadow: "0px 0px 25px 0px var(--color-primary), inset 0px 0px 12px 0px var(--color-primary)",
  },
  exit: {
    ...loaderMotionVariant.exit,
    boxShadow: "0px 0px 2px 0px var(--color-primary), inset 0px 0px 1px 0px var(--color-primary)",
  },
};

export const loaderMotionVariant_lg = {
  initial: {
    ...loaderMotionVariant.initial,
    boxShadow: "0px 0px 4px 0px var(--color-primary), inset 0px 0px 2px 0px var(--color-primary)",
  },
  animate: {
    ...loaderMotionVariant.animate,
    boxShadow: "0px 0px 40px 0px var(--color-primary), inset 0px 0px 20px 0px var(--color-primary)",
  },
  exit: {
    ...loaderMotionVariant.exit,
    boxShadow: "0px 0px 4px 0px var(--color-primary), inset 0px 0px 2px 0px var(--color-primary)",
  },
};

export const loaderMotionVariant_xl = {
  initial: {
    ...loaderMotionVariant.initial,
    boxShadow: "0px 0px 4px 0px var(--color-primary), inset 0px 0px 2px 0px var(--color-primary)",
  },
  animate: {
    ...loaderMotionVariant.animate,
    boxShadow: "0px 0px 45px 0px var(--color-primary), inset 0px 0px 22px 0px var(--color-primary)",
  },
  exit: {
    ...loaderMotionVariant.exit,
    boxShadow: "0px 0px 4px 0px var(--color-primary), inset 0px 0px 2px 0px var(--color-primary)",
  },
};
