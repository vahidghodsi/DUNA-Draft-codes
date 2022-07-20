import { css } from "@emotion/react";

const styles = css({
  border: "var(--border-secondary)",
  borderRightWidth: "0",
  borderLeftWidth: "0",
  margin: "12px",
  // padding: "12px",
  // boxShadow: "var(--shadow-secondary )",
  "._list_head": {
    position: "relative",
    paddingLeft: "8px",
    paddingRight: "8px",
    "._button": {
      verticalAlign: "middle",
      width: "20px",
      height: "20px",
      borderRadius: "3px",
      padding: "2px 4px",
      "&._open": {
        transform: "rotate(90deg)",
      },
    },
    "._filters": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      "._filters_item": {
        display: "flex",
        fontSize: "9px",
        padding: "2px 12px",
        margin: "2px 10px 2px 0",
        borderRadius: "15px",
        border: "2px solid var(--color-secondary)",
        background: "var(--color-primary)",
        color: "var(--color-secondary)",
        /* color: var(--color-light), */
      },
      "._filters_item:hover": {
        border: "2px solid var(--color-secondary-hover)",
        background: "var(--color-primary-hover)",
        color: "var(--color-light)",
      },
      "._filters_item span": {
        /* height: 12px, */
        marginRight: "10px",
      },
      ".new-item": {
        /* font-size: 12px, */
        /* font-weight: bold, */
        border: "2px solid var(--color-primary)",
        background: "var(--color-secondary)",
        color: "var(--color-primary)",
      },
      "new-item:hover ": {
        /* border-color: var(--color-secondary), */
        background: "var(--color-secondary-hover)",
        /* color: var(--color-secondary), */
      },
    },
    "._counter": {
      margin: "0",
      alignSelf: "flex-start",
    },
  },
  "._list_body": {
    "._list_body_container": {
      // ==== this is needed for avoid inside elements' shadow to be blocked
      // => mainly for an auto overflow list. but for consistency it is applied to all
      padding: "12px",
    },
  },

  "&.content-visible": {
    height: "100%",
    "> ._list_body": {
      height: "100%",
      overflowY: "visible",
    },
  },
  "&.content-auto": {
    height: "100%",
    "> ._list_body": {
      height: "100%",
      // paddingRight: "10px",
      overflowY: "auto",
    },
  },
  "&.content-scroll": {
    height: "100%",
    "> ._list_body": {
      height: "100%",
      overflowY: "scroll",
    },
  },
  // ===== Dropdown overrides =====
  "&._dropdown": {
    height: "auto",
    "> ._list_body": {
      overflowY: "hidden",
    },
    "&._minimized": {
      "> ._list_body": {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    "&._open": {
      "._button": {
        transform: "rotate(90deg)",
        background: "var(--color-secondary)",
        color: "var(--background)",
      },
    },
  },

  // ===== Sub-elements' adjustments =====
  "> div": {
    "&._list_head": {
      "> div, > ._input": {
        margin: " 0 !important",
        "> div, > ._input": {
          margin: " 0 !important",
        },
      },
    },
    "&._list_body": {
      "> div, > ._input": {
        margin: " 0 !important",
      },
    },
    "._dim-holder": {
      "> div, > ._input": {
        margin: " 0 !important",
      },
    },
    "._list_body_container": {
      "> div, > ._input": {
        margin: " 0 !important",
      },
    },
  },

  // ===== global sizes =====
  // "&._xs": {
  // },
  // "&._sm ": {
  // },
  // "&._lg ": {
  // },
  // "&._xl": {
  // },

  // ===== transitions
  transition: "var(--transition-primary)",
  " > div": {
    transition: "var(--transition-primary)",
    //  transitionProperty: "height, width, grid, gap, left, bottom",
    //  transitionDuration: "1s",
  },
});

export default styles;
