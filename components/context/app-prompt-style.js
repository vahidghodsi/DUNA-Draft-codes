import { css } from "@emotion/react";
import { SLIDE_DOWN_UP } from "@models/animation-presets";

const styles = css({
  maxWidth: "800px",
  margin: "5px auto",
  padding: "16px 32px",
  border: "var(--border-primary)",
  borderRadius: "5px",
  background: "rgba(255, 255, 255, 1)",
  boxShadow: "var(--shadow-primary)",

  "&._info": {
    borderColor: "var(--color-info)",
    boxShadow: "var(--shadow-info)",
    // background: "rgba(76, 182, 191,.1);",
  },
  "&._success": {
    borderColor: "var(--color-success)",
    boxShadow: "var(--shadow-success)",
  },
  "&._warning": {
    borderColor: "var(--color-warning)",
    boxShadow: "var(--shadow-warning)",
  },
  "&._error": {
    borderColor: "var(--color-error)",
    boxShadow: "var(--shadow-error)",
    // background: "var(--color-error)"
  },

  ".content": {
    /* height: "110px", */
    padding: "15px 0px",
    textAlign: "center",
    background: "rgba(253, 253, 253, 1)",
  },
  ".content p": {
    fontSize: "1.2rem",
    fontWeight: "700",
    verticalAlign: "middle",
  },

  "._buttons-row-middle > button ": {
    minWidth: "100px",
    // margin: "0 12px"
  },
  // =======
  ".message-content__submit-review": {
    /* display: flex; */
    padding: "0px 10px",
  },
  ".message-submit-review__total": {
    display: "flex",
    fontWeight: "600",
    fontSize: "1.1rem",
    margin: "10px 0 5px 0",
    borderBottom: "var(--border-primary)",
  },
  ".message-submit-review__total div:last-child": {
    flex: "1 0 auto",
    /* fontWeight: "600",
  fontSize: "1.2rem", */
    textAlign: "right",
  },

  ".message-submit-review__member": {
    display: "flex",
    marginBottom: "2px",
  },

  ".submit-review__member-name": {
    flex: "1 0 auto",
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: "500",
  },

  ".submit-review__member-amount": {
    /* padding: "0 15p"x, */
    width: "50px",
    fontWeight: "500",
    textAlign: "center",
  },

  ".submit-review__member-amount:last-child": {
    textAlign: "right",
  },
});

export default styles;

export const promptMotionVariant = { ...SLIDE_DOWN_UP };
promptMotionVariant.initial.y = -15;
promptMotionVariant.animate.y = 0;
promptMotionVariant.exit.y = -15;
