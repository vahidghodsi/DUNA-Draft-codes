import { css } from "@emotion/react";

const styles = css({
  height: "100%",
  "> div:nth-child(1), > div:nth-child(3)": {
    padding: "80px 20px",
  },
  "> div:nth-child(2)": {
    margin: "0 32px",
    borderRight: "var(--border-primary)",
  },

  ".div-right": {
  },
});

export default styles;
