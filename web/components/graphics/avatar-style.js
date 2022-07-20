import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  height: "24px",
  width: "24px",
  border: "var(--border-secondary)",
  borderRadius: "50%",
  background: "var(--color-light)",
  overflow: "hidden",
  "img": {
    position: "absolute",
    top: "0",
    left: "0",
    borderRadius: "50%",
    objectFit: "contain"
  },
  // "._fallback": {
  //   border: "var(--border-secondary)",
  //   background: "var(--colr-light)",
  // },
  // ===== Sizes ==========
  "&._xs": {
    height: "16px",
    width: "16px",
  },
  // ===== sm
  "&._sm ": {
    height: "20px",
    width: "20px",
  },
  // ===== lg
  "&._lg ": {
    height: "30px",
    width: "30px",
  },
  // ===== xl
  "&._xl": {
    height: "40px",
    width: "40px",
  },
});

export default styles;
