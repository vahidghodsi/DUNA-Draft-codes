import { css } from "@emotion/react";

const styles = css({
  fontFamily: "inherit",
  margin: "16px",
  color: "var(--color-primary)",
  transition: "all 0.15s ease-out, color 0s ease",
  "*": {
    //   border: "1px dashed orange";
    transition: "all 0.15s ease-out, color 0s ease",
  },
  " > * ": {
    padding: "0px 20px",
  },
  "input, textarea": {
    height: "24px",
    margin: "0",
    fontFamily: "inherit",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "15px",
    border: "1px solid var(--color-secondary)",
  },

  "&:not(._checkbox) input, textarea": {
    "&:focus": {
      height: "30px",
      fontSize: "16px",
      // padding: "5px 16px",
      margin: "-3px -8px",
      border: "2px solid var(--color-primary)",
      boxShadow: "var(--shadow-primary)",
      outline: "none",
    },
    "&::placeholder": {
      fontSize: "12px",
    },
  },

  "._label": {
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  "._message": {
    fontSize: "10px",
    marginTop: "8px",
    div: {
      marginBottom: "5px",
    },
  },

  "&.disabled": {
    input: {
      color: "var(--color-light)",
      borderColor: "var(--color-light)",
    },
  },

  // ===== TYPE STYLE OVERRIDES ==========
  textarea: {
    height: "100%",
    paddingTop: "12px",
    paddingBottom: "12px",
    verticalAlign: "top",
    resize: "none",
    "&:focus": {
      height: "calc(100% + 6px)",
      fontSize: "12px",
    },
  },

  "&._checkbox": {
    "input": {
      width: "14px",
    },
    "._label": {
      marginBottom: "0 !important",
    },
  },

  // ===== THEME STYLES ==========
  "&._info input": {
    // backgroundColor: "var(--background-info)",
    borderColor: "var(--color-info)",
  },
  "&._success input": {
    // backgroundColor: "var(--background-success)",
    borderColor: "var(--color-success)",
  },
  "&._warning input": {
    // backgroundColor: "var(--background-warning)",
    borderColor: "var(--color-warning)",
  },
  "&._error input": {
    // backgroundColor: "var(--background-error)",
    borderColor: "var(--color-error)",
  },

  // ===== STANDARD SIZES ==========
  "&._xs": {
    margin: "10px",
    " > * ": {
      padding: "0px 12px",
    },
    "&:not(._checkbox) input": {
      height: "16px",
      fontSize: "8px",
      "&:focus": {
        height: "20px",
        fontSize: "12px",
        margin: "-2px -4px",
        // padding: "4px 16px",
      },
      "&::placeholder": {
        fontSize: "8px",
      },
    },
    "&._checkbox": {
      "input": {
        width: "10px"
      },
    },
    "._label": {
      fontSize: "8px",
      marginBottom: "5px",
    },
    "._message": {
      fontSize: "7px",
      marginTop: "5px",
      div: {
        marginBottom: "3px",
      },
    },
  },
  // ===== sm
  "&._sm ": {
    margin: "12px",
    " > * ": {
      padding: "0px 12px",
    },
    "&:not(._checkbox) input": {
      height: "20px",
      fontSize: "10px",
      "&:focus": {
        height: "24px",
        fontSize: "14px",
        margin: "-2px -4px",
      },
      "&::placeholder": {
        fontSize: "10px",
      },
    },
    "&._checkbox": {
      "input": {
        width: "12px"
      },
    },
    "._label": {
      fontSize: "10px",
      marginBottom: "6px",
    },
    "._message": {
      fontSize: "9px",
      marginTop: "6px",
      div: {
        marginBottom: "4px",
      },
    },
  },
  // ===== lg
  "&._lg ": {
    margin: "20px",
    " > * ": {
      padding: "0px 12px",
    },
    "&:not(._checkbox) input": {
      height: "30px",
      fontSize: "14px",
      "&:focus": {
        height: "36px",
        fontSize: "20px",
        margin: "-3px -6px",
      },
      "&::placeholder": {
        fontSize: "14px",
      },
    },
    "&._checkbox": {
      "input": {
        width: "16px"
      },
    },
    "._label": {
      fontSize: "14px",
      marginBottom: "10px",
    },
    "._message": {
      fontSize: "11px",
      marginTop: "10px",
      div: {
        marginBottom: "6px",
      },
    },
  },
  // ===== xl
  "&._xl": {
    margin: "24px",
    " > * ": {
      padding: "0px 12px",
    },
    "&:not(._checkbox) input": {
      height: "40px",
      fontSize: "16px",
      "&:focus": {
        height: "48px",
        fontSize: "24px",
        margin: "-4px -8px",
      },
      "&::placeholder": {
        fontSize: "16px",
      },
    },
    "&._checkbox": {
      "input": {
        width: "20px"
      },
    },
    "._label": {
      fontSize: "16px",
      marginBottom: "12px",
    },
    "._message": {
      fontSize: "12px",
      marginTop: "12px",
      div: {
        marginBottom: "7px",
      },
    },
  },
});

export default styles;
