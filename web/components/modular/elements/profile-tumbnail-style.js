import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  height: "24px",
  width: "24px",
  margin: "14px 7px",
  "*": {
    transition: "var(--transition-primary)",
    transitionDelay: "-.1s",
  },
  "&._toggled *": {
    transitionDelay: ".1s",
  },
  ".holder": {
    position: "absolute",
    // top: "-14px",
    // left: "-14px",
    height: "38px",
    width: "38px",
    transform: "translate(0,0)",
    border: "var(--border-primary)",
    borderWidth: "0px",
    borderRadius: "5px",
    borderColor: "var(--background)",
    overflow: "hidden",
  },
  "&._toggled .holder": {
    height: "140px",
    width: "300px",
    transform: "translate(-8px, -8px)",
    borderWidth: "2px",
    borderColor: "var(--color-primary)",
    boxShadow: "var(--shadow-primary)",
    background: "var(--background)",
    zIndex: "100",
  },
  ".header": {
    display: "flex",
    alignItems: "center",
    margin: "12px",
    "> div:not(:last-child)": {
      marginRight: "12px",
    },
    "._avatar": {
      flexShrink: "0",
    },
    ".credit": {
      fontWeight: "bold",
    },
    ".profile-info": {
      flex: "1 0 auto",
      fontSize: "10px",
    },
  },
  ".name": {
    // padding: "14px",
    "._title": {
      //   fontSize: "20px",
      margin: "12px",
    },
  },
  ".contributions": {
    display: "flex",
    justifyContent: "space-between",
    fontSize: " 12px",
    margin: "12px",
    padding: "8px 0",
    borderTop: "var(--border-secondary)",
  },

  // ---- Sizes --------------
  "&._xs": {
    height: "16px",
    width: "16px",
    margin: "10px 5px",
  },
  //------------------------- sm
  "&._sm ": {
    height: "20px",
    width: "20px",
    margin: "12px 6px",
  },
  //------------------------- lg
  "&._lg ": {
    height: "30px",
    width: "30px",
    margin: "16px 8px",
  },
  //------------------------- xl
  "&._xl": {
    height: "40px",
    width: "40px",
    margin: "18px 9px",
  },
});

export default styles;
