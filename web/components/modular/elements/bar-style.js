import { css } from "@emotion/react";

const styles = css({
  margin: "12px",
  // fontFamily: "inherit",
  // fontSize: "14px",
  // fontWeight: "bold",
  transition: "var(--transition-elements)",
  "*": {
    transition: "var(--transition-elements)",
  },
  ".border": {
    height: "20px",
    borderRadius: "15px",
    padding: "2px",
    border: "1px solid var(--color-primary)",
  },
  "&.toggle:hover:not(.disabled) .border": {
    // height: "22px",
    // margin: "-1px",
    cursor: "pointer",
    border: "2px solid var(--color-primary)",
    // boxShadow: "var(--shadow-primary)",
  },
  "&.toggled:not(.disabled) .border": {
    height: "24px",
    margin: "-2px",
    border: "2px solid var(--color-primary)",
    boxShadow: "var(--shadow-primary)",
  },
  "&.disabled .border": {
    border: "1px solid var(--color-secondary)",
  },
  ".fill": {
    height: "100%",
    // margin: "1px",
    borderRadius: "15px",
    background: "var(--color-secondary)",
  },
  // "&.toggle:hover:not(.disabled) .fill": {
    // height: "14px",
    // background: "var(--color-light)",
    // boxShadow: "var(--shadow-primary)",
  // },
  "&.toggled:not(.disabled) .fill": {
    background: "var(--color-primary)",
  },
  "&.disabled .fill": {
    background: "var(--color-light)",
  },
  // ----------
  "&._xs": {
    margin: "8px",
    ".border": {
      height: "12px",
      borderRadius: "15px",
    },
    "&.toggled:not(.disabled) .border": {
      height: "16px",
    },
  },
  "&._sm ": {
    margin: "10px",
    ".border": {
      height: "16px",
    },
    "&.toggled:not(.disabled) .border": {
      height: "20px",
    },
  },
  "&._lg ": {
    margin: "14px",
    ".border": {
      height: "24px",
    },
    "&.toggled:not(.disabled) .border": {
      height: "28px",
    },
  },
  "&._xl": {
    margin: "16px",
    ".border": {
      height: "28px",
    },
    "&.toggled:not(.disabled) .border": {
      height: "32px",
    },
  },
});

export default styles;
