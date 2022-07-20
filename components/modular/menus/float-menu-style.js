import { css } from "@emotion/react";

const styles = css({
  position: "relative",
  "&:hover .menu-grip": {
    cursor: "pointer",
  },
  ".menu-holder": {
    position: "relative",
    overflow: "visible",
  },
  ".items": {
    position: "absolute",
    marginTop: "10px",
    padding: "6px",
    border: "2px solid var(--color-primary)",
    boxShadow: "var(--shadow-primary)",
    borderRadius: "5px",
    visibility: "hidden",
    opacity: "0",
    transform: "translateY(-20px)",
  },

  "&.active .items": {
    visibility: "visible",
    background: "var(--background)",
    opacity: "1",
    transform: "translateY(0px)",
    zIndex: 200,
  },
  "&.top-right .items": {},
  "&.top-left .items": {
    bottom: 0,
    right: 0,
  },
  "&.bottom-right .items": {},
  "&.bottom-left .items": {
    top: 0,
    right: 0,
  },
  /* ---------- TRANSITIONS --------- */
  ".items ": {
    transition: "all 0.15s ease-out",
  },
});

export default styles;
