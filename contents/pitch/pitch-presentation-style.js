import { css } from "@emotion/react";
import { FADE_DISPLAY_IN_OUT } from "@models/animation-presets";

FADE_DISPLAY_IN_OUT
const styles = css({
  position: "relative",
  height: "100%",
});

export default styles;

export const slideMotionVariants = { ...FADE_DISPLAY_IN_OUT };
