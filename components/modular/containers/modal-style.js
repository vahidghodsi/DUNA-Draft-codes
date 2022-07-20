import { css } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import { SLIDE_DOWN_UP, SLIDE_LEFT_RIGHT } from "@models/animation-presets";

const styles = css({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  "._modal-container": {
    position: "absolute",
    height: "100%",
    width: "100%",
    border: "var(--border-primary)",
    borderRadius: "5px",
    // borderRadius: "inherit",
    background: "var(--background)",
    boxShadow: "var(--shadow-primary)",
    padding: "20px",
    "._head": {
      // marginBottom: "20px",
      // paddingBottom: "20px",
      // borderBottom: "var(--border-secondary)",
      "._title": {
        margin: "0",
      },
      "._buttons-row, ._buttons-row-right": {
        padding: "0",
        "._button": {
          width: "24px",
          height: "24px",
          borderRadius: "3px",
          padding: "2px 4px",
        },
      },
    },
    // "._body": {      },
  },
  "&.actions-absolute-position ._head": {
    height: "0",
    overflow: "visible",
    zIndex: "50",
  },
  "&._expanded" : {
    zIndex: "100"
  }
});

export default styles;

// export const modalMotionVariant = { ...slide_down_up };
export const modalDefaultMotionVariant = {
  ...SLIDE_LEFT_RIGHT,
  drag: { scale: 1.02, boxShadow: "var(--shadow-hover" },
};
