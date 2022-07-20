import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  height: "100%",
  ".round-stages-context, .round-stages": {
    position: "absolute",
    height: "100%",
  },
  ".round-stages-context": {
    width: "100%",
    ".timline-line": {
      // position: "absolute",
      // width: "100%",
      height: "35px",
      marginBottom: "100px",
      borderBottom: "var(--border-primary)",
      borderBottomStyle: "dashed",
      borderBottomWidth: "2px",
    },
    ".data-lines": {
      // position: "absolute",
      // width: "100%",
      div: {
        borderBottom: "var(--border-secondary)",
        height: "25px",
        "&::before": {
          content: "attr(data-number)",
          fontSize: "10px",
          marginLeft: "-10px",
        },
      },
    },
  },
  ".round-stages": {
    width: "100%",
    // gridTemplateColumns: "repeat(5, auto)",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "3px",
    // gap: "0px",
  },
});

export default styles;
