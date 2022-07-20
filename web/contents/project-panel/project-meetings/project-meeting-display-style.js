import { css } from "@emotion/react";

const styles = css({
  "._modal-container": {
    // border: "var(--border-secondary)",
    // boxShadow: "none",
    border: "var(--border-primary)",
    // boxShadow: "var(--shadow-secondary)",
    gap: "0",
  },
  ".header": {
    ".tumbnail": {
      width: "46px",
      height: "46px",
      marginTop: "10px",
      border: "var(--border-secondary)",
      borderRadius: "5px",
    },
    "._title": {
      ".sub-content": {
        marginTop: "3px",
      },
    },
  },
  "._info-tray": {
    "._grid-2col-fix-left": {
      gridTemplateColumns: "50px minmax(0, 1fr)",
      " > :last-of-type": {
        overflow: "hidden",
      },
    },
  },
  "._title": {
    // marginTop: "0px !important",
    // marginBottom: "0px !important",
    margin: "0px !important",
  },
  "._profile-tumbnail": {
    margin: "0px 3px !important",
    // ===== temporary solution, becuase the compnent is not now under control in this component
    height: "24px !important",
    width: "24px !important",
    "._avatar": {
      height: "24px !important",
      width: "24px !important",
    },
  },
});

export default styles;
