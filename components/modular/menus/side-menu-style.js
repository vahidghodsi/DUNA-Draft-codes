import { css } from "@emotion/react";

const styles = css({
  width: "62px",
  height: "100%",
  borderRight: "var(--border-primary)",
  padding: "32px 20px 32px 20px",
  overflow: "hidden",
  background: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(6px)",
  zIndex: "200",
  transition: "all 0.25s ease-out, color 0s ease !important",
  "*": {
    transition: "all 0.25s ease-out, color 0s ease !important",
  },
  ".side-menu-container": {
    height: "100%",
    // width: "240px",
    width: "250px",
  },
  "._title": {
    margin: "10px 0 !important",
    paddingRight: "10px !important",
    // marginLeft: "0 !important",
    overflow: "hidden",

    ".top-content": {
      fontSize: "12px",
      marginBottom: "0",
    },
    ".sub-content": {
      fontSize: "10px",
      marginTop: "0",
      height: "0",
      // overflow: "hidden",
      // overflowY: "hidden",
      // overflowX: "visible",
    },
  },
  "._theme-graphic": {
    marginRight: "24px !important",
  },
  "._theme-graphic *": {
    fill: "var(--color-secondary)",
  },
  "._theme-graphic:hover  *": {
    fill: "var(--color-primary-hover)",
  },
  "._bar": {
    marginLeft: "0 !important",
    marginRight: "0 !important",
  },
  "._toggled-visible": {
    opacity: "0",
  },
  // ===== TOGGLED
  "&.toggled": {
    // width: "292px",
    width: "314px",
    paddingRight: "32px",
    paddingLeft: "32px",
    "._title": {
      "&.notification": {
        ".sub-content": {
          height: "50px",
        },
      },
      "&.project-summary": {
        ".sub-content": {
          height: "90px",
        },
      },
    },
    "._theme-graphic *": {
      fill: "var(--color-primary)",
    },
    "._toggled-visible": {
      opacity: "1",
    },
  },
});

export default styles;
