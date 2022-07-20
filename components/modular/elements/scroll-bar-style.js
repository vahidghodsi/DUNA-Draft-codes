import { css } from "@emotion/react";

const styles = css({
  display: "flex",
  flexDirection: "column",
  // alignItems: "flex-end",
  margin: "0 12px",
  height: "100%",
  // fontFamily: "inherit",
  // fontSize: "14px",
  // fontWeight: "bold",
  transition: "var(--transition-elements)",
  "*": {
    transition: "var(--transition-elements)",
  },
  ".arrow-less, .arrow-more": {
    height: "8px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid var(--color-secondary)",
    opacity: "0",
  },
  "&:hover:not(.disabled) .arrow-less, &:hover:not(.disabled) .arrow-more": {
    opacity: "1",
  },
  ".border": {
    // height: "100%",
    flexGrow: "1",
    width: "9px",
    borderRadius: "5px",
    padding: "2px",
    margin: "2px 0",
    border: "1px solid var(--color-secondary)",
  },
  "&:hover:not(.disabled) .border": {
    width: "14px",
    // margin: "-1px",
    // border: "1spx solid var(--color-primary)",
    // boxShadow: "var(--shadow-primary)",
  },
  // "&.toggled:not(.disabled) .border": {
  //   border: "2px solid var(--color-primary)",
  //   boxShadow: "var(--shadow-primary)",
  // },
  "&.disabled .border": {
    border: "1px solid var(--color-light)",
  },
  ".fill": {
    width: "100%",
    borderRadius: "3px",
    background: "var(--color-secondary)",
  },
  "&:hover:not(.disabled) .fill": {
    cursor: "pointer",
    background: "var(--color-primary)",
    // boxShadow: "var(--shadow-primary)",
  },
  "&.toggled:not(.disabled) .fill": {
    background: "var(--color-primary)",
  },
  "&.disabled .fill": {
    background: "var(--color-light)",
  },
  // ----------
  "&.horizontal": {
    flexDirection: "row",
    height: "100%",
    margin: "12px 0",
    ".arrow-less, .arrow-more": {
      height: "9px",
      width: "8px",
    },
    "&:hover:not(.disabled) .arrow-less, &:hover:not(.disabled) .arrow-more": {
      height: "14px",
    },
    ".border": {
      // height: "100%",
      flexGrow: "1",
      height: "9px",
      width: "auto",
      margin: "0 2px",
    },
    "&:hover:not(.disabled) .border": {
      height: "14px",
    },
    ".fill": {
      height: "100%",
    },
  },
  // ----------
  // "&._xs": {
  //   margin: "8px",
  //   ".border": {
  //     height: "12px",
  //     borderRadius: "15px",
  //   },
  //   "&.toggled:not(.disabled) .border": {
  //     height: "16px",
  //   },
  // },
  // "&._sm ": {
  //   margin: "10px",
  //   ".border": {
  //     height: "16px",
  //   },
  //   "&.toggled:not(.disabled) .border": {
  //     height: "20px",
  //   },
  // },
  // "&._lg ": {
  //   margin: "14px",
  //   ".border": {
  //     height: "24px",
  //   },
  //   "&.toggled:not(.disabled) .border": {
  //     height: "28px",
  //   },
  // },
  // "&._xl": {
  //   margin: "16px",
  //   ".border": {
  //     height: "28px",
  //   },
  //   "&.toggled:not(.disabled) .border": {
  //     height: "32px",
  //   },
  // },
});

export default styles;
