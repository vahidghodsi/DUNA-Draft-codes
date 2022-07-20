import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  fontSize: "12px",
  marginLeft: "8px",
  ".icon": {
    fontSize: "8px",
    height: "13px",
    width: "13px",
    padding: "0 4px",
    border: "var(--border-primary)",
    borderWidth: "1px",
    borderRadius: "50%",
    opacity: 0.7,
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
  },
  "&.active .icon": {
    opacity: 1,
    background: "var(--color-primary)",
    color: "var(--color-secondary)",
  },
  ".desc": {
    position: "absolute",
    visibility: "hidden",
    display:"block",
    left: "15px",
    bottom: "0px",
    padding: "6px 12px",
    opacity: 0,
    border: "var(--border-primary)",
    borderRadius: "10px",
    background: "var(--background)",
    boxShadow: "var(--shadow-primary)",

  },
  "&.active .desc": {
    opacity: 1,
    visibility: "visible",
  },
});

export default styles;

