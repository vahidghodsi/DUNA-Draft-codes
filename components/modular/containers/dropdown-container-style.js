import { css } from "@emotion/react";

const styles = css({
  overflow: "hidden",
  ".body": {
  },
  "&:not(._toggled)": {
    gap: "0",
    ".body": {
      overflow: "hidden",
      height: 0,
    },
  },
  // "&._toggled": {
  //   ".head": {},
  //   ".body": {},
  // },
  // ===== transitions
  transition: "var(--transition-primary)",
  " > div": {
    transition: "var(--transition-primary)",
    //  transitionProperty: "height, width, grid, gap, left, bottom",
    //  transitionDuration: "1s",
  },
});

export default styles;
