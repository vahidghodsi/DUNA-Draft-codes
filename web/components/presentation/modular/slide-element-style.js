import { css } from "@emotion/react";

const styles = css({
  "._element-container": {
    position: "absolute",
  },
  // ===== DEV MODE ==========
  "&._dev-mode": {
    "._element-container": {
      border: "var(--border-dev)",
    },
  },
});

export default styles;
