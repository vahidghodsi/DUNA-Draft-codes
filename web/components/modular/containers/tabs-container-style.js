import { css } from "@emotion/react";
import { FADE_DISPLAY_IN_OUT } from "@models/animation-presets";

const styles = css({
  section: {
    // overflowY: "auto",
    // padding: "0 20px",
    padding: "0",
    height: "100%",
    // background: "var(--background-dev)",
  },
  "&.content-visible": {
    height: "100%",
    section: {
      overflowY: "visible",
    },
  },
  "&.content-auto": {
    height: "100%",
    section: {
      overflowY: "auto",
    },
  },
  "&.content-scroll": {
    height: "100%",
    section: {
      overflowY: "scroll",
    },
  },
  // ===== global sizes =====
  "&._xs": {
    gap: "8px",
  },
  "&._sm ": {
    gap: "12px",
  },
  // "&._lg ": {},
  // "&._xl": {},
});

export default styles;

export const sectionMotionVariants = {...FADE_DISPLAY_IN_OUT};
