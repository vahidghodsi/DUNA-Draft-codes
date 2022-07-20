import { css } from "@emotion/react";

const styles = css({
  width: "100%",

  ".menu-bar": {
    borderBottom: "1px solid var(--color-secondary);",
    ".tabs": {
      flexGrow: "1",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      /* if inside tabs we have different element heights, the height must be fix (e.g. active tab with a bigger size)*/
      // height: "52px",
      "._title:not(._title.active):hover *": {
        textDecoration: "none",
      },
      ".offside": {
        visibility: "hidden",
      },
    },
  },

  ".side-tabs": {
    alignSelf: "flex-end",
    height: "100%",
  },

  "._tab-indicator, ._tab-indicator-placeholder": {
    width: "100%",
    height: "3px",
  },
  "._tab-indicator": {
    borderRadius: "2px 2px 0 0",
    background: "var(--color-primary)",
  },
  // ===== STANDARD SIZES ==========
  "&._xs": {
    ".menu-bar .tabs": {
      // height: "31px",
    },
  },
  "&._sm ": {
    ".menu-bar .tabs": {
      // height: "39px",
    },
  },
  "&._lg ": {
    ".menu-bar .tabs": {
      // height: "55px",
    },
  },
  "&._xl": {
    ".menu-bar .tabs": {
      // height: "65px",
    },
  },
});

export default styles;
