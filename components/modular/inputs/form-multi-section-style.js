import { css } from "@emotion/react";

const styles = css({
  "*": {
    //   border: "1px dashed orange";
    transition: "all 0.4s ease-out, color 0s ease",
  },

  section: {
    height: "0",
    overflowY: "hidden",
    "._holder": {
      // we need this to prevent margin collapsing inside the holder
      display: "flow-root",
    },
    // "._input": {
    //   //   label: {},
    //   //   input: {},
    // },
    ".value-display": {
      marginLeft: "12px",
      "._title": {
        marginBottom: "12px",
        ".content": {
          fontSize: "24px",
        },
        ".top-content": {
          fontSize: "16px",
          marginBottom: "4px",
        },
      },
    },
  },
  "section._completed": {
    // "._holder": {
    // },
    "._input": {
      //   display: "grid",
      //   gridTemplateColumns: "1fr 3fr",
      // alignItems: "center",
      marginTop: "0px",
      marginBottom: "0px",
      label: {
        // display: "none"
        fontSize: "14px",
        color: "var(--color-middlex)",
      },
      input: {
        border: "none",
        boxShadow: "none",
        outline: "none",
        backgroundColor: "var(--background)",
        fontSize: "1.1em",
      },
    },
  },
  "section._inactive": {
    height: "0",
    overflow: "hidden",
  },

  "._actions": {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    margin: "12px 0 ",
    "> div": {
      marginRight: "12px !important",
    },
    button: {
      width: "100%",
    },
    ".proceed": {
      width: "200px",
    },
    ".back": {
      width: "100px",
      "&._condensed": {
        overflow: "hidden",
        width: "0",
      },
      ".disabled": {
        transform: "translateX(-100px)",
        opacity: "0",
      },
    },
    "._counter": {
      fontSize: "16px",
      paddingTop: "6px",
    },
  },
});

export default styles;
