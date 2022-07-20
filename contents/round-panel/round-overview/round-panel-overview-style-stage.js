import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  height: "100%",
  gridTemplateRows: "repeat(4, auto) minmax(0, 1fr) auto",
  "._bar": {
    margin: "0 !important",
  },
  "._bar:not(.active)": {
    ".border": {
      // borderRadius: "0",
      // borderLeft: "none !important",
      // borderRight: "none !important",
      // padding: "0",
    },
  },
  "._title": {
    margin: "0 !important",
  },
  "._date": {
    fontSize: "12px",
    // marginLeft: "6px",
  },

  // =====
  ".stage-context": {
    position: "absolute",
    height: "350px",
    width: "100%",
    top: "35px",
    ".date-indicator": {
      position: "relative",
      height: "100%",
      borderRight: "var(--border-secondary)",
      borderRightStyle: "dashed",
      borderRightWidth: "2px",
      "._date": {
        position: "absolute",
        bottom: "0",
        right: "0",
        textAlign: "right",
        // marginTop: "335px",
        marginRight: "8px",
        whiteSpace: "nowrap"
      },
    },
  },
  ".stage-title": {
    marginBottom: "4px",
  },
  "&._active": {
    ".stage-title": {
      marginTop: "-4px",
    },
  },
  ".stage-timeline": {},
  ".stage-dates": {
    ".date-span": {
      "&::after": {
        content: `"-"`,
        marginLeft: "4px",
        marginRight: "4px",
      },
    },
  },
  ".stage-status": {
    "._passage": {
      maxWidth: "120px",
      textAlign: "right",
    },
  },
  ".stage-data": {
    position: "relative",
    ".projects-registered" : {
      position: "absolute",
      width: "6px",
      height: "6px",
      background: "var(--color-secondary)",
      borderRadius: "50%"
    }
  },
  ".stage-facts": {
    "._passage": {
      maxWidth: "120px",
      textAlign: "right",
    },
  },
});

export default styles;
