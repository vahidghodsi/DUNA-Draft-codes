import { css } from "@emotion/react";
// import { md } from "@consts/styles";

const styles = css({
  // ...md,
  display: "grid",
  // alignItems: "center",
  gridTemplateColumns: "auto auto auto minmax(0, 1fr)",
  gridTemplateRows: "auto 20px auto",
  gridTemplateAreas: "'. . top-content top-content' 'state icon content info' '. . sub-content sub-content'",
  // height: "20px",
  margin: "12px",
  fontSize: "14px",
  color: "var(--color-primary)",
  transition: "var(--transition-elements)",
  "*": {
    transition: "var(--transition-elements)",
    // border:"var(--border-dev)"
  },
  ".content": {
    gridArea: "content",
    // title is made to include fixed-height short titles, that may have icon
    // so if its needed to be used otherway, should be localy modified
    whiteSpace: "nowrap",
  },
  "&.bold .content": {
    fontWeight: "bold",
  },
  "&.active .content": {
    fontWeight: "bold",
    color: "var(--color-primary)",
    marginLeft: "0",
  },
  // "&:hover": {
  //   position: "relative",
  //   cursor: "pointer",
  //   fontWeight: "bold",
  //   color: "var(--color-primary-hover)",
  //   textDecoration: "underline",
  // },
  "&._link:hover:not(.active) .content": {
    position: "relative",
    cursor: "pointer",
    fontWeight: "bold",
    marginLeft: "-1px",
    color: "var(--color-primary-hover)",
    textDecoration: "underline",
  },
  ".state-indicator": {
    gridArea: "state",
    marginRight: "24px",
  },
  ".top-content": {
    gridArea: "top-content",
    fontSize: "12px",
    marginBottom: "2px",
  },
  ".sub-content": {
    gridArea: "sub-content",
    fontSize: "12px",
    marginTop: "6px",
  },
  ".info, ._info-option": {
    gridArea: "info",
    alignSelf: "flex-start",
  },
  // -------
  "._theme-graphic": {
    gridArea: "icon",
    marginRight: "12px",
  },
  "._theme-graphic *": {
    fill: "var(--color-secondary)",
  },
  "&._link:hover ._theme-graphic *": {
    fill: "var(--color-primary-hover)",
  },
  "&.active ._theme-graphic *": {
    fill: "var(--color-primary)",
  },
  
  //===== STANDARD SIZES ==========
  "&._xs": {
    gridTemplateRows: "auto 12px auto",
    fontSize: "9px",
    margin: "8px",
    ".state-indicator": {
      marginRight: "16px",
    },
    ".top-content": {
      fontSize: "8px",
      marginBottom: "0px",
    },
    ".sub-content": {
      fontSize: "8px",
      marginTop: "4px",
    },
    "._theme-graphic": {
      marginRight: "8px",
    },
  },
  "&._sm ": {
    gridTemplateRows: "auto 16px auto",
    fontSize: "12px",
    margin: "10px",
    ".state-indicator": {
      marginRight: "20px",
    },
    ".top-content": {
      fontSize: "10px",
      marginBottom: "1px",
    },
    ".sub-content": {
      fontSize: "10px",
      marginTop: "5px",
    },
    "._theme-graphic": {
      marginRight: "10px",
    },
  },
  "&._lg ": {
    gridTemplateRows: "auto 24px auto",
    fontSize: "16px",
    margin: "14px",
    ".state-indicator": {
      marginRight: "28px",
    },
    ".top-content": {
      fontSize: "12px",
      marginBottom: "3px",
    },
    ".sub-content": {
      fontSize: "12px",
      marginTop: "7px",
    },
    "._theme-graphic": {
      marginRight: "14px",
    },
  },
  "&._xl": {
    gridTemplateRows: "auto 30px auto",
    fontSize: "20px",
    margin: "16px",
    ".state-indicator": {
      marginRight: "32px",
    },
    ".top-content": {
      fontSize: "14px",
      marginBottom: "4px",
    },
    ".sub-content": {
      fontSize: "14px",
      marginTop: "8px",
    },
    "._theme-graphic": {
      marginRight: "16px",
    },
  },
});

export default styles;
