import { css } from "@emotion/react";
import { slide_down_up } from "@models/animation-presets";

const styles = css({
  maxWidth: "600px",
  margin: "7px auto",
  fontSize: "16px",
  // border: "var(--border-primary)",
  borderRadius: "15px",
  background: "var(--background)",
  boxShadow: "var(--shadow-primary)",
  opacity: "0",
  /* outline: 10px solid rgba(16, 111, 170, .5),
    outline-offset: 5px,  */

  "._holder": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 14px",
    borderRadius: "15px",
    // border:"none",
    border: "var(--border-primary)",

    "&._info": {
      borderColor: "var(--color-info)",
      // boxShadow: "inset var(--shadow-info)",
    },
    "&._success": {
      borderColor: "var(--color-success)",
      // boxShadow: "inset var(--shadow-success)",
    },
    "&._warning": {
      borderColor: "var(--color-warning)",
      // boxShadow: "inset var(--shadow-warning)",
    },
    "&._error": {
      borderColor: "var(--color-error)",
      // boxShadow: "inset var(--shadow-error)",
    },
  },
});

export default styles;

export const alertMotionVariant = { ...slide_down_up };
