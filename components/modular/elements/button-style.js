import { css } from "@emotion/react";

const styles = css({
  height: "24px",
  padding: "3px 32px",
  fontFamily: "inherit",
  fontSize: "14px",
  fontWeight: "bold",
  // borderRadius: "15px",
  borderRadius: "10px",
  /* border: "1px solid var(--color-primary)", */
  border: "none",
  background: "var(--color-primary)",
  color: "var(--color-secondary)",
  "&:hover": {
    background: "var(--color-primary-hover)",
    color: "var(--color-light)",
    boxShadow: "var(--shadow-primary)",
  },
  // "&:last-child" : {
  // marginRight: "0px",

  // },

  "&.secondary": {
    borderColor: "var(--color-secondary)",
    background: "var(--color-secondary)",
    color: "var(--color-primary)",

    "&:hover": {
      background: "var(--color-secondary-hover)",
      color: "var(--color-primary)",
      boxShadow: "var(--shadow-primary)",
    },
  },
  "&.white": {
    paddingTop: "2px",
    border: "var(--border-primary)",
    background: "var(--background)",
    color: "var(--color-primary)",
    "&:hover": {
      background: "var(--color-light)",
      // borderColor: "var(--color-secondary)",
      color: "var(--color-primary-hover)",
      boxShadow: "none",
    },
  },
  "&.disabled, &.disabled:hover": {
    border: "none",
    background: "var(--color-light)",
    color: "var(--color-disabled)",
    boxShadow: "none",
  },

  // ===== SIZES ==========
  "&._xs": {
    height: "16px",
    fontSize: "8px",
    // margin: "8px",
    padding: "2px 32px",
    "&.white": {
      paddingTop: "1px",
    },
  },
  "&._sm ": {
    height: "20px",
    fontSize: "12px",
    // margin: "10px",
    padding: "3px 32px",
    "&.white": {
      paddingTop: "0px",
    },
  },
  "&._lg ": {
    height: "30px",
    fontSize: "16px",
    // margin: "14px",
    padding: "6px 52px",
    "&.white": {
      paddingTop: "3px",
    },
  },
  "&._xl": {
    height: "40px",
    fontSize: "20px",
    // margin: "16px",
    padding: "8px 64px",
    /* borderRadius: "15px", */
    "&.white": {
      paddingTop: "5px",
    },
  },
});

export default styles;
