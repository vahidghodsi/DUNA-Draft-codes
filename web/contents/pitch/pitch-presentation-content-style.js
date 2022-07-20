import { css } from "@emotion/react";
import { FADE_DISPLAY_IN_OUT } from "@models/animation-presets";

const styles = css({
  position: "relative",
  height: "100%",
  "&.presentaion-layout": {
    paddingBottom: "0",
  },
  "._pitch-intro": {
    "._title": {
      gridTemplateRows: "auto auto auto",
    },
    ".pitch-statement": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // alignItems: "center",
      "._title": {
        ".content": {
          fontSize: "30px",
        },
      },
    },
    ".pitch-options": {
      "._title": {
        marginTop: "40px",
        marginBottom: "40px",
      },
    },
  },
});

export default styles;

export const introMotionVariants = { ...FADE_DISPLAY_IN_OUT };
introMotionVariants.exit.transition.delay = 0.15;
introMotionVariants.exit.transition.duration = 0.4;
