import { css } from "@emotion/react";
import { fade_display_in_out } from "@models/animation-presets";

const styles = css({
  position: "relative",
  height: "100%",
  "._container": {
    "._tabs-menu": {
      ".menu-bar": {
        borderBottom: "none",
        borderTop: "1px solid var(--color-secondary)",
        ".tabs": {
          height: "auto",
          justifyContent: "center",
          // justifyContent: "space-between",
          // justifyContent: "space-around",
          "._tab-indicator, ._tab-indicator-placeholder": {
            gridRow: "1/2",
          },
          "._tab-indicator": {
            borderRadius: "0 0 2px 2px",
          },
        },
      },
    },
    "._body": {
      position: "relative",
      // border: "var(--border-dev)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // overflow: "hidden",
      // overflow: "visible",
      ".slide-container": {
        width: "800px",
        height: "450px",
        // background: "lightgreen",
        // transformOrigin: "top left",
        transformOrigin: "center",
        boxShadow: "var(--shadow-secondary)",

        // ===== SLIDE CONTEXT ==========
        ".slide-context": {
          position: "absolute",
          width: "100%",
          height: "100%",
          ".grid-lines-horizontal": {
            position: "absolute",
            width: "100%",
            "> div": {
              width: "100%",
              height: "10px",
              borderTop: "1px solid rgba(210, 210, 210, .7)",
            },
            ".major::before": {
              // marginLeft: "-20px",
              top: "-20px",
              left: "-15px",
            },
          },
          ".grid-lines-vertical": {
            position: "absolute",
            display: "flex",
            height: "100%",
            "> div": {
              height: "100%",
              width: "10px",
              borderLeft: "1px solid rgba(210, 210, 210, .7)",
            },
            ".major::before": {
              left: "-4px",
              top: "-30px",
            },
          },
          ".major": {
            // borderColor: "rgba(210, 210, 210, .7) !important",
            "&::before": {
              // content: "'^'",
              content: "attr(data-index)",
              position: "relative",
              fontSize: "8px",
              fontWeight: "lighter",
              textAlign: "middle",
              color: "var(--color-secondary)",
            },
          },
          ".minor": {
            borderColor: "rgba(240, 240, 240, .5) !important",
            // borderStyle: "dashed"
          },
          ".viewport-data": {
            position: "absolute",
            top: "0",
            right: "0",
            margin: "8px",
            fontSize: "10px",
            fontWeight: "lighter",
            color: "var(--color-primary)",
          },
        },
        // =====
        section: {
          width: "800px",
          height: "450px",
          // ** width and height of 100% causes problem,
          // ** by setting parent dimensions different than predefined values
          // width: "100%",
          // height: "100%",
        },
      },
    },
  },

  // ===== SLIDE CONTEXT ==========
  "&._dev-mode": {
    ".slide-context":{
    }
  },
});

export default styles;

export const slideMotionVariants = { ...fade_display_in_out };
